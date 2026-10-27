# APK files

APK files in this folder are served directly by GitHub Pages.

## Current

- `HikingLife.apk` — HikingLife v1.4.0, signed release (Android 8.0+, ~63 MB)
  - SHA-256: `c67bf411978530b656fddc657db8cb63140b61e3dc4657272fac706414597022`
  - Source asset: HikingLife release `v1.4.0` / `HikingLife-1.4.0.apk`
  - Signing certificate: `CN=HikingLife Release, O=DapDeveloper, C=IT`
  - Certificate SHA-256: `C7:D0:B3:C3:CE:06:6A:D3:56:6B:5C:62:D2:27:DA:92:9A:D2:3B:57:A2:85:2B:7B:2D:07:8D:4D:FC:96:77:01`
  - This stable filename is replaced on each release, so the QR code and
    download links do not change.

The previous `HikingLife-debug.apk` (v1.2.0) was removed. Users upgrading
from it must uninstall once because the signing key changed.

- `PerfectPizza.apk` — PerfectPizza v1.0.0, debug build (Android 8.0+, ~6.2 MB)
  - SHA-256: `7dac06d58acd9077b6c922293c9b4308a047628e0a09399376dcb1006b24b2c7`
  - Source: `DapDeveloper/PerfectPizza`, `app-debug.apk` from
    `gradlew assembleDebug`
  - Stable filename; replaced on each release. A signed release will replace
    this debug build, which will then require one uninstall.

## Adding an app

1. Copy the APK here.
2. Add an app card in `apps.html` with a matching `href`.
3. Optionally feature it on `index.html`.
4. Update the SHA-256 checksum in `apps.html`.

Keep each file under 100 MB, the GitHub per-file limit.
