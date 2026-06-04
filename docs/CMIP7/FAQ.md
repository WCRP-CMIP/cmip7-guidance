---
layout: default
title: CMIP7 Frequently Asked Questions (FAQ)
---


!!! info ""
    If you cannot find the answer you need on this page, please see the [Discussions section](https://github.com/WCRP-CMIP/cmip7-guidance/discussions/categories/q-a) of the guidance repository.
    If the answer isn't there either, please create a new discussion and we will respond to you as soon as possible. 


## Controlled Vocabularies (CVs)


### During or before publication, how will data centres verify that grids have been registered?

The grid registration form will list grids that have already been registered. 
If your grid has not been registered, you can register it and a new `grid_label` will be assigned.
There will be an initial period where the first people to register their grids have to register everything, but these grids will then appear for others to use.
Importantly, the `grid_label` is a [high-severity QC check](QC_checks.md), meaning that netCDF files without a valid registered `grid_label` cannot be published.


### Can the same native grid, if used by multiple models, be registered multiple times?

**No.**
The essential model documentation has a section describing grids that allows you to uniquely identify any grid. 
This should remove the chance for duplicate registration. 
It includes information about the projection, the stagger location of variables, anchor reference grid cell location, etc.
There should be no confusion between grids and there is no distinction in the grid description itself between native or non-native grid. 



<!-- ## CMOR tables -->
## Standardizing (CMORizing) data


### Has CMOR been updated to accommodate CMIP7's metadata requirements?

**Yes.**
The minimum recommended version is given in the [CMOR guidance](Guidance_for_modellers.md/#6a-cmor) section, along with further information about using CMOR.
A recent CMOR version is required in order to output the global attributes correctly and to read the MIP tables (CMOR tables) correctly.
The [CMOR usage examples](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/cmor_demo.ipynb) show how to use CMOR with the [new tables](https://github.com/WCRP-CMIP/cmip7-cmor-tables/) and [branded variables](Branded_Variables.md).


### Does cmip7repack duplicate the amount of data?

**No.**
Although each file is duplicated as it is being repacked, the default behaviour of the [`cmip7repack` tool](Guidance_for_modellers.md/#6b-cmip7repack) is to overwrite the original file. 
You can choose to also keep the original file. 
Repacking doesn’t change the information in the file; it is an internal technical restructuring to allow the file to be accessed remotely. 
There should be no need to keep the un-repacked versions.


### Why is repacking necessary?

The purpose of this change is to support the paradigm, which is increasingly prevalent for access of data via HTTP, of data access via range-get (range query) operations that retrieve a small chunk of data. 
Repacking the data greatly improves the efficiency of these operations. 
Not repacking the data can lead to prohibitively slow access, which may in turn degrade access for other users who are accessing data from the same node (server).


### Is CMIP7 repacking integrated into CMOR?

Improved chunking to support CMIP7's repacking requirement was introduced in [CMOR 3.14.0](https://github.com/PCMDI/cmor/releases/3.14.0) (see the [CMOR guidance](Guidance_for_modellers.md/#6a-cmor) section for further information about using CMOR).
However if netCDF files written by CMOR are subsequently concatenated (e.g., if one-year files are concatenated to a single file covering an experiment's whole time period) then it is still necessary to run `cmip7repack` on the concatenated file.
The [`check_cmip7_packing` tool](Guidance_for_modellers.md/#6b-cmip7repack) can be used to confirm that a netCDF file is compliant with the repacking requirement.


### If model documentation, grid registration, and repacking are mandatory, isn’t there a risk that this is too much of an obstacle for modeling groups without the resources to prepare everything?

From the experience of serving the data to the community over the years, when the data is in a ready format for analysis you get much more traction from user community to analyse the data. 
We appreciate it is a lot of work to get the data into that format, and are mindful of this cost to modelling groups.
It does make a huge difference and is worthwhile doing.



## ESGF


### Is the new generation ESGF only for CMIP7 data?

**No**. 
ESGF-NG is for all data, although there is a legacy issue for older data. 
Given the resources available, CMIP5 data will not be migrated. 
However, in addition to CMIP7, CORDEX-CMIP6 and obs4MIPs are planned. 
The ESGF-NG system is designed to be more modular, allowing data beyond CMIP7 to be added.


### Will CMIP5 data no longer be accessible if it is not being migrated to the ESGF Next Generation infrastructure?

**Not necessarily.**
ESGF currently lacks the resources to reorganize the CMIP5 data into the new structure required by ESGF-NG.
However there are sites that will continue to provide access to CMIP5 data, although they will not be part of ESGF-NG. 


### Will the current ESGF system be maintained or will everything migrate to the new ESGF-NG system, meaning we need to change our workflows?

We are migrating everything, but there is good reason for that. 
There is significant legacy in what we have. 
The current ESGF system we have was put together in 2009, over 15 years ago, which is a very long time for a software system. 
We have had to make changes but are mindful of client tooling. 
For instance, ESG publish is still the same interface - it appears the same but the re-engineering is behind the the interface. 
ESG Pull is another example where the existing facility is being re-engineered for the new system.
See the [ESGF guidance](Guidance_for_ESGF.md) for further details.


### Will the ESGF-publisher be the same for CMIP6Plus and CMIP7 data?

**Yes.**
With this modular architecture the idea is you can use the same publishing software with the concept of plugins. 
There is a plugin for each set of CVs, each DRS. 
There is one for CMIP6, one for CMIP7, one for CORDEX-CMIP6, etc.


### How does my institute become an ESGF node?

If you are part of a modelling centre that would like to become an ESGF node, including contributing compute/storage and/or replication capacity to the community infrastructure, please contact <cmip-ipo@esa.int>.


## Energy consumption and carbon footprint


### Will the computational data collection include executable compilation, trial and development runs, spin-up, pre-processing, and post-processing such as CMORization?

**No.**
We are not including the compilation nor any type of post-processing in the computational analysis. 
But for the simulation part, it does include any trial or development runs and the tuning simulations.


### If the same model is run on different HPC platforms, how will this be accounted for?

On the spreadsheet that has been shared among modelling groups, there are links for different platforms you might use.

