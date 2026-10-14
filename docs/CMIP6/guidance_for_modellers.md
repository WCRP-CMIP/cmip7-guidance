---
layout: default
title: CMIP6 Participation Guidance for Modelers
---

# CMIP6 Participation Guidance for Modelers

**This is a copy of the CMIP6 guidance and links may be broken**

Document overview:

1. [Requirements and expectations](#1-requirements-and-expectations)
1. [Experiment design](#2-experiment-design)
1. [Forcing data sets](#3-forcing-data-sets)
1. [Model output fields](#4-model-output-fields)
1. [Model output requirements](#5-model-output-requirements)
1. [Software for preparing/checking output](#6-software-for-preparingchecking-output)
1. [Archiving/publishing output](#7-archivingpublishing-output)
1. [Documentation process](#8-documentation-process)
1. [CMIP6 organization and governance](#9-cmip6-organization-and-governance)

## 1. Requirements and expectations
Those groups who plan to participate in CMIP6 should (in roughly this order, although
model documentation should be provided as early as possible):

* Indicate your intention to participate by registering your institution and model
 following the instructions on the [WCRP-CMIP github site][cmip6CvsRegistrationGuidance].
 ***You will not be able to publish your model output (on [ESGF][ESGFLlnlHome]) without first registering
 your institution and model.*** (To do this, anyone without a github account will
 have to create one). The currently registered institutions are listed in a [“json” file][institutionIdJson]
 and can be displayed in [table form][institutionIdHtml], and so are the currently
 registered models: [“json” file][sourceIdJson] and [table][sourceIdHtml]

* Request an account and then register contact information for person(s) responsible
 for entering and maintaining CMIP6 model output citation information in the [citation GUI][dkrzCitationGUI]
 [(Documentation of GUI)][dkrzCitationGUIDoc]. ***This data reference information should
 be provided before the data is published in the ESGF.*** Data references that are generated
 during the publication step will be used by web-based services being developed and maintained
 at DKRZ to ensure that data produced by your center is properly cited. Data users will be
 able to access citation information by: 1) following the URL stored as a global attribute
 (*further_info_url*) in each netCDF file, or 2) by following links to each dataset
 displayed by the ESGF search service.

   To request an account, provide the following to Martina Stockhause (stockhause@dkrz.de):
   * Person: name, email, ORCID (if available), affiliation and
   * Specification of the data, for which this person is responsible, using the *source_id*
   and *institution_id* that you have registered at the [WCRP-CMIP github site][cmip6CvsRegistrationGuidance]
   (see first bullet above). The *source_id* registration (see first bulleted item
   above) is a prerequisite for citation service registration.

   As an example of information that will be recoverable through the citation service
   consider the input4MIPs data set which has been recorded at the citation service
   at [https://doi.org/10.22033/ESGF/input4MIPs.2204][PCMDIAmipCitation].

* If you are not yet included in the CMIP6-MODELGROUPS-SCI mail list, register your
 scientific contact with CMIP Panel Chair, Veronika Eyring (veronika.eyring@dlr.de)

* Indicate your intention to participate in “endorsed MIPs” by signing up for the
 [endorsed-MIP mailing lists][EndorsedMipMailingList] of interest (click on each
 MIP of interest in the list) and also registering the information in the *activity_participation*
 field of your *source_id* (see first bullet above)

* Perform required [DECK, historical, and selected endorsed-MIP experiments](#2-experiment-design),
 using the required, [standard forcing datasets](#3-forcing-data-sets)

* Save all [requested model output](#4-model-output-fields)

* Provide all [required model documentation](#8-documentation-process), including
 forcing information and a description of ensemble variants

* Prepare and make available model output according to CMIP6 specifications (see
 sections [5](#5-model-output-requirements), [6](#6-software-for-preparingchecking-output),
 and [7](#7-archivingpublishing-output) below)

* Correct published data when errors are discovered. This should be performed using the **[ES-DOC Errata Service][ErrataService]**.
When an error is discovered, an ESGF data manager can use **[the webforms][errataFormsCreate]** to
clearly and concisely document the issue. Through the PID integration, this errata service will
include all the datasets/files affected when documentation is completed correctly.

Data managers can aslo register errata using the **[ES-DOC Errata Command Line Client][errataCLC]**
if they wish to do so.

Further information about the service is available in the **[Errata Service Documentation][errataDocumentation]**.

## 2. Experiment design
The CMIP6 protocol and experiments are described in a [special issue][GMDSpecialIssue]
of Geoscientific Model Development with an overview of the overall design and scientific
strategy provided in the lead article of that issue by [Eyring et al. (2016)][EyringEtAl16]

* Each model participating in CMIP6 must contribute results from the four DECK
 experiments (piControl, AMIP, abrupt4xCO2, and 1pctCO2) and the CMIP6 historical
 simulation. See [Eyring et al. (2016)][EyringEtAl16] where the experiment protocol
 is documented. These experiments are considered to define the ongoing (slowly
 evolving) “CMIP Activity” and are directly overseen by the [CMIP Panel][CMIPPanel]

* In addition to the DECK and historical simulations, each modeling group may choose
 to contribute to any [CMIP6 endorsed MIPs][CMIP6EndorsedMips] of interest, but
 for each MIP component, results must be provided from the full subset of “tier 1”
 experiments. See the [GMD Special CMIP6 Issue][GMDSpecialIssue] for descriptions
 of each MIP and its experiment specifications. Each [endorsed MIP][CMIP6EndorsedMips]
 is managed by an independent committee. The MIPs are identified as separate
 “CMIP6 Activities”, but their coordination and their endorsement as part of CMIP6
 is the responsibility of the [CMIP Panel][CMIPPanel]. The process by which MIP
 activities become endorsed is described [here][CMIP6EndorsedMips] and the criteria
 for endorsement are listed in Table 1 of [Eyring et al. (2016)][EyringEtAl16].
 The official names of the currently endorsed CMIP6 MIPs are recorded in a [“json” file][activityIdJson]

* When called for by the experiment protocol, [standard forcing data sets](#3-forcing-data-sets)
 should be used. Any deviation from the standard forcing must be [clearly documented](#8-documentation-process).

* Further documentation about CMIP6 experiments will be available from [ES-DOC][es-docsCmip6],
 and the reference controlled vocabularies used to define and identify these experiments
 are available in a [“json” file][experimentIdJson] and can be displayed in [table form][experimentIdhtml]

## 3. Forcing data sets
In CMIP6 all models should adopt the same forcing datasets (and boundary conditions).
Experts contacted by the CMIP Panel have prepared the forcing datasets, and a new
“input4MIPs” activity has been initiated by PCMDI to encourage adherence to many
of the same data standards imposed on obs4MIPs data and CMIP data. These datasets
are being collected into a curated archive at PCMDI. All conforming datasets can
be downloaded via the Earth System Grid Federation’s [input4MIPs CoG][input4mipsCog].
Any dataset not yet conforming to the input4MIPs specifications can be obtained
from the individual preparing the dataset, as indicated in the [input4MIPs summary sheet][input4mipsGoogleDoc].

The [input4MIPs summary sheet][input4mipsGoogleDoc] separately lists the CMIP6
datasets needed for the DECK and historical simulations and the datasets needed
for the CMIP6-endorsed MIP experiments. The summary provides contact information,
documentation of the data, and citation requirements. Included in the collection
are, for example, datasets specifying emissions and concentrations of various atmospheric
species, sea surface temperatures and sea ice (for AMIP), solar variability, and
land cover characteristics. ***The current version of the official CMIP Panel forcing
dataset collection is 6.2***. Users of these datasets should consult the [input4MIPs summary sheet][input4mipsGoogleDoc]
before configuring and beginning any new simulation to ensure that they are using
the latest versions available.

Some of the endorsed-MIP forcing datasets are still in preparation, but should
be available soon. Any changes made to a released dataset will be documented in
the [summary][input4mipsGoogleDoc].

## 4. Model output fields
The [CMIP6 Data Request][cmip6DataRequest] defines the variables that should
be archived for each experiment and specifies the time intervals for which they
should be reported. It provides much of the variable-specific metadata that should
be stored along with the data. It also provides tools for estimating the data storage
requirements for CMIP6.

Additional information about the data request is available at https://cmip6dr.github.io/Data_Request_Home

## 5. Model output requirements
CMIP6 model output requirements are similar to those in CMIP5, but changes have
been made to accommodate the more complex structure of CMIP6 and its data request.
Some changes will make it easier for users to find the data they need and will
enable new services to be established providing, for example, model and experiment
documentation and citation information.

As in CMIP5, all CMIP6 output will be stored in netCDF files with one variable
stored per file. The requested output fields can be determined as described [above](#4-model-output-fields),
and as in CMIP5, the data must be “cmorized” (i.e., written in conformance with
all the CMIP standards). The CMIP standards build on the [CF-conventions][cfConventionsPage],
which define metadata that provide a description of the variables and their spatial
and temporal properties. This facilitates analysis of the data by users who can
read and interpret data from all models in the same way.

As described in [section 6](#6-software-for-preparingchecking-output), it is recommended,
but not required, that the [CMOR software library](#6-software-for-preparingchecking-output)
be used to rewrite model output in conformance with the standards. In any case
to ensure that a critical subset of the requirements have been met, a CMIP data
checker ("[PrePARE](#6-software-for-preparingchecking-output)") will be applied
before data are placed in the CMIP6 data archive.

The CMIP6 data requirements are defined and discussed in the following documents:

* [Definition of CMIP6 netCDF global attributes][cmip6GlobalAttGoogleDoc]
* [Reference “controlled vocabularies” (CV’s) for CMIP6][cmip6Cvs]
* [Specifications][cmip6GlobalAttGoogleDoc] for file names, directory structures,
 and CMIP6 Data Reference Syntax (DRS)
* Specifications for output file content, structure, and metadata are available in [draft google doc](https://goo.gl/neswPr).  Use of CMOR3 will ensure compliance.
* [Guidance on grid requirements][cmip6GridGoogleDoc]
* [Information on pressure levels][cmip6PressureLevelsPdf] requested
* [Guidance on time-averaging][cmip6TimeAveragesCog] (with masking)

Additional metadata requirements are imposed on a variable by variable basis as
specified in the [CMIP6 Data Request][cmip6DataRequest]. Many of these are recognized
by CMOR (through input via the [CMIP6 CMOR Tables][cmip6CmorTables]), which will
ensure compliance.

Note that in the above, controlled vocabularies (CV’s) play a key role in ensuring
uniformity in the description of data sets across all models. For all but variable-specific
information, [reference CV’s][cmip6Cvs] are being maintained by PCMDI against which
all quality assurance checks will be performed. These CV’s will be relied on in
constructing file names and directory structures, and they will enable faceted
searches of the CMIP6 archive as called for in the [search requirements document][esgfSearchRequirementsGoogleDoc].
Additional, variable-specific CVs are part of the [CMIP6 Data Request][cmip6DataRequest].
These CV’s are structured in a way that makes clear relationships between certain
items appearing in separate CV’s. For example, the CV for model names (“*[source_id][sourceIdJson]*”)
indicates which institutions are authorized to run each model, and the complete
list of institutions is recorded in a CV for “*[institution_id][institutionIdJson]*”.

As indicated in the [guidance specifications for output grids][cmip6GridGoogleDoc],
weights should be provided to regrid all output to a few standard grids (e.g.,
1x1 degree). All regridding information (weights, lats, lons, etc.) should be stored
consistent with a standard format approved by the WIP. Specifications for the required
standard format will be forthcoming.

CMIP6 output requirements that are critical for successful ingestion and access
via ESGF will be enforced when publication of the data is initiated. The success
of CMIP6 depends on making sure that even the requirements that can not be checked
by ESGF are met. This is the responsibility of anyone preparing model output for
CMIP6. A minimum set of requirements for publication of CMIP6 data will be met
if a dataset passes the checks performed by the PrePARE software package described
in the next section.

## 6. Software for preparing/checking output
To facilitate the production of model output files that meet the CMIP6 technical
standards, a software library called “CMOR” (Climate Model Output Rewriter) has
been developed and version 3 (CMOR3) is now available [at this site][cmorGithub],
but read the [installation instructions available here][cmorSite]. This package
was first used in CMIP3 and has been generalized and improved for each new CMIP
phase. Use of CMOR is not mandatory, but past experience suggests that many common
errors in model output files can be avoided by its use.

For those not using CMOR, some checks for compliance with CMIP specifications can
be performed using a new code developed in support of CMIP6: the Pre-Publication
Attribute Reviewer for ESGF ([PrePARE][preparePage]). For information about tests
performed by PrePARE, view the design requirements. PrePARE is included as part
of the CMOR software suite and all files produced by CMOR are effectively checked
by PrePARE, but PrePARE can be invoked without using CMOR to write the output.

In addition to PrePARE, tests for file compliance with the [CF-conventions][cfConventionsPage]
can be made using a tool called the [CF-checker][cf-checkerGithub]. Both PrePARE
and the CF-checker will be run as part of the ESGF publication job stream, and
only files passing all tests will be published and made available for download.

It should be noted if data are written using CMOR, additional checks will be performed
that will, for example:

* Guarantee that the metadata associated with each *variable* is recorded in the
 file (PrePARE only checks some of the variable attributes)
* Check for monotonicity of a coordinate values
* Check for "gaps" in the time coordinates
* Check that coordinates are stored in the right direction (and for the longitude
coordinate check that the range is correct)
* Check that data values are within limits specified in the cmor tables (but for
 most variables, this won't happen since limits are yet to be defined)

Additional codes useful in preparing model output for CMIP6 include:

* Code to create regridding weights: not yet available
* Code to calculate nominal_resolution: For the common case of a regular spherical coordinate
(latitude x longitude) global grid, the nominal_resolution can be calculated using a formula
given in Appendix 2 of the [CMIP6 netCDF global attributes document][cmip6GlobalAttGoogleDoc].
For other grids, the nominal_resolution can be calculated with the following code:

  * Code documentation: [https://pcmdi.github.io/nominal_resolution/html/index.html][nominal_resol_doc].
  * The code can be obtained via a conda package: ``conda install -c pcmdi nominal_resolution``
  * The package repository is hosted on Github at: [https://github.com/pcmdi/nominal_resolution][nominal_resol_git]
    * The library source (api.py) is in the [lib directory][nominal_resol_lib].
    * The test codes reside in the [tests directory][nominal_resol_tests].

## 7. Archiving/publishing output
The Earth System Grid Federation ([ESGF][ESGFLlnlHome]) will facilitate the global
distribution of CMIP6 output.

For CMIP6, the original copies of data will be availble through the data nodes, many of which will be installed and maintained by the modeling centers themselves. Certain ESGF data nodes (known as “Tier
1 nodes”) will serve as the primary access points to the data. A searchable record of model output: the access method and metadata,
will be “published” to these nodes, and additionally, replicas of the data will be hosted on these nodes.

As part of “publication”, certain conformance checks are performed,
metadata are recorded in a catalog where it can be accessed by the other data nodes,
and versioning is managed. The data provider (modeling center) will need to closely
coordinate and cooperate with the ESGF data manager(s) of a specific ESGF data
node site. Here is a summary of the main steps and requirements in the procedure:

* **CMIP6 data compliance checking**: Before data are passed to the data node for
 publication, modeling centers should check that it is in conformance with all
 the output requirements outlined in the sections above
* **Selection of an ESGF data node**: Modeling centers can either set up and host
 their own ESGF data node or engage with an existing ESGF node. In either case
 certain rules must be followed as outlined in the "[ESGF Data Node Managers and Operators][ESGFDataNodeManagersAndOperators]"
 guide. If the node hosting the data has not been designated “Tier 1”, then one
 of the Tier 1 nodes will have to be selected to serve as the publication site.
 Improperly configured data nodes will not be accessible through the federated
 ESGF system
* **Data transfer and ESGF data management**: In addition to putting in place a
 procedure for smoothly transferring and publishing CMIP6 data, a clearly defined
 process for handling corrections to flawed data should be established. This would
 include a formal procedure for recording “errata” information in the case of correction
 and replacement of erroneous data
* **Data publication**: The ESGF data node managers are responsible for ESGF data
 publication and storage as described more completely in the "[ESGF Data Node Managers and Operators][ESGFDataNodeManagersAndOperators]"
 guide. Publication of data not meeting the minimal CMIP6 data quality requirements
 will be blocked
* **Data replication**: Some of the Tier 1 nodes plan to replicate some of the
 data published by other nodes. This will provide some redundancy across the federation
 protecting against loss of at least some of the data in the event of a catastrophic
 storage failure at one node. It will also provide a backup source of data when
 one node is temporarily offline. Not all data will be replicated, so it is recommended
 that modeling groups retain a backup copy of their model output
* **Data access**: After data publication the CMIP6 data (as well as associated
 errata information, documentation and citation information) will be visible and
 accessible via the following designated CMIP6 data portals: *[PCMDI][ESGFLlnlHome]*,
 *[DKRZ][ESGFDkrzHome]*, *[IPSL][ESGFIpslHome]*, *[CEDA][ESGFCedaHome]*, and others
* **Data long-term archival**: A “snapshot” of CMIP6 data as it exists at the time
 of a deadline imposed by the IPCC’s 6th Assessment Report (IPCC-AR6) will be archived
 at the IPCC Data Distribution Centre (IPCC DDC, [http://ipcc-data.org](http://ipcc-data.org))

## 8. Documentation process
Given the wide variety of users and the need for traceability, the CMIP6 results
will be fully documented and made accessible via the ES-DOC viewer and comparator
interface ([https://search.es-doc.org](https://search.es-doc.org)). Each CMIP6
model output file will include a global attribute called “further_info_url” which
will link to a signpost web page which will provide simulation/ensemble information,
model configuration details, current contact details, data citation details etc.
Specifically, ES-DOC will include documentation of:

* **[Experiments][es-docsExperiments]**: The ES-DOC project has already recorded
 documentation of the CMIP6 experiments including lists of forcings, model configuration,
 numerical requirements, information about building the ensembles, links to citations
 and contact information of the principal investigators as well as text descriptions
 and information about the rationale behind each experiment
* **[Models][es-docsModels]**: Models will be described on a realm-by-realm basis
 (i.e. atmosphere, ocean, sea ice, etc.) as well as the top level (coupled model
 configuration). ES-DOC provides a variety of tools (script-based, text-based,
 and form-based) for gathering this information from modeling groups, allowing
 for personal/institutional preference in the way in which documents are created
* **[Experimental conformance][es-docsEnsemblesConformance]**: Each simulation should
 conform to a number of specific requirements established by the MIP leaders. For
 example, an experiment may have the requirement that all simulations must start
 and end on particular dates. The full set of experimental requirements for each
 experiment can be viewed at [https://search.es-doc.org](https://search.es-doc.org).
 Sometimes there could be more than one way to meet the requirements, so modeling
 groups must record information about how each simulation conforms to the specifications
* **[Individual members of an ensemble][es-docsEnsemblesSimulations]**:. Some ensemble
 documentation is harvested by ES-DOC from published netCDF files, but additional
 information must be provided by modeling groups directly to ES-DOC. In each model
 output file the “ripf” identifier will be used to uniquely distinguish each member
 of an ensemble, but the differences between members may not always be clearly
 (or correctly) recorded in the “variant_info” global attribute. ES-DOC will therefore
 serve as the reference source for understanding differences between ensemble members.
 As described in more detail elsewhere ([Definition of CMIP6 netCDF global attributes][cmip6GlobalAttGoogleDoc]
 and [ES-DOC for CMIP6][es-docsCmip6]), there are 4 indices defining an ensemble
 member: “r” for realization, “i” for initialization, “p” for physics, and “f”
 for forcing. Modeling groups will record in ES-DOC the key to interpreting the
 differences between simulations identified by different indices. In particular
 for each forcing index, the list of forcing data sets applied in the simulation
 will be recorded
* **[Computer hardware performance][es-docsPerformance]**: Modeling groups will
 be asked to record information on the hardware used in running simulations (e.g.
 the number of cores) and also metrics describing the performance of each simulation
 on its machine (e.g. the number of simulated years per real day, etc.)

## 9. CMIP6 organization and governance
The [CMIP Panel][CMIPPanel], which is a standing subcommittee of the WCRP’s [Working Group on Climate Modeling][wgcmSite]
provides overall guidance and oversight of CMIP activities. Notably it determines
which MIPs will participate in each phase of CMIP using the established selection
criteria listed in Table 1 of [Eyring et al. (2016)][EyringEtAl16]. On [its webpages][wgcmCmip6]
the CMIP Panel provides additional information that may be of interest to CMIP6
participants, but only the CMIP6 Guide (this document) provides definitive documentation
of CMIP6 technical requirements.

The [endorsed MIPs][CMIP6EndorsedMips] are managed by independent committees, but
acceptance of endorsement obligates them to follow CMIP’s technical requirements.
Thus across all MIPs, the modeling groups can prepare their model output following
a common procedure.

The CMIP Panel has delegated responsibility for most of the technical requirements
of CMIP to the [WGCM Infrastructure Panel (WIP)][wip]. The mission, rationale
and Terms of Reference for the panel can be found [here][wip]. The WIP has
drafted a number of position papers summarizing CMIP6 requirements and specifications.
Among these is the [CMIP6 reference specifications for global attributes, filenames, directory structure and Data Reference Syntax (DRS)][cmip6GlobalAttGoogleDoc].
The WIP has also set up a [CMIP Data Node Operations Team (CDNOT)][cdnotGoogleDoc]
to interface with data node managers responsible for serving CMIP6 data. This team
provides a direct link from the panels establishing data node requirements to those
implementing the requirements. Section [7](#7-archivingpublishing-output) provides
further information about data node operational requirements.

Information is under preparation describing the governance of the following:

* ESGF & CoG & major replication data centers
* [CF-conventions][cfConventionsPage]
* [ES-DOC][es-docsCmip6]
* [Data citation][CMIP6Citation]
* Long-term archival (LTA) and data quality assurance (QA)
* Evaluation activities
* [input4MIPs][input4mipsCog]
* [obs4MIPs][obs4mips]


###### Document version: 19 October 2022

[guide]: index.html
[cmip6CvsRegistrationGuidance]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/.github/ISSUE_TEMPLATE.md
[ESGFLlnlHome]: https://esgf-node.llnl.gov/projects/esgf-llnl/
[institutionIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_institution_id.json
[institutionIdHtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_institution_id.html
[sourceIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_source_id.json
[sourceIdHtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_source_id.html
[dkrzCitationGUI]: http://cera-www.dkrz.de/citeXA
[dkrzCitationGUIDoc]: http://cera-www.dkrz.de/docs/pdf/CMIP6_Citation_Userguide.pdf
[PCMDIAmipCitation]: https://doi.org/10.22033/ESGF/input4MIPs.2204
[DKRZ]: https://www.dkrz.de/
[cmip6Cvs]: https://github.com/WCRP-CMIP/CMIP6_CVs
[EndorsedMipMailingList]: https://www.wcrp-climate.org/modelling-wgcm-mip-catalogue/modelling-wgcm-cmip6-endorsed-mips
[GMDSpecialIssue]: http://www.geosci-model-dev.net/special_issue590.html
[EyringEtAl16]: http://doi.org/10.5194/gmd-9-1937-2016
[CMIPPanel]: https://www.wcrp-climate.org/wgcm-cmip/cmip-panel
[CMIP6EndorsedMips]: https://www.wcrp-climate.org/modelling-wgcm-mip-catalogue/modelling-wgcm-cmip6-endorsed-mips
[activityIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_activity_id.json
[experimentIdJson]: https://github.com/WCRP-CMIP/CMIP6_CVs/blob/master/CMIP6_experiment_id.json
[experimentIdhtml]: https://wcrp-cmip.github.io/CMIP6_CVs/docs/CMIP6_experiment_id.html
[input4mipsCog]: https://esgf-node.llnl.gov/search/input4MIPs
[input4mipsGoogleDoc]: http://goo.gl/r8up31
[cmip6DataRequest]: https://cmip6dr.github.io/Data_Request_Home
[cfConventionsPage]: http://cfconventions.org/
[cmip6GlobalAttGoogleDoc]: http://goo.gl/v1drZl
[cmip6GridGoogleDoc]: http://goo.gl/1oA7bO
[cmip6PressureLevelsPdf]: https://cmip6dr.github.io/Data_Request_Home/Documents/CMIP6_pressure_levels.pdf
[cmip6TimeAveragesCog]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel/CMIP6/time_and_area_averaging.html
[cmip6CmorTables]: https://github.com/PCMDI/cmip6-cmor-tables/tree/master/Tables
[esgfSearchRequirementsGoogleDoc]: https://docs.google.com/document/d/1jNBw2am28Hxux_YuCL_mYMi18EEGkJSGrtNntOs3PJo
[cmorGithub]: https://github.com/PCMDI/cmor
[cmorSite]: https://cmor.llnl.gov
[preparePage]: https://github.com/PCMDI/cmor/tree/master/LibCV/PrePARE
[cf-checkerGithub]: https://github.com/cedadev/cf-checker/wiki
[ESGFDataNodeManagersAndOperators]: https://pcmdi.llnl.gov/CMIP6/Guide/dataManagers.html
[ESGFDkrzHome]: https://esgf-data.dkrz.de/projects/esgf-dkrz/
[ESGFIpslHome]: https://esgf-node.ipsl.upmc.fr/projects/esgf-ipsl/
[ESGFCedaHome]: https://esgf-index1.ceda.ac.uk/projects/esgf-ceda/
[es-docsExperiments]: https://es-doc.org/cmip6-experiments
[es-docsModels]: https://es-doc.org/cmip6-models
[es-docsEnsemblesConformance]: https://es-doc.org/cmip6-ensembles-conformance
[es-docsEnsemblesSimulations]: https://es-doc.org/cmip6-ensembles-simulations
[es-docsPerformance]: https://es-doc.org/cmip6-performance
[es-docsCmip6]: https://es-doc.org/cmip6
[wgcmSite]: https://www.wcrp-climate.org/wgcm-overview
[wgcmCmip6]: https://www.wcrp-climate.org/wgcm-cmip/wgcm-cmip6
[wip]: https://wcrp-cmip.github.io/WGCM_Infrastructure_Panel
[cdnotGoogleDoc]: https://docs.google.com/document/d/1oRWqxtWWEfsucTVhk0G3bMqHC0BL4dJwADrOG8Ukj-g
[obs4mips]: https://pcmdi.github.io/obs4MIPs
[CMIP6Citation]: http://cmip6cite.wdc-climate.de
[nominal_resol_doc]: https://pcmdi.github.io/nominal_resolution/html/index.html
[nominal_resol_git]: https://github.com/pcmdi/nominal_resolution
[nominal_resol_lib]: https://github.com/pcmdi/nominal_resolution/blob/master/lib
[nominal_resol_tests]: https://github.com/pcmdi/nominal_resolution/blob/master/tests
[errataCLC]: https://es-doc.github.io/esdoc-errata-client/client.html
[errataFormsCreate]: https://es-doc.github.io/esdoc-errata-client/create.html
[errataDocumentation]: https://es-doc.github.io/esdoc-errata-client/
[ErrataService]: https://errata.es-doc.org/