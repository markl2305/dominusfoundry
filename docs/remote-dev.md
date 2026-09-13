# Remote dev from iPad (car / Mac-offline)

Goal: run Claude Code sessions on the Hetzner box `metis-llm` from an iPad,
over Tailscale, and have them survive flaky cellular signal.

Both endpoints already have Tailscale. `metis-llm` is reachable at:
- MagicDNS: `metis-llm` (or `metis-llm.tailaed914.ts.net`)
- IPv4: `100.85.161.122`

## One-time server setup

From the Mac, SSH in and run the setup script:

```bash
ssh <user>@metis-llm
cd /path/to/dominusfoundry
bash scripts/setup-metis.sh
```

That installs `tmux`, `mosh`, Claude Code, and enables Tailscale SSH.

Then, still on the server, sign in to Claude once:

```bash
exec $SHELL   # reload PATH so `claude` is found
claude        # follow URL, paste the code back in
```

The Claude Code login token persists on the server, so the iPad won't need
to redo it.

## iPad setup

1. Install **Blink Shell** from the App Store (paid; best-in-class Mosh
   support). Termius free tier works as a fallback.
2. In Blink, add a host:
   - HostName: `metis-llm`
   - User: `<your-username>`
3. Test the full chain **while still at your desk**:
   ```bash
   mosh metis-llm
   tmux new -s work
   claude
   ```
   Type something, close Blink, reopen, then:
   ```bash
   mosh metis-llm
   tmux attach -t work
   ```
   You should land right where you left off.

## Working from the car

```bash
mosh metis-llm            # survives IP changes / signal drops
tmux attach -t work       # or: tmux new -s <name>
cd <project>
claude
```

Detach any time with `Ctrl-b` then `d`. The session keeps running on the
server; reattach on the next drive.

## Troubleshooting

- **`mosh` connects but hangs**: UDP 60000–61000 blocked. If `ufw` is
  active on the server, `sudo ufw allow 60000:61000/udp`. Tailscale-only
  reachability doesn't need this.
- **`claude` command not found after install**: `exec $SHELL` to reload
  PATH, or open a fresh shell.
- **iPad SSH prompts for a password every time**: enable Tailscale SSH on
  the server (`sudo tailscale up --ssh`), then Blink authenticates via
  your tailnet identity.
- **Session gone after reboot**: `tmux` sessions don't survive reboots.
  For that, use `systemd --user` or a `tmux` at-boot service.
