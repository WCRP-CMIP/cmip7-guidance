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
