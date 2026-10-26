<p align="center">
  <img src="assets/logo.png" alt="Daniel Petrea logo" width="120" height="120">
</p>

<h1 align="center">Daniel Petrea</h1>
<p align="center">
  <strong>Software &amp; Firmware Developer</strong><br>
  Android · Embedded · Electronics · 3D Printing
</p>
<p align="center">
  <a href="https://dapdeveloper.github.io/">Website</a> ·
  <a href="https://www.linkedin.com/in/daniel-petrea-857741133">LinkedIn</a> ·
  <a href="https://github.com/DapDeveloper">GitHub</a>
</p>

---

## Personal site

Static site for a biography and direct APK downloads, published at
<https://dapdeveloper.github.io/>.

## Structure

```
personal-site/
├── index.html          Home: bio, featured app, contact
├── apps.html           Android apps page: downloads, FAQ, changelog
├── privacy.html        Bilingual privacy policy
├── css/style.css       Styling
├── js/main.js          Theme, language toggle, translations, mobile nav
├── assets/
│   ├── logo.svg        Personal logo and browser tab icon
│   ├── logo.png        1024px logo for GitHub/social use
│   ├── hikinglife-qr.* QR code for the stable HikingLife APK URL
│   ├── avatar.svg      Optional portrait (not used on the page)
│   └── apps/           App icons
├── apk/                APK files served by the site
├── .nojekyll           Tells GitHub Pages not to run Jekyll
└── README.md
```

## 1. Edit the content

The biography lives in `index.html`:

- Hero intro and the **Biography** paragraphs
- Quick facts sidebar (location, focus, embedded, LinkedIn)
- **Skills** groups
- **Contact** links (LinkedIn, GitHub, location)

Translations live in `js/main.js` (`en` and `it` dictionaries). Every
`data-i18n` key in the HTML must exist in both languages.

Keep `apps.html` in sync when app versions, QR codes, or files change.

## 2. Add your APKs

Copy each APK into `apk/` and make the download link match:

```html
<a class="btn btn-primary" href="apk/my-app.apk" download>Download APK</a>
```

HikingLife uses the stable path `apk/HikingLife.apk`, so the QR code keeps
working across releases. The versioned release asset lives in the private
`DapDeveloper/HikingLife` GitHub release and is copied here for public
download.

Then add or update the app card in `apps.html` (and the featured card in
`index.html`), plus the version, release date, size, and SHA-256 checksum.
Keep files under 100 MB, the GitHub per-file limit.

HikingLife releases are built and signed by GitHub Actions in the
`HikingLife` repository. Never commit the signing keystore or passwords to
either repository; they are stored only in GitHub Actions secrets. Users
moving from the old debug-signed build (1.2.0) must uninstall it once.

## 3. Add your avatar (optional)

Replace the image reference in `index.html`:

```html
<img src="assets/avatar.jpg" alt="Portrait of Daniel Petrea" width="240" height="240">
```

## 4. Publish on GitHub Pages

Create a repository named `DapDeveloper.github.io` (replace with your username),
then from this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/DapDeveloper/DapDeveloper.github.io.git
git push -u origin main
```

GitHub Pages is enabled automatically for `DapDeveloper.github.io`
repositories. The site will be live at:

```
https://DapDeveloper.github.io/
```

If you use a different repository name (for example `my-site`), go to
**Settings → Pages**, set **Source** to `Deploy from a branch`, choose
`main` / `/ (root)`, and save. The site will be at
`https://DapDeveloper.github.io/my-site/`.

## Notes

- GitHub Pages is free for public repositories.
- Assets over 100 MB per file are rejected; keep APK sizes reasonable.
- It can take a minute or two after pushing for changes to appear.
- The site has no analytics or advertising cookies; only the theme and
  language preference are stored in browser local storage.
