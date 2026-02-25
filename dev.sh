#!/bin/bash
# ─────────────────────────────────────────────
# INTERLEAVED Website — Dev Server Helper
# Usage:  ./dev.sh [status|start|stop|restart]
# ─────────────────────────────────────────────

PORT=3000

status() {
  PID=$(lsof -ti:$PORT 2>/dev/null)
  if [ -n "$PID" ]; then
    echo "✅ Dev server is RUNNING (PID: $PID) on http://localhost:$PORT"
  else
    echo "⛔ Dev server is NOT running."
  fi
}

start() {
  PID=$(lsof -ti:$PORT 2>/dev/null)
  if [ -n "$PID" ]; then
    echo "⚠️  Dev server is already running (PID: $PID)."
  else
    echo "🚀 Starting dev server..."
    cd "$(dirname "$0")" && npm run dev &
    sleep 3
    echo "✅ Dev server started at http://localhost:$PORT"
  fi
}

stop() {
  PID=$(lsof -ti:$PORT 2>/dev/null)
  if [ -n "$PID" ]; then
    kill -9 $PID 2>/dev/null
    echo "🛑 Dev server stopped."
  else
    echo "⚠️  Dev server is not running."
  fi
}

restart() {
  echo "🔄 Restarting dev server..."
  stop
  sleep 1
  start
}

case "${1:-status}" in
  status)  status  ;;
  start)   start   ;;
  stop)    stop    ;;
  restart) restart ;;
  *)
    echo "Usage: ./dev.sh [status|start|stop|restart]"
    echo ""
    echo "  status   — Check if the dev server is running (default)"
    echo "  start    — Start the dev server"
    echo "  stop     — Stop the dev server"
    echo "  restart  — Stop and restart the dev server"
    ;;
esac
