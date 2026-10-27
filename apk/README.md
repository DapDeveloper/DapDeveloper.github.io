# APK files

APK files in this folder are served directly by GitHub Pages.

## Current

<<<<<<< HEAD
- `HikingLife.apk` — HikingLife v1.5.0, signed release (Android 8.0+, ~63 MB)
  - SHA-256: `38e9682279fe689849e9cb61131744d8a085c0c47919b322861d5f456d9c8d4f`
  - Source asset: HikingLife release `v1.5.0` / `HikingLife-1.5.0.apk`
=======
- `HikingLife.apk` — HikingLife v1.6.0, signed release (Android 8.0+, ~63 MB)
  - SHA-256: `04e7aef021ff1a94b53e73e7279ad44fd3084306e47b493becce4ed75c8214af`
  - Source asset: HikingLife release `v1.6.0` / `HikingLife-1.6.0.apk`
>>>>>>> be4f82f10d30d75e0373ae9aee0f9303c901f19f
  - Signing certificate: `CN=HikingLife Release, O=DapDeveloper, C=IT`
  - Certificate SHA-256: `C7:D0:B3:C3:CE:06:6A:D3:56:6B:5C:62:D2:27:DA:92:9A:D2:3B:57:A2:85:2B:7B:2D:07:8D:4D:FC:96:77:01`
  - This stable filename is replaced on each release, so the QR code and
    download links do not change.

The previous `HikingLife-debug.apk` (v1.2.0) was removed. Users upgrading
from it must uninstall once because the signing key changed.

- `PerfectPizza.apk` — PerfectPizza v1.0.3, signed release (Android 8.0+, ~5.0 MB)
  - SHA-256: `38e9682279fe689849e9cb61131744d8a085c0c47919b322861d5f456d9c8d4f`
  - Source: `DapDeveloper/PerfectPizza`, `app-release.apk` from
    `gradlew assembleRelease`
  - Signed with the project release key (RSA 4096, v2/v3 schemes), so future
    versions install over it.
  - Stable filename; replaced on each release.

## Adding an app

1. Copy the APK here.
2. Add an app card in `apps.html` with a matching `href`.
3. Optionally feature it on `index.html`.
4. Update the SHA-256 checksum in `apps.html`.

Keep each file under 100 MB, the GitHub per-file limit.
