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
While familiar to experienced users of CMIP data, this system led to a proliferation of table names in CMIP6 due to the large number of requested variables (~2000).

The **branded variable** corresponding to "Amon.tas" is "tas_tavg-h2m-hxy-u".
Here the short name identifying the physical quantity, "tas", is unchanged.
The branding label, "tavg-h2m-hxy-u", describes how the variable is temporally and spatially sampled.
It is composed of four parts, which for this variable are:

- **temporal label**: "tavg" denotes a time average.
- **vertical label**: "h2m" denotes near-surface at 2m above ground.
- **horizontal label**: "hxy" denotes a horizontal field spanning latitude and longitude.
- **area type label**: for other variables this indicates masking (e.g., over sea ice only); in this case, "u" denotes no masking.

As defined, "tas_tavg-h2m-hxy-u" is not fully equivalent to "Amon.tas" because the branded name does not identify the variable's frequency, or its region.
By additionally specifying the frequency as monthly, and the region as global, "tas_tavg-h2m-hxy-u" then becomes equivalent to "Amon.tas".
The CMIP7 Data Request specifies the branded variable name, frequency, and region of every requested variable.

The branded variable approach (Taylor et al., in prep) aims to be more systematic and scalable to future CMIP phases and wider use across community MIPs.

## Branding labels

The four components of the branded variables are derived from variable metadata using the 
[cmip-branded-variable-mapper package](https://cmip-branded-variable-mapper.readthedocs.io/en/latest/).
The following tables show the meaning of each element of the branding.

### Temporal labels

| Label | notes |
| --- | --- | 
| `tavg` | Time average (cell_measures include `time: mean`) |
| `tpt` | Synoptic samples (cell_measures include `time: point`, dimensions use `time1`) |
| `tmax` | Time maximum (cell_measures include `time: max`) |
| `tmin` | Time minimum (cell_measures include `time: min`) |
| `tsum` | Time sum (cell measures include `time: sum`) |
| `tclm` | Climatology (dimensions use `time2`) |
| `tclmdc` | Diurnal mean climatology (dimensions use `time3`) |

### Vertical labels
| Label | Data Request Dimension |
| --- | --- | 
| `1000hPa` | `p1000` |
| `100hPa` | `p100` |
| `10hPa` | `p10` |
| `200hPa` | `p200` |
| `220hPa` | `p220` |
| `500hPa` | `p500` |
| `560hPa` | `p560` |
| `700hPa` | `p700` |
| `700hPa` | `pl700` |
| `840hPa` | `p840` |
| `850hPa` | `p850` |
| `925hPa` | `p925` |
| `al` | `alevel` |
| `alh` | `alevhalf` |
| `d0m` | `depth0m` |
| `d1000m` | `depth1000m` |
| `d100cm` | `sdepth100cm` |
| `d100m` | `depth100m` |
| `d100m` | `olayer100m` |
| `d10cm` | `sdepth10cm` |
| `d2000m` | `depth2000m` |
| `d2000m` | `olayer2000m` |
| `d300m` | `depth300m` |
| `d300m` | `olayer300m` |
| `d700m` | `depth700m` |
| `d700m` | `olayer700m` |
| `h100m` | `height100m` |
| `h10m` | `height10m` |
| `h16` | `alt16` |
| `h2m` | `height2m` |
| `h40` | `alt40` |
| `ol` | `olevel` |
| `olh` | `olevhalf` |
| `op20bar` | `op20bar` |
| `op4` | `oplayer4` |
| `p19` | `plev19` |
| `p27` | `plev27` |
| `p39` | `plev39` |
| `p3` | `plev3` |
| `p4` | `plev4` |
| `p5u` | `plev5u` |
| `p6` | `plev6` |
| `p7c` | `plev7c` |
| `p7h` | `plev7h` |
| `p8` | `plev8` |
| `rho` | `rho` |
| `sl` | `sdepth` |

### Horizontal labels

| Label | Notes |
| --- | --- | 
| `hxy` | longitude-latitude field |
| `hy` | zonal mean |
| `hyb` | zonal mean by ocean basin |
| `hs` | site specific |
| `ht` | transect |

### Area type labels

| Label | Corresponding masking in cell_methods |
| --- | --- | 
| `lsi` | `area: mean (over land and sea ice)` |
| `air` | `where air` |
| `cl` | `where cloud` |
| `ccl` | `where convective_cloud` |
| `crp` | `where crops` |
| `fis` | `where floating_ice_shelf` |
| `gis` | `where grounded_ice_sheet` |
| `ifs` | `where ice_free_sea` |
| `is` | `where ice_sheet` |
| `lnd` | `where land` |
| `li` | `where land_ice` |
| `ng` | `where natural_grasses` |
| `pst` | `where pastures` |
| `sea` | `where sea` |
| `si` | `where sea_ice` |
| `simp` | `where sea_ice_melt_pond` |
| `sir` | `where sea_ice_ridges` |
| `multi` | `where sector` |
| `shb` | `where shrubs` |
| `sn` | `where snow` |
| `scl` | `where stratiform_cloud` |
| `tree` | `where trees` |
| `ufs` | `where unfrozen_soil` |
| `veg` | `where vegetation` |
| `wl` | `where wetland` |