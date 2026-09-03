---
layout: default
title: "Experiment Setup and Forcings Guidance: vl-cf"
---

# Experiment Setup and Forcings Guidance: vl-cf

Counterfactual emissions pathway that is as physically consistent as possible, while aiming for global surface air
temperature to peak at 1.5C and stabilise or slowly decline.

- Responsible activity: [PolMIP](./index.md#polmip)
- Tier: 2
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/226](https://github.com/WCRP-CMIP/cmip7-guidance/issues/226)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.1038/s41467-025-62983-5](https://doi.org/10.1038/s41467-025-62983-5)
- [https://doi.org/10.1016/j.eng.2024.11.023](https://doi.org/10.1016/j.eng.2024.11.023)
- [https://doi.org/10.1016/j.accre.2023.11.004](https://doi.org/10.1016/j.accre.2023.11.004)
- [https://dx.doi.org/10.1088/1748-9326/adfbfb](https://dx.doi.org/10.1088/1748-9326/adfbfb)
- [https://doi.org/10.5281/zenodo.21487424](https://doi.org/10.5281/zenodo.21487424)

## Experiment set up

### Parent experiment and branching

The vl-cf experiment branches from the [historical](./historical.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [historical](./historical.md) at the start of year 2016 (i.e. 2016-01-01).

### Output time axis

Your output time axis must start on 2016-01-01 and must end on 2100-12-31.
You must perform the full simulation i.e. 85 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The vl-cf experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [historical](./historical.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric aerosol
  forcing, ozone, nitrogen deposition, solar, aerosol optical properties, population density
- [scen7-vl](./scen7-vl.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric aerosol
  forcing, ozone, nitrogen deposition, solar, aerosol optical properties, population density

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

- greenhouse gas concentrations
    - recommended source IDs: CR-vl-cf-1-1-0
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "greenhouse-gas-concentrations": {
        "human_readable_name": "greenhouse gas concentrations",
        "recommended_versions": [
            "CR-vl-cf-1-1-0"
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

EXPERIMENT_NAME="vl-cf"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CR-vl-cf-1-1-0
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
