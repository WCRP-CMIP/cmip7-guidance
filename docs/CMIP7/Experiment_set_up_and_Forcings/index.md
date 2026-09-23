---
layout: default
title: "Overview"
---

# CMIP7 Experiment Setup and Forcings Guidance

!!! tip "Documentation under review"

    The contents of these pages are currently under review.
    On each experiment page, you will see a dot point for "MIP co-chair review".
    Where this says "Complete", you can assume that the guidance is stable and reliable.
    Otherwise, please treat the guidance with some caution, because it has not been reviewed by the experiment designers
    (the MIP co-chairs) yet.
    If you have any feedback, please feel free to raise an issue at
    https://github.com/WCRP-CMIP/cmip7-guidance/issues/new and tag @znichollscr.

These pages provide guidance on the experimental setup and forcings to be used in CMIP7.
They are updated regularly, hence should be considered the current source of guidance.
The papers which describe the experiments in the scientific literature are the original source and key reference, but
they may still contain errors which cannot be fixed after publication so should not be relied upon in isolation.
The papers also provide further information about each simulation than what is provided here, such as the motivation,
history and results from previous CMIP phases.

These pages specify the intended way to run each simulation.
However, we understand that modelling groups sometimes need to make changes for a variety of reasons.
We are currently discussing a mechanism for modeling centers to document these alterations in a central, publicly
accessible location (for example,
[discussion of how to choose values for the forcing 'f' identifier is ongoing](https://github.com/PCMDI/input4MIPs_CVs/issues/415)).
When these discussions are finalised, these guidance pages will be updated.
<!-- TODO: do we have a section to cross-link to? -->

## DECK experiments

### CMIP

CMIP core common experiments i.e. the DECK (Diagnostic, Evaluation and Characterization of Klima).

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Dunne, J.
  P., Hewitt, H.
  T., Arblaster, J.
  M., Bonou, F., Boucher, O., Cavazos, T., Dingley, B., Durack, P.
  J., Hassler, B., Juckes, M., Miyakawa, T., Mizielinski, M., Naik, V., Nicholls, Z., O’Rourke, E., Pincus, R.,
  Sanderson, B.
  M., Simpson, I.
  R., & Taylor, K.
  E. (2025).
  An evolving Coupled Model Intercomparison Project phase 7 (CMIP7) and Fast Track in support of future climate
  assessment.
  Geoscientific Model Development, 18(19), 6671–6700. https://doi.org/10.5194/gmd-18-6671-2025

The following experiments are included in `CMIP`:

1. [1pctCO2](./1pctco2.md)
1. [abrupt-4xCO2](./abrupt-4xco2.md)
1. [amip](./amip.md)
1. [historical](./historical.md)
1. [esm-hist](./esm-hist.md)
1. [piClim-4xCO2](./piclim-4xco2.md)
1. [piClim-anthro](./piclim-anthro.md)
1. [piClim-control](./piclim-control.md)
1. [piControl](./picontrol.md)
1. [esm-piControl](./esm-picontrol.md)
1. [piControl-spinup](./picontrol-spinup.md)
1. [esm-piControl-spinup](./esm-picontrol-spinup.md)

## Assessment Fast Track (AFT) experiments

### AerChemMIP

Aerosols and chemistry model intercomparison project: exploration of aerosol chemistry.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Collins, W.
  J., Lamarque, J.-F., Schulz, M., Boucher, O., Eyring, V., Hegglin, M.
  I., Maycock, A., Myhre, G., Prather, M., Shindell, D., & Smith, S.
  J. (2017).
  AerChemMIP: quantifying the effects of chemistry and aerosols in CMIP6.
  Geoscientific Model Development, 10(2), 585–607. https://doi.org/10.5194/gmd-10-585-2017

The following experiments are included in `AerChemMIP`:

1. [hist-piAer](./hist-piaer.md)
1. [hist-piAQ](./hist-piaq.md)
1. [piClim-CH4](./piclim-ch4.md)
1. [piClim-N2O](./piclim-n2o.md)
1. [piClim-NOx](./piclim-nox.md)
1. [piClim-ODS](./piclim-ods.md)
1. [piClim-SO2](./piclim-so2.md)
1. [scen7-h-Aer](./scen7-h-aer.md)
1. [esm-scen7-h-Aer](./esm-scen7-h-aer.md)
1. [scen7-h-AQ](./scen7-h-aq.md)
1. [esm-scen7-h-AQ](./esm-scen7-h-aq.md)
1. [scen7-vl-Aer](./scen7-vl-aer.md)
1. [esm-scen7-vl-Aer](./esm-scen7-vl-aer.md)
1. [scen7-vl-AQ](./scen7-vl-aq.md)
1. [esm-scen7-vl-AQ](./esm-scen7-vl-aq.md)

### CFMIP

Cloud feedback model intercomparison project.
Focussed primarily on cloud feedbacks with a secondary focus on understanding of response to forcing, model biases,
circulation, regional-scale precipitation, and non-linear changes.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Webb, M.
  J., Andrews, T., Bodas-Salcedo, A., Bony, S., Bretherton, C.
  S., Chadwick, R., Chepfer, H., Douville, H., Good, P., Kay, J.
  E., Klein, S.
  A., Marchand, R., Medeiros, B., Siebesma, A.
  P., Skinner, C.
  B., Stevens, B., Tselioudis, G., Tsushima, Y., & Watanabe, M. (2017).
  The Cloud Feedback Model Intercomparison Project (CFMIP) contribution to CMIP6.
  Geoscientific Model Development, 10(1), 359–384. https://doi.org/10.5194/gmd-10-359-2017

The following experiments are included in `CFMIP`:

1. [abrupt-0p5xCO2](./abrupt-0p5xco2.md)
1. [abrupt-2xCO2](./abrupt-2xco2.md)
1. [amip-p4K](./amip-p4k.md)
1. [amip-piForcing](./amip-piforcing.md)

### C4MIP

Coupled climate carbon cycle model intercomparison project: exploration of the response of the coupled carbon-climate
system.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Sanderson, B.
  M., Booth, B.
  B.
  B., Dunne, J., Eyring, V., Fisher, R.
  A., Friedlingstein, P., Gidden, M.
  J., Hajima, T., Jones, C.
  D., Jones, C.
  G., King, A., Koven, C.
  D., Lawrence, D.
  M., Lowe, J., Mengis, N., Peters, G.
  P., Rogelj, J., Smith, C., Snyder, A.
  C., et al. (2024).
  The need for carbon-emissions-driven climate projections in CMIP7.
  Geoscientific Model Development, 17(22), 8141–8172. https://doi.org/10.5194/gmd-17-8141-2024
- Sanderson, B.
  M., Brovkin, V., Fisher, R.
  A., Hohn, D., Ilyina, T., Jones, C.
  D., Koenigk, T., Koven, C., Li, H., Lawrence, D.
  M., Lawrence, P., Liddicoat, S., MacDougall, A.
  H., Mengis, N., Nicholls, Z., O’Rourke, E., Romanou, A., Sandstad, M., Schwinger, J., et al. (2025). flat10MIP: an
  emissions-driven experiment to diagnose the climate response to positive, zero and negative CO <sub>2</sub> emissions.
  Geoscientific Model Development, 18(17), 5699–5724. https://doi.org/10.5194/gmd-18-5699-2025
- Jones, C.
  D., Arora, V., Friedlingstein, P., Bopp, L., Brovkin, V., Dunne, J., Graven, H., Hoffman, F., Ilyina, T., John, J.
  G., Jung, M., Kawamiya, M., Koven, C., Pongratz, J., Raddatz, T., Randerson, J.
  T., & Zaehle, S. (2016).
  C4MIP – The Coupled Climate–Carbon Cycle Model Intercomparison Project:
experimental protocol for CMIP6.
Geoscientific Model Development, 9(8), 2853–2880. https://doi.org/10.5194/gmd-9-2853-2016

The following experiments are included in `C4MIP`:

1. [1pctCO2-bgc](./1pctco2-bgc.md)
1. [1pctCO2-rad](./1pctco2-rad.md)
1. [esm-flat10](./esm-flat10.md)
1. [esm-flat10-cdr](./esm-flat10-cdr.md)
1. [esm-flat10-zec](./esm-flat10-zec.md)

### ScenarioMIP

Future scenario experiments.
Exploration of the future climate under a (selected) range of possible boundary conditions.

The priority of ScenarioMIP experiments (expressed as Tier 1 and 2) is summarized in the flowchart below, which is based
on Table 1 of [Van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/).
Emissions-driven experiments, indicated in yellow, have names beginning with `esm-`.

- If your model is capable of running in emissions-driven mode, ScenarioMIP request emissions-driven scenarios, and
  additionally the concentration-driven experiment `scen7-m`, at Tier-1 (highest priority).
- If your model will run only the concentration-driven experiments, ScenarioMIP request all concentration-driven
  scenarios at Tier-1.

If you are running in emissions-driven mode, you are welcome to run other scenarios in concentration-driven mode, but
they have not been assigned a specific tier (i.e., are lowest priority).

<figure>
  <img src="figures/ScenarioMIP-tiers_v3.svg">
  <figcaption>
    ScenarioMIP experiments, with emissions-driven experiments indicated in yellow.
  </figcaption>
</figure>

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- van Vuuren, D., O’Neill, B., Tebaldi, C., Chini, L., Friedlingstein, P., Hasegawa, T., Riahi, K., Sanderson, B.,
  Govindasamy, B., Bauer, N., Eyring, V., Fall, C., Frieler, K., Gidden, M., Gohar, L., Jones, A., King, A., Knutti, R.,
  Kriegler, E., et al. (2025).
  The Scenario Model Intercomparison Project for CMIP7 (ScenarioMIP-CMIP7) . https://doi.org/10.5194/egusphere-2024-3765

The following experiments are included in `ScenarioMIP`:

1. [scen7-h](./scen7-h.md)
1. [esm-scen7-h](./esm-scen7-h.md)
1. [scen7-h-ext](./scen7-h-ext.md)
1. [esm-scen7-h-ext](./esm-scen7-h-ext.md)
1. [scen7-hl](./scen7-hl.md)
1. [esm-scen7-hl](./esm-scen7-hl.md)
1. [scen7-hl-ext](./scen7-hl-ext.md)
1. [esm-scen7-hl-ext](./esm-scen7-hl-ext.md)
1. [scen7-l](./scen7-l.md)
1. [esm-scen7-l](./esm-scen7-l.md)
1. [scen7-l-ext](./scen7-l-ext.md)
1. [esm-scen7-l-ext](./esm-scen7-l-ext.md)
1. [scen7-ln](./scen7-ln.md)
1. [esm-scen7-ln](./esm-scen7-ln.md)
1. [scen7-ln-ext](./scen7-ln-ext.md)
1. [esm-scen7-ln-ext](./esm-scen7-ln-ext.md)
1. [scen7-m](./scen7-m.md)
1. [esm-scen7-m](./esm-scen7-m.md)
1. [scen7-m-ext](./scen7-m-ext.md)
1. [esm-scen7-m-ext](./esm-scen7-m-ext.md)
1. [scen7-ml](./scen7-ml.md)
1. [esm-scen7-ml](./esm-scen7-ml.md)
1. [scen7-ml-ext](./scen7-ml-ext.md)
1. [esm-scen7-ml-ext](./esm-scen7-ml-ext.md)
1. [scen7-vl](./scen7-vl.md)
1. [esm-scen7-vl](./esm-scen7-vl.md)
1. [scen7-vl-ext](./scen7-vl-ext.md)
1. [esm-scen7-vl-ext](./esm-scen7-vl-ext.md)

### DCPP

Decadal climate prediction project: Coordinated multi-model investigation into decadal climate prediction,
predictability, and variability

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Boer, G.
  J., Smith, D.
  M., Cassou, C., Doblas-Reyes, F., Danabasoglu, G., Kirtman, B., Kushnir, Y., Kimoto, M., Meehl, G.
  A., Msadek, R., Mueller, W.
  A., Taylor, K.
  E., Zwiers, F., Rixen, M., Ruprich-Robert, Y., & Eade, R. (2016).
  The Decadal Climate Prediction Project (DCPP) contribution to CMIP6.
  Geoscientific Model Development, 9(10), 3751–3777. https://doi.org/10.5194/gmd-9-3751-2016

The following experiments are included in `DCPP`:

1. [dcppB-forecast-cmip6](./dcppb-forecast-cmip6.md)

### DAMIP

Detection and attribution model intercomparison project: exploration of the role of individual forcings (both
anthropogenic and natural) in past and future climate change.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Gillett, N.
  P., Simpson, I.
  R., Hegerl, G., Knutti, R., Mitchell, D., Ribes, A., Shiogama, H., Stone, D., Tebaldi, C., Wolski, P., Zhang, W., &
  Arora, V.
  K. (2025).
  The Detection and Attribution Model Intercomparison Project (DAMIP v2.0) contribution to CMIP7.
  Geoscientific Model Development, 18(14), 4399–4416. https://doi.org/10.5194/gmd-18-4399-2025

The following experiments are included in `DAMIP`:

1. [hist-aer](./hist-aer.md)
1. [hist-GHG](./hist-ghg.md)
1. [hist-nat](./hist-nat.md)

### GeoMIP

Geoengineering model intercomparison project: exploration of the climate response to solar radiation manipulation.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Visioni, D., Robock, A., Haywood, J., Henry, M., Tilmes, S., MacMartin, D.
  G., Kravitz, B., Doherty, S.
  J., Moore, J., Lennard, C., Watanabe, S., Muri, H., Niemeier, U., Boucher, O., Syed, A., Egbebiyi, T.
  S., Séférian, R., & Quaglia, I. (2024).
  G6-1.5K-SAI: a new Geoengineering Model Intercomparison Project (GeoMIP) experiment integrating recent advances in
  solar radiation modification studies.
  Geoscientific Model Development, 17(7), 2583–2596. https://doi.org/10.5194/gmd-17-2583-2024
- Visioni, D., Robock, A., Roberts, K.
  E., Lee, W., Henry, M., Duffey, A., Hirasawa, H., Chegwidden, O., & Sipra, H. (2025).
  Finalizing Experimental Protocols for the Geoengineering Model Intercomparison Project (GeoMIP) Contribution to CMIP7.
  Bulletin of the American Meteorological Society, 106(10), E2029–E2035. https://doi.org/10.1175/bams-d-25-0191.1

The following experiments are included in `GeoMIP`:

1. [G7-1p5K-SAI](./g7-1p5k-sai.md)

### LMIP

Land (offline) Model Intercomparison Project: advancing understanding of the impacts of land-use and land-cover change
(LULCC) on climate

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- van den Hurk, B., Kim, H., Krinner, G., Seneviratne, S.
  I., Derksen, C., Oki, T., Douville, H., Colin, J., Ducharne, A., Cheruy, F., Viovy, N., Puma, M.
  J., Wada, Y., Li, W., Jia, B., Alessandri, A., Lawrence, D.
  M., Weedon, G.
  P., Ellis, R., et al. (2016).
  LS3MIP (v1.0) contribution to CMIP6: the Land Surface, Snow and Soil
moisture Model Intercomparison Project – aims, setup and expected outcome.
Geoscientific Model Development, 9(8), 2809–2832. https://doi.org/10.5194/gmd-9-2809-2016

The following experiments are included in `LMIP`:

1. [land-hist](./land-hist.md)

### PMIP

Palaeoclimate modelling intercomparison project: assessment of paleoclimate i.e. climate thousands of years or more in
the past.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Otto-Bliesner, B.
  L., Braconnot, P., Harrison, S.
  P., Lunt, D.
  J., Abe-Ouchi, A., Albani, S., Bartlein, P.
  J., Capron, E., Carlson, A.
  E., Dutton, A., Fischer, H., Goelzer, H., Govin, A., Haywood, A., Joos, F., LeGrande, A.
  N., Lipscomb, W.
  H., Lohmann, G., Mahowald, N., et al. (2017).
  The PMIP4 contribution to CMIP6 – Part 2: Two interglacials, scientific objective and experimental design for Holocene
  and Last Interglacial simulations.
  Geoscientific Model Development, 10(11), 3979–4003. https://doi.org/10.5194/gmd-10-3979-2017
- Sime, L.
  C., Sivankutty, R., Vallet-Malmierca, I., de Boer, A.
  M., & Sicard, M. (2023).
  Summer surface air temperature proxies point to near-sea-ice-free conditions in the Arctic at 127 ka.
  Climate of the Past, 19(4), 883–900. https://doi.org/10.5194/cp-19-883-2023

The following experiments are included in `PMIP`:

1. [abrupt-127k](./abrupt-127k.md)

### RFMIP

Radiative Forcing Model Intercomparison Project: characterisation of radiative forcing within models.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

- Pincus, R., Forster, P.
  M., & Stevens, B. (2016).
  The Radiative Forcing Model Intercomparison Project (RFMIP): experimental protocol for CMIP6.
  Geoscientific Model Development, 9(9), 3447–3460. https://doi.org/10.5194/gmd-9-3447-2016
- Smith, C.
  J., Kramer, R.
  J., Myhre, G., Alterskjær, K., Collins, W., Sima, A., Boucher, O., Dufresne, J.-L., Nabat, P., Michou, M., Yukimoto,
  S., Cole, J., Paynter, D., Shiogama, H., O’Connor, F.
  M., Robertson, E., Wiltshire, A., Andrews, T., Hannay, C., et al. (2020).
  Effective radiative forcing and adjustments in CMIP6 models.
  Atmospheric Chemistry and Physics, 20(16), 9591–9618. https://doi.org/10.5194/acp-20-9591-2020
- Kramer, R.
  J., Smith, C., & Andrews, T. (2026).
  The Radiative Forcing Model Intercomparison Project (RFMIP2.0) for CMIP7.
  Geoscientific Model Development, 19(10), 4447–4466. https://doi.org/10.5194/gmd-19-4447-2026

The following experiments are included in `RFMIP`:

1. [piClim-aer](./piclim-aer.md)
1. [piClim-histaer](./piclim-histaer.md)
1. [piClim-histall](./piclim-histall.md)

## Other experiments

### PolMIP

Policy-Aligned Model Intercomparison Project (PolMIP).
PolMIP is designed as a complementary effort to existing MIPs.
While ScenarioMIP explores the breadth of future forcing levels under idealized assumptions, PolMIP focuses on the depth
of policy-driven pathways, offering higher fidelity for regions where specific mitigation strategies and timelines are
defined.
By providing a coordinated infrastructure for policy-driven scenario simulations, PolMIP aims to deliver actionable
science for national climate assessments, enhance the policy relevance of CMIP, and foster closer collaboration between
the climate modeling community and policymakers.
Ultimately, PolMIP seeks to ensure that the next generation of climate projections is not only scientifically robust but
also deeply rooted in the real-world decisions shaping our collective future.
The project has completed phase 1: demonstration and proof of concept, starting from the SSP2-com scenario that was
developed by Chinese scientists that aligns with China's carbon neutrality pledge (peaking carbon emissions before 2030
and achieving carbon neutrality before 2060) within the SSP2 socioeconomic framework and the NDC data of countries
worldwide.
The next phase will expand the framework to include policy-aligned scenarios from other nations and regions, creating a
multi-country ensemble that enables consistent cross-comparison of national climate action strategies under a unified
protocol.

These pages are intended to help with implementation of these experiments.
If you notice something that is unclear, please
[raise an issue](https://github.com/WCRP-CMIP/cmip7-guidance/issues/new).
For the full background of the experiments, please see the following URLs:

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

The following experiments are included in `PolMIP`:

1. [vl-cf](./vl-cf.md)
1. [esm-vl-cf](./esm-vl-cf.md)
1. [vl-cf-ext](./vl-cf-ext.md)
1. [esm-vl-cf-ext](./esm-vl-cf-ext.md)
