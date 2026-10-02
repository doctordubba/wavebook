# Publishing Wavebook

This existing site is hosted at https://doctordubba.github.io/wavebook/ with GitHub
Pages configured to publish **main / (root)** from `doctordubba/wavebook`.

Commit `index.html`, all referenced versioned files under `assets/`, and the
updated `sw.js` together. Keep the manifest, runtime support and icons in the
repository root. No application compilation or external runtime CDN is needed.

For another release, use new asset version paths and update `VERSION` in `sw.js`.
Navigation checks the network and falls back to the cached app; versioned assets
use the installed cache. The worker manages only this app's cache. Personal
progress stays under the existing localStorage key `wavebook-progress-v2`.
No forced page reload interrupts notes.

Verify the successful Pages workflow and rendered live app after committing.
Use `tests/responsive.html` for phone and tablet layouts without changing real
progress. Do not add personal backup JSON files to the public repository.

On iPhone, open the live site in Safari and use Share → Add to Home Screen.
Open the installed app online until its offline copy is ready, then test offline.
Source links need internet. Safari and the installed app can have separate storage;
export / import is the transfer route.
