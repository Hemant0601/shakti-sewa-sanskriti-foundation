#!/bin/bash
set -e

DOMAIN="s3ffoundation.com"
EMAIL="s3ffoundation@gmail.com"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "========================================="
echo "  S3F Website - SSL Setup Script"
echo "  Amazon Linux 2023 + Let's Encrypt"
echo "  Domain: $DOMAIN"
echo "========================================="

# ---- Step 1: Install packages ----
echo ""
echo "[1/6] Installing nginx and certbot..."
sudo dnf install -y nginx 2>/dev/null || true

if ! command -v certbot &>/dev/null; then
    sudo python3 -m venv /opt/certbot/
    sudo /opt/certbot/bin/pip install --upgrade pip
    sudo /opt/certbot/bin/pip install certbot
    sudo ln -sf /opt/certbot/bin/certbot /usr/bin/certbot
fi
echo "   Done."

# ---- Step 2: Stop nginx if running (clean slate) ----
echo ""
echo "[2/6] Preparing nginx..."
sudo systemctl stop nginx 2>/dev/null || true
# Kill anything else on port 80 (e.g. leftover nginx, apache, etc.)
sudo fuser -k 80/tcp 2>/dev/null || true

# Replace nginx.conf with our clean version (no default server block)
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.original 2>/dev/null || true
sudo cp "$PROJECT_DIR/deploy/nginx.conf" /etc/nginx/nginx.conf

# Clean out conf.d
sudo rm -f /etc/nginx/conf.d/*.conf
echo "   Done."

# ---- Step 3: Start Docker container ----
echo ""
echo "[3/6] Starting Docker container..."
cd "$PROJECT_DIR"
docker compose down 2>/dev/null || true
docker compose up -d --build

echo "   Waiting for container..."
sleep 5

if docker ps | grep -q s3f-website; then
    echo "   Container is running."
else
    echo "   ERROR: Container failed to start!"
    echo "   Run: docker compose logs"
    exit 1
fi

# ---- Step 4: Get SSL cert using standalone mode ----
# certbot runs its own temp server on port 80 (nginx is stopped)
echo ""
echo "[4/6] Getting SSL certificate from Let's Encrypt..."

# Make absolutely sure port 80 is free for certbot
sudo systemctl stop nginx 2>/dev/null || true
sudo fuser -k 80/tcp 2>/dev/null || true
sleep 2

# Verify port 80 is free
if sudo ss -tlnp | grep -q ':80 '; then
    echo "   ERROR: Port 80 is still in use!"
    sudo ss -tlnp | grep ':80 '
    echo "   Please free port 80 and try again."
    exit 1
fi

echo "   Port 80 is free. Using standalone mode..."
sudo certbot certonly \
    --standalone \
    -d "$DOMAIN" \
    -d "www.$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --non-interactive

echo "   SSL certificate obtained!"

# ---- Step 5: Deploy full SSL nginx config ----
echo ""
echo "[5/6] Configuring nginx with SSL..."
sudo cp "$PROJECT_DIR/deploy/s3ffoundation-ssl.conf" /etc/nginx/conf.d/s3ffoundation.conf

# Test config
sudo nginx -t

# Start nginx
sudo systemctl enable nginx
sudo systemctl start nginx
echo "   Nginx is running with SSL!"

# ---- Step 6: Auto-renewal ----
echo ""
echo "[6/6] Setting up auto-renewal..."
# Create a renewal hook to reload nginx after cert renewal
sudo mkdir -p /etc/letsencrypt/renewal-hooks/post
cat << 'HOOK' | sudo tee /etc/letsencrypt/renewal-hooks/post/reload-nginx.sh > /dev/null
#!/bin/bash
systemctl reload nginx
HOOK
sudo chmod +x /etc/letsencrypt/renewal-hooks/post/reload-nginx.sh

# Add cron for renewal (stop nginx, renew, start nginx)
(sudo crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * /usr/bin/certbot renew --quiet --pre-hook 'systemctl stop nginx' --post-hook 'systemctl start nginx'") | sudo crontab -

echo "   Auto-renewal configured."

# ---- Done ----
echo ""
echo "========================================="
echo "  Setup Complete!"
echo ""
echo "  https://$DOMAIN"
echo "  https://www.$DOMAIN"
echo ""
echo "  Both should be live now!"
echo "========================================="
echo ""
echo "Useful commands:"
echo "  docker compose logs -f           # App logs"
echo "  sudo journalctl -u nginx -f      # Nginx logs"
echo "  sudo certbot certificates        # SSL cert info"
echo "  sudo certbot renew --dry-run     # Test renewal"
echo "  sudo nginx -t && sudo systemctl reload nginx  # Reload nginx"
