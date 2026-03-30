---
layout: default
title: Branded Variables for CMIP7
---

# Branded Variables for CMIP7

A new naming system for variables is being introduced in CMIP7, referred to as **branded variables**.
The new system retains the familiar short variable names used in earlier CMIP phases to denote a physical quantity (`pr` for precipitation, for example). 
It introduces a new metadata attribute, termed the **branding suffix**, that describes how a variable is sampled temporally and spatially.
The new naming system is intended to make it *easier to find the variables you want*.
The branding suffix is a [global metadata attribute][global-attributes-latest], and is used in the output filenames and directory path structures of CMIP7 datasets.

For comparison with the previous CMIP naming scheme for variables, consider the global monthly-mean near-surface air temperature, which in CMIP6 was denoted as `tas` in the `Amon` MIP table (a MIP table is also sometimes referred to as a CMOR table).
A compound name constructed from these terms, `Amon.tas`, uniquely identifies the variable in the collection of all CMIP6 variables.
The `Amon` table is a collection of atmospheric variables at monthly frequency, and other MIP tables (`Omon`, `SImon`, ...) collect together other variables that usually are similar in realm, frequency, and region.
While familiar to experienced users of CMIP data, this system led to a proliferation of table names in CMIP6 due to the large number of requested variables (~2000), and the rationale for their names was not always clear (for example, table name `Amon` included the realm while `3hr` and `day` used only the frequency).

The **branded variable** corresponding to `Amon.tas` is `tas_tavg-h2m-hxy-u`.
The short name, `tas`, identifies the physical quantity and is in this example unchanged. 
The short name is also referred to as the "root name" of the branded variable.
The **branding suffix**, `tavg-h2m-hxy-u`, describes how the variable is temporally and spatially sampled and is composed of four parts:

- **temporal label**: `tavg` indicates a time average.
- **vertical label**: `h2m` indicates near-surface at 2m above ground.
- **horizontal label**: `hxy` indicates a horizontal field spanning latitude and longitude.
- **area label**: `u` indicates "unmasked".

