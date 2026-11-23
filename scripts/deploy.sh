#!/bin/sh
# Uploads the built static site to a web host over FTP or explicit FTPS.
# Required: FTP_HOST, FTP_USER, FTP_PASSWORD
# Optional: FTP_REMOTE_DIR (default public_html), FTP_PROTOCOL (ftps|ftp, default ftps), DRY_RUN=1
set -eu

: "${FTP_HOST:?Set FTP_HOST, for example ftp.yourdomain.com}"
: "${FTP_USER:?Set FTP_USER}"
: "${FTP_PASSWORD:?Set FTP_PASSWORD}"
REMOTE_DIR="${FTP_REMOTE_DIR:-public_html}"
PROTOCOL="${FTP_PROTOCOL:-ftps}"

case "$PROTOCOL" in
  ftps) SSL_FLAG="--ssl-reqd" ;;
  ftp) SSL_FLAG="" ;;
  *) echo "FTP_PROTOCOL must be ftps or ftp" >&2; exit 1 ;;
esac

cd "$(dirname "$0")/.."

ROOT_FILES="index.html manifest.json favicon.png apple-touch-icon.png favicon.svg icon-180.svg icon-192.svg icon-512.svg agent-native-icon-dark.svg agent-native-icon-light.svg agent-native-logo-dark.svg agent-native-logo-light.svg"
DIRS="assets images"

FILES="$ROOT_FILES $(find $DIRS -type f)"
BASE_URL="ftp://$FTP_HOST/$REMOTE_DIR"

for file in $FILES; do
  if [ -n "${DRY_RUN:-}" ]; then
    echo "would upload $file -> $BASE_URL/$file"
    continue
  fi
  echo "uploading $file"
  # shellcheck disable=SC2086
  curl --silent --show-error --fail $SSL_FLAG --ftp-create-dirs \
    --user "$FTP_USER:$FTP_PASSWORD" \
    -T "$file" "$BASE_URL/$file"
done

echo "done: $(echo $FILES | wc -w) files"
