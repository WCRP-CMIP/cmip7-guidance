#!/usr/bin/env python3
"""
Generate root redirect page to docs/.

Creates an index.html at the repository root that redirects to docs/
This is useful when GitHub Pages serves from root but docs are in docs/ subdirectory.
"""

from pathlib import Path

SCRIPT_DIR = Path(__file__).parent.resolve()
DOCS_DIR = SCRIPT_DIR.parent
REPO_ROOT = DOCS_DIR.parent

REDIRECT_HTML = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=docs/">
    <link rel="canonical" href="docs/">
    <title>Redirecting to Documentation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        a {
            color: #fff;
            text-decoration: underline;
            font-size: 1.2rem;
        }
        .spinner {
            margin: 2rem auto;
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="spinner"></div>
        <h1>Redirecting to Documentation...</h1>
        <p>If you are not redirected automatically, <a href="docs/">click here</a>.</p>
    </div>
</body>
</html>
'''


def main():
    """Generate redirect page at repository root."""
    redirect_path = REPO_ROOT / "index.html"
    
    # Always create/update the redirect
    redirect_path.write_text(REDIRECT_HTML, encoding='utf-8')
    print(f"✅ Created redirect page: {redirect_path}")
    print("   Redirects root → docs/")


if __name__ == "__main__":
    main()
else:
    # Auto-run when imported by run_scripts.py
    main()
