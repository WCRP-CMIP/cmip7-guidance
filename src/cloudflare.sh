#!/bin/bash
<<<<<<< HEAD
# Cloudflare Pages build for cmip7-guidance.
#
# Cloudflare settings (Workers & Pages > this project > Settings > Builds):
#   Production branch:       gh-pages
#   Build command:           bash src/cloudflare.sh
#   Build output directory:  docs
#
# gh-pages is where the GitHub Action stores the finished, versioned site (made
# with mike). The Action also puts a copy of THIS script on that branch, at
# src/cloudflare.sh, so the build command above exists there too.
#
# What it does, per branch:
#   gh-pages     PRODUCTION. The branch already holds the finished site at its
#                root (index.html, versions.json, latest/, 2026.11.05/ ...).
#                Cloudflare publishes docs/, so the contents of the root are
#                moved into docs/. Nothing is built.
#   production   The OLD production branch, which already has the finished site
#                in docs/. Nothing to do. Kept only so the old setup keeps
#                working until that branch is retired.
#   any other    A PREVIEW. Builds the site from source with mkdocs and puts the
#                result in docs/, replacing the source pages there, because
#                docs/ is the folder Cloudflare publishes.
#
# DESTRUCTIVE: the gh-pages and preview paths move or delete files in the
# checkout they run in. That is fine in Cloudflare's own throwaway build
# checkout, so the script refuses to run unless Cloudflare has set
# CF_PAGES_BRANCH. To try it by hand, run it in a throwaway COPY of the
# repository with CF_PAGES_BRANCH=test (or gh-pages) set.
#
# Any failing step stops the build, so a broken build is never published as an
# empty or half-built site.

set -euo pipefail

cd "$(dirname "$0")/.."     # the repository root, wherever this is called from

if [ -z "${CF_PAGES_BRANCH:-}" ]; then
  echo "src/cloudflare.sh is for Cloudflare Pages builds only: it moves files around in the checkout." >&2
  echo "CF_PAGES_BRANCH is not set, so nothing was done." >&2
  exit 1
fi

if [ "$CF_PAGES_BRANCH" == "gh-pages" ]; then
  echo "Production (gh-pages): moving the finished site into docs/ for Cloudflare"
  test -f index.html || { echo "No index.html at the root of gh-pages: nothing to publish." >&2; exit 1; }

  shopt -s nullglob dotglob          # include dotfiles such as .nojekyll
  mkdir -p docs
  for f in *; do
    case "$f" in
      docs|src|.git) ;;              # leave the output folder, this script and git alone
      *) mv -- "$f" docs/ ;;
    esac
  done

  test -f docs/index.html
  echo "Site is in docs/ ($(find docs -name '*.html' | wc -l | tr -d ' ') pages)"
  exit 0
fi

if [ "$CF_PAGES_BRANCH" == "production" ]; then
  echo "On the old production branch: using the docs/ that is already committed, no build."
  exit 0
fi

echo "Preview build for branch '$CF_PAGES_BRANCH'"

PIP="pip"
command -v pip >/dev/null 2>&1 || PIP="python3 -m pip"
$PIP install -r src/requirements.txt

# Writes to build/ (site_dir in src/mkdocs.yml, relative to src/).
mkdocs build --clean -f src/mkdocs.yml

# Fail loudly rather than publish nothing.
test -f build/index.html

rm -rf docs
mv build docs
echo "Built site is now in docs/ ($(find docs -name '*.html' | wc -l | tr -d ' ') pages)"
=======

if [ "$CF_PAGES_BRANCH" == "production" ]; then
	echo "We are on the production, reusing actions build 'docs'"
else
	pip install -r src/mkdocs/requirements.txt;
	mkdocs build --clean -f src/mkdocs/mkdocs.yml;
	rm -rf docs; 
	cp -r src/mkdocs/site docs;
	rm -rf src/ 
fi
>>>>>>> e8e795f (Create cloudflare.sh)
