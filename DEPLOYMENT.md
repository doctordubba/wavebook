# Wavebook — GitHub Pages edition

Deployment-ready version of your existing Wavebook guide. No npm, build service,
API key, backend, GitHub token in the app, or viewer app is required.

## Publish

1. Create a NEW repository called `wavebook` in your GitHub account.
   GitHub Free requires a public repository for Pages. Do not publish secrets,
   private documents, or your exported progress/notes backups.
2. Upload the CONTENTS of this package to the root of its `main` branch.
   `index.html` must be directly at the top level, not inside a wrapper folder.
   Upload the extracted files, not just the ZIP archive.
3. Repository Settings → Pages → Build and deployment:
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   Save.
4. Wait for deployment. Settings → Pages → Visit site shows the real address.
   For a repository named wavebook, the usual address is:
   https://YOUR-USERNAME.github.io/wavebook/
   This is a placeholder, not a site already published for you.

If files are committed by automation using GITHUB_TOKEN, a branch Pages build may
not trigger. Use an authorized user push or an explicit Pages deployment workflow.
Do not change an unrelated existing website or repository's Pages settings.

## Use from iPhone

Open the published URL in Safari → Share → Add to Home Screen →
turn on Open as Web App → Add. Name it Wavebook.
Open it from the new Home Screen icon once while online. Allow it to finish loading
and caching before testing Airplane Mode. No separate HTML viewer is needed.

## Files

index.html              Complete guide, app code, styling and embedded PDF
manifest.webmanifest    Name, launch scope, standalone window and icon metadata
pwa.js                  Registers the offline worker when securely hosted
sw.js                   Network-first loading with an offline app-shell fallback
apple-touch-icon.png    iPhone Home Screen icon
icon-192.png            Browser / app icon
icon-512.png            High-resolution / maskable app icon
.nojekyll               Tells branch publishing to serve static files directly
THIRD_PARTY_NOTICES.txt  Runtime attribution and license

## Data, privacy and limits

The published guide and its bundled files are public on a normal GitHub Pages site.
Personal progress and notes entered while using it are stored in this browser;
the app does not send them to GitHub or a database. This is NOT cloud sync.
Do not upload a Wavebook backup JSON to a public repository.
GitHub still serves the site and has its own hosting/privacy practices.

Before moving from a local viewer, export your old progress and import it into the
hosted app. Safari and a Home Screen web app may use separate storage. Choose your
preferred launch mode early, and use Export/Import to transfer when necessary.
Keep regular backups: browser storage and offline caches can be cleared or evicted.
Serving an updated guide does not intentionally reset the local progress key.

Offline use requires a completed initial online load and retained browser cache.
External source links need internet. Changes to the hosted files are fetched on an
online reopen/reload; updates are NOT automatically researched game-content updates.
Guide content is still the original 3.7 snapshot; this package only changes hosting.

## Updating

Replace the published site files with a revised package, retaining the same site
address and progress format. The next online reload requests the new app.
Change VERSION in sw.js when changing the cached asset bundle.
No automatic page reload is forced while you are editing notes.

## Official references

GitHub Pages overview:
https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
Creating a site:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Publish from main / root:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
iPhone Home Screen web app:
https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios
Service workers:
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

This package is being uploaded to doctordubba/wavebook. See repository Pages settings for live deployment status.
