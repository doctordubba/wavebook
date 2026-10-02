# Wavebook is ready to publish

The complete app is now at the repository root as `index.html`, with its embedded PDF, Home Screen icons, web manifest, and offline support. No build or file upload is required.

## One-time GitHub Pages setting

Open https://github.com/doctordubba/wavebook/settings/pages and select:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- Click **Save**

Use the **Visit site** link after GitHub reports a successful deployment. With the current repository name, the expected address is https://doctordubba.github.io/wavebook/ . This file is not proof the site is already live.

## iPhone

Open the published site in Safari. Use Share > Add to Home Screen and enable Open as Web App when that option is shown.

## Your data

Notes, checklists, and roster changes are stored locally in your browser. They are not uploaded to GitHub. Use the in-app export/import to back up or transfer progress. Do not commit personal progress backups to this public repository.

## Verification

The restoration workflow verified SHA-256 checksums for all 16 transfer segments, the complete archive, and all 11 restored website files. See RESTORATION.md. This verifies an exact transfer, not physical-iPhone testing or live deployment.

The original code and report are preserved. The `.github/recovery` directory supplies corrected transfer segments; the earlier incomplete transfer files are not part of the app and are not used when publishing the root website.
