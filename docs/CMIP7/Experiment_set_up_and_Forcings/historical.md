---
layout: default
title: "Experiment Setup and Forcings Guidance: historical"
---

# Experiment Setup and Forcings Guidance: historical

Simulation of the climate of the recent past (1850 onwards) with prescribed carbon dioxide concentrations.

- Responsible activity: [CMIP](./index.md#cmip)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-18-6671-2025](https://doi.org/10.5194/gmd-18-6671-2025)

## Paired experiments

- [esm-hist](./esm-hist.md) is the emissions-driven counterpart to this concentration-driven experiment.

## Experiment set up

### Parent experiment and branching

The historical experiment branches from the [piControl](./picontrol.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [piControl](./picontrol.md) at a time of your choosing.

### Output time axis

Your output time axis must start on 1850-01-01 and must end on 2021-12-31.
You must perform the full simulation i.e. 172 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The historical experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

No data is described on other experiment pages.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

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

- anthropogenic emissions
    - recommended source IDs: CEDS-CMIP-2025-04-18, CEDS-CMIP-2025-04-18-supplemental
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)

- biomass burning emissions
    - recommended source IDs: DRES-CMIP-BB4CMIP7-2-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/open-biomass-burning-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)

- land use
    - recommended source IDs: UofMD-landState-3-1-2
    - acceptable source IDs: UofMD-landState-3-1-1
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/land-use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)

- greenhouse gas concentrations
    - recommended source IDs: CR-CMIP-1-0-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)

- stratospheric aerosol forcing
    - recommended source IDs: UOEXETER-CMIP-2-2-1
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/stratospheric-volcanic-so2-emissions-aod](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/)

- ozone
    - recommended source IDs: FZJ-CMIP-ozone-2-0
    - acceptable source IDs: FZJ-CMIP-ozone-1-2
    - notes: the ozone forcing should come from files with the source ID `FZJ-CMIP-ozone-2-0`.
      The CMIP Panel co-chairs are recommending that simulations based on `FZJ-CMIP-ozone-1-2` are re-run if possible.
      `FZJ-CMIP-ozone-2-0` was released quite late, so if you have simulations based on `FZJ-CMIP-ozone-1-2`, these
      would be of interest to the Forcings Task Team so please publish them
      ([discussion of how to set the value for the forcing 'f' identifier in such files is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/ozone](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/ozone/)

- nitrogen deposition
    - recommended source IDs: FZJ-CMIP-nitrogen-2-0
    - acceptable source IDs: FZJ-CMIP-nitrogen-1-2
    - notes: the nitrogen deposition forcing should come from files with the source ID `FZJ-CMIP-nitrogen-2-0`.
      `FZJ-CMIP-nitrogen-2-0` was released quite late and the impact of the change is likely to be small, so if you have
      simulations based on `FZJ-CMIP-nitrogen-1-2`, you do not need to re-run them.
      Even if you have run pre-industrial control simulations with `FZJ-CMIP-nitrogen-1-2`, it is recommended to
      nonetheless run historical simulations with `FZJ-CMIP-nitrogen-2-0` because the discontinuity going from
      pre-industrial control `FZJ-CMIP-nitrogen-1-2` to historical `FZJ-CMIP-nitrogen-2-0` is expected to introduce
      smaller issues than using `FZJ-CMIP-nitrogen-1-2` over the historical period.
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/nitrogen-deposition](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/nitrogen-deposition/)

- solar
    - recommended source IDs: SOLARIS-HEPPA-CMIP-4-6
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)

- population density
    - recommended source IDs: PIK-CMIP-1-0-1
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/population](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "anthropogenic-slcf-co2-emissions": {
        "human_readable_name": "anthropogenic emissions",
        "recommended_versions": [
            "CEDS-CMIP-2025-04-18",
            "CEDS-CMIP-2025-04-18-supplemental"
        ],
        "acceptable_versions": []
    },
    "open-biomass-burning-emissions": {
        "human_readable_name": "biomass burning emissions",
        "recommended_versions": [
            "DRES-CMIP-BB4CMIP7-2-0"
        ],
        "acceptable_versions": []
    },
    "land-use": {
        "human_readable_name": "land use",
        "recommended_versions": [
            "UofMD-landState-3-1-2"
        ],
        "acceptable_versions": [
            "UofMD-landState-3-1-1"
        ]
    },
    "greenhouse-gas-concentrations": {
        "human_readable_name": "greenhouse gas concentrations",
        "recommended_versions": [
            "CR-CMIP-1-0-0"
        ],
        "acceptable_versions": []
    },
    "stratospheric-volcanic-so2-emissions-aod": {
        "human_readable_name": "stratospheric aerosol forcing",
        "recommended_versions": [
            "UOEXETER-CMIP-2-2-1"
        ],
        "acceptable_versions": []
    },
    "ozone": {
        "human_readable_name": "ozone",
        "recommended_versions": [
            "FZJ-CMIP-ozone-2-0"
        ],
        "acceptable_versions": [
            "FZJ-CMIP-ozone-1-2"
        ]
    },
    "nitrogen-deposition": {
        "human_readable_name": "nitrogen deposition",
        "recommended_versions": [
            "FZJ-CMIP-nitrogen-2-0"
        ],
        "acceptable_versions": [
            "FZJ-CMIP-nitrogen-1-2"
        ]
    },
    "solar": {
        "human_readable_name": "solar",
        "recommended_versions": [
            "SOLARIS-HEPPA-CMIP-4-6"
        ],
        "acceptable_versions": []
    },
    "population": {
        "human_readable_name": "population density",
        "recommended_versions": [
            "PIK-CMIP-1-0-1"
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

EXPERIMENT_NAME="historical"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CEDS-CMIP-2025-04-18,CEDS-CMIP-2025-04-18-supplemental,CR-CMIP-1-0-0,DRES-CMIP-BB4CMIP7-2-0,FZJ-CMIP-nitrogen-2-0,FZJ-CMIP-ozone-2-0,PIK-CMIP-1-0-1,SOLARIS-HEPPA-CMIP-4-6,UOEXETER-CMIP-2-2-1,UofMD-landState-3-1-2
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

- aerosol optical properties
    - notes: Please see this
      [specific guidance section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#datasets-for-cmip7-phases)
      for data access and version information.
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/aerosol-optical-properties-macv2-sp](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/)
