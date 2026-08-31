---
layout: default
title: CMIP7 Citation Guidance
---

# Guidance for CMIP7 Citations

The CMIP7 Citation service is hosted at <https://cmip7-citations.ceda.ac.uk/citations/>.

CMIP7 data citations will be created automatically in response to data publication on ESGF. The granularity of the data citations will be at the level of a model's contribution to an experiment, such that all ensemble members plus all erratas and future corrections within an experiment are covered by one citation. The citations are expected to be published (minted with a DOI) before all data is fully available - this is in line with guidance from DataCite on evolving dataset citations. Citations are only defined at this granularity, any additional citation requirements will need to be discussed with the Citation Working Group.

If DOI-breaking changes to a citation are required after a DOI has been minted, the citation service can be used to create the next version of the citation and produce a new DOI. The citation version `vX` is used in the Cite As text, which looks something like:

```
"Last Name, First Name. (2026). CMIP7.CMIP.CCCma.CanESM5-1.piControl. v1. STFC. https://doi.org/10.83017/tt0t-ve21"
```

CMIP7 data providers will need to review the information on the data citation landing pages and add party information before DOIs can be issued. An [Approver Guide Document](../assets/CitationReviewerGuide.pdf) has been prepared to articulate how to use the UI to make edits and publish citation information (i.e Mint DOIs)

The Citation Service is configured to natively support CMIP7, CORDEX-CMIP6 and CMIP6Plus via the [ESGVOC Python Package](https://esgf.github.io/esgf-vocab/).

!!! tip "A Note on CMIP6/CMIP6Plus DCPP sub-experiments "
    Sub-experiments are not part of the data model for the CMIP7 citation service, however the sub-experiment-id can still be manually included in the citation title field. Only the core CMIP7 search facets are validated against the ESGVOC API, so the sub-experiment ID will not appear in the search facets area, but they will be findable via the fuzzy search in the free text search box.

![Citation Flow Diagram - 28/08/2026](../assets/citation_flowdiagram_280826.png)

Above is the flow diagram showing internal processes within the citation service, including the user-facing landing pages (Purple Boxes).

## Relation to the DRS' version concept

The version included in the citations above is not the same as the dataset version
(more precisely, the DRS "directoryDateDD" element, [see the DRS elements docs here](../Global_Attributes#4-data-reference-syntax-drs-elements)).
These citations cover all versions.

This is change from previous phases.
For example, in CMIP6, the cite as links on landing pages left the version unfilled as "YYYYMMDD",
expecting the user to fill this in
(see e.g. [www.wdc-climate.de/ui/cmip6?input=CMIP6.CMIP.CAMS.CAMS-CSM1-0.historical](https://www.wdc-climate.de/ui/cmip6?input=CMIP6.CMIP.CAMS.CAMS-CSM1-0.historical)).

This infilling is completed automatically using [cmipcite](https://github.com/WCRP-CMIP/cmipcite)
based on the PID service provided by DKRZ.
Discussions about whether to include something similar for CMIP7 are ongoing,
but they will have to be supported via a mechanism other than altering the cite-as link,
as the CMIP7 cite-as links do not have this unfilled version idea.

## Additional information for developers

Additional information for developers can be found at the citation service documentation site: <https://cedadev.github.io/cmip7-citation-service>
