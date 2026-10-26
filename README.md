# Personal Site — GitHub Pages

Static site for a biography and direct APK downloads.

## Structure

```
personal-site/
├── index.html          Home: bio, featured app, contact
├── apps.html           Android apps page with download details
├── css/style.css       Styling
├── js/main.js          Theme toggle, mobile nav, footer year
├── assets/
│   ├── avatar.svg      Replace with your photo (avatar.jpg/png)
│   ├── favicon.svg     Browser tab icon
│   └── apps/           App icons
├── apk/                APK files served by the site
├── .nojekyll           Tells GitHub Pages not to run Jekyll
└── README.md
```

## 1. Edit the content

The biography lives in `index.html`:

- Hero intro and the **Biography** paragraphs
- Quick facts sidebar (location, focus, embedded, contact)
- **Skills** groups
- **Contact** links (phone, LinkedIn, GitHub, location)

Keep `apps.html` in sync when app versions or files change.

## 2. Add your APKs

Copy each APK into `apk/` and make the download link match:

```html
<a class="btn btn-primary" href="apk/my-app.apk" download>Download APK</a>
```

Then add or update the app card in `apps.html` (and the featured card in
`index.html`). Keep files under 100 MB, the GitHub per-file limit.

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