Branding suffixes are always composed of these four labels. The possible values for each type of label are [tabulated below](#branding-suffixes).

Importantly, `tas_tavg-h2m-hxy-u` is not *fully* equivalent to `Amon.tas`. 
This is because a branded variable name does not identify a requested variable's frequency or its region.
By *additionally* specifying the frequency as monthly, and the region as global, `tas_tavg-h2m-hxy-u` then becomes equivalent to `Amon.tas`.
The same branded variable could alternately be reported at other frequencies or for other regions.
For example, `tas_tavg-h2m-hxy-u` reported on a global grid and at daily frequency is denoted `day.tas` in CMIP6.

!!! note "Viewing branded variables in the Data Request"


    The branded variable name, frequency, and region of every requested variable are specified in the CMIP7 Data Request.
    The Data Request can be viewed using [Airtable](https://bit.ly/CMIP7-DReq-latest), the [github-based web viewer](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/index.html), or the [python API](https://github.com/CMIP-Data-Request/CMIP7_DReq_software).

    For every variable, the Data Request specifies *both* its CMIP7-era branded name and CMIP6-era name.
    This provides a mapping from old to new names in order to simplify the transition to branded names.
    The ["Variables" table of the Data Request](https://cmip-data-request.github.io/cmip7-dreq-webview/latest/variables.html) provides a unique identifier using both flavours of name, termed "CMIP7 Compound Name" and "CMIP6 Compound Name".
    For the above example (monthly near-surface air temperature) these are `atmos.tas.tavg-h2m-hxy-u.mon.glb` and `Amon.tas`, respectively.
    [See below](#variable-names) for further clarification of the meaning of different types of variable names.


The branded variable approach (Taylor et al., in preparation) aims to be more systematic and scalable to future CMIP phases and wider use across community MIPs and other WCRP projects.
[CMOR tables][cmip7-cmor-tables] keyed by branded variable name define the metadata characteristics of variables apart from the frequency, region, or specific grids on which these variables should be reported.
Guidance on reporting grids for CMIP output is [given here][grids-guidance-latest].
The metadata conventions for describing grids in the CMIP7 CVs are explained in the [Essential Model Documentation guidance pages](https://wcrp-cmip.github.io/Essential-Model-Documentation/docs/).
<!-- The exact reporting convention for grids and associated CV is being finalised; if you wish to see the full discussion, please see https://github.com/WCRP-CMIP/CMIP7-CVs/issues/202. -->


## Variable names

There are several CMIP7 metadata attributes that may be referred to as a "variable name", depending on the context.
For example, the name of a branded variable does not specify its **frequency** or **region**. 
Similarly, the short name of a physical quantity such as `pr` does not specify how it is spatiotemporally sampled (i.e., it lacks the information conveyed by a **branding suffix**).
To disambiguate the different flavours of variable name used in the CMIP7 Data Request and CVs, a brief glossary is provided here:

- **variable_id** is the short name of a physical quantity that is familiar to many users from previous CMIP phases (e.g., `tas`, `pr`, `sos`). It is a mandatory [global attribute][global-attributes-latest].
- **root name** refers to the first component of a branded variable name (e.g., `tas_tavg-h2m-hxy-u`), and is always identical to **variable_id**.
- **out_name** is found in [CMOR tables][cmip7-cmor-tables] where it specifies the name of the data variable in a CMORized netcdf file, and is always identical to **variable_id**.
- **physical parameter name** is the short name used in the CMIP7 Data Request to identify a physical quantity, with an associated CF standard name. It is the "Name" column in the "Physical Parameters" table of the [Airtable view](https://bit.ly/CMIP7-DReq-latest) of the Data Request. It is *usually* equivalent to the **root name** (i.e., the **variable_id**), which is given by the "variableRootDD" column in the "Physical Parameters" table. However there are a number of exceptions, which are [tabulated below](#physical-parameter-name-changes).
- **branded_variable** is composed of the **root name** followed by a **branding suffix** (e.g., `tas_tavg-h2m-hxy-u`), as [described above](#branded-variables-for-cmip7). It is a mandatory [global attribute][global-attributes-latest].
- **Data Request variable** refers to a requested variable specified by a row in the "Variables" table of the [Airtable view](https://bit.ly/CMIP7-DReq-latest) of the Data Request. A requested variable corresponds to a single **branded_variable**, but additionally specifies the **frequency**, **region**, and reporting grid (atmosphere, ocean, ...) on which the variable should be provided.
- **CMIP7 compound name** uniquely identifies a Data Request variable in the CMIP7 Data Request. It is composed of four parts: **realm**, **root name**, **branding suffix**, **frequency**, and **region** (e.g. `atmos.tas.tavg-h2m-hxy-u.mon.glb`). The four latter parts of the **CMIP7 compound name** - essentially the **branded variable** plus **frequency** and **region** - are required to uniquely identify a **Data Request variable** in the collection of CMIP7 requested variables. The **realm** is not strictly required for uniqueness, but is included in the compound name so that users can easily identify requested variables associated with a given realm. The realm used in the **CMIP7 compound name** is the **primary realm** identifed by the "Modelling Realm - Primary" column in the "Variables" table of the [Airtable view](https://bit.ly/CMIP7-DReq-latest) of the Data Request. The **primary realm** is also used to group variables in the [CMIP7 CMOR tables][cmip7-cmor-tables].
- **CMIP6 compound name** is another unique identifier of Data Request variables in the CMIP7 Data Request, and is included because these names are familiar to many users (e.g., `Amon.tas`, `day.pr`, `Omon.tos`) and may help them navigate the transition to the new CMIP7 variable naming scheme based on **branded variables**. If a variable was included in CMIP6 then this name uniquely identifies it in the CMIP6 Data Request, but note that newly introduced variables in CMIP7 are also assigned a **CMIP6 compound name** (hence there is a one-to-one mapping between **CMIP6 compound name** and **CMIP7 compound name**). This flavour of compound name is composed of the name of a CMIP6-era MIP table (also referred to as a CMOR table) followed by short name that is *usually* identical to the **physical parameter name** (e.g., `Amon.tas`). There are some exceptions, [tabulated below](#physical-parameter-name-changes), in which extra information is appended to the end of the short name (e.g., `Amon.tasSouth30`). However, the short variable name used in the **CMIP6 compound name** always *begins* with the **physical parameter name**.


## Branding suffixes

The four components of the branding suffix are derived from variable metadata using the 
[cmip-branded-variable-mapper python package](https://cmip-branded-variable-mapper.readthedocs.io/en/latest/).
The following tables show the meaning of each element of a branding suffix.
Each of these labels is a mandatory [global attribute][global-attributes-latest] written to output netCDF files (**temporal_label**, **vertical_label**, **horizontal_label**, **area_label**).

### Temporal labels

The **temporal_label** identifies how the variable is sampled in the time domain: time average, instantaneous, etc.

| Label | Notes |
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

The **vertical_label** identifies how the variable is sampled in the vertical domain: on pressure levels, model levels, at a single level, etc.
It is set to `u` (unspecified) if none of the following apply (e.g. a field reported at the surface or at the top of the atmopsphere).

| Label | Data Request Dimension or Coordinate |
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

The **horizontal_label** identifies how the variable is sampled horizontally: function of latitude and longitude, only latitude, site data, etc.
Note that this label does *not* denote a particular choice of reporting grid (e.g., a 1° × 1° latitude-longitude grid).
Guidance on reporting grids can be [found here][grids-guidance-latest].

| Label | Notes |
| --- | --- |
| `hxy` | longitude-latitude field |
| `hy` | zonal mean |
| `hyb` | zonal mean by ocean basin |
| `hs` | site specific |
| `ht` | transect |
| `hm` | horizontal mean |

### Area labels

The **area_label** identifies the unmasked area type for which data are reported: sea ice, land, ice sheet, etc.
It is set to `u` (unmasked) if no masking is applied.

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

The following table lists **root names** in the CMIP7 Data Request (v1.2.2.3) that do not match one and only one **physical parameter name** (recall that **root name** is the same as **variable_id** and **out_name**).
Out of the 987 **root names** in Data Request v1.2.2.3 there are 119 such cases (12%).
For each such **root name**, the table lists the **physical parameter name(s)** and the **CMIP6 compound name(s)** of the Data Request variable(s) using this **root name**.

| **Root name** | **Physical parameter name(s)** | **CMIP6 compound name(s)** |
| --- | --- | --- |
| `acabf` | `acabf`, `acabfIs` | `ImonAnt.acabf`, `ImonGre.acabf`, `IyrAnt.acabf`, `IyrGre.acabf`, `LImon.acabfIs` |
| `arag` | `arag`, `aragos` | `Omon.arag`, `Omon.aragos` |
| `bacc` | `baccos` | `Omon.baccos` |
| `bigthetao` | `bigthetao`, `bigthetaoga` | `Oday.bigthetao200`, `Odec.bigthetao`, `Omon.bigthetao`, `Omon.bigthetaoga` |
| `bldep` | `bldep`, `maxpblz`, `minpblz` | `3hrPt.bldep`, `AERday.maxpblz`, `AERday.minpblz`, `AERmon.bldep`, `E1hr.bldep` |
| `cSoil` | `cSoil`, `cSoilAbove1m`, `cSoilLevels` | `Emon.cSoil`, `Emon.cSoilAbove1m`, `Emon.cSoilLevels` |
| `cVeg` | `cVeg`, `cVegGrass`, `cVegShrub`, `cVegTree` | `Emon.cVegGrass`, `Emon.cVegShrub`, `Emon.cVegTree`, `Lmon.cVeg` |
| `calc` | `calc`, `calcos` | `Omon.calc`, `Omon.calcos`, `Omon.calcosSouth30` |
| `ccnp02` | `ccn02` | `AERmon.ccn02`, `AERmon.ccn02South30` |
| `cfc11` | `cfc11global` | `Amon.cfc11global` |
| `cfc113` | `cfc113global` | `Amon.cfc113global` |
| `cfc12` | `cfc12global` | `Amon.cfc12global` |
| `ch4` | `ch4`, `ch4global` | `AERmon.ch4`, `AERmonZ.ch4`, `Amon.ch4`, `Amon.ch4Clim`, `Amon.ch4global`, `Amon.ch4globalClim` |
| `chl` | `chl`, `chlos` | `Oday.chl200`, `Oday.chlos`, `Omon.chl`, `Omon.chlos`, `Omon.chlosSouth30` |
| `chlcalc` | `chlcalc`, `chlcalcos` | `Omon.chlcalc`, `Omon.chlcalcos` |
| `chldiat` | `chldiat`, `chldiatos` | `Omon.chldiat`, `Omon.chldiatos` |
| `chldiaz` | `chldiaz`, `chldiazos` | `Omon.chldiaz`, `Omon.chldiazos` |
| `chlmisc` | `chlmisc`, `chlmiscos` | `Omon.chlmisc`, `Omon.chlmiscos` |
| `chlpico` | `chlpico`, `chlpicoos` | `Omon.chlpico`, `Omon.chlpicoos` |
| `clcalipso` | `clcalipso`, `clhcalipso`, `cllcalipso`, `clmcalipso` | `CFday.clcalipso`, `CFday.clhcalipso`, `CFday.cllcalipso`, `CFday.clmcalipso`, `CFmon.clcalipso`, `CFmon.clcalipsoSouth30`, `CFmon.clhcalipso`, `CFmon.clhcalipsoSouth30`, `CFmon.cllcalipso`, `CFmon.cllcalipsoSouth30`, `CFmon.clmcalipso`, `CFmon.clmcalipsoSouth30` |
| `co2` | `co2`, `co2s` | `AERmon.co2`, `Amon.co2`, `Amon.co2Clim`, `Amon.co2massClim`, `Emon.co2s` |
| `co3` | `co3`, `co3os` | `Oday.co3200`, `Oday.co3os` |
| `co3satarag` | `co3satarag`, `co3sataragos` | `Oday.co3satarag200`, `Oday.co3sataragos` |
| `dfe` | `dfe`, `dfeos` | `Omon.dfe`, `Omon.dfeos`, `Omon.dfeosSouth30` |
| `dissi13c` | `dissi13c`, `dissi13cos` | `Omon.dissi13c`, `Omon.dissi13cos` |
| `dissi14cabio` | `dissi14cabio`, `dissi14cabioos` | `Omon.dissi14cabio`, `Omon.dissi14cabioos` |
| `dissic` | `dissic`, `dissicos` | `Omon.dissic`, `Omon.dissicos` |
| `dmso` | `dmso`, `dmsos` | `Omon.dmso`, `Omon.dmsos`, `Omon.dmsosSouth30` |
| `epn` | `epn100` | `Omon.epn100` |
| `epp` | `epp100` | `Omon.epp100` |
| `epsi` | `epsi100` | `Omon.epsi100` |
| `evspsbl` | `evs`, `evspsbl`, `sidmassevapsubl` | `Amon.evspsbl`, `CFsubhr.evspsbl`, `Eday.evspsbl`, `Omon.evs`, `SImon.sidmassevapsubl` |
| `expc` | `epc100`, `epc1000`, `expc` | `Omon.epc100`, `Omon.epc1000`, `Omon.expc` |
| `expcalc` | `epcalc100`, `epcalc1000`, `expcalc` | `Emon.expcalc`, `Omon.epcalc100`, `Omon.epcalc1000` |
| `gpp` | `gpp`, `gppGrass`, `gppShrub`, `gppTree` | `Emon.gppGrass`, `Emon.gppShrub`, `Emon.gppTree`, `Lmon.gpp` |
| `hcfc22` | `hcfc22`, `hcfc22global` | `AERmon.hcfc22`, `Amon.hcfc22global` |
| `hfls` | `hfls`, `hflsIs` | `3hr.hfls`, `Amon.hfls`, `Amon.hflsSouth30`, `CFsubhr.hfls`, `E1hr.hfls`, `ImonAnt.hfls`, `ImonGre.hfls`, `LImon.hflsIs`, `day.hfls` |
| `hfss` | `hfss`, `hfssIs` | `3hr.hfss`, `Amon.hfss`, `Amon.hfssSouth30`, `CFsubhr.hfss`, `E1hr.hfss`, `ImonAnt.hfss`, `ImonGre.hfss`, `LImon.hfssIs`, `day.hfss` |
| `hur` | `hur`, `hur100`, `hur500`, `hur700`, `hur850` | `6hrPlevPt.hur100`, `6hrPlevPt.hur500`, `6hrPlevPt.hur850`, `Amon.hur`, `Amon.hurSouth30`, `CFday.hur`, `CFday.hur700`, `CFmon.hur`, `CFmon.hurSouth30`, `CFsubhr.hur`, `day.hur` |
| `hurs` | `hurs`, `hursmax`, `hursmin`, `hursminCrop` | `6hrPlev.hurs`, `Amon.hurs`, `Amon.hursSouth30`, `CF3hr.hurs`, `CFsubhr.hurs`, `E1hr.hurs`, `E1hr.hursSouth30`, `Eday.hursminCrop`, `day.hurs`, `day.hursmax`, `day.hursmin` |
| `hus` | `hus`, `hus6` | `6hrLev.hus`, `6hrPlevPt.hus7h`, `Amon.hus`, `Amon.husSouth30`, `CFday.hus`, `CFmon.hus`, `CFmon.husSouth30`, `CFsubhr.hus`, `E3hrPt.hus`, `E3hrPt.hus6`, `day.hus` |
| `icem` | `icem`, `icemIs` | `ImonAnt.icem`, `ImonGre.icem`, `LImon.icemIs` |
| `libmassbf` | `libmassbffl`, `libmassbfgr` | `ImonAnt.libmassbffl`, `ImonAnt.libmassbfgr`, `ImonGre.libmassbffl`, `ImonGre.libmassbfgr`, `IyrAnt.libmassbffl`, `IyrAnt.libmassbfgr`, `IyrGre.libmassbffl`, `IyrGre.libmassbfgr` |
| `litempbot` | `litempbotfl`, `litempbotgr` | `ImonAnt.litempbotfl`, `ImonAnt.litempbotgr`, `ImonGre.litempbotfl`, `ImonGre.litempbotgr`, `IyrAnt.litempbotfl`, `IyrAnt.litempbotgr`, `IyrGre.litempbotfl`, `IyrGre.litempbotgr` |
| `litemptop` | `litemptop`, `litemptopIs` | `ImonAnt.litemptop`, `ImonGre.litemptop`, `IyrAnt.litemptop`, `IyrGre.litemptop`, `LImon.litemptopIs` |
| `mlotst` | `mlotst`, `mlotstmax`, `mlotstmin` | `Eday.mlotst`, `Omon.mlotst`, `Omon.mlotstSouth30`, `Omon.mlotstmax`, `Omon.mlotstmin` |
| `modelcellareai` | `modelCellAreai` | `IyrAnt.modelCellAreai`, `IyrGre.modelCellAreai` |
| `mrro` | `mrro`, `mrroIs` | `3hr.mrro`, `LImon.mrroIs`, `Lmon.mrro`, `day.mrro` |
| `mrsol` | `mrso100`, `mrsol`, `mrsos` | `3hr.mrso100`, `3hr.mrsos`, `Eday.mrsol`, `Emon.mrsol`, `Lmon.mrsos`, `day.mrsos` |
| `mrsolLut` | `mrsosLut` | `Emon.mrsosLut` |
| `msftm` | `msftmrho`, `msftmz` | `Omon.msftmrho`, `Omon.msftmz` |
| `msftmmpa` | `msftmrhompa`, `msftmzmpa` | `Omon.msftmrhompa`, `Omon.msftmzmpa` |
| `msftmsmpa` | `msftmzsmpa` | `Omon.msftmzsmpa` |
| `msfty` | `msftyrho`, `msftyz` | `Omon.msftyrho`, `Omon.msftyz` |
| `msftypa` | `msftyrhompa`, `msftyzmpa` | `Omon.msftyrhompa`, `Omon.msftyzmpa` |
| `n2o` | `n2o`, `n2oglobal` | `AERmon.n2o`, `AERmonZ.n2o`, `Amon.n2o`, `Amon.n2oClim`, `Amon.n2oglobal`, `Amon.n2oglobalClim` |
| `nh4` | `nh4`, `nh4os` | `Omon.nh4`, `Omon.nh4os` |
| `no2` | `no2`, `sfno2` | `AERhr.sfno2`, `AERmon.no2` |
| `no3` | `no3`, `no3os` | `Omon.no3`, `Omon.no3os`, `Omon.no3osSouth30` |
| `noaahi2m` | `noaahi2m`, `noaahi2mmax` | `day.noaahi2m`, `day.noaahi2mmax` |
| `npp` | `npp`, `nppGrass`, `nppShrub`, `nppTree` | `Emon.nppGrass`, `Emon.nppShrub`, `Emon.nppTree`, `Lmon.npp` |
| `o2` | `o2`, `o2os` | `Oday.o2200`, `Oday.o2os`, `Omon.o2`, `Omon.o2os` |
| `o3` | `o3`, `o3inst`, `sfo3`, `sfo3max` | `AERday.sfo3max`, `AERhr.sfo3`, `AERmon.o3`, `AERmon.o3inst`, `AERmonZ.o3`, `Amon.o3`, `Amon.o3Clim` |
| `orog` | `orog`, `orogIs` | `ImonAnt.orog`, `ImonGre.orog`, `IyrAnt.orog`, `IyrGre.orog`, `LImon.orogIs`, `fx.orog`, `fx.orogSouth30` |
| `ph` | `ph`, `phos` | `Oday.ph200`, `Oday.phos`, `Omon.ph`, `Omon.phosSouth30` |
| `phyc` | `phyc`, `phycos` | `Oday.phyc200`, `Oday.phycos`, `Omon.phyc`, `Omon.phycos`, `Omon.phycosSouth30` |
| `phycalc` | `phycalc`, `phycalcos` | `Oday.phycalc`, `Omon.phycalc`, `Omon.phycalcos` |
| `phydiat` | `phydiat`, `phydiatos` | `Oday.phydiatos`, `Omon.phydiat`, `Omon.phydiatos` |
| `phydiaz` | `phydiaz`, `phydiazos` | `Oday.phydiazos`, `Omon.phydiaz`, `Omon.phydiazos` |
| `phymisc` | `phymisc`, `phymiscos` | `Oday.phymiscos`, `Omon.phymisc`, `Omon.phymiscos` |
| `phypico` | `phypico`, `phypicoos` | `Oday.phypico`, `Omon.phypico`, `Omon.phypicoos` |
| `pp` | `pp`, `ppos` | `Omon.pp`, `Omon.ppos`, `Omon.pposSouth30` |
| `pr` | `pr`, `prCrop`, `prhmax` | `3hr.pr`, `6hrPlev.pr`, `6hrPlev.prhmax`, `6hrPlevPt.pr`, `Amon.pr`, `Amon.prSouth30`, `CF3hr.pr`, `CFsubhr.pr`, `E1hr.pr`, `E1hr.prSouth30`, `Eday.prCrop`, `Eday.prhmax`, `Emon.prhmax`, `day.pr` |
| `prra` | `prra`, `prraIs`, `sipr` | `6hrPlev.prra`, `Amon.prra`, `Amon.prraSouth30`, `Eday.prra`, `ImonAnt.prra`, `ImonGre.prra`, `LImon.prraIs`, `SImon.sipr` |
| `prsn` | `prsn`, `prsnIs`, `sisndmasssnf` | `3hr.prsn`, `6hrPlev.prsn`, `Amon.prsn`, `Amon.prsnSouth30`, `CFsubhr.prsn`, `ImonAnt.prsn`, `ImonGre.prsn`, `LImon.prsnIs`, `SImon.sisndmasssnf`, `day.prsn` |
| `ra` | `ra`, `raGrass`, `raShrub`, `raTree` | `Emon.raGrass`, `Emon.raShrub`, `Emon.raTree`, `Lmon.ra` |
| `rh` | `rh`, `rhGrass`, `rhShrub`, `rhTree` | `Emon.rhGrass`, `Emon.rhShrub`, `Emon.rhTree`, `Lmon.rh` |
| `rlds` | `rlds`, `rldsIs`, `sifllwdtop` | `3hr.rlds`, `6hrPlev.rlds`, `Amon.rlds`, `Amon.rldsSouth30`, `CF3hr.rlds`, `CFsubhr.rlds`, `E1hr.rlds`, `E1hr.rldsSouth30`, `ImonAnt.rlds`, `ImonGre.rlds`, `LImon.rldsIs`, `SIday.sifllwdtop`, `SImon.sifllwdtop`, `day.rlds` |
| `rlus` | `rlus`, `rlusIs`, `sifllwutop` | `3hr.rlus`, `Amon.rlus`, `Amon.rlusSouth30`, `CFsubhr.rlus`, `E1hr.rlus`, `ImonAnt.rlus`, `ImonGre.rlus`, `LImon.rlusIs`, `SIday.sifllwutop`, `SImon.sifllwutop`, `day.rlus` |
| `rsds` | `rsds`, `rsdsIs`, `rsdsoni`, `rsdss`, `siflswdtop` | `3hr.rsds`, `6hrPlev.rsds`, `Amon.rsds`, `Amon.rsdsSouth30`, `CF3hr.rsds`, `CFsubhr.rsds`, `E1hr.rsds`, `E1hr.rsdsSouth30`, `Emon.rsds`, `Emon.rsdsoni`, `Emon.rsdss`, `ImonAnt.rsds`, `ImonGre.rsds`, `LImon.rsdsIs`, `SIday.siflswdtop`, `SImon.siflswdtop`, `day.rsds` |
| `rsus` | `rsus`, `rsusIs`, `rsusoni`, `rsuss`, `siflswutop` | `3hr.rsus`, `Amon.rsus`, `Amon.rsusSouth30`, `CFsubhr.rsus`, `E1hr.rsus`, `Emon.rsus`, `Emon.rsusoni`, `Emon.rsuss`, `ImonAnt.rsus`, `ImonGre.rsus`, `LImon.rsusIs`, `SIday.siflswutop`, `SImon.siflswutop`, `day.rsus` |
| `sbl` | `sbl`, `sblIs`, `sisndmasssubl` | `Amon.sbl`, `CFsubhr.sbl`, `Eday.sbl`, `ImonAnt.sbl`, `ImonGre.sbl`, `LImon.sbl`, `LImon.sblIs`, `SImon.sisndmasssubl` |
| `sfcWind` | `sfcWind`, `sfcWindmax` | `6hrPlev.sfcWind`, `Amon.sfcWind`, `Amon.sfcWindSouth30`, `CFsubhr.sfcWind`, `E1hr.sfcWind`, `E1hr.sfcWindSouth30`, `E3hr.sfcWind`, `Emon.sfcWindmax`, `day.sfcWind`, `day.sfcWindmax` |
| `sfdsi` | `sfdsi`, `siflsaltbot` | `3hr.sfdsi`, `Omon.sfdsi`, `SImon.siflsaltbot` |
| `sfpm10` | `mmrpm10`, `sfpm10` | `AERday.sfpm10`, `AERhr.sfpm10`, `AERmon.mmrpm10`, `AERmon.mmrpm10South30` |
| `si` | `si`, `sios` | `Omon.si`, `Omon.sios` |
| `siarea` | `siarean`, `siareas` | `SIday.siarean`, `SIday.siareas`, `SImon.siarean`, `SImon.siareas` |
| `sieqthick` | `sivol` | `SImon.sivol` |
| `siextent` | `siextentn`, `siextents` | `SIday.siextentn`, `SIday.siextents`, `SImon.siextentn`, `SImon.siextents` |
| `siflfwbot` | `fsitherm`, `siflfwbot` | `Omon.fsitherm`, `SImon.siflfwbot` |
| `sisnmass` | `sisnmassn`, `sisnmasss` | `SIday.sisnmassn`, `SIday.sisnmasss`, `SImon.sisnmassn`, `SImon.sisnmasss` |
| `sithick` | `sirdgthick`, `sithick` | `SIday.sirdgthick`, `SIday.sithick`, `SImon.sirdgthick`, `SImon.sithick`, `SImon.sithickSouth30` |
| `sivol` | `sivoln`, `sivols` | `SIday.sivoln`, `SIday.sivols`, `SImon.sivoln`, `SImon.sivols` |
| `snc` | `sisnconc`, `snc`, `sncIs` | `ImonAnt.snc`, `ImonGre.snc`, `IyrAnt.snc`, `IyrGre.snc`, `LImon.snc`, `LImon.sncIs`, `SImon.sisnconc`, `day.snc` |
| `snd` | `sisnthick`, `snd` | `Eday.snd`, `LImon.snd`, `SIday.sisnthick`, `SImon.sisnthick`, `SImon.sisnthickSouth30` |
| `snicem` | `snicem`, `snicemIs` | `ImonAnt.snicem`, `ImonGre.snicem`, `LImon.snicemIs` |
| `snm` | `sisndmassmelt`, `snm`, `snmIs` | `Eday.snm`, `ImonAnt.snm`, `ImonGre.snm`, `LImon.snm`, `LImon.snmIs`, `SImon.sisndmassmelt` |
| `snrefr` | `snicefreez`, `snicefreezIs`, `snrefr` | `Eday.snrefr`, `ImonAnt.snicefreez`, `ImonGre.snicefreez`, `LImon.snicefreezIs` |
| `snw` | `sisnmass`, `snw` | `LImon.snw`, `SImon.sisnmass`, `day.snw` |
| `so` | `so`, `soga` | `Oday.so`, `Odec.so`, `Omon.so`, `Omon.soSouth30`, `Omon.soga` |
| `sos` | `sos`, `sosga` | `Oday.sos`, `Omon.sos`, `Omon.sosga`, `Omon.sosgaSouth30` |
| `ta` | `ta`, `ta6`, `ta700`, `ta850`, `taUTLS` | `6hrLev.ta`, `6hrPlevPt.ta`, `6hrPlevPt.ta7h`, `6hrPlevPt.taUTLS`, `AERmonZ.ta`, `Amon.ta`, `Amon.taSouth30`, `CF3hr.ta`, `CFday.ta`, `CFday.ta700`, `CFmon.ta`, `CFmon.taSouth30`, `CFsubhr.ta`, `E3hrPt.ta6`, `Eday.ta850`, `EdayZ.ta`, `day.ta` |
| `tas` | `tas`, `tasIs`, `tasmax`, `tasmaxCrop`, `tasmin`, `tasminCrop` | `3hr.tas`, `6hrPlev.tas`, `AERhr.tas`, `Amon.tas`, `Amon.tasSouth30`, `Amon.tasmax`, `Amon.tasmaxSouth30`, `Amon.tasmin`, `Amon.tasminSouth30`, `CFsubhr.tas`, `E1hr.tas`, `E1hr.tasSouth30`, `Eday.tasmaxCrop`, `Eday.tasminCrop`, `ImonAnt.tas`, `ImonGre.tas`, `LImon.tasIs`, `day.tas`, `day.tasmax`, `day.tasmin` |
| `thetao` | `thetao`, `thetaoga`, `thetaot2000`, `thetaot300`, `thetaot700` | `Emon.thetaot2000`, `Emon.thetaot300`, `Emon.thetaot700`, `Oday.thetao200`, `Odec.thetao`, `Omon.thetao`, `Omon.thetaoSouth30`, `Omon.thetaoga` |
| `tos` | `tos`, `tosga` | `3hr.tos`, `Oday.tos`, `Omon.tos`, `Omon.tosSouth30`, `Omon.tosga` |
| `ts` | `sitemptop`, `ts`, `tsIs`, `tsns` | `6hrPlev.ts`, `6hrPlevPt.ts`, `Amon.ts`, `Amon.tsSouth30`, `CF3hr.ts`, `CFsubhr.ts`, `E1hr.ts`, `Eday.ts`, `Eday.tsns`, `ImonAnt.ts`, `ImonGre.ts`, `LImon.tsIs`, `SIday.sitemptop`, `SImon.sitemptop`, `SImon.sitemptopSouth30` |
| `tsLut` | `tslsiLut` | `Emon.tslsiLut` |
| `tsn` | `tsn`, `tsnIs` | `Eday.tsn`, `ImonAnt.tsn`, `ImonGre.tsn`, `LImon.tsn`, `LImon.tsnIs` |
| `ua` | `ua`, `ua10`, `ua100m`, `ua200`, `ua6`, `uaUTLS` | `3hr.ua100m`, `6hrLev.ua`, `6hrPlevPt.ua`, `6hrPlevPt.ua200`, `6hrPlevPt.ua7h`, `6hrPlevPt.uaUTLS`, `AERday.ua10`, `AERmon.ua`, `AERmonZ.ua`, `Amon.ua`, `Amon.uaSouth30`, `CFday.ua`, `CFsubhr.ua`, `E1hr.ua100m`, `E3hrPt.ua6`, `EdayZ.ua`, `day.ua` |
| `va` | `va`, `va100m`, `va200`, `va6`, `vaUTLS` | `3hr.va100m`, `6hrLev.va`, `6hrPlevPt.va`, `6hrPlevPt.va200`, `6hrPlevPt.va7h`, `6hrPlevPt.vaUTLS`, `AERmon.va`, `AERmonZ.va`, `Amon.va`, `Amon.vaSouth30`, `CFday.va`, `CFsubhr.va`, `E1hr.va100m`, `E3hrPt.va6`, `day.va` |
| `vegHeight` | `vegHeight`, `vegHeightGrass`, `vegHeightShrub`, `vegHeightTree` | `Emon.vegHeight`, `Emon.vegHeightGrass`, `Emon.vegHeightShrub`, `Emon.vegHeightTree` |
| `wap` | `wap`, `wap500`, `wap6` | `Amon.wap`, `Amon.wapSouth30`, `CFday.wap`, `CFday.wap500`, `CFsubhr.wap`, `E3hrPt.wap6`, `day.wap` |
| `wbgt` | `wbgt2m`, `wbgt2mmax` | `day.wbgt2m`, `day.wbgt2mmax` |
| `wsg` | `wsgmax100m`, `wsgmax10m` | `E1hr.wsgmax100m`, `E1hr.wsgmax10m`, `Emon.wsgmax100m`, `Emon.wsgmax10m` |
| `zg` | `zg`, `zg10`, `zg1000`, `zg500`, `zg700`, `zg925` | `6hrLev.zg`, `6hrPlev.zg1000`, `6hrPlevPt.zg`, `6hrPlevPt.zg500`, `6hrPlevPt.zg700`, `6hrPlevPt.zg7h`, `6hrPlevPt.zg925`, `AERday.zg10`, `AERday.zg1000`, `AERday.zg500`, `AERmon.zg`, `AERmonZ.zg`, `Amon.zg`, `Amon.zgSouth30`, `CFday.zg`, `CFsubhr.zg`, `EdayZ.zg`, `day.zg` |
| `zmeso` | `zmeso`, `zmesoos` | `Oday.zmeso`, `Omon.zmeso`, `Omon.zmesoos` |
| `zmicro` | `zmicro`, `zmicroos` | `Oday.zmicro`, `Omon.zmicro`, `Omon.zmicroos` |
| `zmisc` | `zmisc`, `zmiscos` | `Omon.zmisc`, `Omon.zmiscos` |
| `zooc` | `zooc`, `zoocos` | `Oday.zooc`, `Omon.zooc`, `Omon.zoocos` |


<!-- links for referencing -->
[cmip7-cmor-tables]: https://github.com/WCRP-CMIP/cmip7-cmor-tables
[global-attributes-latest]: https://doi.org/10.5281/zenodo.17250296
[grids-guidance-latest]: https://doi.org/10.5281/zenodo.15697024
