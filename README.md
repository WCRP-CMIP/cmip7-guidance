# mipcvs-wiki

[![MkDocs Build + Deploy](https://github.com/WCRP-CMIP/mipcvs-wiki/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/WCRP-CMIP/mipcvs-wiki/actions/workflows/deploy.yml) [![Deploy static content to Pages](https://github.com/WCRP-CMIP/mipcvs-wiki/actions/workflows/staticpublish.yml/badge.svg)](https://github.com/WCRP-CMIP/mipcvs-wiki/actions/workflows/staticpublish.yml)


Contents for the MIPCVs wiki. See [wiki.mipcvs.dev](https://wiki.mipcvs.dev/)

---

## What? 
This repository updates the wiki for CV updates. It contains infomration that will be used to inform the submission process and caviats in relation to this. The intuitive markdown format and open source (github repo) format allow relevant leads and users to update the documentation in real time.

The files within here consist of a nested structure on markdown files, that may be downloaded and distributed with the software. These can be found within the `docs` folder. T

A secondary technical wiki outlining how to change the intircasies of mkdoc and other tools will be available at developer.mipcvs.dev. 


---

## Editing the documentation.
    Docmentation is found in the `docs` folder with the file names and hierarchy affecting the navigational menu. 

### Editing materials. 

- menu/page name is determined by the `#` header tag at the top of a file. 


## Resources
### Demo files and structure: 
    https://github.com/selfhostedshow/wiki/tree/master
### Permissable items
    https://squidfunk.github.io/mkdocs-material/reference/admonitions/




## developer notes
The following are Notes and will be tidied away in due course. 

https://squidfunk.github.io/mkdocs-material/getting-started/



### install
`docker pull squidfunk/mkdocs-material`

### creating a site. Dont run.
`docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .`

### preview 
`docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material`

### build 
`docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build`
