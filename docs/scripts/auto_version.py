#!/usr/bin/env python3
"""
Auto-versioning for documentation using mike.

This script:
1. Checks if on production branch (main/master)
2. Detects if .md files have changed since last deploy
3. Creates date-based version (v.yy.mm.dd) and deploys

Version format: v.yy.mm.dd (e.g., v.25.02.09)
If a version already exists for the day, it replaces the old one.

Usage:
    python auto_version.py              # Check and deploy if needed
    python auto_version.py --force      # Force deploy current version
    python auto_version.py --status     # Show current status
"""

import argparse
import subprocess
import sys
from pathlib import Path
from datetime import datetime

SCRIPT_DIR = Path(__file__).parent.resolve()
DOCS_DIR = SCRIPT_DIR.parent
REPO_ROOT = DOCS_DIR.parent
MKDOCS_DIR = REPO_ROOT / "src" / "mkdocs"
VERSION_FILE = DOCS_DIR / ".version"
PRODUCTION_BRANCHES = ["main", "master", "production"]


def run_command(cmd: list, cwd: str = None, capture: bool = True) -> tuple:
    """Run a command and return (success, output)."""
    try:
        result = subprocess.run(
            cmd,
            cwd=cwd or str(REPO_ROOT),
            capture_output=capture,
            text=True
        )
        return result.returncode == 0, result.stdout.strip()
    except Exception as e:
        return False, str(e)


def get_current_branch() -> str:
    """Get current git branch name."""
    success, output = run_command(["git", "rev-parse", "--abbrev-ref", "HEAD"])
    return output if success else ""


def is_production_branch() -> bool:
    """Check if on a production branch."""
    branch = get_current_branch()
    return branch in PRODUCTION_BRANCHES


def get_last_deploy_commit() -> str:
    """Get the commit hash of the last deployment."""
    commit_file = DOCS_DIR / ".last_deploy_commit"
    if commit_file.exists():
        return commit_file.read_text().strip()
    return ""


def save_last_deploy_commit(commit: str):
    """Save the commit hash of this deployment."""
    commit_file = DOCS_DIR / ".last_deploy_commit"
    commit_file.write_text(commit)


def get_current_commit() -> str:
    """Get current commit hash."""
    success, output = run_command(["git", "rev-parse", "HEAD"])
    return output if success else ""


def has_md_changes_since(commit: str) -> bool:
    """Check if any .md files changed since given commit."""
    if not commit:
        return True  # No previous deploy, assume changes
    
    success, output = run_command([
        "git", "diff", "--name-only", commit, "HEAD", "--", "docs/*.md", "docs/**/*.md"
    ])
    
    if not success:
        success, output = run_command([
            "git", "diff", "--name-only", "--", "docs/*.md", "docs/**/*.md"
        ])
    
    return bool(output.strip())


def get_changed_md_files(commit: str = None) -> list:
    """Get list of changed .md files."""
    if commit:
        success, output = run_command([
            "git", "diff", "--name-only", commit, "HEAD", "--", "docs/*.md", "docs/**/*.md"
        ])
    else:
        success, output = run_command([
            "git", "diff", "--name-only", "HEAD~1", "HEAD", "--", "docs/*.md", "docs/**/*.md"
        ])
    
    if success and output:
        return [f for f in output.split('\n') if f.strip()]
    return []


def get_date_version() -> str:
    """Get version string based on current date: v.yy.mm.dd"""
    now = datetime.now()
    return f"v.{now.strftime('%y.%m.%d')}"


def read_version() -> str:
    """Read version from .version file."""
    if VERSION_FILE.exists():
        return VERSION_FILE.read_text().strip()
    return get_date_version()


def write_version(version: str):
    """Write version to .version file."""
    VERSION_FILE.write_text(f"{version}\n")
    return version


def get_version_string() -> str:
    """Get current date-based version string."""
    return get_date_version()


def deploy_version(version: str, set_latest: bool = True, push: bool = True) -> bool:
    """Deploy documentation version using mike."""
    cmd = ["mike", "deploy", version]
    
    if set_latest:
        cmd.append("latest")
        cmd.extend(["--update-aliases"])
    
    if push:
        cmd.append("--push")
    
    print(f"Deploying: {' '.join(cmd)}")
    success, output = run_command(cmd, cwd=str(MKDOCS_DIR), capture=False)
    
    if success:
        # Save commit hash and version
        current_commit = get_current_commit()
        save_last_deploy_commit(current_commit)
        write_version(version)
        print(f"✓ Deployed {version}")
        return True
    else:
        print(f"✗ Deploy failed")
        return False


def show_status():
    """Show current versioning status."""
    branch = get_current_branch()
    is_prod = is_production_branch()
    version = get_version_string()
    last_version = read_version()
    last_commit = get_last_deploy_commit()
    current_commit = get_current_commit()
    has_changes = has_md_changes_since(last_commit)
    changed_files = get_changed_md_files(last_commit)
    
    print(f"Branch:           {branch} {'(production)' if is_prod else '(not production)'}")
    print(f"Today's version:  {version}")
    print(f"Last deployed:    {last_version}")
    print(f"Current commit:   {current_commit[:8] if current_commit else 'unknown'}")
    print(f"Last deploy:      {last_commit[:8] if last_commit else 'never'}")
    print(f"MD changes:       {'yes' if has_changes else 'no'}")
    
    if changed_files:
        print(f"Changed files:")
        for f in changed_files[:10]:
            print(f"  - {f}")
        if len(changed_files) > 10:
            print(f"  ... and {len(changed_files) - 10} more")


def auto_deploy(force: bool = False, push: bool = True) -> bool:
    """Auto-deploy if conditions are met."""
    branch = get_current_branch()
    
    if not is_production_branch():
        print(f"Skipping: not on production branch (current: {branch})")
        return False
    
    last_commit = get_last_deploy_commit()
    has_changes = has_md_changes_since(last_commit)
    
    if not has_changes and not force:
        print("Skipping: no .md file changes since last deploy")
        return False
    
    # Get date-based version (replaces same-day versions automatically)
    new_version = get_date_version()
    print(f"Deploying version {new_version}")
    
    # Deploy (mike will replace existing version with same name)
    return deploy_version(new_version, set_latest=True, push=push)


def main():
    parser = argparse.ArgumentParser(
        description="Auto-versioning for documentation (date-based: v.yy.mm.dd)",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    parser.add_argument(
        "--status",
        action="store_true",
        help="Show current status"
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force deploy even without changes"
    )
    parser.add_argument(
        "--no-push",
        action="store_true",
        help="Don't push to gh-pages"
    )
    parser.add_argument(
        "--deploy",
        action="store_true",
        help="Deploy current version"
    )
    
    args = parser.parse_args()
    
    if args.status:
        show_status()
        return 0
    
    if args.deploy:
        version = get_version_string()
        success = deploy_version(version, push=not args.no_push)
        return 0 if success else 1
    
    # Auto mode
    success = auto_deploy(force=args.force, push=not args.no_push)
    return 0 if success else 1


if __name__ == "__main__":
    sys.exit(main())
