---
layout: default
title: Branded Variables for CMIP7
---

# Branded Variables for CMIP7

A new naming system for variables is being introduced in CMIP7, referred to as **branded variables**.
The new system retains the familiar short variable names used in earlier CMIP phases to denote a physical quantity ("pr" for precipitation, for example). 
It introduces a new label, termed the **branded suffix** or **branding label**, that describes how a variable is sampled temporally and spatially.
This label is used in the output filenames and directory path structures of CMIP7 datasets.

For comparison with the previous CMIP naming scheme, consider the global monthly-mean near-surface air temperature, which in CMIP6 was denoted as "tas" in the "Amon" MIP table (also referred to as a CMOR table).
A compound name constructed from these terms, "Amon.tas", uniquely identifies the variable.
The "Amon" table is a collection of atmospheric variables at monthly frequency; other MIP tables (Omon, SImon, ...) collect together other variables that usually are similar in realm, frequency, and region.
While familiar to experienced users of CMIP data, this system led to a proliferation of table names in CMIP6 due to the large number of requested variables (~2000), and the rationale for their names was not always clear (for example, table name "Amon" included the realm while "3hr" and "day" used only the frequency).

The **branded variable** corresponding to "Amon.tas" is "tas_tavg-h2m-hxy-u".
Here the short name identifying the physical quantity, "tas", is unchanged.
The branding label, "tavg-h2m-hxy-u", describes how the variable is temporally and spatially sampled and is composed of four parts:

- **temporal label**: "tavg" indicates a time average.
- **vertical label**: "h2m" indicates near-surface at 2m above ground.
- **horizontal label**: "hxy" indicates a horizontal field spanning latitude and longitude.
- **area label**: "u" indicates "unmasked".

