---
layout: default
title: CMIP7 Frequently Asked Questions (FAQ)
---

If you cannot find the answer you need on this page, please see the [Discussions section](https://github.com/WCRP-CMIP/cmip7-guidance/discussions/categories/q-a) of this repository.
If the answer isn't there either, please create a new discussion and we will respond to you as soon as possible. 

## CVs

<!-- ## CMOR tables -->
## Standardizing (CMORizing) data

### Does cmip7repack duplicate the amount of data?

**No.**
Although each file is duplicated as it is being repacked, the default behaviour of the `cmip7repack` tool is to overwrite the original file. 
You can choose to also keep the original file. 
Repacking doesn’t change the information in the file; it is an internal technical restructuring to allow the file to be accessed remotely. 
There should be no need to keep the un-repacked versions.

The purpose of this change is to support the paradigm, which is increasingly prevalent for access of data via HTTP, of data access via range-get (range query) operations that retrieve a small chunk of data. 
Repacking the data greatly improves the efficiency of these operations. 
Not repacking the data can lead to prohibitively slow access, which may in turn degrade access for other users who are accessing data from the same node (server).

Further guidance on `cmip7repack` can be [found here](Guidance_for_modellers.md/#6b-cmip7repack).



## ESGF

### Will CMIP5 data no longer be accessible if it is not being migrated to the ESGF Next Generation (ESGF-NG) infrastructure?

**Not necessarily.**
ESGF currently lacks the resources to reorganize the CMIP5 data into the new structure required by ESGF-NG.
However there are sites that will continue to provide access to CMIP5 data, although they will not be part of ESGF-NG. 


### Question
Answer



