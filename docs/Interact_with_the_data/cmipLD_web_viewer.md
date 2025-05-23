
A wireframe of the JSONLD viewer can be found at : 

[https://wcrp-cmip.github.io/CMIP-LD/static/viewer/](https://wcrp-cmip.github.io/CMIP-LD/static/viewer/)

To test this out, we can enter the URI for a JSONLD file. E.g. for the CMIP activity we have have the ID:  
[https://wcrp-cmip.github.io/WCRP-universe/activity/cmip](https://wcrp-cmip.github.io/WCRP-universe/activity/cmip)

### Link simplification 
Rather than remembering this whole link, we are also able to use the pre-defined prefix from the table before

| **Repository**     | **GitHub Pages URL**                                         | **Repository URL**          |
|---------------------|-------------------------------------------------------------|-----------------------------:|
| wcrp-universe       | [https://wcrp-cmip.github.io/WCRP-universe/](https://wcrp-cmip.github.io/WCRP-universe/)      | [repo-link](https://github.com/wcrp-cmip/WCRP-universe)      |
| mip-variables       | [https://wcrp-cmip.github.io/MIP-variables/](https://wcrp-cmip.github.io/MIP-variables/)      | [repo-link](https://github.com/wcrp-cmip/MIP-variables)      |
| cmip6plus           | [https://wcrp-cmip.github.io/CMIP6Plus_CVs/](https://wcrp-cmip.github.io/CMIP6Plus_CVs/)      | [repo-link](https://github.com/wcrp-cmip/CMIP6Plus_CVs)      |
| cmip7               | [https://wcrp-cmip.github.io/CMIP7_CVs/](https://wcrp-cmip.github.io/CMIP7_CVs/)              | [repo-link](https://github.com/wcrp-cmip/CMIP7_CVs)          |
| cf                  | [https://wcrp-cmip.github.io/CF/](https://wcrp-cmip.github.io/CF/)                           | [repo-link](https://github.com/wcrp-cmip/CF)                 |
| obs4mips            | [https://wolfiex.github.io/obs4MIPs-cmor-tables-ld/](https://wolfiex.github.io/obs4MIPs-cmor-tables-ld/) | [repo-link](https://github.com/wolfiex/obs4MIPs-cmor-tables-ld) |



This means that to get to the same page, we can now type 

```
universal:activity/cmip
```

### Getting The result
The web interface will not present a compacted view of the JSONLD file requested as such.
<img style='width:800px' src='/assets/demo_images/idweb1.png'/>

### Framing
Currently this option is disabled to a CORRS same origin policy, but this will soon be fixed. 