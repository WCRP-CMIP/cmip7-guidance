---
layout: default
title: scen7-vl Experiment Setup and Forcings Guidance
---

# scen7-vl Experiment Setup and Forcings Guidance

<!-- TODO: get this information from esgvoc (add reference URLs at that point) -->
Responsible activity: ScenarioMIP

<!-- TODO: get this one line description from esgvoc -->
PLACEHOLDER TBC. CMIP7 ScenarioMIP very low emissions future. Run with prescribed carbon dioxide concentrations (for prescribed carbon dioxide emissions, see `esm-scen7-vl`).

## Experiment set up

The CMIP7 very low scenario simulation uses a specific set of forcings (see [forcings](#forcings)).
These should be applied as transient (i.e. time-changing) forcings over the length of the simulation.
<!-- TODO: consider whether we can generate these sentences automatically based on esgvoc -->
The simulation output should start on 2022-01-01 and end on 2100-12-31.
Only one ensemble member is required.

### Parent experiment

<!--
    TODO: use esgvoc to fill out the template
    `<experiment-name>` branches from the `<parent-experiment-name>` simulation (part of `<parent-experiment-activity>`).
-->
`scen7-vl` branches from the `historical` simulation (part of `CMIP`).
<!-- TODO: get branch information from esgvoc -->
Branch from `historical` at 2022-01-01.

## Forcings

### General headlines

The `scen7-vl` experiment is a time-varying forcings experiment.

### Notes

<!-- TODO: auto-generate -->
The following pages give further information on each forcing:

- anthropogenic emissions: [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)
- biomass burning emissions: [input4mips-cvs.readthedocs.io/dataset-overviews/open-biomass-burning-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/open-biomass-burning-emissions/)
- land use: [input4mips-cvs.readthedocs.io/dataset-overviews/land-use](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/)
- greenhouse gas concentrations: [input4mips-cvs.readthedocs.io/dataset-overviews/greenhouse-gas-concentrations](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/greenhouse-gas-concentrations/)
- stratospheric aerosol forcing: [input4mips-cvs.readthedocs.io/dataset-overviews/stratospheric-volcanic-so2-emissions-aod](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/stratospheric-volcanic-so2-emissions-aod/)
- ozone: [input4mips-cvs.readthedocs.io/dataset-overviews/ozone](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/ozone/)
- nitrogen deposition: [input4mips-cvs.readthedocs.io/dataset-overviews/nitrogen-deposition](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/nitrogen-deposition/)
- solar: [input4mips-cvs.readthedocs.io/dataset-overviews/solar](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/solar/)
- aerosol optical properties: [input4mips-cvs.readthedocs.io/dataset-overviews/aerosol-optical-properties-macv2-sp](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/)
- population density: [input4mips-cvs.readthedocs.io/dataset-overviews/population](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/population/)

### Versions to use

The forcings relevant for this simulation are listed below.
For each forcing, we provide the version(s), in the form of "source ID(s)",
which should be used when running this simulation.

<!-- TODO: auto-generate this -->
```json
{
    "anthropogenic-emissions": ["IIASA-IAMC-vl-1-0-0"],
    "biomass-burning-emissions": ["IIASA-IAMC-vl-1-0-0"],
    "land-use": "not-available-yet",
    "greenhouse-gas-concentrations": ["CR-vl-1-0-0"],
    "stratospheric-aerosol-forcing ": ["UOEXETER-ScenarioMIP-2-2-2"],
    "ozone": "not-available-yet",
    "nitrogen-deposition": "not-available-yet",
    "solar": ["SOLARIS-HEPPA-ScenarioMIP-4-6"],
    "aerosol-optical-properties": null,
    "population-density": ["PIK-vl-1-0-0"]
}
```

### Getting the data

The data is available on ESGF and searchable [via metagrid](https://esgf-node.ornl.gov/search?project=input4MIPs&versionType=all&activeFacets=%7B%22mip_era%22%3A%22CMIP7%22%7D),
although this method of finding and downloading the data can involve a lot of clicking.
Having said this, please also note: the aerosol optical properties based on the MACv2-SP parameterisation are not distrubuted via the ESGF.
<!-- TODO: add CI to check all URLs are live -->
Please see [their specific guidance section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/aerosol-optical-properties-macv2-sp/#datasets-for-cmip7-phases)
for data access information.

If you install [esgpull](https://esgf.github.io/esgf-download/),
you can download all the data associated with the source IDs above with the script shown below.
Note that this will download all the data associated with these source IDs,
which is likely to be much more data than you actually need to run your model.

<!-- TODO: auto-generate this -->
```bash
#!/bin/bash

EXPERIMENT_NAME="scen7-vl"

esgpull add --track --tag ${EXPERIMENT_NAME} source_id:IIASA-IAMC-vl-1-0-0,IIASA-IAMC-vl-1-0-0,CR-vl-1-0-0,UOEXETER-ScenarioMIP-2-2-2,SOLARIS-HEPPA-ScenarioMIP-4-6,PIK-vl-1-0-0
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```
