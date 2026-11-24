# QC known issues and reporting

This page documents known limitations, expected findings, publication implications and reporting procedures for the wider CMIP7 quality-control (QC) workflow. For the checks and their configuration in the CMIP7-specific `wcrp_cmip7` plugin, see [CMIP7 QC checks by `cc-plugin-wcrp`](QC_checks.md).

## 1. Purpose and scope

CMIP7 data providers are encouraged to run the QC tools before submitting data for publication. A finding does not necessarily mean that the data are non-compliant. It may instead reflect:

- a bug or limitation in a QC check;
- a difference between a generic CF-conventions check and an interpretation or accepted practice relevant to CMIP;
- a limitation in a cross-file or cross-dataset comparison; or
- an actual issue in the data or its metadata that the provider needs to correct.

If the cause is unclear, data providers should report the finding rather than trying to determine independently whether the checker or the data are at fault.

This page distinguishes three parts of the QC workflow:

1. **The CMIP7-specific `wcrp_cmip7` plugin**, maintained by the QC development team of the CMIP Quality Assurance and Quality Control Working Group (referred to below as the QC team).
2. **The CF plugin**, which is provided by the IOOS Compliance Checker framework and is not maintained by the QC team. The QC team may report issues and contribute fixes upstream, but cannot control when upstream changes are merged or released.
3. **`esgf-qa`**, maintained by the QC team, which runs file-based Compliance Checker checks and assesses consistency across files and datasets.

