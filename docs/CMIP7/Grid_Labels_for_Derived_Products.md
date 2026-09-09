---
layout: default
title: Grid Labels for Non-2D Grids
---

# Grid Labels for Non-2D Grids

!!! info "Document status"

    **Status:** Draft v2 -- pending review by the CMIP Panel.
    This guidance was prepared by the CV Task Team following discussions at the WIP extended panel meeting (August 2026).

    **Open question for CV-TT:** The title "non-2D grids" (suggested by Karl Taylor to replace "derived products") is technically imprecise -- site data (`hs`) is 0D points scattered in 2D space, and transects (`ht`) are lines in 2D space, so the outputs are not strictly "non-2D". Alternatives considered: "reduced grids", "non-standard grids". To be decided.

This page provides guidance on which `grid_label` to use when reporting data on **non-2D grids** such as global means, zonal means, basin means, site data, and transect data.

!!! note "What "non-2D grids" means in this document"

    This guidance does **not** concern new variables computed from other variables (e.g., computing relative humidity from temperature and specific humidity). It concerns the same variable reported on a **non-standard spatial sampling**: a zonal mean, a global mean, data at specific sites, etc. The variable itself (`tas`, `thetao`, ...) is unchanged -- what differs is the horizontal grid on which it is reported.

These outputs are not on standard 2D horizontal grids but are spatially reduced from them, which raises the question of how to assign the `grid_label` used in the [DRS file naming and directory structure](./Global_Attributes.md#4-file-name-template).

**Quick links:** [Guidance for data producers](#2-two-acceptable-approaches) | [Guidance for data users](#3-guidance-for-data-users) | [Summary table](#4-summary-table) | [Examples](#6-examples)

---

## 1. Background

In CMIP7, the `grid_label` is a key component of the Data Reference Syntax (DRS). It appears in both file names and directory paths:

```
<variable_id>_<branding_suffix>_<frequency>_<region>_<grid_label>_<source_id>_<experiment_id>_<variant_label>[_<timeRangeDD>].nc
```

For standard 2D gridded output (horizontal label `hxy` in the [branding suffix](./Branded_Variables.md#horizontal-labels)), the `grid_label` uniquely identifies the grid on which data is reported.
However, for data reported on non-2D grids such as zonal means, global means, or site data, the output is not on a 2D grid.
These cases require specific guidance.

The [horizontal label](./Branded_Variables.md#horizontal-labels) component of the branding suffix identifies the type of horizontal sampling:

| Horizontal label | Description | Examples |
|---|---|---|
| `hxy` | Standard longitude-latitude field | Most variables |
| `hy` | Zonal mean | Zonal-mean temperature, wind |
| `hyb` | Zonal mean by ocean basin | Basin-mean ocean transport as a function of latitude |
| `hs` | Site-specific data | Variables sampled at fixed measurement stations |
| `ht` | Transect data | Ocean transports across straits ([oline](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html)), sea-ice transports across lines ([siline](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html)) |
| `hm` | Horizontal (area) mean | Global mean, hemispheric mean, sub-global means (e.g., 30S-90S, Antarctica, Greenland) |

This guidance applies to all non-`hxy` horizontal labels.

---

## 2. Two Acceptable Approaches

The long-term goal is for every output grid -- including non-2D grids -- to have a dedicated, registered `grid_label` that uniquely describes the grid of the data. This ensures archive consistency, enables robust QA/QC, and allows users to discover and compare data across models reliably.

However, this guidance was not available at the start of CMIP7 production, and some modelling centres have already produced data using the parent grid label. For this reason, both approaches described below are accepted for the current CMIP7 production cycle. The parent grid approach is a **transitional accommodation**; modelling centres that have not yet produced their non-2D output are strongly encouraged to register dedicated grids.

!!! warning "Impact on archive consistency and data discoverability"

    If some models use dedicated grid labels (e.g., `g239` for a zonal mean) while others use their parent grid label (e.g., `g110`, `g126`), users searching the ESGF archive by `grid_label` will not find all zonal mean data in a single query. A multi-model analysis of zonal mean ocean temperature, for example, would require users to know which approach each model used -- or to filter by `horizontal_label` instead of `grid_label`. Registering dedicated grids avoids this fragmentation.

Modelling centres may use different approaches for different product types (e.g., a shared registered grid for global means, and the parent grid for zonal means). Whichever approach is chosen for a given product, the horizontal label in the branding suffix **must** be set correctly (i.e., not `hxy`) to reflect the nature of the non-2D output.

!!! note "Correctness of the horizontal label"

    QA/QC does **not** currently verify the correctness of the `horizontal_label`. It is the responsibility of data producers to ensure it is set correctly. Incorrect horizontal labels will make data harder to discover and may cause issues for users.

### 2.1 Recommended: Register a Dedicated Grid

The recommended approach is to register a specific grid for each type of non-2D output via the [Essential Model Documentation (EMD)](https://wcrp-cmip.github.io/Essential-Model-Documentation/docs/).

For the most common non-2D outputs, **shared grid labels** are registered (or will be registered) centrally so that all modelling centres can use the same `grid_label`, without needing to register their own. The table below lists the current status. Always check the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/) for the latest registered grids.

| Product type | Description | Shared grid | Status |
|---|---|---|---|
| Global mean (`hm`) | Single grid cell covering the globe | [`g190`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g190.json) | Registered (1 cell, 360x180 deg) |
| Northern Hemisphere mean (`hm`) | Single grid cell covering NH | [`g010`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g010.json) | Registered (1 cell, 360x90 deg) |
| Southern Hemisphere mean (`hm`) | Single grid cell covering SH | [`g011`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g011.json) | Registered (1 cell, 360x90 deg) |
| Site data (`hs`) | Fixed set of measurement sites ([site list on Zenodo](https://zenodo.org/records/17966101)) | [`g012`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g012.json) | Registered (discrete-points) |
| Ocean line transects (`ht`, oline) | Transports across fixed ocean straits | [`g013`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g013.json) | Registered (discrete-lines) |
| Sea-ice line transects (`ht`, siline) | Transports across fixed sea-ice lines | [`g013`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g013.json) | Registered (discrete-lines) |
| Zonal mean (`hy`) and basin mean (`hyb`) | Mean over longitudes, reported as a function of latitude | Centre-specific | Each centre must register its own (latitude resolution depends on source grid). Example: [`g239`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g239.json) is a 1-degree zonal mean grid (180 cells). To find existing zonal mean grids, filter the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/) with x_resolution = 360 and y_resolution matching your latitude spacing |

!!! tip "Already registered grids you can reuse"

    - **`g190`** -- A single grid cell covering the entire globe (360x180 deg, 1 cell). Use for global means.
    - **`g010`** -- A single grid cell covering the Northern Hemisphere (360x90 deg, 1 cell). Use for NH means.
    - **`g011`** -- A single grid cell covering the Southern Hemisphere (360x90 deg, 1 cell). Use for SH means.
    - **`g012`** -- A discrete-points grid for site data. Use for all `hs` variables.
    - **`g013`** -- A discrete-lines grid for transect data. Use for oline and siline variables.
    - **`g239`** -- A zonal mean grid at 1-degree latitude resolution (180 cells, latitudes from -89.5 to 89.5). If your model's zonal mean or basin mean output has the same latitude resolution, you can reuse this grid label instead of registering a new one.

    Check the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/) or the [EMD repository](https://github.com/WCRP-CMIP/Essential-Model-Documentation/tree/src-data/horizontal_grid_cell) for the full list of registered grids.

For **zonal means** (`hy`) and **basin means** (`hyb`), modelling centres must register their own grids if no existing grid matches their latitude resolution. See the [EMD Submission Guide](https://emd.mipcvs.dev/docs/Information_for_Submitters/Submission-Guide/#stage-1-grid-cells) for how to do this.

#### Zonal means and basin means share the same grid

Zonal mean (`hy`) and basin mean (`hyb`) data share the same latitude dimension and should use the **same `grid_label`**. The `basin` dimension in basin mean data is a category (containing values such as `atlantic_arctic_ocean`, `indian_pacific_ocean`, `global_ocean`), not a spatial dimension that defines a different grid. Since only the latitude axis defines the grid, a single registered grid serves both `hy` and `hyb` output at the same latitude resolution.

**Advantages of registering a dedicated grid:**

- The `grid_label` alone is sufficient to determine the output grid, consistent with the principle that grid labels uniquely identify grids
- Enables potential future QA/QC checks (e.g., verifying that the number of grid cells in a file matches the registered grid)
- Self-describing: users can look up the `grid_label` to understand the grid without inspecting the data
- Consistent meaning: the `grid_label` always refers to the actual grid of the data, regardless of the horizontal label

**What you need to do:**

1. Before publishing, check if a shared grid label already exists for your product type using the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/)
2. If a shared grid exists (e.g., for global means or site data), use it
3. If no suitable grid exists (e.g., for zonal means on your specific latitude grid), register a new output grid via the [EMD Submission Guide](https://emd.mipcvs.dev/docs/Information_for_Submitters/Submission-Guide/#stage-1-grid-cells)
4. Use the registered `grid_label` in your file names and directory paths

### 2.2 Alternative: Use the Parent Grid Label

An alternative approach is to use the `grid_label` of the 2D grid from which the non-2D output was calculated (the "parent" grid).

For example, if you compute a zonal mean from data on your atmosphere reporting grid `g110`, you would label the zonal mean output with `g110` as well. The combination of `grid_label` and the `horizontal_label` in the branding suffix (e.g., `hy` for zonal mean) together describe the output: grid `g110` tells you the source resolution, and `hy` tells you that only the latitudinal dimension remains.

!!! note "Why this alternative is accepted"

    This is a **transitional accommodation** for the current CMIP7 production cycle. Some modelling centres had already produced data using the parent grid label before this guidance was available, and requiring reprocessing of otherwise correct data was judged to be disproportionate. However, this approach may not be accepted in future CMIP phases, and modelling centres that have not yet produced their non-2D output are strongly encouraged to register dedicated grids.

**Advantages of using the parent grid:**

- Simpler workflow: no need to register additional grids
- Tells users the resolution of the source data (e.g., for site data, whether the data was extracted from a high-resolution or coarse grid)
- For zonal means, users can infer the latitude resolution from the parent grid

**Which grid is the "parent"?**

The parent grid is the **reporting grid from which the non-2D output was computed**. If you report your 2D atmosphere data on a regridded grid (`g110`), and you compute the global mean from that regridded data, then `g110` is the parent. If instead you compute the global mean directly from your native grid (e.g., `g100`), then `g100` is the parent. The parent grid is the last 2D grid your data was on before the reduction step.

!!! warning "Curvilinear and tripolar ocean grids"

    Many ocean models use curvilinear or tripolar grids (e.g., ORCA, tripolar NEMO) where latitude lines do not align with grid rows. There are two common ways to compute a zonal mean from such grids:

    **Path A -- Regrid first, then compute the zonal mean:**
    You regrid from the native tripolar grid to a regular latitude-longitude grid, then average over longitudes.
    For example, your native ocean grid is [`g156`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g156.json) (tripolar, 120184 cells). You regrid to [`g123`](https://github.com/WCRP-CMIP/Essential-Model-Documentation/blob/src-data/horizontal_grid_cell/g123.json) (regular 2x2 deg, 14400 cells), then compute the zonal mean from `g123`.
    In this case, the parent grid is **`g123`** (the regular grid), not `g156` (the native grid).

    **Path B -- Compute directly from the native grid using weighted sums:**
    You compute the zonal mean directly on the tripolar grid by binning grid cells into latitude bands and using area-weighted sums -- no intermediate regridding step.
    In this case, the parent grid is **`g156`** (the native tripolar grid).

    In both cases, the recommended approach remains to register a **dedicated zonal mean grid** (see [Section 2.1](#21-recommended-register-a-dedicated-grid)) rather than reusing the parent grid label. The dedicated grid will accurately describe the output (e.g., 90 latitude cells at 2-degree spacing) regardless of how the zonal mean was computed.

---

## 3. Guidance for Data Users

This section explains how to find, identify, and work with non-2D output in the CMIP7 archive.

### 3.1 How to search for non-2D output on ESGF

Because modelling centres may use different `grid_label` approaches (see [Section 2](#2-two-acceptable-approaches)), **do not rely on `grid_label` alone** to find non-2D output. Instead, use the `horizontal_label` -- it is part of the branding suffix and reliably identifies the type of product regardless of the grid labelling approach:

| To find... | Filter by `horizontal_label` |
|---|---|
| Zonal mean data | `hy` |
| Basin mean data | `hyb` |
| Global, hemispheric, or sub-global means | `hm` (combine with `region`, e.g., `glb`, `nh`, `sh`, `30s-90s`) |
| Site data | `hs` |
| Transect data (oline, siline) | `ht` |

The `horizontal_label` is both a global attribute in the netCDF file and the third component of the branding suffix in the DRS path and file name. For example, in `thetao_tavg-ol-hy-u_mon_glb_g239_...nc`, the `hy` in the branding suffix `tavg-ol-hy-u` identifies this as a zonal mean.

### 3.2 How to determine which grid labelling approach a file uses

There is no metadata flag that explicitly records whether a modelling centre used a dedicated grid or the parent grid. However, you can determine this by looking up the `grid_label` in the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/):

- If the registered grid has properties consistent with the non-2D output (e.g., `g190` with 1 cell for a global mean, or `g239` with 180 latitude cells for a zonal mean), it is a **dedicated grid**.
- If the registered grid is a standard 2D grid with thousands of cells (e.g., `g110` with 55296 cells), but the file contains a zonal mean, then the **parent grid** approach was used.

In practice, for most analyses this distinction does not matter -- the data values are the same either way. The `horizontal_label` in the branding suffix reliably tells you the structure of the data.

### 3.3 Interpreting file contents

The following table summarises what you can expect inside a non-2D output file and what metadata to rely on:

| Horizontal label | Expected dimensions in the file | What you can trust | What to check in the file |
|---|---|---|---|
| `hxy` | `latitude`, `longitude` (+ `time`, vertical, etc.) | `grid_label` identifies the exact grid | -- |
| `hy` (zonal mean) | `latitude` (+ `time`, vertical, etc.). No `longitude` | `horizontal_label` confirms it is a zonal mean | Latitude coordinates and bounds for the actual resolution |
| `hyb` (basin mean) | `latitude`, `basin` (+ `time`, vertical, etc.) | `horizontal_label` confirms it is a basin mean | The `basin` coordinate for which basins are included |
| `hs` (site data) | `site` or equivalent (+ `time`, vertical, etc.) | `horizontal_label` confirms it is site data | Coordinate variables (`latitude`, `longitude`) for site locations |
| `hm` (area mean) | No spatial dimensions (timeseries or scalar) | `horizontal_label` + `region` (e.g., `glb`, `nh`, `sh`) | -- |
| `ht` (transect) | Transect-specific coordinates | `horizontal_label` confirms it is transect data | Coordinate variables for the transect definition |

### 3.4 Cell measures and weighted averages

Cell measure variables (`areacella`, `areacello`, `volcello`) are **not provided** for non-2D grids. This is expected:

- **Global, hemispheric, or sub-global means** (`hm`): the data is already an area-weighted average -- no further weighting is needed.
- **Zonal means** (`hy`): if you need to compute a latitude-weighted average (e.g., a global mean from a zonal mean field), use the latitude bounds from the file to compute the area weight of each latitude band (proportional to the difference in sine of the bounding latitudes).
- **Basin means** (`hyb`): in the current Data Request, all basin mean variables are transports (e.g., northward ocean salt transport in kg/s). Averaging or totalling transports across latitudes is generally not meaningful, and weights are not provided. The basin width information needed for such calculations is not available in the output. If future Data Request versions introduce non-transport basin mean variables, this guidance may need to be revisited.
- **Site data** (`hs`) and **transect data** (`ht`): these are point or line data; area weighting does not apply.

### 3.5 Quality assurance checks (QA/QC)

Currently, QA/QC does **not** verify the consistency between the `grid_label` in the file name and the actual grid in the data (e.g., it does not check that data labelled `g239` actually has 180 latitude cells). Similarly, the correctness of the `horizontal_label` is **not** currently checked by QA/QC. You should not assume that these labels have been validated, especially for files using the parent grid approach.

As QA/QC evolves toward more robust validation, checks comparing the file contents against the registered grid definition are expected to be implemented. This will primarily benefit files using dedicated grid labels.

!!! warning "Future-proofing your data (for producers)"

    If you choose the parent grid approach today, be aware that future QA/QC improvements may generate warnings or errors for your published data. Registering dedicated grids now avoids this risk and ensures your data will pass stricter validation checks without reprocessing.

---

## 4. Summary Table

| Product type | Recommended grid_label | Alternative grid_label | Notes |
|---|---|---|---|
| Global mean (`hm`) | `g190` (shared) | Parent grid | Region label `glb` distinguishes from 2D output |
| Hemispheric mean (`hm`) | `g010` (NH) or `g011` (SH) | Parent grid | Region label (e.g., `nh`, `sh`) distinguishes from 2D output |
| Sub-global mean (`hm`) | `g190` or centre-specific | Parent grid | Region label (e.g., `30s-90s`) distinguishes from 2D output |
| Zonal mean (`hy`) | Register your own (or reuse an existing match, e.g. `g239`) | Parent grid | Latitude resolution depends on source grid |
| Basin mean (`hyb`) | Same grid as zonal mean at matching latitude resolution | Parent grid | `basin` is a category, not a spatial dimension; see [details](#zonal-means-and-basin-means-share-the-same-grid) |
| Site data (`hs`) | `g012` (shared) | Parent grid | Sites are fixed across models ([site list](https://zenodo.org/records/17966101)) |
| Ocean transects (`ht`, oline) | `g013` (shared) | Parent grid | Transect locations are fixed |
| Sea-ice transects (`ht`, siline) | `g013` (shared) | Parent grid | Transect locations are fixed |

**Key points:**

1. **Always set the horizontal label correctly.** Whatever approach you choose for `grid_label`, the `horizontal_label` in the branding suffix must reflect the nature of the non-2D output (e.g., `hy` for zonal mean, `hm` for area mean). This is not optional. Note that this is currently **not** verified by QA/QC -- it is the responsibility of data producers.

2. **No cell measures are needed for non-2D grids.** Variables such as `areacella` or `areacello` do not need to be provided for zonal mean, basin mean, global mean, site, or transect grids. The Data Request does not include cell area variables for these product types.

3. **Check for existing grids.** Before registering a new grid, use the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/) to see if a suitable grid already exists.

4. **Register output grids before publishing.** If you choose the dedicated grid approach, the grid must be registered via the EMD before data can be published to ESGF.

!!! warning "Uniqueness of file names"

    Regardless of the approach, file names must remain unique. When using the parent grid label, uniqueness is ensured by the combination of `grid_label`, `horizontal_label` (part of the branding suffix), and `region`. For example, a global-mean temperature file and a 2D gridded temperature file on the same grid will differ because their branding suffixes contain `hm` vs `hxy`.

---

## 5. Registering a New Output Grid

If you need to register a grid for non-2D output (i.e., for zonal means or basin means), follow the [EMD Submission Guide -- Stage 1: Grid Cells](https://emd.mipcvs.dev/docs/Information_for_Submitters/Submission-Guide/#stage-1-grid-cells). Before registering, check the [EMD grid viewer](https://emd.mipcvs.dev/docs/grid_viewer/horizontal/) to verify no suitable grid already exists.

---

## 6. Examples

### 6.1 Global Mean Temperature

A modelling centre publishes monthly global-mean near-surface air temperature from the historical experiment.

**With a dedicated grid (recommended):**
```
tas_tavg-h2m-hm-u_mon_glb_g190_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g190` is the shared single-cell global grid (1 cell, 360x180 deg).

**With the parent grid:**
```
tas_tavg-h2m-hm-u_mon_glb_g110_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g110` is the grid used for 2D atmosphere output. The `hm` horizontal label and `glb` region together indicate this is a global area mean, not 2D gridded data.

### 6.2 Zonal Mean Ocean Temperature

A modelling centre publishes monthly zonal-mean ocean temperature. Their ocean model uses a tripolar native grid, which the original data was mapped from to a regular 1-degree grid (`g126`) before computing zonal means.

**With a dedicated grid (recommended):**
```
thetao_tavg-ol-hy-u_mon_glb_g239_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g239` is a registered zonal-mean grid with 180 latitude cells at 1-degree spacing. If your ocean model has the same latitude resolution, you can reuse this grid label.

**With the parent grid:**
```
thetao_tavg-ol-hy-u_mon_glb_g126_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g126` is the regular 1-degree grid which the original data on the native tripolar grid was mapped to before computing zonal means. The `hy` horizontal label tells users that the longitudinal axis has been averaged out.

### 6.3 Site Data

A modelling centre publishes temperature at fixed measurement sites.

**With a dedicated grid (recommended):**
```
tas_tavg-h2m-hs-u_mon_glb_g012_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g012` is the shared discrete-points grid for site data. The site locations are defined in the [site list on Zenodo](https://zenodo.org/records/17966101).

**With the parent grid:**
```
tas_tavg-h2m-hs-u_mon_glb_g110_ModelA_historical_r1i1p1f1_185001-201412.nc
```
Here `g110` tells users the resolution of the grid from which site data was extracted. The `hs` horizontal label indicates this is site-specific data.
