"""
Example Data Summary Configuration.

Copy this file to summaries_config.py and customize for your repository.
The generate_summaries.py script will skip if this config file doesn't exist.

Required:
- DATA_TYPES: dict of data type configurations
- fetch_data(endpoint): function to retrieve data

Optional:
- STAGES: list of (stage_name, [data_type_keys]) for index grouping
- OUTPUT_DIR: subdirectory under docs/ for output (default: 'data-summaries')
- EXPORT_JSON: whether to export JSON files (default: True)
"""

# =============================================================================
# DATA FETCHING
# =============================================================================

# Example using cmipld
def fetch_data(endpoint):
    """
    Fetch data from a data source.
    
    Args:
        endpoint: The data endpoint/path to fetch
        
    Returns:
        List of dict items
    """
    import cmipld
    
    # Example: fetch from a graph endpoint
    url = f"your-prefix:{endpoint}/_graph.json"
    try:
        data = cmipld.get(url, depth=2)
        if data and 'contents' in data:
            return data['contents']
        return []
    except Exception as e:
        print(f"  Warning: Could not fetch {endpoint}: {e}")
        return []


# =============================================================================
# DATA TYPE CONFIGURATIONS
# =============================================================================

DATA_TYPES = {
    # Each key becomes a filename: {key}.md
    
    "example_type": {
        # Required
        "title": "Example Data Type",
        "endpoint": "example_endpoint",  # passed to fetch_data()
        
        # Optional
        "description": "Description shown at top of page.",
        "columns": ["id", "ui_label", "description", "status"],
        "filter": {"status": "active"},  # only include matching items
        "id_field": "validation_key",    # field to use as ID (default: validation_key)
    },
    
    "another_type": {
        "title": "Another Type",
        "endpoint": "another",
        "description": "Another data type.",
        "columns": ["id", "name", "value"],
    },
}


# =============================================================================
# INDEX PAGE CONFIGURATION (Optional)
# =============================================================================

# Group data types into stages/sections for the index page
STAGES = [
    ("Section 1", ["example_type"]),
    ("Section 2", ["another_type"]),
]


# =============================================================================
# OUTPUT CONFIGURATION (Optional)
# =============================================================================

# Subdirectory under docs/ for output files
OUTPUT_DIR = "data-summaries"

# Whether to export JSON alongside markdown
EXPORT_JSON = True
