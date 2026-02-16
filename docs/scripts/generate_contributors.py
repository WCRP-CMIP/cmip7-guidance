#!/usr/bin/env python3
"""
Generate contributors.md from git history.

This script runs during the MkDocs build process to create/update
the contributors page with GitHub avatars, commit counts, and ORCID links.

Requires: cmipld package (pip install cmipld)
"""

import subprocess
import sys
from pathlib import Path

# Paths relative to this script's location (docs/scripts/)
SCRIPT_DIR = Path(__file__).parent.resolve()
DOCS_DIR = SCRIPT_DIR.parent


def main():
    """Generate contributors.md using cmipld."""
    output_path = DOCS_DIR / "99_contributors.md"
    
    print(f"Generating contributors page: {output_path}")
    
    try:
        result = subprocess.run(
            [
                sys.executable, "-m", "cmipld.generate.get_contributors",
                "--md", str(output_path),
                "--branches", "main", "src-data", "docs"
            ],
            capture_output=True,
            text=True,
            cwd=str(DOCS_DIR.parent)
        )
        
        if result.returncode == 0:
            print(f"✓ Contributors page generated: {output_path}")
            if result.stdout:
                print(result.stdout)
        else:
            print(f"Warning: get_contributors returned {result.returncode}")
            if result.stderr:
                print(result.stderr)
                
    except FileNotFoundError:
        print("Warning: cmipld not installed. Skipping contributors generation.")
        print("Install with: pip install cmipld")
    except Exception as e:
        print(f"Warning: Could not generate contributors: {e}")


main()
