---
layout: default
title: "Experiment Setup and Forcings Guidance: esm-SSP2-com-CMIP7-ext"
---

# Experiment Setup and Forcings Guidance: esm-SSP2-com-CMIP7-ext

Extension of `esm-SSP2-com-CMIP7` beyond 2100.

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
  Plausible global emissions scenario for 2 {\textdegree}C aligned with China's net-zero pathway.
  Nature Communications, 16(1). https://doi.org/10.1038/s41467-025-62983-5
- Zhang, X., Zhong, J., Zhang, X., Zhang, D., Miao, C., Wang, D., & Guo, L. (2025).
  China Can Achieve Carbon Neutrality in Line with the Paris Agreement's 2 {\textdegree}C Target: Navigating Global
  Emissions Scenarios, Warming Levels, and Extreme Event Projections.
  Engineering, 44, 207-214. https://doi.org/10.1016/j.eng.2024.11.023
- Zhang, D., Huang, X.-D., Zhong, J.-T., Guo, L.-F., Guo, S.-Y., Wang, D.-Y., Miao, C.-H., Zhang, X.-L., & Zhang, X.-Y.
  (2023).
  A representative CO2 emissions pathway for China toward carbon neutrality under the Paris Agreement's 2 {\textdegree}C
  target.
  Advances in Climate Change Research, 14(6), 941-951. https://doi.org/10.1016/j.accre.2023.11.004
- Lu, Y., Jin, L., Zhong, J., Zhang, X., Zhang, Y., Wu, F., Zhang, F., Wang, Z., Zhang, J., Xin, X., Wu, T., Wang, D.,
  Zhang, D., Wang, T., & Hua, W. (2025).
  Earth system responses under a global 2 {\textdegree}C-target scenario aligned with China's carbon neutrality pledge.
  Environmental Research Letters, 20(10), 104049. https://doi.org/10.1088/1748-9326/adfbfb
- H\"ogner, A., Sandstad, M., Kikstra, J., Nauels, A., Nicholls, Z., Sanderson, B., Smith, C., Zecchetto, M., &amp;
  Schleussner, C.-F. (2026). <i>The CMIP7 VL-CF counterfactual emissions pathway dataset v1.1.1 documentation</i>
  [Dataset].
  Zenodo. https://doi.org/10.5281/ZENODO.21487424

## Experiment set up

### Parent experiment and branching

The esm-SSP2-com-CMIP7-ext experiment branches from the [esm-SSP2-com-CMIP7](./esm-ssp2-com-cmip7.md) experiment (part
of [PolMIP](./index.md#polmip)).
The parent experiment's MIP era is [CMIP7](https://wcrp-cmip.org/CMIP7).

Branch from [esm-SSP2-com-CMIP7](./esm-ssp2-com-cmip7.md) at 2100-12-31.

### Output time axis

Your output time axis must start on 2101-01-01 and must not end later than 2500-12-31.
You must perform at least 100 simulation years.

### Minimum ensemble size

Only one ensemble member is required.

## Forcings

The following information will help you identify the forcings to use.
However, we can't define every single detail because there can be lots of subjective steps between the raw forcings data
and model inputs (e.g. interpolation, re-aggregation, supplementation with other information).
If further guidance would be helpful, please [raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).

### General headlines

The esm-SSP2-com-CMIP7-ext experiment is a transient forcings experiment.

### Data

Here we make a distinction between data that is described on other experiment pages, data that is described on other
experiment pages with modifications you have to make yourself, data available via ESGF's input4MIPs project and data
distributed via other channels.

#### Data described on other experiment pages

All data is described on the [SSP2-com-CMIP7-ext](./ssp2-com-cmip7-ext.md) experiment page.

#### Data described on other experiment pages with modifications you have to make

No data described on other experiment pages requires modifications by you.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data available via input4MIPs

No input4MIPs-based data is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.

#### Data not available via input4MIPs

No data that is not input4MIPs-based is described specifically on this page.
Please see the other [data](#data) sub-sections for details of the forcings data to use for this experiment.
