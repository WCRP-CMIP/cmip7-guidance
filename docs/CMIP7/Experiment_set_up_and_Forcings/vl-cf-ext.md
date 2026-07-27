---
layout: default
title: "Experiment Setup and Forcings Guidance: vl-cf"
---

# Experiment Setup and Forcings Guidance: vl-cf-ext

Extension of `vl-cf` beyond 2100.

- Responsible activity: [PolMIP](./index.md#polmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/226](https://github.com/WCRP-CMIP/cmip7-guidance/issues/226)

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5281/zenodo.21487424](https://doi.org/10.5281/zenodo.21487424)

## Experiment set up

### Parent experiment and branching

The vl-cf-ext experiment branches from the [vl-cf](./vl-cf.md) experiment (part of [PolMIP](./index.md#polmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [vl-cf](./vl-cf.md) at 2100-12-31.

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

The vl-cf-ext experiment uses a mix of fixed and transient forcings.
The fixed forcings are: nitrogen deposition, ozone and stratospheric aerosol forcing.
The transient forcings are: aerosol optical properties, anthropogenic emissions, biomass burning emissions, greenhouse
gas concentrations, land use, population density and solar.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [scen7-vl-ext](./scen7-vl-ext.md) for biomass burning emissions, land use, stratospheric aerosol
  forcing, solar, aerosol optical properties, population density, ozone, nitrogen deposition 

#### Data described on other experiment pages with modifications you have to make

For the following forcings, please use data from the specified experiments with the specified modifications.

- for anthropogenic emissions, use the forcings from [scen7-vl-ext](./scen7-vl-ext.md)
  for everything except CO<sub>2</sub>.

#### Data available via input4MIPs

##### Versions to use

For each forcing available via input4MIPs, we provide the version(s), called 'source ID(s)' in the file's metadata,
which should be used when running this simulation.
The recommended version(s) are the version(s) we recommend using.
Any acceptable versions can be used (you are not obliged to re-run simulations that used them).
Please see the guidance pages linked under each forcing for full details.

- anthropogenic emissions of CO<sub>2</sub>
    - recommended source IDs: IIASA-IAMC-vl-cf-ext-1-1-1, IIASA-IAMC-1-1-1
<!---
    TODO
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)
-->

- greenhouse gas concentrations
    - recommended source IDs: CR-vl-cf-ext-1-1-0
<!---
    TODO
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)
-->

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "anthropogenic-slcf-co2-emissions": {
        "human_readable_name": "anthropogenic emissions",
        "recommended_versions": [
            "IIASA-IAMC-vl-cf-ext-1-1-1",
            "IIASA-IAMC-1-1-1"
        ],
        "acceptable_versions": []
    },
    "greenhouse-gas-concentrations": {
        "human_readable_name": "greenhouse gas concentrations",
        "recommended_versions": [
            "CR-vl-cf-ext-1-1-0"
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

EXPERIMENT_NAME="vl-cf-ext"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:CR-vl-cf-ext-1-1-0,IIASA-IAMC-1-1-1,IIASA-IAMC-vl-cf-ext-1-1-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.


