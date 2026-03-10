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

echo "[1/5] Updating system packages..."
dnf update -y -q

echo "[2/5] Removing old Docker (if any) & adding official Docker repo..."
dnf remove -y -q docker docker-client docker-latest docker-engine 2>/dev/null || true
rm -f /usr/local/lib/docker/cli-plugins/docker-buildx 2>/dev/null || true
rm -f /usr/local/lib/docker/cli-plugins/docker-compose 2>/dev/null || true
dnf install -y -q dnf-plugins-core
dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

echo "[3/5] Installing Docker CE, Buildx & Compose from official repo..."
dnf install -y -q docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

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
echo "Then clone and run (no sudo needed):"
echo "  git clone https://github.com/Hemant0601/shakti-sewa-sanskriti-foundation.git"
echo "  cd shakti-sewa-sanskriti-foundation"
echo "  docker compose up -d --build"
echo ""
echo "The site will be available at http://<your-server-ip>"
echo ""
