#!/usr/bin/env python3
"""
Example script that runs during MkDocs build.

This script demonstrates how to generate documentation content dynamically.
Scripts in docs/scripts/ are executed during the build process and can:

1. Generate markdown files using mkdocs_gen_files
2. Process data files and create documentation
3. Create dynamic content based on external sources

To use mkdocs_gen_files:
    import mkdocs_gen_files
    
    with mkdocs_gen_files.open("generated/myfile.md", "w") as f:
        f.write("# Dynamic Content\\n")
        f.write("This was generated at build time!")
"""

import sys
from datetime import datetime

print(f"📝 Example script running at {datetime.now().isoformat()}")

# Example: You could generate content here
# Uncomment and modify the following to generate pages:

# try:
#     import mkdocs_gen_files
#     
#     with mkdocs_gen_files.open("generated/build-info.md", "w") as f:
#         f.write("# Build Information\n\n")
#         f.write(f"Built at: {datetime.now().isoformat()}\n\n")
#         f.write("This page was auto-generated during the build process.\n")
#     
#     print("✅ Generated build-info.md")
# except ImportError:
#     print("ℹ️  mkdocs_gen_files not available (running outside MkDocs)")

print("✅ Example script completed")
