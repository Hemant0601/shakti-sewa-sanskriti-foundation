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
# Amazon Linux 2023 does NOT ship crontab, so we use a systemd timer instead.
# The cert was issued in --standalone mode, so renewal needs port 80 free:
# we stop nginx before renewing and start it again afterwards.
echo ""
echo "[6/6] Setting up auto-renewal (systemd timer)..."

CERTBOT_BIN="$(command -v certbot || echo /usr/bin/certbot)"

# Renewal service: stop nginx (free port 80) -> renew -> start nginx
sudo tee /etc/systemd/system/certbot-renew.service > /dev/null <<EOF
[Unit]
Description=Certbot Renewal for $DOMAIN
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=${CERTBOT_BIN} renew --quiet --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"
EOF

# Timer: run twice daily with a randomized delay (Let's Encrypt best practice)
sudo tee /etc/systemd/system/certbot-renew.timer > /dev/null <<'EOF'
[Unit]
Description=Run certbot renewal twice daily

[Timer]
OnCalendar=*-*-* 03,15:00:00
RandomizedDelaySec=1h
Persistent=true

[Install]
WantedBy=timers.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now certbot-renew.timer

echo "   Auto-renewal configured (systemd timer: certbot-renew.timer)."
echo "   Verifying renewal works (dry run)..."
sudo certbot renew --dry-run && echo "   Auto-renewal verified!"
sudo systemctl list-timers certbot-renew.timer --no-pager 2>/dev/null || true

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
echo "  docker compose logs -f                        # App logs"
echo "  sudo journalctl -u nginx -f                   # Nginx logs"
echo "  sudo certbot certificates                     # SSL cert info"
echo "  sudo certbot renew --dry-run                  # Test renewal"
echo "  sudo systemctl list-timers certbot-renew.timer  # Check auto-renewal schedule"
echo "  sudo nginx -t && sudo systemctl reload nginx  # Reload nginx"