The list of known limitations provided below is not intended to be complete: it reflects issues identified and reported so far, and other limitations or unexpected findings may arise as the tools and configurations evolve. If you encounter an issue that is not listed here, or if any finding or guidance is unclear, please report it through the QC team’s issue tracker as described in [Section 5](#5-reporting-unexpected-qc-findings). Reports and questions from modelling groups help the QC team identify, assess and document issues that may affect other users.

## 2. Understanding severity and publication impact

Severity and publication impact are related, but they are not interchangeable.

The ESGF publisher runs selected file-based checks, including the CF plugin and the CMIP7-specific `wcrp_cmip7` plugin. High-severity findings from checks that the publisher runs may prevent publication. The precise effect depends on which checks and options are enabled in the publisher's configuration.

In particular:

- A high-severity finding from a check that is run by the ESGF publisher may be publication-blocking.
- `esgf-qa` inter-file and inter-dataset consistency findings are non-blocking: these checks are not run by the ESGF publisher.
- `esgf-qa` runs `CF Appendix A` checks by default (compliance-checker command line option `--O cf:enable_appendix_a_checks`). Some of these can produce high-severity findings for otherwise compliant CMIP data. The ESGF publisher does **not** enable this option, so those Appendix A findings from `esgf-qa` are not publication-blocking.

The publication-impact column in the tables is therefore indicative and should be interpreted in the context of the tool and configuration that produced the finding. When in doubt, report the finding for assessment.

## 3. Known issues with the CF plugin

The **CF plugin** is part of the **IOOS Compliance Checker framework**. The QC team does not maintain this plugin. Some findings arise because generic CF checks do not fully account for CMIP data representations or CMIP-specific conventions; others are implementation bugs. Upstream fixes may take time to be merged and released.

The following table records the reported findings, their interpretation and the current understanding of their status.

| Check / CF reference | What the check does | Known issue / explanation | Severity reported | Publication impact | Status / recommended handling |
|---|---|---|---|---|---|
| Appendix A — `history` attribute on data variables | Checks whether an attribute is attached to an allowed type of variable. | The checker reports that `history` is present on a non-coordinate data variable, although the attribute may only appear as a global attribute according to this check. | High | None | **False positive**: CF Section 2.6.2 permits non-standard variable attributes, and CMIP/CMOR intentionally sets variable-level history by default. |
| Appendix A / §7.1 — `formula_terms` on parametric-coordinate boundary variables (`lev_bnds`) | Checks attribute placement and consistency of `formula_terms` on parametric vertical coordinates and their bounds. | For parametric vertical variables defined on full levels, the checker flags `formula_terms` on `lev_bnds` as invalid. It also expects the `formula_terms` values on `lev` and `lev_bnds` to be identical. For parametric vertical-coordinate bounds, terms that depend on the vertical dimension must refer to their corresponding boundary variables (e.g. `ap_bnds` and `b_bnds`), while `ps` remains unchanged. The checker does not account for this distinction. | High | None | **False positive**: Do not modify valid `formula_terms` merely to satisfy this finding. In `esgf-qa`, this Appendix A finding is not publication-blocking because the publisher does not enable the Appendix A option. |
| §4.3 — vertical coordinate `depthsl` | Checks that vertical coordinates not defining pressure have a `positive` attribute whose value is `up` or `down`. | `depthsl` is a data variable, but the CF plugin interprets it as coordinate variable, causing this finding. | High | Publication blocking issue. | **False positive**: The plugin identifies a data variable as a coordinate and applies incorrect requirements. |
| §2.4 — dimension order on unstructured grids | Checks whether spatio-temporal dimensions follow the recommended order T, Z, Y, X. | For unstructured data, the checker does not recognize `ncell` or similar as a horizontal spatial dimension, even when latitude and longitude coordinates use the same `ncell` dimension. It may consequently classify the dimensions incorrectly and report their order as non-compliant. | Medium | None | **False positive**: for the described unstructured-grid representation. No data change should be made solely to satisfy an incorrect axis classification. |
| §2.4 — dimension order on curvilinear grids | Checks whether spatio-temporal dimensions follow the recommended order T, Z, Y, X. | For curvilinear grids, latitude and longitude are commonly represented as two-dimensional auxiliary coordinates (e.g. `latitude(y,x)` and `longitude(y,x)`). The checker does not identify `y` and `x` as horizontal axes and classifies them as auxiliary dimensions. It can therefore report a warning for dimensions such as `time, lev, y, x`, even though this is a valid representation. | Medium | None | **False positive** for the described curvilinear-grid representation. No data change should be made solely to satisfy an incorrect axis classification. |
| §6.1 — labels / geographic region validation (eg. `basin`, `line`) | Validates geographic region labels. | The checker may try to interpret the stored array itself as a region name instead of decoding the variable's `flag_values` and `flag_meanings`. This affects categorical `basin` variables and multidimensional character arrays containing ocean region names (reported for `line`). In some cases `check_geographic_region()` raises an exception (`TypeError: sequence item 0: expected str instance, numpy.ndarray found`). The reported upstream issue is [IOOS Compliance Checker issue #1374](https://github.com/ioos/compliance-checker/issues/1374). | Recorded as runtime exception | The publisher currently treats this as blocking issue. | **Implementation bug.** Whether the representations are valid under CF conventions cannot be checked; no NetCDF change is required solely to work around this exception. |
| §4.4.3 — `units_metadata` and `proleptic_gregorian` | Recommends metadata describing leap-second treatment for time coordinates using the `proleptic_gregorian` calendar. | The CF plugin version from 1.11 reports a missing `units_metadata` attribute. The attribute was introduced as a recommendation in CF 1.12. CF 1.13 withdrew this use of `units_metadata`, which will make this warning obsolete when validating against that version, once implemented. | Medium | None | **Version-dependent recommendation / warning**: No file change is required. |
| §7.1 — minimum dimension count for coordinate bounds (`depth_bnds`) | Checks the dimensionality of a boundary variable relative to its coordinate variable. | The checker reports that a boundary variable must have at least two dimensions. For a scalar coordinate such as scalar `depth`, a one-dimensional bounds variable `depth_bnds(bnds)` is valid. The reported affected files have scalar `depth` coordinates. | Medium | None | **False positive** for scalar coordinates. No NetCDF modification is required when the coordinate is scalar and the bounds are correctly represented. |
| §7.2 — `cell_measures` formatting | Checks the syntax of the `cell_measures` attribute. | The checker accepts only a single `area: variable` or `volume: variable` pair. CF permits multiple space-separated measure-variable pairs, for example `area: areacello volume: volcello`. Valid attributes containing multiple pairs are therefore incorrectly rejected. | Medium | None | **False positive** Do not remove valid measure-variable pairs solely to satisfy this check. |
| §7.3 — `cell_methods` name recognition | Checks whether names in `cell_methods` refer to permitted dimensions, coordinates or other recognized names. | The checker does not recognize a valid CF standard name as an allowed name component. For example, `height` is a valid CF standard name and may be used even when no corresponding dimension or coordinate variable is explicitly defined. | Medium | None | **False positive**: The checker should recognize valid CF standard names. |
| §7.4 — climatological `cell_methods` ordering | Checks the syntax of climatological time statistics in `cell_methods`. | The CF checker uses a restrictive regular expression that requires the `time:` component to occur at the beginning of the attribute. CF does not require this ordering. CMIP7 controlled-vocabulary entries may place `area:` before `time:`. The reported examples include monthly mean daily maximum/minimum `tas` definitions. | Medium | None | **False positive**: Reordering the components to satisfy the CF checker can instead cause the WCRP plugin to reject the value with a `High` severity and thus publication blocking finding. Do not alter valid `cell_methods` attributes to silence this finding. |
| §4.3.3 / Appendix D — `computed_standard_name` for hybrid vertical coordinates | Checks the expected `computed_standard_name` for a parametric vertical coordinate. | For the hybrid vertical coordinate `lev`, the CF plugin expects `computed_standard_name = air_pressure`. The CMIP7 Data Request and CVs however do not prescribe this attribute for parametric vertical coordinates, although the WCRP plugin permits it to be defined. | Low | None | The `computed_standard_name` attribute can be added for parametric vertical coordinates, but this is not a requirement. |

## 4. Known limitations of `esgf-qa` consistency checks

`esgf-qa` performs consistency checks across files and datasets in addition to running file-based Compliance Checker checks. The table below describes limitations specific to those comparisons; known CF findings are listed in [Section 3](#3-known-issues-with-the-cf-plugin). See [Section 2](#2-understanding-severity-and-publication-impact) for publication implications, including the difference in Appendix A options between `esgf-qa` and the publisher.

| Check type | Current behaviour / known issue | Publication impact | Status / expected handling |
|---|---|---|---|
| Inter-file and inter-dataset consistency checks | Some variables on different grids or with different coordinates may be compared, producing findings that are not meaningful comparisons. Global attributes may also need project-specific comparison rules. | Non-blocking. These checks are not run by the ESGF publisher. | Configuration improvements are expected to make comparisons project-dependent, including variable types and global attributes to compare. |

## 5. Reporting unexpected QC findings

Modelling groups are encouraged to report unexpected findings encountered when running the CMIP7 QC tools.

You do not need to determine whether a finding is caused by a problem in the checker or in your data. The QC team will assess the report and advise whether a change to the checking software is required or whether the data need to be corrected.

Please report issues through the [`cc-plugin-wcrp` GitHub issue tracker](https://github.com/ESGF/cc-plugin-wcrp/issues).

A short description is sufficient to open a report. Where possible, include:

- the tool and plugin that produced the finding (for example, `cf`, `wcrp_cmip7` or `esgf-qa`);
- the check name or identifier, if available;
- the complete finding or error message;
- the version of the tools/plugins and, if known, the command or options used; and
- a short description of the affected data and why the finding appears unexpected.

An example file is not required when initially reporting an issue. In some cases, however, the QC team may ask for a test file to reproduce and investigate the behaviour. If needed, the file can be shared through a suitable file-sharing service (for example, Google Drive); the team can provide or agree an appropriate way to share it.

Please report potential publication-blocking findings as early as possible, so that they can be assessed before a planned publication.

## 6. How issues are assessed and resolved

After a report is received, the QC team will assess whether it represents:

- an issue in the submitted data that the data provider should correct;
- a bug or limitation in the CMIP7-specific `wcrp_cmip7` plugin;
- a bug or limitation in the upstream CF plugin;
- a limitation or configuration issue in `esgf-qa`; or
- an interpretation question that needs clarification.

Where the issue is in `wcrp_cmip7` or `esgf-qa`, the QC team can assess and address it directly. Where the issue is in the CF plugin, the team may raise or contribute to an upstream issue or pull request. The timing of an upstream fix and release is outside the control of the QC team.

The known-issues tables above will be updated as issues are confirmed, workarounds are identified, and fixes become available in released versions.

## 7. Related resources

- [Running the CMIP7 QC tools](Guidance_for_modellers.md#7-software-for-checking-output) — documentation providing instructions and caveats for running the automated quality control checks on CMIP7 output files.
- [CMIP7 QC checks by `cc-plugin-wcrp` (Annex 1)](QC_checks.md) — documentation of the CMIP7-specific checks used for publication verification.
- [`cc-plugin-wcrp` documentation](https://esgf.github.io/cc-plugin-wcrp/) — documentation for the WCRP compliance-checker plugins.
- [`cc-plugin-wcrp` issue tracker](https://github.com/ESGF/cc-plugin-wcrp/issues) — report unexpected findings and request assessment.
- [IOOS Compliance Checker](https://github.com/ioos/compliance-checker) — upstream framework and CF plugin.
- [`esgf-qa` documentation](https://esgf.github.io/esgf-qa/) — documentation for file-based and cross-file/dataset QA.
