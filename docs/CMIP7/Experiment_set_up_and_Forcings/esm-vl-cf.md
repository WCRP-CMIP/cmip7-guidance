---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-vl-cf"
---

# Experiment Setup and Forcings Guidance: esm-vl-cf

Counterfactual emissions pathway that is as physically consistent as possible, while aiming for global surface air
temperature to peak at 1.5C and stabilise or slowly decline.
Run with prescribed carbon dioxide emissions (for prescribed carbon dioxide concentrations, see `vl-cf`).

- Responsible activity: [PolMIP](./index.md#polmip)
- Tier: 1
- MIP co-chair review: **In progress** see
  [https://github.com/WCRP-CMIP/cmip7-guidance/issues/226](https://github.com/WCRP-CMIP/cmip7-guidance/issues/226)
- Tags:

This page is intended to help with implementation.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

For the full background of the experiment, please see the following references:

- Zhong, J., Zhang, X., Zhang, D., Wang, D., Guo, L., Peng, H., Huang, X., Wang, Z., Lei, Y., Lu, Y., Qu, C., Zhang, X.,
  & Miao, C. (2025).
  Plausible global emissions scenario for 2 °C aligned with China’s net-zero pathway.
  Nature Communications, 16(1). https://doi.org/10.1038/s41467-025-62983-5
- Zhang, X., Zhong, J., Zhang, X., Zhang, D., Miao, C., Wang, D., & Guo, L. (2025).
  China Can Achieve Carbon Neutrality in Line with the Paris Agreement’s 2 °C Target: Navigating Global Emissions
  Scenarios, Warming Levels, and Extreme Event Projections.
  Engineering, 44, 207–214. https://doi.org/10.1016/j.eng.2024.11.023
- Zhang, D., Huang, X.-D., Zhong, J.-T., Guo, L.-F., Guo, S.-Y., Wang, D.-Y., Miao, C.-H., Zhang, X.-L., & Zhang, X.-Y.
  (2023).
  A representative CO2 emissions pathway for China toward carbon neutrality under the Paris Agreement’s 2 °C target.
  Advances in Climate Change Research, 14(6), 941–951. https://doi.org/10.1016/j.accre.2023.11.004
- Lu, Y., Jin, L., Zhong, J., Zhang, X., Zhang, Y., Wu, F., Zhang, F., Wang, Z., Zhang, J., Xin, X., Wu, T., Wang, D.,
  Zhang, D., Wang, T., & Hua, W. (2025).
  Earth system responses under a global 2 °C-target scenario aligned with China’s carbon neutrality pledge.
  Environmental Research Letters, 20(10), 104049. https://doi.org/10.1088/1748-9326/adfbfb
- Högner, A., Sandstad, M., Kikstra, J., Nauels, A., Nicholls, Z., Sanderson, B., Smith, C., Zecchetto, M., &amp;
  Schleussner, C.-F. (2026). <i>The CMIP7 VL-CF counterfactual emissions pathway dataset v1.1.1 documentation</i>
  [Dataset].
  Zenodo. https://doi.org/10.5281/ZENODO.21487424

## Experiment set up

### Parent experiment and branching

The esm-vl-cf experiment branches from the [esm-hist](./esm-hist.md) experiment (part of [CMIP](./index.md#cmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-hist](./esm-hist.md) at the start of year 2016 (i.e. 2016-01-01).

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

The esm-vl-cf experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

For the following data, please see these other experiment pages:

- [esm-hist](./esm-hist.md) for anthropogenic emissions
- [esm-scen7-vl](./esm-scen7-vl.md) for anthropogenic emissions, biomass burning emissions, land use, stratospheric
  aerosol forcing, ozone, nitrogen deposition, solar, aerosol optical properties, population density
- [historical](./historical.md) for biomass burning emissions, land use, stratospheric aerosol forcing, ozone, nitrogen
  deposition, solar, aerosol optical properties, population density
- [vl-cf](./vl-cf.md) for greenhouse gas concentrations

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
    - recommended source IDs: IIASA-IAMC-1-1-1, IIASA-IAMC-vl-cf-1-1-1
    - notes: All anthropogenic emissions forcings other than CO<sub>2</sub> emissions must come from the forcings used
      for `esm-hist` and `esm-scen7-vl`
    - further guidance:
      [input4mips-cvs.readthedocs.io/dataset-overviews/anthropogenic-slcf-co2-emissions](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/anthropogenic-slcf-co2-emissions/)

###### JSON

For easier parsing with machines, we also present the information given above as JSON.

```json
{
    "anthropogenic-slcf-co2-emissions": {
        "human_readable_name": "anthropogenic emissions",
        "recommended_versions": [
            "IIASA-IAMC-1-1-1",
            "IIASA-IAMC-vl-cf-1-1-1"
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

EXPERIMENT_NAME="esm-vl-cf"

## You may need to run the below if you haven't already done it once with esgpull
# esgpull self install
## You may also need to run this step to get the data to download
# esgpull config api.index_node esgf-node.ornl.gov/esgf-1-5-bridge
esgpull add --track --tag ${EXPERIMENT_NAME} source_id:IIASA-IAMC-1-1-1,IIASA-IAMC-vl-cf-1-1-1
esgpull update --tag ${EXPERIMENT_NAME} --yes
esgpull download --tag ${EXPERIMENT_NAME}
```

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
