#!/usr/bin/env python3
"""
Script runner for MkDocs gen-files plugin.
Executes all Python scripts in docs/scripts/ directory during build.

Scripts can generate markdown files using mkdocs_gen_files.open()
"""

import os
import sys
import importlib.util
import time
from pathlib import Path

print("\n" + "=" * 60)
print("SCRIPT RUNNER - Executing docs/scripts/*.py")
print("=" * 60)

# PRE-START LDR SERVER
# Import cmipld early to ensure LDR server is running before any scripts execute
print("\n🔧 Initializing LDR server...")
try:
    import cmipld
    # Give server a moment to fully start
    time.sleep(1)
    # Verify server is responsive
    try:
        cmipld.client.get_mappings()
        print("✅ LDR server is ready and responsive")
    except Exception as e:
        print(f"⚠️  Warning: LDR server started but not responding: {e}")
        print("   Scripts that depend on LDR may fail")
except ImportError:
    print("⚠️  cmipld not available - scripts requiring LDR will fail")
except Exception as e:
    print(f"❌ Failed to initialize LDR server: {e}")
    print("   Scripts that depend on LDR will fail")

print("\n" + "=" * 60)

# Find scripts directory
cwd = Path.cwd()
script_locations = [
    cwd / "docs" / "scripts",
    cwd.parent / "docs" / "scripts",
    cwd.parent.parent / "docs" / "scripts",
]

scripts_dir = None
for loc in script_locations:
    if loc.exists() and loc.is_dir():
        scripts_dir = loc
        break

if not scripts_dir:
    print("ℹ️  No docs/scripts/ directory found, skipping script execution")
    print("=" * 60)
else:
    print(f"📁 Found scripts directory: {scripts_dir}")
    
    # Find all Python scripts (skip files starting with _)
    scripts = sorted(scripts_dir.glob("*.py"))
    scripts = [s for s in scripts if not s.name.startswith('_')]
    
    if not scripts:
        print("ℹ️  No Python scripts found in docs/scripts/")
    else:
        print(f"📜 Found {len(scripts)} script(s) to execute:")
        for script in scripts:
            print(f"   - {script.name}")
        
        print("\n" + "-" * 40)
        
        # Execute each script
        for script_path in scripts:
            print(f"\n🔄 Executing: {script_path.name}")
            
            try:
                # Load and execute the script
                spec = importlib.util.spec_from_file_location(
                    script_path.stem, 
                    script_path
                )
                module = importlib.util.module_from_spec(spec)
                
                # Add docs/scripts to path so scripts can import each other
                if str(scripts_dir) not in sys.path:
                    sys.path.insert(0, str(scripts_dir))
                
                spec.loader.exec_module(module)
                print(f"✅ Completed: {script_path.name}")
                
            except Exception as e:
                print(f"❌ Error in {script_path.name}: {e}", file=sys.stderr)
                import traceback
                traceback.print_exc()
        
        print("\n" + "-" * 40)

print("=" * 60 + "\n")
