#!/bin/bash
set -e

DOMAIN="s3ffoundation.com"
EMAIL="s3ffoundation@gmail.com"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "========================================="
echo "  S3F Website - SSL Setup Script"
echo "  Domain: $DOMAIN"
echo "========================================="

# Step 1: Install nginx and certbot if not installed
echo ""
echo "[1/6] Installing nginx and certbot..."
if ! command -v nginx &>/dev/null; then
    sudo apt update
    sudo apt install -y nginx
fi

if ! command -v certbot &>/dev/null; then
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Step 2: Create certbot webroot directory
echo "[2/6] Creating certbot webroot..."
sudo mkdir -p /var/www/certbot

# Step 3: Copy initial HTTP config and start nginx
echo "[3/6] Setting up initial Nginx config..."
sudo cp "$PROJECT_DIR/deploy/s3ffoundation.conf" /etc/nginx/sites-available/s3ffoundation.com
sudo ln -sf /etc/nginx/sites-available/s3ffoundation.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and reload nginx
sudo nginx -t
sudo systemctl reload nginx

# Step 4: Start Docker container
echo "[4/6] Starting Docker container..."
cd "$PROJECT_DIR"
docker compose up -d --build

echo ""
echo "Waiting 5 seconds for container to start..."
sleep 5

# Verify container is running
if ! docker ps | grep -q s3f-website; then
    echo "ERROR: Container failed to start. Check: docker compose logs"
    exit 1
fi
echo "Container is running."

# Step 5: Obtain SSL certificate
echo ""
echo "[5/6] Obtaining SSL certificate from Let's Encrypt..."
sudo certbot certonly \
    --webroot \
    --webroot-path /var/www/certbot \
    -d "$DOMAIN" \
    -d "www.$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --non-interactive

# Step 6: Switch to SSL config
echo "[6/6] Switching to SSL Nginx config..."
sudo cp "$PROJECT_DIR/deploy/s3ffoundation-ssl.conf" /etc/nginx/sites-available/s3ffoundation.com
sudo nginx -t
sudo systemctl reload nginx

# Set up auto-renewal cron
echo ""
echo "Setting up SSL auto-renewal..."
(sudo crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | sudo crontab -

echo ""
echo "========================================="
echo "  Setup Complete!"
echo "  https://$DOMAIN is now live"
echo "========================================="
echo ""
echo "Useful commands:"
echo "  docker compose logs -f        # View app logs"
echo "  sudo certbot certificates     # Check SSL cert"
echo "  sudo nginx -t                 # Test nginx config"
echo "  sudo certbot renew --dry-run  # Test auto-renewal"
