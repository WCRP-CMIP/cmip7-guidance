---
layout: default
title: "Experiment Setup and Forcings Guidance: scen7-m"
---

# Experiment Setup and Forcings Guidance: scen7-m

CMIP7 ScenarioMIP Medium emission scenario - A middle scenario exploring consequences of extending current policies and
trends into the future.
Run with prescribed carbon dioxide concentrations (for prescribed carbon dioxide emissions, see `esm-scen7-m`).

- Responsible activity: [ScenarioMIP](./index.md#scenariomip)
- Tier: See [ScenarioMIP](./index.md#scenariomip) information
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/egusphere-2024-3765](https://doi.org/10.5194/egusphere-2024-3765)

## Experiment set up

### Parent experiment and branching

The scen7-m experiment branches from the [historical](./historical.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [historical](./historical.md) at 2021-12-31.

### Output time axis

Your output time axis must start on 2022-01-01 and must end on 2100-12-31.
You must perform the full simulation i.e. 79 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The scen7-m experiment is a transient forcings experiment.

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
    - recommended source IDs: IIASA-IAMC-m-1-1-1, IIASA-IAMC-1-1-1
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)

- biomass burning emissions
    - recommended source IDs: IIASA-IAMC-m-1-1-1, IIASA-IAMC-1-1-1
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/open-biomass-burning-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)

- land use
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/land-use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)

- greenhouse gas concentrations
    - recommended source IDs: CR-m-1-1-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)

- stratospheric aerosol forcing
    - recommended source IDs: UOEXETER-ScenarioMIP-2-2-2
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/stratospheric-volcanic-so2-emissions-aod](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/)

- ozone
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/ozone](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/ozone/)

- nitrogen deposition
    - recommended source IDs: not-available-yet
    - notes: In preparation
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/nitrogen-deposition](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/nitrogen-deposition/)

- solar
    - recommended source IDs: SOLARIS-HEPPA-ScenarioMIP-4-6
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)

- population density
    - recommended source IDs: PIK-m-1-0-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/population](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "anthropogenic-slcf-co2-emissions": {
        "human_readable_name": "anthropogenic emissions",
        "recommended_versions": [
            "IIASA-IAMC-m-1-1-1",
            "IIASA-IAMC-1-1-1"
        ],
        "acceptable_versions": []
    },
    "open-biomass-burning-emissions": {
        "human_readable_name": "biomass burning emissions",
        "recommended_versions": [
            "IIASA-IAMC-m-1-1-1",
            "IIASA-IAMC-1-1-1"
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
            "CR-m-1-1-0"
        ],
        "acceptable_versions": []
    },
    "stratospheric-volcanic-so2-emissions-aod": {
        "human_readable_name": "stratospheric aerosol forcing",
        "recommended_versions": [
            "UOEXETER-ScenarioMIP-2-2-2"
        ],
        "acceptable_versions": []
    },
    "ozone": {
        "human_readable_name": "ozone",
        "recommended_versions": [
            "not-available-yet"
        ],
        "acceptable_versions": []
    },
    "nitrogen-deposition": {
        "human_readable_name": "nitrogen deposition",
        "recommended_versions": [
            "not-available-yet"
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
            "PIK-m-1-0-0"
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

EXPERIMENT_NAME="scen7-m"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CR-m-1-1-0,IIASA-IAMC-1-1-1,IIASA-IAMC-m-1-1-1,PIK-m-1-0-0,SOLARIS-HEPPA-ScenarioMIP-4-6,UOEXETER-ScenarioMIP-2-2-2
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
