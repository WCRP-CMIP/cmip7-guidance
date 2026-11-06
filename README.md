# cmip7-guidance

Guidance and documentation for CMIP7, built with MkDocs (Material) on the CMIP IPO site template.

The live site is at [guidance.wcrp-cmip.org](https://guidance.wcrp-cmip.org/), and is also
mirrored on GitHub Pages at [wcrp-cmip.github.io/cmip7-guidance](https://wcrp-cmip.github.io/cmip7-guidance/).

- Pages are in `docs/`, and the navigation is `docs/nav_menu.md`.
- Settings are in `src/mkdocs.yml`.
- Run `make dev` to preview, `make build` to build into `build/`.

## How the site is published

The site is versioned with [mike](https://github.com/jimporter/mike) and published by the
**Deploy versioned site (mike)** GitHub Action.

- A push to `docs` updates the current `latest` version. It does not create a new one
  (the very first push on a repository with no versions creates the first version).
- Publishing a **release** on GitHub creates a new version, named after the publish date
  (for example `26.Nov.05`), and makes it `latest`.
- A request to rebuild from another repository (`repository_dispatch` event `deploy-docs`)
  refreshes `latest` in the same way as a push.
- Old unversioned links (such as `.../CMIP7/Guidance_for_users/`) are forwarded to the same
  page under `latest/`.

### Releasing a version

1. On GitHub, open **Releases**, then **Draft a new release**.
2. Create a **new tag** each time, with the target set to `docs`. An existing tag keeps
   pointing at its old commit, so reusing one publishes old content.
3. Choose **Publish release**. Drafts and pre-releases are ignored.

### One-time settings

- **Settings, Pages, Source** must be **GitHub Actions**.
- **Settings, Environments, github-pages, Deployment branches and tags**: add a **Tag** rule
  with the pattern `*`, otherwise a release deploy is rejected. A rule for the `docs` branch
  is already there.
- **Settings, Actions, General, Workflow permissions** must allow read and write, because the
  action stores versions on a branch called `gh-pages`.
- **Analytics:** this site reports to Matomo website ID `3` (set as `SITE_ID` in
  `docs/stylesheets/matomo.js`). Every visit is tracked from every hostname, including a local
  server, and cookies are only set after a visitor accepts the banner.

## Cloudflare

The main site and the previews on Cloudflare Pages are built by `src/cloudflare.sh`. In the
Cloudflare project's build settings use:

- **Production branch:** `gh-pages`
- **Build command:** `bash src/cloudflare.sh`
- **Build output directory:** `docs`

`gh-pages` is where the GitHub Action stores the finished, versioned site. After each deploy the
Action also commits two extra files onto that branch: `404.html` (forwards old unversioned links
to the latest version) and a copy of `src/cloudflare.sh` (so the build command exists there).
What the script does depends on the branch Cloudflare is building:

- **`gh-pages` (production):** nothing is built. The finished site is at the root of the branch,
  and Cloudflare publishes `docs/`, so the script moves the root into `docs/`.
- **`production` (the old production branch):** nothing to do; it already has a finished `docs/`.
- **any other branch (a preview):** the script builds the site with mkdocs and puts the result in
  `docs/`.

The script moves or deletes files in the checkout it runs in. It is meant for Cloudflare's own
throwaway build, so it refuses to run unless Cloudflare has set `CF_PAGES_BRANCH`. To try it by
hand, run it in a throwaway copy of the repository with `CF_PAGES_BRANCH=test` (or `gh-pages`)
set, never in your working copy.
