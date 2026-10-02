# Hosting checks

- Existing app scripts and new hosting scripts pass Node syntax checks.
- Manifest parses; icons exist; app scope and launch paths are relative.
- Mocked service-worker tests pass: installation, app-specific cache cleanup,
  offline fallback, online update, and unrelated-request passthrough.
- Existing local-progress format and key are retained.

A live local browser test was blocked by the execution environment's browser
policy (ERR_BLOCKED_BY_ADMINISTRATOR). No browser policy was changed.

This package has NOT been tested on a live GitHub Pages deployment or a physical
iPhone. Verify the installed Home Screen web app once online, then offline, after
publishing. Mock tests do not establish Safari compatibility or durable storage.

Game guide content was not re-researched for this hosting-only update.
