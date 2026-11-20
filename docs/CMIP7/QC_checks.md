---
layout: default
title: CMIP7 QC checks by cc-plugin-wcrp
---

# CMIP7 QC checks by [cc-plugin-wcrp](https://github.com/ESGF/cc-plugin-wcrp)

The following sections show the quality control (QC) checks performed by the compliance checker plugin being used for CMIP7 publication verification.
Each table relates to one of the files within the plugin and has three columns:

  - Check : the unique identifier of the check, which should be descriptive (e.g. `global.attributes.activity_id`)
  - Property: the property for the check, which may include fields such as
    - `severity` (`H`, `M` or `L`): `H` or High severity checks must be passed for publication
    - `value_type`: e.g. "str" for strings
    - `is_required`: True if this field must be present, False if it is optional or conditionally required
    - `cv_source_collection`: where this is controlled within the CVs (Controlled Vocabularies)
    - `cv_source_term_key` : term connected to the source of the information within the CVs.
    - `pattern` : regular expressions defining allowed values
  - Value: the value assigned to the property

See [this gist](https://gist.github.com/matthew-mizielinski/c88618e26f40126118ae2be242600643) for the code used to generate the following information.

## File ([file.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/file.toml))

| Check | Property | Value |
| --- | --- | ---|
| file.format | severity | H |
| file.format | expected_format | HDF5 |
| file.format | allowed_data_models | ['NETCDF4_CLASSIC', 'NETCDF4'] |
| file.internal_packing.metadata | severity | H |
| file.internal_packing.time | severity | H |
| file.internal_packing.data | severity | H |

## Global attributes ([global_attributes.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/global_attributes.toml))

| Check | Property | Value |
| --- | --- | ---|
| global.attributes.activity_id | severity | H |
| global.attributes.area_label | severity | H |
| global.attributes.branded_variable | severity | H |
| global.attributes.branding_suffix | severity | H |
| global.attributes.branch_time_in_child | severity | H |
| global.attributes.branch_time_in_parent | severity | H |
| global.attributes.cmip6_compound_name | severity | L |
| global.attributes.Conventions | severity | H |
| global.attributes.creation_date | severity | L |
| global.attributes.data_specs_version | severity | H |
| global.attributes.drs_specs | severity | H |
| global.attributes.experiment | severity | M |
| global.attributes.experiment_id | severity | H |
| global.attributes.external_variables | severity | H |
| global.attributes.forcing_index | severity | H |
| global.attributes.frequency | severity | H |
| global.attributes.grid_label | severity | H |
| global.attributes.horizontal_label | severity | H |
| global.attributes.initialization_index | severity | H |
| global.attributes.institution | severity | M |
| global.attributes.institution_id | severity | H |
| global.attributes.license | severity | H |
| global.attributes.license_id | severity | H |
| global.attributes.mip_era | severity | H |
| global.attributes.nominal_resolution | severity | H |
| global.attributes.parent_activity_id | severity | H |
| global.attributes.parent_experiment_id | severity | H |
| global.attributes.parent_mip_era | severity | H |
| global.attributes.parent_source_id | severity | H |
| global.attributes.parent_time_units | severity | H |
| global.attributes.parent_variant_label | severity | H |
| global.attributes.physics_index | severity | H |
| global.attributes.product | severity | H |
| global.attributes.realization_index | severity | H |
| global.attributes.realm | severity | H |
| global.attributes.references | severity | L |
| global.attributes.region | severity | H |
| global.attributes.source | severity | L |
| global.attributes.source_id | severity | H |
| global.attributes.temporal_label | severity | H |
| global.attributes.title | severity | L |
| global.attributes.tracking_id | severity | H |
| global.attributes.variable_id | severity | H |
| global.attributes.variant_info | severity | L |
| global.attributes.variant_label | severity | H |
| global.attributes.vertical_label | severity | H |
| global.consistency.filename_vs_attributes | severity | H |
| global.consistency.experiment_id_vs_activity_id | severity | M |
| global.consistency.experiment_id_vs_experiment | severity | M |
| global.consistency.experiment_id_vs_parent_experiment_id | severity | M |
| global.consistency.institution_id_vs_institution | severity | M |
| global.consistency.frequency_vs_branded_variable | severity | L |
| global.consistency.region_vs_branded_variable | severity | L |
| global.consistency.variant_label_vs_realization_index | severity | H |
| global.consistency.variant_label_vs_initialization_index | severity | H |
| global.consistency.variant_label_vs_physics_index | severity | H |
| global.consistency.variant_label_vs_forcing_index | severity | H |

## Drs ([drs.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/drs.toml))

| Check | Property | Value |
| --- | --- | ---|
| drs.filename | severity | H |
| drs.directory | severity | H |
| drs.attributes_vs_directory | severity | H |
| drs.filename_vs_directory | severity | H |
| drs.time_range | severity | H |
| drs.time_range | climatology_suffix |  |
| drs.time_range.label_precision | climatology | yyyyMM |
| drs.time_range.label_precision | cen | yyyy |
| drs.time_range.label_precision | dec | yyyy |
| drs.time_range.label_precision | yr | yyyy |
| drs.time_range.label_precision | yrPt | yyyy |
| drs.time_range.label_precision | sem | yyyyMM |
| drs.time_range.label_precision | mon | yyyyMM |
| drs.time_range.label_precision | monC | yyyyMM |
| drs.time_range.label_precision | monClim | yyyyMM |
| drs.time_range.label_precision | monPt | yyyyMM |
| drs.time_range.label_precision | day | yyyyMMdd |
| drs.time_range.label_precision | 6hr | yyyyMMddhhmm |
| drs.time_range.label_precision | 6hrPt | yyyyMMddhhmm |
| drs.time_range.label_precision | 3hr | yyyyMMddhhmm |
| drs.time_range.label_precision | 3hrPt | yyyyMMddhhmm |
| drs.time_range.label_precision | 1hr | yyyyMMddhhmm |
| drs.time_range.label_precision | 1hrCM | yyyyMMddhhmm |
| drs.time_range.label_precision | 1hrPt | yyyyMMddhhmm |
| drs.time_range.label_precision | subhr | yyyyMMddhhmmss |
| drs.time_range.label_precision | subhrPt | yyyyMMddhhmmss |

## Geophysical variable ([geophysical_variable.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/geophysical_variable.toml))

| Check | Property | Value |
| --- | --- | ---|
| variable.existence | severity | H |
| variable.type | severity | H |
| variable.type | data_type | ['real', 'double'] |
| variable.dimensions | severity | H |
| variable.attributes.long_name | severity | M |
| variable.attributes.long_name | value_type | str |
| variable.attributes.long_name | is_required | True |
| variable.attributes.long_name | cv_source_term_key | long_name |
| variable.attributes.standard_name | severity | H |
| variable.attributes.standard_name | value_type | str |
| variable.attributes.standard_name | is_required | True |
| variable.attributes.standard_name | cv_source_term_key | cf_standard_name |
| variable.attributes.units | severity | H |
| variable.attributes.units | value_type | str |
| variable.attributes.units | is_required | True |
| variable.attributes.units | cv_source_term_key | units |
| variable.attributes.cell_methods | severity | M |
| variable.attributes.cell_methods | value_type | str |
| variable.attributes.cell_methods | is_required | True |
| variable.attributes.cell_methods | cv_source_term_key | cell_methods |
| variable.attributes.cell_measures | severity | M |
| variable.attributes.cell_measures | value_type | str |
| variable.attributes.cell_measures | is_required | True |
| variable.attributes.cell_measures | cv_source_term_key | cell_measures |
| variable.attributes.history | severity | L |
| variable.attributes.history | value_type | str |
| variable.attributes.history | is_required | False |
| variable.attributes.history | pattern | .* |
| variable.attributes.comment | severity | L |
| variable.attributes.comment | value_type | str |
| variable.attributes.comment | is_required | False |
| variable.attributes.comment | cv_source_term_key | comment |
| variable.attributes.comment | expected_term_comparison | contains |
| variable.attributes.comment | report_missing_expected_term | True |
| variable.attributes.description | severity | L |
| variable.attributes.description | value_type | str |
| variable.attributes.description | is_required | False |
| variable.attributes.description | pattern | .* |
| variable.attributes.fill_value | severity | H |
| variable.attributes.fill_value | attribute_name | _FillValue |
| variable.attributes.fill_value | value_type | float |
| variable.attributes.fill_value | is_required | True |
| variable.attributes.fill_value | constant | 1e+20 |
| variable.attributes.missing_value | severity | H |
| variable.attributes.missing_value | value_type | float |
| variable.attributes.missing_value | is_required | True |
| variable.attributes.missing_value | constant | 1e+20 |
| variable.attributes.scale_factor | severity | H |
| variable.attributes.scale_factor | value_type | float |
| variable.attributes.scale_factor | is_required | False |
| variable.attributes.add_offset | severity | H |
| variable.attributes.add_offset | value_type | float |
| variable.attributes.add_offset | is_required | False |
| variable.attributes.deflated_level | attribute_name | _DeflateLevel |
| variable.attributes.deflated_level | severity | H |
| variable.attributes.deflated_level | value_type | int |
| variable.attributes.deflated_level | is_required | False |
| variable.attributes.deflated_level | is_postive | True |
| variable.attributes.coordinates | severity | H |
| variable.attributes.coordinates | value_type | str |
| variable.attributes.coordinates | is_required | False |
| variable.attributes.coordinates | as_variable | True |

## Coordinate variables ([coordinate_variables.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/coordinate_variables.toml))

| Check | Property | Value |
| --- | --- | ---|
| coordinates.registry.setup | severity | H |
| coordinates.registry.identity | severity | H |
| coordinates.registry.dimension_order | severity | H |
| coordinates.registry.attributes | severity | H |
| coordinates.registry.attributes | allowed_when_unset | ['computed_standard_name'] |
| coordinates.registry.attributes | allowed_when_unset_severity | L |
| coordinates.registry.recommendations | severity | M |
| coordinates.registry.direction | severity | H |
| coordinates.registry.direction | check_direct_physical_values | True |
| coordinates.registry.direction | check_formula_derived_profile | True |
| coordinates.registry.valid_range | severity | H |
| coordinates.registry.missing_value_attributes | severity | M |
| coordinates.registry.missing_value_attributes | integrity_severity | H |
| coordinates.registry.missing_value_attributes | prohibited_severity | H |
| coordinates.registry.missing_value_attributes | required_for_auxiliary | False |
| coordinates.registry.missing_value_attributes.expected_values_by_data_type | real | 1e+20 |
| coordinates.registry.missing_value_attributes.expected_values_by_data_type | double | 1e+20 |
| coordinates.registry.grid_geometry_missing_values | severity | H |
| coordinates.registry.grid_latitude_valid_range | severity | M |
| coordinates.registry.grid_longitude_valid_range | severity | M |
| coordinates.registry.grid_longitude_single_cycle | severity | M |
| coordinates.registry.grid_mapping_consistency | severity | M |
| coordinates.registry.grid_region_consistency | severity | M |
| coordinates.registry.grid_label_recommendation | severity | M |
| coordinates.registry.grid_cell_count_availability | severity | L |
| coordinates.registry.grid_cell_count_consistency | severity | M |
| coordinates.registry.nominal_resolution | severity | H |
| coordinates.registry.nominal_resolution | none_value | None |
| coordinates.registry.nominal_resolution | none_forbidden_horizontal_labels | ['hxy'] |
| coordinates.registry.requested_values | severity | H |
| coordinates.registry.bounds | severity | H |
| coordinates.registry.bounds_name | severity | H |
| coordinates.registry.bounds_name | bounds_dimension_name | bnds |
| coordinates.registry.bounds_name | vertices_dimension_name | vertices |
| coordinates.registry.bounds_name | climatology_bounds_name | climatology_bnds |
| coordinates.registry.bounds_name_recommendations | severity | M |
| coordinates.registry.associations | severity | H |
| coordinates.registry.associations | unstructured_latitude_longitude_for | ['site'] |
| coordinates.registry.grid | severity | H |
| coordinates.registry.formula | severity | H |
| coordinates.time.name | variable_name | time |
| coordinates.time.monotonicity | severity | H |
| coordinates.time.monotonicity | direction | increasing |
| coordinates.time.attributes.calendar | severity | H |
| coordinates.time.attributes.calendar | enum | ['standard', 'proleptic_gregorian', 'noleap', '365_day', 'all_leap', 'julian', '366_day', '360_day', 'utc', 'tai'] |
| coordinates.time.squareness | severity | H |
| coordinates.time.squareness | ref_calendar |  |
| coordinates.time.squareness | ref_time_units |  |
| coordinates.time.squareness | ref_increment |  |
| coordinates.time.coverage | severity | H |
| coordinates.time.calendar_recommendation | severity | M |
| coordinates.time.calendar_recommendation | discouraged_values | ['standard'] |
| coordinates.time.calendar_recommendation | preferred_value | proleptic_gregorian |

## Project ([project.toml](https://raw.githubusercontent.com/ESGF/cc-plugin-wcrp/refs/tags/v2.4.0b3/plugins/cmip7/config/wcrp/project.toml))

| Check | Property | Value |
| --- | --- | ---|
|  | project_name | cmip7 |
|  | project_version | 1.0 |
