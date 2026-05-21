---
layout: default
title: "Experiment Setup and Forcings Guidance: amip"
---

# Experiment Setup and Forcings Guidance: amip

Simulation of the climate of the recent past with prescribed sea surface temperatures and sea ice concentrations.

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Experiment set up

### Parent experiment and branching

amip does not have a parent experiment.

### Output time axis

Your output time axis must start on 1979-01-01 and must end on 2021-12-31.
You must perform the full simulation i.e. 43 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The amip experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions, land use, greenhouse gas
  concentrations, stratospheric aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties,
  population density

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

##### Versions to use

For each forcing available via input4MIPs, we provide the version(s), called 'source ID(s)' in the file's metadata,
which should be used when running this simulation.
The recommended version(s) are the version(s) we recommend using.
Any acceptable versions can be used (you are not obliged to re-run simulations that used them).
Please see the guidance pages linked under each forcing for full details.

- AMIP sea-surface temperature and sea-ice boundary forcing
    - recommended source IDs: PCMDI-AMIP-1-1-10
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/amip-sst-sea-ice-boundary-forcing](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/amip-sst-sea-ice-boundary-forcing/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "amip-sst-sea-ice-boundary-forcing": {
        "human_readable_name": "AMIP sea-surface temperature and sea-ice boundary forcing",
        "recommended_versions": [
            "PCMDI-AMIP-1-1-10"
        ],
        "acceptable_versions": []
    }
}
```

###### Download via esgpull

The data is on ESGF and searchable
[via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.

If you install [esgpull](https://esgf.github.io/esgf-download/), you can download all the data associated with the
recommended source IDs above using the script given below.
Note that this will download all the data associated with these source IDs, which is likely to be much more data than
you actually need to run your model.

```bash
#!/bin/bash

EXPERIMENT_NAME="amip"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:PCMDI-AMIP-1-1-10
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
