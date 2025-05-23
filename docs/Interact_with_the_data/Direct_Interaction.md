
## Introduction

There are several available methods to interact with the JSONLD files. 




### Direct interaction 



As the files are valid JSON custom scripts can be used to interact with them directly.

| **Repository**     | **GitHub Pages URL**                                         | **Repository URL**          |
|---------------------|-------------------------------------------------------------|-----------------------------:|
| wcrp-universe       | [https://wcrp-cmip.github.io/WCRP-universe/](https://wcrp-cmip.github.io/WCRP-universe/)      | [repo-link](https://github.com/wcrp-cmip/WCRP-universe)      |
| mip-variables       | [https://wcrp-cmip.github.io/MIP-variables/](https://wcrp-cmip.github.io/MIP-variables/)      | [repo-link](https://github.com/wcrp-cmip/MIP-variables)      |
| cmip6plus           | [https://wcrp-cmip.github.io/CMIP6Plus_CVs/](https://wcrp-cmip.github.io/CMIP6Plus_CVs/)      | [repo-link](https://github.com/wcrp-cmip/CMIP6Plus_CVs)      |
| cmip7               | [https://wcrp-cmip.github.io/CMIP7_CVs/](https://wcrp-cmip.github.io/CMIP7_CVs/)              | [repo-link](https://github.com/wcrp-cmip/CMIP7_CVs)          |
| cf                  | [https://wcrp-cmip.github.io/CF/](https://wcrp-cmip.github.io/CF/)                           | [repo-link](https://github.com/wcrp-cmip/CF)                 |
| obs4mips            | [https://wolfiex.github.io/obs4MIPs-cmor-tables-ld/](https://wolfiex.github.io/obs4MIPs-cmor-tables-ld/) | [repo-link](https://github.com/wolfiex/obs4MIPs-cmor-tables-ld) |



This means that you can download a local copy with 
```bash 
git clone <github repo url>
```
View them in the browser, or use the requests / GET api to download them directly. 

#### File structure
If using the github interface, you can navigate as normal. JSONLD files are currently located under the `src-data` directory in each repository. 


If the user should so wish, they are also served using github pages, under the same filepath excluding the term `src-data`. 

This means that the following activity page

[ https://github.com/WCRP-CMIP/WCRP-universe/blob/main/src-data/activity/cmip.json
]( https://github.com/WCRP-CMIP/WCRP-universe/blob/main/src-data/activity/cmip.json
 )

 becomes

[ https://wcrp-cmip.github.io/WCRP-universe/activity/cmip.json]( https://wcrp-cmip.github.io/WCRP-universe/activity/cmip.json)

 where the `.json` is optional, but helps the browser open the file for viewing rather than downloading it. 

