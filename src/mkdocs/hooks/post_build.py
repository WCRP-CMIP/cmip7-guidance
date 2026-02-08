#!/usr/bin/env python3
"""
Post-build hook for auto-versioning.

This hook runs after mkdocs build and:
1. Checks if on production branch
2. Checks if .md files have changed since last deploy
3. Auto-increments patch version and deploys with mike

To enable auto-versioning, set AUTO_VERSION=1 environment variable:
    AUTO_VERSION=1 mkdocs build
"""

import os
import sys
from pathlib import Path


def on_post_build(config, **kwargs):
    """MkDocs post-build hook."""
    # Only run if AUTO_VERSION is enabled
    if not os.environ.get("AUTO_VERSION"):
        return
    
    print("\n[auto_version] Checking for version deployment...")
    
    # Import and run auto_version
    scripts_dir = Path(config["docs_dir"]) / "scripts"
    sys.path.insert(0, str(scripts_dir))
    
    try:
        from auto_version import auto_deploy, show_status
        
        # Show status
        show_status()
        print()
        
        # Auto deploy if conditions met
        auto_deploy(force=False, push=True)
        
    except ImportError as e:
        print(f"[auto_version] Could not import auto_version: {e}")
    except Exception as e:
        print(f"[auto_version] Error: {e}")
    finally:
        sys.path.pop(0)
