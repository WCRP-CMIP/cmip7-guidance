---
title : Time and Masked Area Averages in the Data Request -- use of Cell Methods
---

# Time and Masked Area Averages in the Data Request -- use of Cell Methods.

## Time Means
Many variables in CMIP6 are defined as masked means, defined as the mean of a quantity over a portion of the grid cell defined by an area type.

### Area Types used for Masked Means
 	 
| Area type | Description |
| --- | --- |
| land | Land is defined to include ice shelves, both grounded and floating. For a minority of CMIP6 models this means that the land mask can evolve with time as floating ice shelves move. For most models, however, the land mask will be fixed. |
| sea | Sea refers to all areas of the ocean. |
| ice_free_sea	Sea areas with no sea ice or ice shelves.|
| sea_ice | Sea ice is floating ice, excluding ice shelves.|
| land_ice | Land ice includes glaciers, ice caps, ice sheets and ice shelves.|
| ice_free_sea | Sea area with no sea ice or floating ice shelves.|
| cloud | Area where there is cloud|
| floating_ice_shelf* | 	 |
| grounded_ice_shelf* | 	 |
| snow_covered_sea_ice*	 |  |

## Temporal means
These area types are used in the following constructions:

### Area weighted mean:
```
area: time: mean where <area_type>
```
For time invariant area types, this is equivalent to "area: mean where <area_type> time: mean". This mean gives equal weight to every square metre occupied by the declared area type. It will typically be calculated by first evaluating a masked area mean at each time step, and then calculating a mean of the time series weighted by the masked area at each time step. A spatial map will show values characteristic of the area type, with undefined values where the area type does not exist.

A comment field is added to indicate the area fraction field which is associated with the same area type, e.g. "area: time: mean where trees (comment: mask=treeFrac)". This construction is used for vegetation, shrubs, natural_grasses, trees, sea_ice, sea_ice_melt_pond. For sea_ice, there are two different mask, siconc and siitdconc: the second specifying area fraction in ice thickness categories.

### Partial mean
```
area: mean where <area_type> over all_area_types time: mean
```
This is equivalent to averaging over the whole cell after assigning a value of zero to areas which do not belong to the declared area type. Equal weight is given to each grid cell.  A spatial map will show zero where the area type does not exist.

### Partial Mean over Sea
```
area: mean where <area_type> over sea time: mean
```
This is similar to the partial mean, except that it is restricted to ocean grid points (treating the sea area as constant: this construction becomes ambiguous if the sea area varies in time).

### Mass weighted mean
```
area: mean where land time: mean (with samples weighted by snow mass)
```
There is no explicit formulation for a mass weighted mean, which is used for one variable in CMIP6 (the mean temperature of snow), so the option of adding an explanatory comment in brackets is taken.

### Mean at a specific height
```
area: mean where sea depth: minimum (shallowest local minimum) time: mean
```
This cell methods string is used for one ocean variable, the "Oxygen Minimum Concentration" (o2min). First, a cell average is taken, and then shallowest local minimum is found, and this is averaged over time.

### Mean over a set of different area types
When the diagnostic is a vector of values for different area types, as for the "cSoilLut" variable (Soil Carbon Content on Land Use Tiles), the cell methods string takes the form "area: mean where landuse", and "landuse" is a dimension of the diagnostic.

## Examples from CMIP6

### Sea Ice Snow Area Fraction (sisnconc) and Sea Ice Thickness (sithick)
This variable is defined with the standard name "surface_snow_area_fraction", but uses the cell methods string to restrict the area considered to snow on sea ice. The monthly weighted mean is requested. If, for instance, the sea ice in a grid cell is completely snow covered for the full month, the value of the monthly mean should be 1, even if the sea ice only partially fills the grid cell. Similarly with Sea Ice Thickness (standard name sea_ice_thickness): if ice covers half the grid cell with a uniform depth of 1m, the sithick value will be 1m. Undefined where there is no sea ice.

### Sea Ice Mass (simass)
This variable is defined with the standard name "sea_ice_amount" (units kg m-2). It is defined as a partial mean, so that it gives a measure of the amount of sea ice in a grid cell, zero where there is no sea ice.

## More Subtle Examples
### Sea-ice thickness in sea-ice thickness categories (siitdthick) and Snow thickness in sea-ice thickness categories (siitdsnthick)
These variables are defined over certain categories of ice thickness. The snow thickness in areas with a specific ice thickness category is undefined if that category does not exist in the grid cell, so we want to mask by the amount of sea-ice in each thickness category. In other wprds, rather than masking by ice amount as a function of space and time, we want to mask by a different variable which gives ive amount as a function of space, time and ice thickness category.