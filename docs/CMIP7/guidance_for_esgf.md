---
layout: default
title: CMIP7 Participation Guidance for Data Managers
---

# CMIP7 Participation for Data Managers

!!! tip "Documentation in progress"

    The contents of the pages are currently in development.
    They will updated when ESGF-NG (Next Generation ESGF) is available for CMIP7 data publication.
    [See here](https://wcrp-cmip.org/esgf-information/) for previous announcements about ESGF changes.


## 1. Installation and configuration
All information on Earth System Grid Federation (ESGF) can be [found here](https://esgf.github.io/).
<!-- _this needs updating?_ -->
<!-- _Somewhere in the documentation below needs a) information about QC procedures for Data Managers and b) graphic of the ESGF NG setup (Forrest/Phil have sent examples to IPO)_ -->

### 1.1 ESGF Software
**Description**

The ESGF Data Node software stack enables sites hosting earth system data to make it available to the community over several transfer protocols including http(s).  Data node sites run esg-publisher software to register their hosted data to the ESGF index managed by the ESGF core team.  Sites may additonally run optional esgf-compute software (WPS) to support server-side computation over the hosted data.
<!-- ~~Index nodes enable search for hosted data via data publishing to the index, and these nodes include a search API and web frontend~~._not sure this is relevant if indexing is deprecated_?  -->
<!-- Identity nodes manage user accounts. Nodes run as Docker containers and can be deployed via Ansible Playbooks or Helm Charts in a Kubernetes environment. -->

**New and exisiting installations**

For new or exisiting ESGF node installations, ESGF policies will influence the type of installation you need to deploy.
Updated information on ESGF policies will be added here soon.
<!-- For new or exisiting ESGF node installations, first read the [following document](www.esgf.com) on ESGF policies, as this will influence the type of installation you need to deploy.  -->
<!-- _needs proper link and updating_  -->

### 1.2 How to install data node services
**Requirements, setup and usage documentation**

**Software Stack**
The ESGF software stack requires Linux RedHat Enterprise or Rocky/Alma distributions. Administrators must have full sudo privileges to root access or a Kubernetes Cluster.
The services are meant to run on webserver-grade hardware.
For data-sharing nodes the storage holding your data must be mounted on the node. 
<!-- _need a practical example here with cost estimate_.  -->
<!-- The services are meant to run on [webserver-grade hardware](www.exaple.com).  ADD VALID LINK -->

**ESGF Docker** 
Instructions and links to any issuses can be [found here](https://github.com/ESGF/esgf-docker/).


**Metagrid user interface - optional**
To install the Metagrid UI for end-users to search and download data, read the documentation [here](https://metagrid.readthedocs.io/en/latest/) and see the Github repo [here](https://github.com/esgf2-us/metagrid). 

### 1.3 Compute Node services

_Coming soon...._

## 2. Dataset publication - Preliminary testing for CMIP7

_the command-line tools described in this section are not production-ready for CMIP7 publication, however we welcome test users who have successfully produced CMORized data to test out the tools/workflows. Follow the steps below specific to testing_

 - Apply for Integration testing group membership here:  (https://app.globus.org/groups/e3329078-b8f6-11f0-9fdd-0e7d9e9fc9e3)
   - You may use your insitution or well-known Social Auth provider to log in to Globus
 - Install  esg
   - Follow instructions linked from the *esgf-prepare* docs site on CMIP7 vocabulary
 - Install the esg-publisher `esgcet` package:

   ```
   pip install git+https://github.com/ESGF/esg-publisher.git@esgf-ng-v5.4a#ubdirectory=src/python
   ```
- Add the following to your esg.yaml config file for publishing:
  ```
      stac_config:
        stac_client:
            client_id:  ec5f07c0-7ed8-4f2b-94f2-ddb6f8fc91a3
            redirect_uri:  https://auth.globus.org/v2/web/auth-code
        token_storage_file: ~/.esgf2-publisher.json
        stac_transaction_api:
            client_id: 6fa3b827-5484-42b9-84db-f00c7a183a6a
            access_control_policy: https://esgf2.s3.amazonaws.com/access_control_policy.json
        #    scope_string: https://auth.globus.org/scopes/ec5f07c0-7ed8-4f2b-94f2-ddb6f8fc91a3/ingest
            scope_string: https://auth.globus.org/scopes/6fa3b827-5484-42b9-84db-f00c7a183a6a/ingest    
            base_url: https://client-integration-transaction.api.stac.esgf-west.org
        stac_api: https://api.stac.esgf-west.org
  ```

**Requirements** 

Publishers to ESGF **must** have an existing Data Node installed at their site. Although the publisher software (from v5.x onwards) does not need to run on the Data Node it does require a _Data mount_ for the software to access data files. 

### 2.1 Dataset preparation 
The ESGF publication process requires robust and effective data management, which can also be a burden for data managers. However, the [ESGF esgprep toolbox](https://esgf.github.io/esgf-prepare/) is a piece of software that enables data preparation according to ESGF best practices. Esgprep allows the data providers and data node managers to easily prepare their data for publishing to an ESGF node - it is a standalone toolbox. It can be used to fetch required configuration files, apply the Data Reference Syntax on local filesystems and/or generate mapfiles for ESGF publication.

Full details of _esgprep_ and instructions for use provided by the team at Institut Pierre-Simon Laplace (IPSL) can be [found here](https://esgf.github.io/esgf-prepare/).  


### 2.2 Publisher introduction 
The esg-publisher or _esgcet_ Python package contains a collection of command-line utilities to scan, manipulate and push dataset metadata to an ESGF index node. 
The basic publication process takes several steps with some optional steps. Publisher functionality is available via several submodles/classes in the package.
Please refer to the [user documentation](https://esg-publisher.readthedocs.io/en/stable/intro.html) and [Github issues page](https://github.com/ESGF/esg-publisher/issues)

### 2.3 ESG-Publisher software installation 
**Requirements** 

1. A python environment, using venv, conda, miniforge/mamba etc. 
2. Mountpoint map to data on the same host as the publisher software installation, so the publisher has access to scan data using the integrated XArray package.
3. Basic dataset information provided via the esg mapfile format. For example using the esgf-prepare/esgmapfile utility.

### 2.4 Dataset publication
Full details of the dataset publication process using _pip install_ to install _esgcet_ can be found [here](https://esg-publisher.readthedocs.io/en/stable/install.html)


## 3. Dataset retraction

### 3.1 Retraction process
The _esgunpublish_ command retracts, or, upon specification, deletes a specified dataset(s). The output of this command is either a success or failure message accompanied with the id of the dataset that was retracted. **Exercise caution** when deleting datasets. If replicas have been made or if you will be republishing, **you should retract** rather than delete outright. Follow the instructions [here](https://esg-publisher.readthedocs.io/en/stable/esgunpublish.html) and for an example, check out the [Jupyter notebook](https://nbviewer.org/github/ESGF/esg-publisher/blob/main/notebooks/unpublish-list.ipynb)
