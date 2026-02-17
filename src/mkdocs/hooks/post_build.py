#!/usr/bin/env python3
"""
Post-build hook for:
1. Clean URLs - strips numeric prefixes from output paths (101_CMIP7 -> CMIP7)
2. Auto-versioning (optional, set AUTO_VERSION=1)
"""

import os
import re
import shutil
import sys
from pathlib import Path


def strip_numeric_prefix(name):
    """Strip numeric prefix from a name (e.g., '101_CMIP7' -> 'CMIP7')."""
    return re.sub(r'^\d+[-_.]', '', name)


def find_prefixed_names(site_dir):
    """Find all directories and files with numeric prefixes."""
    prefixed = {}  # old_name -> clean_name
    
    for root, dirs, files in os.walk(site_dir):
        for d in dirs:
            clean = strip_numeric_prefix(d)
            if clean != d:
                prefixed[d] = clean
        for f in files:
            clean = strip_numeric_prefix(f)
            if clean != f:
                prefixed[f] = clean
    
    return prefixed


def fix_html_links(site_dir, replacements):
    """Fix links in all HTML files."""
    if not replacements:
        return
    
    for root, dirs, files in os.walk(site_dir):
        for f in files:
            if not f.endswith('.html'):
                continue
            
            filepath = Path(root) / f
            try:
                content = filepath.read_text(encoding='utf-8')
                original = content
                
                # Replace each prefixed name with clean name in URLs
                for old_name, clean_name in replacements.items():
                    # Match in href, src attributes and general paths
                    content = re.sub(
                        rf'(["\'/])({re.escape(old_name)})([/"\'])',
                        rf'\1{clean_name}\3',
                        content
                    )
                
                if content != original:
                    filepath.write_text(content, encoding='utf-8')
            except Exception as e:
                print(f"Warning: Could not process {filepath}: {e}")


def rename_paths(site_dir, replacements):
    """Rename directories and files with numeric prefixes."""
    if not replacements:
        return
    
    # Collect all items to rename
    items_to_rename = []
    
    for root, dirs, files in os.walk(site_dir):
        root_path = Path(root)
        
        for d in dirs:
            if d in replacements:
                items_to_rename.append((root_path / d, root_path / replacements[d]))
        
        for f in files:
            if f in replacements:
                items_to_rename.append((root_path / f, root_path / replacements[f]))
    
    # Sort by depth (deepest first) to rename children before parents
    items_to_rename.sort(key=lambda x: -str(x[0]).count(os.sep))
    
    # Rename
    for old_path, new_path in items_to_rename:
        if old_path.exists() and not new_path.exists():
            shutil.move(str(old_path), str(new_path))


def clean_urls(config):
    """Strip numeric prefixes from built site URLs."""
    site_dir = Path(config['site_dir'])
    
    if not site_dir.exists():
        return
    
    # Find all prefixed names
    replacements = find_prefixed_names(site_dir)
    
    if not replacements:
        return
    
    print(f"\n[clean_urls] Cleaning {len(replacements)} prefixed paths...")
    
    # Fix HTML links first (before renaming directories)
    fix_html_links(site_dir, replacements)
    
    # Rename directories and files
    rename_paths(site_dir, replacements)
    
    print(f"[clean_urls] Done. URLs are now clean (no numeric prefixes)")


def on_post_build(config, **kwargs):
    """MkDocs post-build hook."""
    
    # Always clean URLs
    clean_urls(config)
    
    # Only run auto-versioning if AUTO_VERSION is enabled
    if not os.environ.get("AUTO_VERSION"):
        return
    
    print("\n[auto_version] Checking for version deployment...")
    
    # Import and run auto_version
    scripts_dir = Path(config["docs_dir"]) / "scripts"
    sys.path.insert(0, str(scripts_dir))
    
    try:
        from auto_version import auto_deploy, show_status
        
        show_status()
        print()
        auto_deploy(force=False, push=True)
        
    except ImportError as e:
        print(f"[auto_version] Could not import auto_version: {e}")
    except Exception as e:
        print(f"[auto_version] Error: {e}")
    finally:
        sys.path.pop(0)
