#!/usr/bin/env bash
# One-time setup on the Hetzner box (metis-llm) for iPad/car remote dev.
# Run this ONCE while SSH'd in from the Mac.
#
# Usage:  bash setup-metis.sh
set -euo pipefail

echo "==> Updating apt and installing tmux + mosh"
sudo apt update
sudo apt install -y tmux mosh curl ca-certificates

echo "==> Opening UDP 60000-61000 for mosh (if ufw is active)"
if command -v ufw >/dev/null 2>&1 && sudo ufw status | grep -q "Status: active"; then
  sudo ufw allow 60000:61000/udp
else
  echo "    ufw not active; skipping (Tailscale-only reachability is fine)"
fi

echo "==> Enabling Tailscale SSH (auth via tailnet identity, no key files on iPad)"
if command -v tailscale >/dev/null 2>&1; then
  sudo tailscale up --ssh --accept-routes
else
  echo "    tailscale not installed; skipping"
fi

echo "==> Installing Claude Code"
if ! command -v claude >/dev/null 2>&1; then
  curl -fsSL https://claude.ai/install.sh | bash
else
  echo "    claude already installed: $(claude --version || true)"
fi

echo
echo "==> Done. Next steps (interactive, must be run by you):"
echo "    1. Reload PATH:      exec \$SHELL"
echo "    2. Sign in:          claude   (follow URL, paste code back)"
echo "    3. Start a session:  tmux new -s work && cd <project> && claude"
echo "    4. Detach:           Ctrl-b then d"
echo "    5. Reattach later:   tmux attach -t work"
