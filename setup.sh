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

echo "[1/5] Updating system packages..."
dnf update -y -q

echo "[2/5] Installing Docker..."
dnf install -y -q docker

echo "[3/5] Installing Docker Compose plugin..."
# Install Docker Compose v2 as a CLI plugin
DOCKER_CONFIG=/usr/local/lib/docker
mkdir -p "$DOCKER_CONFIG/cli-plugins"
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
curl -SL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-$(uname -m)" -o "$DOCKER_CONFIG/cli-plugins/docker-compose"
chmod +x "$DOCKER_CONFIG/cli-plugins/docker-compose"

echo "[4/5] Starting Docker service..."
systemctl start docker
systemctl enable docker

echo "[5/5] Adding current user to docker group..."
if [ -n "${SUDO_USER:-}" ]; then
  usermod -aG docker "$SUDO_USER"
  echo "    Added '$SUDO_USER' to docker group."
  echo "    (Log out and back in for group changes to take effect,"
  echo "     or run: newgrp docker)"
fi

echo ""
echo "============================================"
echo "  Setup complete!"
echo "============================================"
echo ""
echo "Versions installed:"
docker --version
docker compose version
echo ""
echo "To build and run the S3F website:"
echo "  docker compose up -d --build"
echo ""
echo "The site will be available at http://<your-server-ip>"
echo ""
