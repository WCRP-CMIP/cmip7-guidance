---
layout: default
title: "Experiment Setup and Forcings Guidance: dcppB-forecast-cmip6"
---

# Experiment Setup and Forcings Guidance: dcppB-forecast-cmip6

Simulation to examine forced climate change and variability up to 10 years into the future.
This forecast is initialised from observations with forcing from ssp245 applied over its extent.

- Responsible activity: [DCPP](./index.md#dcpp)
- Tier: 1
- MIP co-chair review: No review initiated yet

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following URLs:

- [https://doi.org/10.5194/gmd-9-3751-2016](https://doi.org/10.5194/gmd-9-3751-2016)

## Experiment set up

This is a CMIP6-era experiment that uses CMIP6-era forcings.
For detailed guidance about the experiment setup, please see the
[DCPP guidance pages](https://www.wcrp-esmo.org/projects-and-panels/dcpp/dcpp-resources) (look at the "DCPP contribution
to CMIP7 AFT" header).
For guidance on how to set the `variant_label` of your output, please the
[dedicated guidance](../Global_Attributes.md#5-notes-on-variant_label).

### Parent experiment and branching

dcppB-forecast-cmip6 does not have a parent experiment.

### Output time axis

Your output time axis must start on 2025-01-01 and must end on 2034-12-31.
You must perform the full simulation i.e. 10 simulation years.

### Minimum ensemble size

At least 10 ensemble members are required.

## Forcings

No forcings information is provided for this experiment.
See the other guidance for experiment details.
