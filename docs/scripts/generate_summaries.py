#!/usr/bin/env python3
"""
Universal Data Summary Generator for MkDocs.

This script generates markdown summary pages from data sources.
Configuration is loaded from summaries_config.py in the same directory.

If no config file exists, the script skips silently.
"""

import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
CONFIG_FILE = SCRIPT_DIR / "summaries_config.py"

# Early exit if no config
if not CONFIG_FILE.exists():
    print("ℹ️  No summaries_config.py found - skipping summary generation")
    sys.exit(0)

# Only import dependencies if config exists
import json
import importlib.util
from datetime import datetime

DOCS_DIR = SCRIPT_DIR.parent


def load_config():
    """Load configuration from summaries_config.py."""
    spec = importlib.util.spec_from_file_location("summaries_config", CONFIG_FILE)
    config = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(config)
    return config


def format_value(value, key=None, max_length=50):
    """Format a value for markdown table display."""
    if value is None or value == "" or value == "none":
        return "*—*"
    
    if isinstance(value, list):
        if len(value) == 0:
            return "*—*"
        formatted = ", ".join(
            str(v.get('validation_key', v) if isinstance(v, dict) else v) 
            for v in value[:3]
        )
        if len(value) > 3:
            formatted += f" (+{len(value)-3} more)"
        return formatted
    
    if isinstance(value, dict):
        return value.get('validation_key') or value.get('ui_label') or value.get('@id', str(value))
    
    s = str(value)
    if len(s) > max_length:
        return s[:max_length-3] + "..."
    return s


def get_id(item, id_field='validation_key'):
    """Extract ID from item."""
    if id_field and id_field in item:
        return item[id_field]
    return item.get('validation_key') or item.get('@id', '').split('/')[-1] or 'unknown'


def filter_data(data, filters):
    """Filter data based on field values."""
    if not filters:
        return data
    
    result = []
    for item in data:
        if not isinstance(item, dict):
            continue
        match = all(item.get(k) == v for k, v in filters.items())
        if match:
            result.append(item)
    return result


def generate_summary_page(data_type, type_config, fetch_func, output_dir, json_dir):
    """Generate a markdown summary page for a data type."""
    print(f"  Generating {data_type}...")
    
    # Fetch data using provided function
    raw_data = fetch_func(type_config.get('endpoint', data_type))
    
    # Apply filters if any
    data = filter_data(raw_data, type_config.get('filter', {}))
    
    if not data:
        print(f"    No data found for {data_type}")
        return None
    
    # Sort by ID
    id_field = type_config.get('id_field', 'validation_key')
    data = sorted(data, key=lambda x: str(get_id(x, id_field)).lower())
    
    # Build markdown
    lines = [
        f"# {type_config['title']}",
        "",
        type_config.get('description', ''),
        "",
        f"**Records:** {len(data)}",
        "",
    ]
    
    # Table header
    columns = type_config.get('columns', ['id', 'ui_label', 'description'])
    header_row = "| " + " | ".join(h.replace("_", " ").title() for h in columns) + " |"
    separator = "|" + "|".join("---" for _ in columns) + "|"
    lines.extend([header_row, separator])
    
    # Table rows
    for item in data:
        if not isinstance(item, dict):
            continue
        
        row_values = []
        for col in columns:
            if col == "id":
                val = f"**{get_id(item, id_field)}**"
            else:
                val = format_value(item.get(col), col)
            row_values.append(val)
        
        lines.append("| " + " | ".join(row_values) + " |")
    
    lines.extend([
        "",
        f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}*"
    ])
    
    # Write markdown file
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"{data_type}.md"
    output_path.write_text("\n".join(lines), encoding="utf-8")
    
    # Write JSON file
    if json_dir:
        json_dir.mkdir(parents=True, exist_ok=True)
        json_path = json_dir / f"{data_type}.json"
        json_path.write_text(json.dumps(data, indent=2), encoding="utf-8")
    
    return len(data)


def generate_index(stats, data_types, stages, output_dir):
    """Generate the index page for data summaries."""
    lines = [
        "# Data Summaries",
        "",
        "Overview of all registered data.",
        "",
        "## Quick Links",
        "",
        "| Category | Description | Records |",
        "|----------|-------------|--------:|",
    ]
    
    for stage_name, type_keys in stages:
        lines.append(f"| **{stage_name}** | | |")
        for dt in type_keys:
            if dt in stats and stats[dt] and dt in data_types:
                config = data_types[dt]
                desc = config.get('description', '')[:50]
                if len(config.get('description', '')) > 50:
                    desc += "..."
                lines.append(f"| [{config['title']}]({dt}.md) | {desc} | {stats[dt]} |")
    
    lines.extend([
        "",
        "---",
        f"*Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}*"
    ])
    
    index_path = output_dir / "index.md"
    index_path.write_text("\n".join(lines), encoding="utf-8")


def main():
    print("Data Summary Generator")
    print("=" * 40)
    
    # Load config
    config = load_config()
    
    # Get config values
    data_types = getattr(config, 'DATA_TYPES', {})
    stages = getattr(config, 'STAGES', [])
    output_subdir = getattr(config, 'OUTPUT_DIR', 'data-summaries')
    export_json = getattr(config, 'EXPORT_JSON', True)
    
    # Get fetch function
    if not hasattr(config, 'fetch_data'):
        print("Error: summaries_config.py must define fetch_data(endpoint) function")
        return
    
    fetch_func = config.fetch_data
    
    # Setup directories
    output_dir = DOCS_DIR / output_subdir
    json_dir = output_dir / "json" if export_json else None
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    stats = {}
    
    for data_type, type_config in data_types.items():
        count = generate_summary_page(
            data_type, type_config, fetch_func, output_dir, json_dir
        )
        stats[data_type] = count
    
    # Generate index if stages defined
    if stages:
        generate_index(stats, data_types, stages, output_dir)
    
    print("-" * 40)
    total = sum(v for v in stats.values() if v)
    successful = len([v for v in stats.values() if v])
    print(f"✓ Generated {successful} summary pages ({total} total records)")


if __name__ == "__main__":
    main()
else:
    # Auto-run when imported by run_scripts.py
    main()
