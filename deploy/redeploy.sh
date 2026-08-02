#!/bin/bash
set -euo pipefail

# =============================================================
#  S3F Website - Redeploy Script
#  Pulls the latest code and rebuilds/restarts the container.
#  Run this on the server after pushing changes to GitHub.
#
#  Usage:
#    bash deploy/redeploy.sh
# =============================================================

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "========================================="
echo "  S3F Website - Redeploy"
echo "  Branch: $BRANCH"
echo "========================================="

echo ""
echo "[1/4] Pulling latest code from origin/$BRANCH..."
git pull origin "$BRANCH"

echo ""
echo "[2/4] Rebuilding and restarting the container..."
docker compose up -d --build

echo ""
echo "[3/4] Ensuring SSL auto-renewal is configured..."
bash "$PROJECT_DIR/deploy/setup-renewal.sh"

echo ""
echo "[4/4] Reloading nginx..."
if sudo nginx -t; then
    sudo systemctl reload nginx
    echo "   Nginx reloaded."
else
    echo "   WARNING: nginx config test failed - skipped reload."
fi

echo ""
echo "========================================="
echo "  Redeploy complete!"
echo "  https://s3ffoundation.com"
echo "========================================="
