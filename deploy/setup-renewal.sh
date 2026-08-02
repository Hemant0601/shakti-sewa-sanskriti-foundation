#!/bin/bash
set -euo pipefail

# =============================================================
#  S3F Website - SSL Auto-Renewal Setup (systemd timer)
#
#  Amazon Linux 2023 does NOT ship crontab, so we use a systemd
#  timer instead of a cron job.
#
#  This script is IDEMPOTENT and causes NO downtime: it only
#  writes/updates the timer units. nginx is only ever stopped by
#  the timer at its scheduled time, and only when a renewal is
#  actually due (certs are renewed via --standalone, which needs
#  port 80 free).
#
#  Safe to run on every deploy.
# =============================================================

DOMAIN="${1:-s3ffoundation.com}"
CERTBOT_BIN="$(command -v certbot || echo /usr/bin/certbot)"

echo "   Configuring SSL auto-renewal (systemd timer)..."

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

echo "   Auto-renewal active (systemd timer: certbot-renew.timer)."
sudo systemctl list-timers certbot-renew.timer --no-pager 2>/dev/null || true
