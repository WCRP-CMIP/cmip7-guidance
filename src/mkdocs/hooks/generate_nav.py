#!/usr/bin/env python3
"""
Navigation generation hook for MkDocs.
Generates SUMMARY.md for literate-nav plugin.
"""

import os
import re
import yaml
from pathlib import Path


def on_config(config):
    """Hook that runs BEFORE plugins - generates SUMMARY.md."""
    docs_dir = Path(config['docs_dir'])
    generate_navigation(docs_dir)
    return config


def clean_name(name):
    """Remove numeric prefix from name."""
    return re.sub(r'^\d+[-_.](?=\w)', '', name)


def clean_path(path):
    """Clean numeric prefixes from all components of a path."""
    parts = path.split('/')
    clean_parts = [clean_name(part) for part in parts]
    return '/'.join(clean_parts)


def clean_title_folder(name):
    """Convert folder name to display title - preserves original casing."""
    name = clean_name(name)
    return name.replace('_', ' ').replace('-', ' ')


def clean_title_file(filename):
    """Convert filename to display title - preserves original casing."""
    name = filename.replace('.md', '').replace('.html', '')
    name = clean_name(name)
    return name.replace('_', ' ').replace('-', ' ')


def get_sort_key(name):
    """Get sort key for ordering - works for both files and directories."""
    base = name.replace('.md', '').replace('.html', '')
    match = re.match(r'^(\d+)[-_.]', base)
    if match:
        return (int(match.group(1)), name.lower())
    return (9999, name.lower())


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
    
    for link in root_links:
        nav_lines.append(f"- [{link['title']}]({link['url']})")
    
    for cat_name in sorted(categories.keys()):
        nav_lines.append(f'- {cat_name}:')
        for link in categories[cat_name]:
            nav_lines.append(f"  - [{link['title']}]({link['url']})")
    
    return nav_lines


def build_tree(docs_path, exclude=None):
    """Build directory tree with files and dirs as unified items."""
    if exclude is None:
        exclude = {'scripts', 'assets', 'stylesheets', '__pycache__'}
    
    items = []
    
    for item in docs_path.iterdir():
        if item.name.startswith('.') or item.name.startswith('_'):
            continue
        if item.name in exclude or item.name in ('SUMMARY.md', 'links.yml'):
            continue
        
        if item.is_file() and item.suffix in ('.md', '.html'):
            items.append({
                'type': 'file',
                'name': item.name,
                'path': item.name,  # Use original path with prefixes for MkDocs to find
                'sort': get_sort_key(item.name)
            })
        elif item.is_dir():
            subtree = build_subtree(item, docs_path)
            if subtree:
                items.append({
                    'type': 'dir',
                    'name': item.name,
                    'children': subtree,
                    'sort': get_sort_key(item.name)
                })
    
    return items


def build_subtree(dir_path, base_path):
    """Build subtree recursively - excludes index.md (handled by literate-nav implicit_index)."""
    items = []
    
    for item in dir_path.iterdir():
        if item.name.startswith('.') or item.name.startswith('_'):
            continue
        if item.name == 'index.md':
            continue
        
        rel = item.relative_to(base_path)
        
        if item.is_file() and item.suffix in ('.md', '.html'):
            original_path = str(rel).replace(os.sep, '/')
            items.append({
                'type': 'file',
                'name': item.name,
                'path': original_path,  # Keep original path so MkDocs can find files during build
                'sort': get_sort_key(item.name)
            })
        elif item.is_dir():
            subtree = build_subtree(item, base_path)
            if subtree:
                items.append({
                    'type': 'dir',
                    'name': item.name,
                    'children': subtree,
                    'sort': get_sort_key(item.name)
                })
    
    return items


def items_to_nav(items, nav_lines, indent="", base_path=None):
    """Convert items to nav lines, sorted by numerical prefix.
    
    Uses original paths (with numeric prefixes) so MkDocs can find the files.
    The post_build hook will rename files and fix links after build completes.
    """
    for item in sorted(items, key=lambda x: x['sort']):
        if item['type'] == 'file':
            title = clean_title_file(item['name'])
            # Use original path so MkDocs can find the file during build
            nav_lines.append(f"{indent}- [{title}]({item['path']})")
        else:
            title = clean_title_folder(item['name'])
            # Check if folder has index.md - if so, make section header a link
            if base_path:
                folder_path = base_path / item['name']
                if (folder_path / 'index.md').exists():
                    # Section with index - make it a clickable link
                    index_path = f"{item['name']}/index.md"
                    nav_lines.append(f'{indent}- [{title}]({index_path})')
                else:
                    # Section without index - just a header
                    nav_lines.append(f'{indent}- {title}:')
            else:
                # No base_path provided, use section header
                nav_lines.append(f'{indent}- {title}:')
            items_to_nav(item['children'], nav_lines, indent + "  ", base_path)


def generate_navigation(docs_path):
    """Generate SUMMARY.md with original paths (MkDocs needs to find source files).
    
    The post_build hook will rename files and update all links after build completes.
    """
    items = build_tree(docs_path)
    nav_lines = []
    
    index_item = None
    other_items = []
    
    for item in items:
        if item['type'] == 'file' and item['name'] == 'index.md':
            index_item = item
        else:
            other_items.append(item)
    
    if index_item:
        nav_lines.append('- [Home](index.md)')
    
    items_to_nav(other_items, nav_lines, "", docs_path)
    

    links = parse_links_file(docs_path)
    nav_lines = add_links_to_nav(nav_lines, links)

    
    with open(docs_path / 'SUMMARY.md', 'w') as f:
        f.write('\n'.join(nav_lines))
