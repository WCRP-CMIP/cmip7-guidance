# CMIP7 Guidance and documentation

[![MkDocs Build + Deploy](https://github.com/WCRP-CMIP/cmip7-guidance/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/WCRP-CMIP/cmip7-guidance/workflows/deploy.yml) [![Deploy static content to Pages](https://github.com/WCRP-CMIP/cmip7-guidance/actions/workflows/staticpublish.yml/badge.svg)](https://github.com/WCRP-CMIP/cmip7-guidance/actions/workflows/staticpublish.yml)


-------

> [!NOTE]
> The live site is located at
> [guidance.mipcvs.dev/](https://guidance.mipcvs.dev/)

> GH generated site also mirrored at
> [wcrp-cmip.github.io/cmip7-guidance/](https://wcrp-cmip.github.io/cmip7-guidance/)

--------


## Editing the documentation.

Docmentation is found in the `docs` folder with the file names and hierarchy affecting the navigational menu. 

### Editing materials. 

- menu/page name is determined by the `#` header tag at the top of a file. 

## MkDocs setup for development

1. Create a conda environment with mkdocs. From the root of this repo;
   
    `conda env create -f environment.yml`
   
3. when complete activate the conda environment and run
   
    `mkdocs serve`
   
   You should see the link to a local process that is running a webserver -- connect to that and you can browse the pages as you edit them.


