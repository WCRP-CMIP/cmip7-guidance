#!/usr/bin/env python3
"""
check_matomo.py — build guard (replaces the old MkDocs hooks/matomo.py)
=======================================================================
Zensical has no hooks, and `mike deploy` runs `zensical build` itself and commits
the result straight away, so nothing can inject analytics between the build and
the deploy. Analytics therefore has to be in the SOURCE:

  * theme-rendered pages  -> extra_javascript in mkdocs.yml (every Markdown page)
  * plain .html pages     -> their own <script> tag, because they are copied as-is

This script checks the second case, so a new plain .html page cannot silently end
up untracked. It only reads files; it changes nothing.

Usage:  python src/hooks/check_matomo.py [docs_dir]
Exit:   0 all good, 1 a page is missing the tag.
"""

import sys
from pathlib import Path

ANALYTICS = 'matomo.js'


def main(docs_dir='docs'):
    docs = Path(docs_dir)
    missing = []
    checked = 0

    for page in sorted(docs.rglob('*.html')):
        checked += 1
        if ANALYTICS not in page.read_text(encoding='utf-8', errors='ignore'):
            missing.append(page)

    if missing:
        print(f'[matomo] {len(missing)} plain HTML page(s) have no {ANALYTICS} tag:')
        for page in missing:
            depth = len(page.relative_to(docs).parts) - 1
            prefix = '../' * depth or './'
            print(f'  {page}')
            print(f'      add before </body>:  <script src="{prefix}stylesheets/{ANALYTICS}"></script>')
        return 1

    print(f'[matomo] ok: {checked} plain HTML page(s) carry the {ANALYTICS} tag')
    return 0


if __name__ == '__main__':
    sys.exit(main(*sys.argv[1:]))
