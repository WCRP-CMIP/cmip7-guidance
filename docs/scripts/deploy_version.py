#!/usr/bin/env python3
"""
Deploy documentation version using mike.

Usage:
    python deploy_version.py v1.0              # Deploy as v1.0
    python deploy_version.py v1.0 --latest     # Deploy as v1.0 and set as latest
    python deploy_version.py v1.0 --push       # Deploy and push to gh-pages
    python deploy_version.py --list            # List all versions
    python deploy_version.py --delete v0.9     # Delete a version
"""

import argparse
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent.resolve()
MKDOCS_DIR = SCRIPT_DIR.parent / "src" / "mkdocs"


def run_mike(args: list, push: bool = False):
    """Run mike command from mkdocs directory."""
    cmd = ["mike"] + args
    if push:
        cmd.append("--push")
    
    print(f"Running: {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=str(MKDOCS_DIR))
    return result.returncode


def main():
    parser = argparse.ArgumentParser(
        description="Deploy documentation version using mike",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python deploy_version.py v1.0                  Deploy as v1.0
    python deploy_version.py v1.0 --latest         Deploy and mark as latest
    python deploy_version.py v1.0 --push           Deploy and push to gh-pages
    python deploy_version.py v1.0 --latest --push  Deploy as latest and push
    python deploy_version.py --list                List all versions
    python deploy_version.py --delete v0.9         Delete version v0.9
    python deploy_version.py --set-default v1.0    Set default version
        """
    )
    
    parser.add_argument(
        "version",
        nargs="?",
        help="Version to deploy (e.g., v1.0, v2.0-beta)"
    )
    parser.add_argument(
        "--latest",
        action="store_true",
        help="Also tag this version as 'latest'"
    )
    parser.add_argument(
        "--push",
        action="store_true",
        help="Push to gh-pages branch after deploying"
    )
    parser.add_argument(
        "--title",
        help="Title for this version (default: version number)"
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="List all deployed versions"
    )
    parser.add_argument(
        "--delete",
        metavar="VERSION",
        help="Delete a specific version"
    )
    parser.add_argument(
        "--set-default",
        metavar="VERSION",
        help="Set the default version"
    )
    
    args = parser.parse_args()
    
    # List versions
    if args.list:
        return run_mike(["list"])
    
    # Delete version
    if args.delete:
        return run_mike(["delete", args.delete], push=args.push)
    
    # Set default
    if args.set_default:
        return run_mike(["set-default", args.set_default], push=args.push)
    
    # Deploy version
    if not args.version:
        parser.print_help()
        print("\nError: version is required for deployment")
        return 1
    
    deploy_args = ["deploy", args.version]
    
    if args.latest:
        deploy_args.append("latest")
    
    if args.title:
        deploy_args.extend(["--title", args.title])
    
    return run_mike(deploy_args, push=args.push)


if __name__ == "__main__":
    sys.exit(main() or 0)
