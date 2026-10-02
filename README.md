# Wavebook

An interactive Wuthering Waves roster workspace for 18 characters, published at
https://doctordubba.github.io/wavebook/.

The 2 October 2026 review adds contextual builds and stat benchmarks, separate
opener and repeat-loop practice, editable four-team planning, role and mode
checks, and upgrade priorities based on recorded progress.

## Use

Choose a character's role, record the loadout in **Progress & notes**, and practice
the rotation. Each role keeps its own recorded stats. Team planner accepts both
curated templates and individual member edits. Export progress to transfer it
between browsers or devices. Version-2 backups remain supported.

The site uses no account connection or cloud database. Notes and progress stay in
the browser and are never committed to this repository. The offline copy becomes
available after the initial online load completes.

## Files and publishing

`index.html` loads the versioned static files under `assets/`. Preact is bundled;
there are no runtime CDN dependencies. The unchanged original report is included
as `assets/original-report.pdf`. Research sources and assumptions are linked in
each character profile. The app does not simulate or rank team DPS.

GitHub Pages publishes **main / (root)**. Commit the complete changed asset bundle
atomically and update `VERSION` in `sw.js`. Use new asset version paths for future
releases. No application compilation is required.

## Verify changes

Use Node 22+ (or 24) and run `npm ci`, then `npm test`. The test dependency is only
used for a DOM test fixture; it is not served to site visitors. Open
`tests/responsive.html` on the deployed site for 390px and 768px layout checks.
Its preview frames use a separate storage key, preserving normal user progress.

See `TESTING.md` for the checks and practical limits.
