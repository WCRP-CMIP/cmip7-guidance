---
layout: default
title: CMIP7 Frequently Asked Questions (FAQ)
---

If you cannot find the answer you need on this page, please see the [Discussions section](https://github.com/WCRP-CMIP/cmip7-guidance/discussions/categories/q-a) of this repository.
If the answer isn't there either, please create a new discussion and we will respond to you as soon as possible. 

## CVs

<!-- ## CMOR tables -->
## Standardizing (CMORizing) data

### Has CMOR been updated to accommodate CMIP7's metadata requirements?

**Yes.**
The minimum CMOR version required for CMIP7 production is [CMOR 3.14.2](https://github.com/PCMDI/cmor/releases/3.14.2) in order to output the global attributes correctly and to read the MIP tables (CMOR tables) correctly.
The [CMOR usage examples](https://github.com/WCRP-CMIP/cmip7-cmor-tables/blob/main/cmor_demo.ipynb) show how to use CMOR with the new tables and branded variables.
See also the [CMOR guidance](Guidance_for_modellers.md/#6a-cmor) section of these pages.


### Does cmip7repack duplicate the amount of data?

**No.**
Although each file is duplicated as it is being repacked, the default behaviour of the [`cmip7repack` tool](Guidance_for_modellers.md/#6b-cmip7repack) is to overwrite the original file. 
You can choose to also keep the original file. 
Repacking doesn’t change the information in the file; it is an internal technical restructuring to allow the file to be accessed remotely. 
There should be no need to keep the un-repacked versions.

The purpose of this change is to support the paradigm, which is increasingly prevalent for access of data via HTTP, of data access via range-get (range query) operations that retrieve a small chunk of data. 
Repacking the data greatly improves the efficiency of these operations. 
Not repacking the data can lead to prohibitively slow access, which may in turn degrade access for other users who are accessing data from the same node (server).


### Why are we not integrating repacking into CMOR?

Improved chunking to support CMIP7's repacking requirement has been introduced in [CMOR 3.14.0](https://github.com/PCMDI/cmor/releases/3.14.0).
However if netCDF files written by CMOR are subsequently concatenated (e.g., if one-year files are concatenated to a single file covering an experiment's whole time period) then it is still necessary to run `cmip7repack` on the concatenated file.
The [`check_cmip7_packing` tool](Guidance_for_modellers.md/#6b-cmip7repack) can be used to confirm compliance with the repacking requirement.


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

Unfortunately we are having to migrate everything, but there is good reason for that. 
There is significant legacy in what we have. 
The current ESGF system we have was put together in 2009, over 15 years ago, which is a very long time for a software system. 
We have had to make changes but are mindful of client tooling. 
For instance, ESG publish is still the same interface - it appears the same but the re-engineering is behind the the interface. 
ESG Pull is another example where the existing facility is being re-engineered for the new system.
