---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-scen7-hl-ext"
---

# Experiment Setup and Forcings Guidance: esm-scen7-hl-ext

Extension of `esm-scen7-hl` beyond 2100.

- Responsible activity: [ScenarioMIP](./index.md#scenariomip)
- Tier: See [ScenarioMIP](./index.md#scenariomip) information
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/187](https://github.com/WCRP-CMIP/cmip7-guidance/issues/187)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/egusphere-2024-3765](https://doi.org/10.5194/egusphere-2024-3765)

## Experiment set up

### Parent experiment and branching

The esm-scen7-hl-ext experiment branches from the [esm-scen7-hl](./esm-scen7-hl.md) experiment (part of
[ScenarioMIP](./index.md#scenariomip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-scen7-hl](./esm-scen7-hl.md) at 2100-12-31.

### Output time axis

Your output time axis must start on 2101-01-01 and must not end later than 2500-12-31.
You must perform at least 50 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-scen7-hl-ext experiment uses a mix of fixed and transient forcings.
Please see the data sections below for details.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

No data is described on other experiment pages.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for stratospheric aerosol forcing, use the forcings from [esm-scen7-hl](./esm-scen7-hl.md) but hold forcings constant
  at 2100 levels
- for ozone, use the forcings from [esm-scen7-hl](./esm-scen7-hl.md) but hold forcings constant at 2100 levels
- for nitrogen deposition, use the forcings from [esm-scen7-hl](./esm-scen7-hl.md) but hold forcings constant at 2100
  levels

#### Data available via input4MIPs

##### Versions to use

For each forcing available via input4MIPs, we provide the version(s), called 'source ID(s)' in the file's metadata,
which should be used when running this simulation.
The recommended version(s) are the version(s) we recommend using.
Any acceptable versions can be used (you are not obliged to re-run simulations that used them).
Please see the guidance pages linked under each forcing for full details.

- anthropogenic emissions
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)

- biomass burning emissions
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/open-biomass-burning-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)

- land use
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/land-use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)

- greenhouse gas concentrations
    - recommended source IDs: CR-esm-hl-ext-1-1-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)

- solar
    - recommended source IDs: SOLARIS-HEPPA-ScenarioMIP-4-6
    - notes: If running beyond the time period provided in the data, repeat the data, starting with 24 August 2038 (i.e.
      for 2300-01-01, use data from 2038-08-24, for 2300-01-02, use data from 2038-08-25 etc.).
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)

- population density
    - recommended source IDs: PIK-esm-hl-ext-1-0-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/population](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "anthropogenic-slcf-co2-emissions": {
        "human_readable_name": "anthropogenic emissions",
        "recommended_versions": [
            "not-available-yet"
        ],
        "acceptable_versions": []
    },
    "open-biomass-burning-emissions": {
        "human_readable_name": "biomass burning emissions",
        "recommended_versions": [
            "not-available-yet"
        ],
        "acceptable_versions": []
    },
    "land-use": {
        "human_readable_name": "land use",
        "recommended_versions": [
            "not-available-yet"
        ],
        "acceptable_versions": []
    },
    "greenhouse-gas-concentrations": {
        "human_readable_name": "greenhouse gas concentrations",
        "recommended_versions": [
            "CR-esm-hl-ext-1-1-0"
        ],
        "acceptable_versions": []
    },
    "solar": {
        "human_readable_name": "solar",
        "recommended_versions": [
            "SOLARIS-HEPPA-ScenarioMIP-4-6"
        ],
        "acceptable_versions": []
    },
    "population": {
        "human_readable_name": "population density",
        "recommended_versions": [
            "PIK-esm-hl-ext-1-0-0"
        ],
        "acceptable_versions": []
    }
}
```

###### Download via esgpull

The available data is on ESGF and searchable
[via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.

If you install [esgpull](https://esgf.github.io/esgf-download/), you can download all the data associated with the
recommended source IDs above using the script given below.
Note that this will download all the data associated with these source IDs, which is likely to be much more data than
you actually need to run your model.

```bash
#!/bin/bash

EXPERIMENT_NAME="esm-scen7-hl-ext"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CR-esm-hl-ext-1-1-0,PIK-esm-hl-ext-1-0-0,SOLARIS-HEPPA-ScenarioMIP-4-6
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

- aerosol optical properties
    - notes: In preparation, waiting on the emissions to be available
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/aerosol-optical-properties-macv2-sp](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/)
