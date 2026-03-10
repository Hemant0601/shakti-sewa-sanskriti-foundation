#!/bin/bash
set -euo pipefail

echo "============================================"
echo "  S3F Website - Amazon Linux 2023 Setup"
echo "============================================"
echo ""

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
  echo "Please run this script with sudo:"
  echo "  sudo bash setup.sh"
  exit 1
fi

ACTUAL_USER="${SUDO_USER:-$USER}"

# Map architecture for buildx downloads (uname -m -> Docker naming)
RAW_ARCH=$(uname -m)
case "$RAW_ARCH" in
  x86_64)  ARCH="amd64" ;;
  aarch64) ARCH="arm64" ;;
  *)       ARCH="$RAW_ARCH" ;;
esac
echo "Architecture: $RAW_ARCH ($ARCH)"
echo ""

echo "[1/5] Updating system packages..."
dnf update -y -q

echo "[2/5] Installing Docker..."
dnf install -y -q docker
# Clean up any old broken cli plugins
rm -f /usr/local/lib/docker/cli-plugins/docker-buildx 2>/dev/null || true
rm -f /usr/local/lib/docker/cli-plugins/docker-compose 2>/dev/null || true

echo "[3/5] Installing Docker Buildx & Compose plugins..."
DOCKER_CONFIG=/usr/local/lib/docker
mkdir -p "$DOCKER_CONFIG/cli-plugins"

# Buildx - uses amd64/arm64 naming
BUILDX_VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
echo "    Downloading buildx $BUILDX_VERSION for $ARCH..."
curl -fSL "https://github.com/docker/buildx/releases/download/${BUILDX_VERSION}/buildx-${BUILDX_VERSION}.linux-${ARCH}" -o "$DOCKER_CONFIG/cli-plugins/docker-buildx"
chmod +x "$DOCKER_CONFIG/cli-plugins/docker-buildx"

# Compose - uses x86_64/aarch64 naming
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
echo "    Downloading compose $COMPOSE_VERSION for $RAW_ARCH..."
curl -fSL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-${RAW_ARCH}" -o "$DOCKER_CONFIG/cli-plugins/docker-compose"
chmod +x "$DOCKER_CONFIG/cli-plugins/docker-compose"

# Verify binaries match architecture
echo "    Verifying binaries..."
file "$DOCKER_CONFIG/cli-plugins/docker-buildx" | grep -qi "$RAW_ARCH\|x86.64" || { echo "ERROR: buildx binary architecture mismatch!"; exit 1; }
file "$DOCKER_CONFIG/cli-plugins/docker-compose" | grep -qi "$RAW_ARCH\|x86.64" || { echo "ERROR: compose binary architecture mismatch!"; exit 1; }
echo "    Binaries verified OK."

echo "[4/5] Starting Docker service..."
systemctl start docker
systemctl enable docker

echo "[5/5] Adding '$ACTUAL_USER' to docker group (no sudo needed for docker)..."
usermod -aG docker "$ACTUAL_USER"

echo ""
echo "============================================"
echo "  Setup complete!"
echo "============================================"
echo ""
echo "Versions installed:"
docker --version
docker buildx version
docker compose version
echo ""
echo "IMPORTANT: Run this to activate docker group now:"
echo "  newgrp docker"
echo ""
echo "Then build and run (no sudo needed):"
echo "  docker compose up -d --build"
echo ""
echo "The site will be available at http://<your-server-ip>"
echo ""
