"""
matomo.py — MkDocs hook
=======================
Adds the Matomo tracker and cookie banner (stylesheets/matomo.js) to every
built HTML page, after MkDocs has built the site.

Same approach as the Essential Model Documentation site.
"""

import re
from pathlib import Path

_ANALYTICS_FILE = 'stylesheets/matomo.js'
_SKIP = {'404.html'}   # a mistyped address should not be counted as a visit


def on_post_build(config, **kwargs):
    site_dir = Path(config['site_dir'])
    injected = 0

    for html in site_dir.rglob('*.html'):
        rel = html.relative_to(site_dir)
        if rel.name in _SKIP:
            continue

        content = html.read_text(encoding='utf-8', errors='ignore')
        if 'matomo.js' in content:          # already there: keeps repeat builds from stacking tags
            continue
        if re.search(r'http-equiv=["\']?refresh', content, re.I):
            continue                        # a pure redirect page

        prefix = '../' * (len(rel.parts) - 1) or './'
        tag = f'<script src="{prefix}{_ANALYTICS_FILE}"></script>'

        at = content.rfind('</body>')
        if at < 0:
            at = content.rfind('</html>')
        if at >= 0:
            new = content[:at] + f'  {tag}\n' + content[at:]
        else:
            new = content + f'\n{tag}\n'

        html.write_text(new, encoding='utf-8')
        injected += 1

    print(f'  [matomo] analytics script added to {injected} HTML files')
