---
layout: default
title: Branded Variables for CMIP7
---

# Branded Variables for CMIP7

A new naming system for variables is being introduced in CMIP7, referred to as **branded variables**.
The new system retains the familiar short variable names used in earlier CMIP phases to denote a physical quantity ("pr" for precipitation, for example). 
It introduces a new metadata attribute, termed the **branding suffix**, that describes how a variable is sampled temporally and spatially.
The new naming system is intended to make it **easier to find the variables you want**.
The branding suffix is a [global metadata attribute](https://doi.org/10.5281/zenodo.17250296), and is used in the output filenames and directory path structures of CMIP7 datasets.

For comparison with the previous CMIP naming scheme for variables, consider the global monthly-mean near-surface air temperature, which in CMIP6 was denoted as "tas" in the "Amon" MIP table (a MIP table is also sometimes referred to as a CMOR table).
A compound name constructed from these terms, "Amon.tas", uniquely identifies the variable in the collection of all CMIP6 variables.
The "Amon" table is a collection of atmospheric variables at monthly frequency, and other MIP tables (Omon, SImon, ...) collect together other variables that usually are similar in realm, frequency, and region.
While familiar to experienced users of CMIP data, this system led to a proliferation of table names in CMIP6 due to the large number of requested variables (~2000), and the rationale for their names was not always clear (for example, table name "Amon" included the realm while "3hr" and "day" used only the frequency).

The **branded variable** corresponding to "Amon.tas" is "tas_tavg-h2m-hxy-u".
Here the short name identifying the physical quantity, "tas", is unchanged.
The branding suffix, "tavg-h2m-hxy-u", describes how the variable is temporally and spatially sampled and is composed of four parts:

- **temporal label**: "tavg" indicates a time average.
- **vertical label**: "h2m" indicates near-surface at 2m above ground.
- **horizontal label**: "hxy" indicates a horizontal field spanning latitude and longitude.
- **area label**: "u" indicates "unmasked".

Branding suffixes are always composed of these four components, and their various possible values are [tabulated below](#branding-suffixes).

Importantly, "tas_tavg-h2m-hxy-u" is not *fully* equivalent to "Amon.tas". 
This is because the branded variable name does not identify a variable's frequency, or its region.
By *additionally* specifying the frequency as monthly, and the region as global, "tas_tavg-h2m-hxy-u" then becomes equivalent to "Amon.tas".
The same branded variable could alternately be reported at other frequencies, or for other regions.
For example, "tas_tavg-h2m-hxy-u" reported at daily frequency is denoted "day.tas" in CMIP6.

!!! note "Viewing branded variables in the Data Request"

    The branded variable name, frequency, and region of every requested variable are specified in the CMIP7 Data Request.
    The Data Request can be viewed using [Airtable](https://bit.ly/CMIP7-DReq-latest), the [github-based web viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/index.html), or the [python API](https://github.com/CMIP-Data-Request/CMIP7_DReq_software).

    For every variable, the Data Request specifies *both* its CMIP7-era branded name and CMIP6-era name.
    This provides a mapping from old to new names, to simplify the transition to branded names.
    The ["Variables" table of the Data Request](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html) provides a unique identifier using both flavours of name, termed "CMIP7 Compound Name" and "CMIP6 Compound Name".
    For the above example (monthly near-surface air temperature) these are "atmos.tas.tavg-h2m-hxy-u.mon.GLB" and "Amon.tas", respectively.

The branded variable approach (Taylor et al., in preparation) aims to be more systematic and scalable to future CMIP phases and wider use across community MIPs and other WCRP projects.
[CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables) keyed by branded variable name define the metadata characteristics of variables apart from the frequency, region, or specific grids on which these variables should be reported.
Guidance on reporting grids for CMIP output is [given here](https://doi.org/10.5281/zenodo.15697024).
The metadata conventions for describing grids in the CMIP7 CVs are explained in the [Essential Model Documentation guidance pages](https://wcrp-cmip.github.io/Essential-Model-Documentation/docs/).
<!-- The exact reporting convention for grids and associated CV is being finalised; if you wish to see the full discussion, please see https://github.com/WCRP-CMIP/CMIP7-CVs/issues/202. -->


## Variable names

A potentially confusing feature of CMIP metadata is that "variable name" may not always refer to the same type of variable name. 
To disambiguate the different flavours of variable name used in the CMIP7 Data Request and CVs, we provide a brief glossary here:

- `variable_id` is the "short name" familiar to many users (e.g., "tas", "pr", "sos"). It is a [global attribute](https://doi.org/10.5281/zenodo.17250296).
- `root name` is the beginning of a branded variable name (e.g., "tas_tavg-h2m-hxy-u"). It is identical to `variable_id`.
- `out_name` is found in [CMOR tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables) where it specifies the name of the data variable in a CMORized netcdf file. It is identical to `variable_id`.
- `physical parameter name` is the short name used in the Data Request to identify a physical quantity, and is associated with a CF standard name. It is the "Name" column in the "Physical Parameters" table of the [Airtable view](https://bit.ly/CMIP7-DReq-latest) of the Data Request. It is *usually* equivalent to the `variable_id` used in CMIP7, but there are some exceptions, as [tabulated below](#physical-parameter-name-changes).
- `branded_variable` is composed of a `root name` followed by a `branding suffix` (e.g., "tas_tavg-h2m-hxy-u"), as [described above](#branded-variables-for-cmip7). It is a [global attribute](https://doi.org/10.5281/zenodo.17250296).
- `Data Request variable` indicates a requested variable specified by a row in the "Variables" table of the [Airtable view](https://bit.ly/CMIP7-DReq-latest) of the Data Request. A requested variable corresponds to a single `branded variable`, but additionally specifies the frequency, region, and requested grid on which the variable should be provided.
- `cmip6_compound_name` uniquely identifies a Data Request variable in both the CMIP6 and CMIP7 Data Requests. It is composed of a MIP table name (aka CMOR table name) followed by a `physical parameter name` (e.g. "Amon.tas").
- `cmip7_compound_name` uniquely identifies a Data Request variable in the CMIP7 Data Request. It is composed of four parts: realm, `branded variable`, frequency, and region (e.g. "atmos.tas.tavg-h2m-hxy-u.mon.glb").


## Branding suffixes

The four components of the branding suffix are derived from variable metadata using the 
[cmip-branded-variable-mapper package](https://cmip-branded-variable-mapper.readthedocs.io/en/latest/).
The following tables show the meaning of each element of a branding suffix.
Each of these labels is a [global attribute](https://doi.org/10.5281/zenodo.17250296) written to output netCDF files (`temporal_label`, `vertical_label`, `horizontal_label`, `area_label`).

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
| `d300m` | `olayer300m` |
| `d700m` | `olayer700m` |
| `d1000m` | `depth1000m` |
| `d2000m` | `olayer2000m` |
| `h16` | `alt16` |
| `h40` | `alt40` |
| `h2m` | `height2m` |
| `h10m` | `height10m` |
| `h100m` | `height100m` |
| `ol` | `olevel` |
| `olh` | `olevhalf` |
| `ols` | `osurf` |
| `op20bar` | `op20bar` |
| `op4` | `oplayer4` |
| `p3` | `plev3` |
| `p5u` | `plev5u` |
| `p6` | `plev6` |
| `p7c` | `plev7c` |
| `p7h` | `plev7h` |
| `p19` | `plev19` |
| `p39` | `plev39` |
| `rho` | `rho` |
| `sl` | `sdepth` |
| `u`  | unspecified |

<!-- | `700hPa` | `pl700` | --> 
<!-- | `d100m` | `olayer100m` | -->
<!-- | `d300m` | `depth300m` | -->
<!-- | `d700m` | `depth700m` | -->
<!-- | `d2000m` | `depth2000m` | -->
<!-- | `p4` | `plev4` | -->
<!-- | `p8` | `plev8` | -->
<!-- | `p27` | `plev27` | -->

### Horizontal labels

Identifies how the variable is sampled horizontally: function of latitude and longitude, only latitude, site data, etc.
Note that this label does **not** denote a particular choice of reporting grid (e.g., 1° × 1°).
Guidance on reporting grids can be [found here](https://doi.org/10.5281/zenodo.15697024).

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

## Physical parameter name changes

