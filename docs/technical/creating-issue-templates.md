# Creating Issue Templates

This guide explains how to create GitHub Issue Form templates using the three-file system.

## Overview

Each template requires **three files** with the same base name:

| File | Purpose |
|------|---------|
| `template.csv` | Field definitions (structure) |
| `template.json` | Configuration (metadata, labels, guidance) |
| `template.py` | Dynamic data (dropdown options from external sources) |

Run `template_generate` to produce `.yml` files in `.github/ISSUE_TEMPLATE/`.

---

## Quick Start

Create a minimal template called `example`:

=== "example.csv"

    ```csv
    field_order,field_type,field_id,label,description,data_source,required,placeholder,options_type,default_value
    1,input,name,Your Name,Enter your name.,none,true,e.g. John Smith,,
    2,textarea,details,Details,Provide additional details.,none,false,Enter details here...,,
    3,markdown,metadata_header,Metadata,"####\n## Metadata [For internal use only]",none,false,,,
    4,dropdown,issue_kind,Issue Kind,Select issue type.,issue_kind,true,,list,0
    ```

=== "example.json"

    ```json
    {
      "name": "Example Template",
      "description": "A simple example template",
      "title": "Example:",
      "labels": ["example"],
      "issue_category": "example",
      "dropdown_title": "Completion Guidance",
      "field_guidance": {
        "name": "Please use your full name as it appears in official records."
      }
    }
    ```

=== "example.py"

    ```python
    # Example Template Data
    
    DATA = {
        'issue_kind': ['New', 'Modify']
    }
    ```

---

## CSV Field Reference

### Column Definitions

| Column | Description |
|--------|-------------|
| `field_order` | Display order (integer) |
| `field_type` | Input type (see below) |
| `field_id` | Unique identifier for the field |
| `label` | Display label shown to user |
| `description` | Help text below the field |
| `data_source` | Key in `DATA` dict for options, or `none` |
| `required` | `true` or `false` |
| `placeholder` | Example text shown in empty fields |
| `options_type` | How to extract options (see below) |
| `default_value` | Default selection index for dropdowns |

### Field Types

=== "input"

    Single-line text input.
    
    ```csv
    1,input,title,Title,Enter a title.,none,true,e.g. My Title,,
    ```

=== "textarea"

    Multi-line text input.
    
    ```csv
    2,textarea,description,Description,Provide details.,none,true,Enter details...,,
    ```

=== "dropdown"

    Single-select dropdown. Requires `data_source` pointing to a key in `DATA`.
    
    ```csv
    3,dropdown,priority,Priority,Select priority.,priority_options,true,,list,0
    ```

=== "multi-select"

    Multiple-select dropdown. Same as dropdown but allows multiple selections.
    
    ```csv
    4,multi-select,tags,Tags,Select all that apply.,tag_options,false,,list,
    ```

=== "markdown"

    Static markdown content (no user input). Use for section headers.
    
    ```csv
    5,markdown,section_header,Section Title,"## Section\n\nInstructions here.",none,false,,,
    ```

### Options Types

Used with `dropdown` and `multi-select` to extract values from `DATA`:

| Type | Description |
|------|-------------|
| `list` | Use list items directly |
| `dict_keys` | Use dictionary keys |
| `dict_multiple` | Use dictionary keys (for multi-select) |
| `list_with_na` | Prepend "Not specified" to list |

---

## JSON Configuration

```json
{
  "name": "Template Display Name",
  "description": "Short description shown in template picker",
  "title": "Issue Title Prefix:",
  "labels": ["label1", "label2"],
  "issue_category": "category_id",
  "dropdown_title": "Completion Guidance",
  "field_guidance": {
    "field_id": "Detailed help text for this field."
  }
}
```

### Field Guidance

The `field_guidance` object maps `field_id` to help text. This creates a collapsible `<details>` section below the field description.

**Behavior by field type:**

- **Non-markdown fields**: Guidance wrapped in collapsible `<details>` with `dropdown_title` as summary
- **Markdown fields**: Guidance appended directly (no collapsible)

### Template Substitution

Use `{key}` placeholders in guidance to insert values from `DATA`:

```json
{
  "field_guidance": {
    "activity": "**Currently registered:**\n{cmip7_activity}"
  }
}
```

| Format | Output |
|--------|--------|
| `{key}` | Bullet list (default) |
| `{key:comma}` | Comma-separated |
| `{key:plain}` | Newline-separated |

---

## Python Data File

Provides dynamic data for dropdown options and template substitution.

```python
# template.py

import cmipld
from cmipld.utils.ldparse import name_extract

DATA = {
    # Static list
    'issue_kind': ['New', 'Modify'],
    
    # From external source
    'activity': name_extract(
        cmipld.get('constants:activity/graph.jsonld', depth=0)
    ),
    
    # Pre-formatted string for substitution
    'cmip7_activity': '- ' + '\n- '.join(
        name_extract(cmipld.get('cmip7:project/activity.json', depth=2).get('activity', {}))
    ) if name_extract(...) else 'None registered'
}
```

!!! tip "Data Sources"
    - Use `name_extract()` to get names from JSON-LD graphs
    - Use `.get('key', {})` to safely access nested data
    - Pre-format strings with bullets for cleaner substitution

---

## Common Patterns

### Section Headers with Spacing

Use `####\n## Title` for visual separation:

```csv
10,markdown,metadata_header,Metadata,"####\n## Metadata [For internal use only]",none,false,,,
```

### Linking to External Registration

```csv
1,multi-select,activity,Activity,"If not listed, register in [WCRP-constants](https://github.com/WCRP-CMIP/WCRP-constants/issues/new?template=activity.yml) first.",activity,true,,dict_multiple,
```

### Internal Use Section

Always place at end with `issue_kind`:

```csv
98,markdown,metadata_header,Metadata,"####\n## Issue Handling Metadata [For internal use only]",none,false,,,
99,dropdown,issue_category,Issue Type,Pre-set category.,issue_category,true,,list,0
100,dropdown,issue_kind,Issue Kind,New or modify.,issue_kind,true,,list,0
```

---

## Validation & Generation

```bash
# Generate all templates
template_generate

# Generate specific template
template_generate --template example

# Custom directories
template_generate -t /path/to/templates -o /path/to/output
```

!!! warning "Required Files"
    All three files (`.csv`, `.json`, `.py`) must exist for a template to be processed. Missing files are skipped with a warning.

The generator will:

1. Validate all three files exist
2. Load configuration, data, and field definitions
3. Substitute placeholders in guidance text
4. Generate valid YAML
5. Create GitHub labels if they don't exist
6. Update `issues.md` documentation