Branding labels are always composed of these four components.
The full list of their possible values is [given below](#branding-labels).

Importantly, "tas_tavg-h2m-hxy-u" is not *fully* equivalent to "Amon.tas". 
This is because the branded variable name does not identify a variable's frequency, or its region.
By *additionally* specifying the frequency as monthly, and the region as global, "tas_tavg-h2m-hxy-u" then becomes equivalent to "Amon.tas".
The same branded variable could alternately be reported at other frequencies, or for other regions.
For example, "tas_tavg-h2m-hxy-u" reported at daily frequency is denoted "day.tas" in CMIP6.

!!! note "Viewing branded variables in the Data Request"

    The branded variable name, frequency, and region of every requested variable are specified in the CMIP7 Data Request, and can be viewed using [Airtable](https://bit.ly/CMIP7-DReq-latest), the [github-based web viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/index.html), or the [python API](https://github.com/CMIP-Data-Request/CMIP7_DReq_software).

    For every variable, the Data Request specifies *both* its CMIP7-era branded name and CMIP6-era name.
    This provides a mapping from old to new names, to simplify the transition to branded names.
    The ["Variables" table of the Data Request](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html) provides a unique identifiers using both flavours of name, termed "CMIP7 Compound Name" and "CMIP6 Compound Name".
    For the above example (monthly near-surface air temperature) these are "atmos.tas.tavg-h2m-hxy-u.mon.GLB" and "Amon.tas", respectively.

The branded variable approach (Taylor et al., in preparation) aims to be more systematic and scalable to future CMIP phases and wider use across community MIPs.
[CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables) keyed by branded variable name define the metadata characteristics of variables apart from the frequency, region, or specific grids on which these variables should be reported.
Guidance on reporting grids for CMIP output is [given here](https://zenodo.org/records/15697025).


## Branding labels

The four components of the branded variables are derived from variable metadata using the 
[cmip-branded-variable-mapper package](https://cmip-branded-variable-mapper.readthedocs.io/en/latest/).
The following tables show the meaning of each element of the branding.
Each of these labels is a global attribute written to output netCDF files (`temporal_label`, `vertical_label`, `horizontal_label`, `area_label`).

### Temporal labels

Identifies how the variable is sampled in the time domain: time average, instantaneous, etc.

| Label | notes |
| --- | --- |
| `tavg` | Time average (cell_methods include `time: mean`) |
| `tclm` | Climatology (dimensions use `time2`) |
| `tclmdc` | Diurnal mean climatology (dimensions use `time3`) |
| `ti` | Time independent |
| `tmax` | Time maximum (cell_methods include `time: max`) |
| `tmin` | Time minimum (cell_methods include `time: min`) |
| `tmaxavg` | Time mean of daily maxima (cell_methods include `time: maximum within days time: mean over days`) |
| `tminavg` | Time mean of daily minima (cell_methods include `time: minimum within days time: mean over days`) |
| `tpt` | Synoptic samples (cell_methods include `time: point`, dimensions use `time1`) |
| `tsum` | Time sum (cell_methods include `time: sum`) |

### Vertical labels

Identifies how the variable is sampled in the vertical domain: on pressure levels, model levels, at a single level, etc.
Set to "u" (unspecified) if none of the following apply.

| Label | Data Request Dimension |
| --- | --- | 
| `10hPa` | `p10` |
| `100hPa` | `p100` |
| `200hPa` | `p200` |
| `220hPa` | `p220` |
| `500hPa` | `p500` |
| `560hPa` | `p560` |
| `700hPa` | `p700` |
<!-- | `700hPa` | `pl700` | --> 
| `840hPa` | `p840` |
| `850hPa` | `p850` |
| `925hPa` | `p925` |
| `1000hPa` | `p1000` |
| `al` | `alevel` |
| `alh` | `alevhalf` |
| `d10cm` | `sdepth10cm` |
| `d100cm` | `sdepth100cm` |
| `d0m` | `depth0m` |
| `d100m` | `depth100m` |
<!-- | `d100m` | `olayer100m` | -->
<!-- | `d300m` | `depth300m` | -->
| `d300m` | `olayer300m` |
<!-- | `d700m` | `depth700m` | -->
| `d700m` | `olayer700m` |
| `d1000m` | `depth1000m` |
<!-- | `d2000m` | `depth2000m` | -->
| `d2000m` | `olayer2000m` |
| `h16` | `alt16` |
| `h40` | `alt40` |
| `h2m` | `height2m` |
| `h10m` | `height10m` |
| `h100m` | `height100m` |
| `ol` | `olevel` |
| `olh` | `olevhalf` |
| `op20bar` | `op20bar` |
| `op4` | `oplayer4` |
| `p3` | `plev3` |
<!-- | `p4` | `plev4` | -->
| `p5u` | `plev5u` |
| `p6` | `plev6` |
| `p7c` | `plev7c` |
| `p7h` | `plev7h` |
<!-- | `p8` | `plev8` | -->
| `p19` | `plev19` |
<!-- | `p27` | `plev27` | -->
| `p39` | `plev39` |
| `rho` | `rho` |
| `sl` | `sdepth` |
| `u`  | unspecified |

### Horizontal labels

Identifies how the variable is sampled horizontally: function of latitude and longitude, only latitude, site data, etc.
Note that this label does **not** denote a particular choice of reporting grid (e.g., 1° × 1°).
Guidance on reporting grids can be [found here](https://zenodo.org/records/15697025).

| Label | Notes |
| --- | --- |
| `hxy` | longitude-latitude field |
| `hy` | zonal mean |
| `hyb` | zonal mean by ocean basin |
| `hs` | site specific |
| `ht` | transect |
| `hm` | horizontal mean |

### Area labels

Identifies the unmasked area type for which data are reported: sea ice, land, ice sheet, etc.
Set to "u" (unmasked) if no masking is applied.

| Label | Corresponding masking in cell_methods |
| --- | --- | 
| `air` | `where air` |
| `cl` | `where cloud` |
| `ccl` | `where convective_cloud` |
| `crp` | `where crops` |
| `fis` | `where floating_ice_shelf` |
| `gis` | `where grounded_ice_sheet` |
| `ifs` | `where ice_free_sea` |
| `is` | `where ice_sheet` |
| `li` | `where land_ice` |
| `lnd` | `where land` |
| `lsi` | `area: mean (over land and sea ice)` |
| `multi` | `where sector` |
| `ng` | `where natural_grasses` |
| `pst` | `where pastures` |
| `scl` | `where stratiform_cloud` |
| `sea` | `where sea` |
| `si` | `where sea_ice` |
| `simp` | `where sea_ice_melt_pond` |
| `sir` | `where sea_ice_ridges` |
| `shb` | `where shrubs` |
| `sn` | `where snow` |
| `tree` | `where trees` |
| `ufs` | `where unfrozen_soil` |
| `veg` | `where vegetation` |
| `wl` | `where wetland` |
| `u`  | unmasked (no "where" directive included in `cell_methods`) |
