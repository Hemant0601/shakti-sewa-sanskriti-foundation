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

echo "[1/6] Updating system packages..."
dnf update -y -q

echo "[2/6] Installing Git..."
dnf install -y -q git

echo "[3/6] Installing Docker..."
dnf install -y -q docker

echo "[4/7] Installing Docker Buildx plugin..."
DOCKER_CONFIG=/usr/local/lib/docker
mkdir -p "$DOCKER_CONFIG/cli-plugins"
BUILDX_VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
curl -SL "https://github.com/docker/buildx/releases/download/${BUILDX_VERSION}/buildx-${BUILDX_VERSION}.linux-$(uname -m)" -o "$DOCKER_CONFIG/cli-plugins/docker-buildx"
chmod +x "$DOCKER_CONFIG/cli-plugins/docker-buildx"

echo "[5/7] Installing Docker Compose plugin..."
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep '"tag_name"' | cut -d'"' -f4)
curl -SL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-$(uname -m)" -o "$DOCKER_CONFIG/cli-plugins/docker-compose"
chmod +x "$DOCKER_CONFIG/cli-plugins/docker-compose"

echo "[6/7] Starting Docker service..."
systemctl start docker
systemctl enable docker

echo "[7/7] Adding '$ACTUAL_USER' to docker group (no sudo needed for docker)..."
usermod -aG docker "$ACTUAL_USER"

echo ""
echo "============================================"
echo "  Setup complete!"
echo "============================================"
echo ""
echo "Versions installed:"
git --version
docker --version
docker compose version
echo ""
echo "IMPORTANT: Run this to activate docker group now:"
echo "  newgrp docker"
echo ""
echo "Then clone and run (no sudo needed):"
echo "  git clone https://github.com/Hemant0601/shakti-sewa-sanskriti-foundation.git"
echo "  cd shakti-sewa-sanskriti-foundation"
echo "  docker compose up -d --build"
echo ""
echo "The site will be available at http://<your-server-ip>"
echo ""
