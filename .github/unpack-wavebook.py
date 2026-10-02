"""Verify and restore only the intended Wavebook website files."""
from pathlib import Path
import base64
import hashlib
import io
import json
import tarfile

ROOT = Path(__file__).resolve().parents[1]
PACKAGE = ROOT / '.github' / 'wavebook-package'
ALLOWED = {
    '.nojekyll', 'DEPLOYMENT.md', 'TESTING.md', 'THIRD_PARTY_NOTICES.txt',
    'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'index.html',
    'manifest.webmanifest', 'pwa.js', 'sw.js',
}

def digest(data):
    return hashlib.sha256(data).hexdigest()

def main():
    manifest = json.loads((PACKAGE / 'manifest.json').read_text())
    if manifest['format'] != 'tar.xz' or set(manifest['files']) != ALLOWED:
        raise ValueError('Unexpected website manifest')
    chunks = []
    for i, part in enumerate(manifest['parts'], 1):
        expected_name = f'part-{i:02d}.b64'
        if part['file'] != expected_name:
            raise ValueError('Unexpected package segment name')
        raw = (PACKAGE / expected_name).read_bytes()
        if digest(raw) != part['sha256']:
            raise ValueError(f'Checksum mismatch: {expected_name}')
        chunks.append(raw.strip())
    payload = base64.b64decode(b''.join(chunks), validate=True)
    if len(payload) != manifest['size'] or digest(payload) != manifest['sha256']:
        raise ValueError('The complete package failed verification')
    verified = {}
    with tarfile.open(fileobj=io.BytesIO(payload), mode='r:xz') as archive:
        for item in archive:
            if not item.isfile() or item.name not in ALLOWED or item.name in verified:
                raise ValueError(f'Unexpected archive member: {item.name}')
            if item.size > 2_000_000:
                raise ValueError('Unexpected file size')
            data = archive.extractfile(item).read()
            if digest(data) != manifest['files'][item.name]:
                raise ValueError(f'Checksum mismatch: {item.name}')
            verified[item.name] = data
    if set(verified) != ALLOWED:
        raise ValueError('Website files are missing')
    for name, data in verified.items():
        (ROOT / name).write_bytes(data)
    print(f'Verified and restored {len(verified)} website files; existing README preserved.')

if __name__ == '__main__':
    main()
