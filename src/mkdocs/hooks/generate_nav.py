#!/usr/bin/env python3
"""
Navigation generation hook for MkDocs.
Generates SUMMARY.md for literate-nav plugin.
"""

import os
import re
import yaml
from pathlib import Path


def on_files(files, config):
    """Hook that runs after gen-files."""
    docs_dir = Path(config['docs_dir'])
    generate_navigation(docs_dir, files)
    return files


def clean_title(filename):
    """Convert filename to display title."""
    name = filename.replace('.md', '').replace('.html', '')
    name = re.sub(r'^\d+[-_.](?=\w)', '', name)
    return name.replace('_', ' ').replace('-', ' ').title()


def get_sort_key(filename):
    """Get sort key for ordering."""
    name = filename.replace('.md', '').replace('.html', '')
    match = re.match(r'^(\d+)[-_.]', name)
    if match:
        return (int(match.group(1)), filename)
    return (9999, filename)


def parse_links_file(docs_dir):
    """Parse custom links from YAML file."""
    links_path = docs_dir / "links.yml"
    if not links_path.exists():
        return []
    
    try:
        with open(links_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
        return data.get('links', []) if data else []
    except:
        return []


def add_links_to_nav(nav_lines, links):
    """Add links directly to navigation (no wrapper section)."""
    if not links:
        return nav_lines
    
    categories = {}
    root_links = []
    
    for link in links:
        if not isinstance(link, dict) or 'title' not in link or 'url' not in link:
            continue
        cat = link.get('category')
        if cat:
            categories.setdefault(cat, []).append(link)
        else:
            root_links.append(link)
    
    # Add root links directly
    for link in root_links:
        nav_lines.append(f"- [{link['title']}]({link['url']})")
    
    # Add categorized links
    for cat_name in sorted(categories.keys()):
        nav_lines.append(f'- {cat_name}:')
        for link in categories[cat_name]:
            nav_lines.append(f"  - [{link['title']}]({link['url']})")
    
    return nav_lines


def build_tree(docs_path, exclude=None):
    """Build directory tree."""
    if exclude is None:
        exclude = {'scripts', 'assets', 'stylesheets', '__pycache__'}
    
    tree = {'files': [], 'dirs': {}}
    
    for item in sorted(docs_path.iterdir()):
        if item.name.startswith('.') or item.name.startswith('_'):
            continue
        if item.name in exclude or item.name in ('SUMMARY.md', 'links.yml'):
            continue
        
        if item.is_file() and item.suffix in ('.md', '.html'):
            tree['files'].append({
                'name': item.name,
                'path': item.name,
                'sort': get_sort_key(item.name)
            })
        elif item.is_dir():
            subtree = build_subtree(item, docs_path)
            if subtree['files'] or subtree['dirs']:
                tree['dirs'][item.name] = subtree
    
    return tree


def build_subtree(dir_path, base_path):
    """Build subtree recursively."""
    tree = {'files': [], 'dirs': {}}
    
    for item in sorted(dir_path.iterdir()):
        if item.name.startswith('.') or item.name.startswith('_'):
            continue
        
        rel = item.relative_to(base_path)
        
        if item.is_file() and item.suffix in ('.md', '.html'):
            tree['files'].append({
                'name': item.name,
                'path': str(rel).replace(os.sep, '/'),
                'sort': get_sort_key(item.name)
            })
        elif item.is_dir():
            subtree = build_subtree(item, base_path)
            if subtree['files'] or subtree['dirs']:
                tree['dirs'][item.name] = subtree
    
    return tree


def tree_to_nav(tree, nav_lines, indent=""):
    """Convert tree to nav lines."""
    for f in sorted(tree['files'], key=lambda x: x['sort']):
        title = clean_title(f['name'])
        nav_lines.append(f"{indent}- [{title}]({f['path']})")
    
    for name, subtree in sorted(tree['dirs'].items(), key=lambda x: get_sort_key(x[0])):
        nav_lines.append(f'{indent}- {clean_title(name)}:')
        tree_to_nav(subtree, nav_lines, indent + "  ")


def generate_navigation(docs_path, mkdocs_files):
    """Generate SUMMARY.md."""
    tree = build_tree(docs_path)
    nav_lines = []
    
    # Home
    if (docs_path / 'index.md').exists():
        nav_lines.append('- [Home](index.md)')
    
    # Root files
    for f in sorted(tree['files'], key=lambda x: x['sort']):
        if f['name'] != 'index.md':
            nav_lines.append(f"- [{clean_title(f['name'])}]({f['path']})")
    
    # Directories
    for name, subtree in sorted(tree['dirs'].items(), key=lambda x: get_sort_key(x[0])):
        nav_lines.append(f'- {clean_title(name)}:')
        tree_to_nav(subtree, nav_lines, "  ")
    
    # Custom links - inserted directly

    links = parse_links_file(docs_path)
    nav_lines = add_links_to_nav(nav_lines, links)

    
    # Write
    with open(docs_path / 'SUMMARY.md', 'w') as f:
        f.write('\n'.join(nav_lines))
