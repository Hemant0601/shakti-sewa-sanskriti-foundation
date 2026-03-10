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

# Step 1: Install nginx and certbot
echo ""
echo "[1/6] Installing nginx and certbot..."
if ! command -v nginx &>/dev/null; then
    sudo dnf install -y nginx
fi

if ! command -v certbot &>/dev/null; then
    sudo dnf install -y augeas-libs python3-pip
    sudo python3 -m venv /opt/certbot/
    sudo /opt/certbot/bin/pip install --upgrade pip
    sudo /opt/certbot/bin/pip install certbot
    sudo ln -sf /opt/certbot/bin/certbot /usr/bin/certbot
fi

# Step 2: Create certbot webroot directory
echo "[2/6] Creating certbot webroot..."
sudo mkdir -p /var/www/certbot

# Step 3: Prepare Nginx config
echo "[3/6] Setting up Nginx config..."

# Remove any default conf in conf.d
sudo rm -f /etc/nginx/conf.d/default.conf

# Backup original nginx.conf and replace the default server block
# AL2023 nginx.conf has a server{} block listening on port 80 inside the http{} block.
# We need to remove/disable it so our conf.d file is the only one listening on 80.
if grep -q "listen.*80" /etc/nginx/nginx.conf; then
    echo "   Removing default server block from nginx.conf..."
    sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak

    # Use python to reliably remove the server block from nginx.conf
    sudo python3 -c "
import re
with open('/etc/nginx/nginx.conf', 'r') as f:
    content = f.read()

# Remove server { ... } blocks inside http { }
# Match 'server {' and everything until matching closing '}'
def remove_server_blocks(text):
    result = []
    i = 0
    while i < len(text):
        # Look for 'server' followed by '{'
        match = re.search(r'\bserver\s*\{', text[i:])
        if not match:
            result.append(text[i:])
            break
        start = i + match.start()
        result.append(text[i:start])
        # Find matching closing brace
        brace_count = 0
        j = i + match.end() - 1  # position of opening {
        for k in range(j, len(text)):
            if text[k] == '{':
                brace_count += 1
            elif text[k] == '}':
                brace_count -= 1
                if brace_count == 0:
                    i = k + 1
                    break
        else:
            result.append(text[start:])
            break
    return ''.join(result)

content = remove_server_blocks(content)
with open('/etc/nginx/nginx.conf', 'w') as f:
    f.write(content)
"
fi

# Copy our site config
sudo cp "$PROJECT_DIR/deploy/s3ffoundation.conf" /etc/nginx/conf.d/s3ffoundation.conf

# Test nginx config
sudo nginx -t

# Enable and start/restart nginx
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "   Nginx is running."

# Step 4: Start Docker container
echo "[4/6] Starting Docker container..."
cd "$PROJECT_DIR"
docker compose down 2>/dev/null || true
docker compose up -d --build

echo ""
echo "Waiting 5 seconds for container to start..."
sleep 5

# Verify container is running
if ! docker ps | grep -q s3f-website; then
    echo "ERROR: Container failed to start. Check: docker compose logs"
    exit 1
fi
echo "   Container is running."

# Quick sanity check - can nginx reach the container?
echo ""
echo "   Testing connectivity..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/ 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo "   Container responding OK."
else
    echo "   WARNING: Container returned HTTP $HTTP_CODE (may still be starting)."
fi

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

# Step 6: Switch to full SSL config
echo "[6/6] Switching to SSL Nginx config..."
sudo cp "$PROJECT_DIR/deploy/s3ffoundation-ssl.conf" /etc/nginx/conf.d/s3ffoundation.conf
sudo nginx -t
sudo systemctl reload nginx

# Set up auto-renewal via cron
echo ""
echo "Setting up SSL auto-renewal..."
(sudo crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | sudo crontab -

echo ""
echo "========================================="
echo "  Setup Complete!"
echo "  https://$DOMAIN is now live"
echo "========================================="
echo ""
echo "Useful commands:"
echo "  docker compose logs -f        # View app logs"
echo "  sudo certbot certificates     # Check SSL cert status"
echo "  sudo nginx -t                 # Test nginx config"
echo "  sudo certbot renew --dry-run  # Test auto-renewal"
