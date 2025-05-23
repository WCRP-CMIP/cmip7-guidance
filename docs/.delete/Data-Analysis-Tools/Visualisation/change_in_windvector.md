# Change in Wind speed and Direction 

Created by [anjakatzenberger](anja.katzenberger@pik-potsdam.de)

This code provides changes in wind speed and wind direction for a subset of CMIP6 models

1.  The first figure (a panel of 2x3 wind fields) is written for 6 CMIP6 models
2. The second figure gives a multi model mean of the models given
3. The input data is preprocessed using CDOs (selected time period, selected altitude of winds, as well as mean over time for specific months)


### Adapt the preprocessing as adequate for your research question

### Example template of the program structure. 
``` mermaid
graph TD
  subgraph "Initialize Directories"
    A[udir_future]
    B[vdir_future]
    C[udir]
    D[vdir]
    E[dir_save]
  end

  subgraph "List Files"
    F[List files in udir_future]
    G[List files in vdir_future]
    H[List files in udir]
    I[List files in vdir]
  end

  subgraph "Create Wind Fields"
    J[Loop through models]
    K[Load u and v data]
    L[Calculate wind speed]
    M[Plot wind fields]
    N[Save figure]
  end

  subgraph "Multi-Model Mean"
    O[Create arrays for wind speed, ua_diff, va_diff]
    P[Loop through models]
    Q[Load u and v data]
    R[Calculate ua_diff and va_diff]
    S[Calculate mean wind speed]
    T[Plot mean wind speed]
    U[Save figure]
  end

  A --> J
  B --> J
  C --> J
  D --> J
  E --> M
  F --> J
  G --> J
  H --> J
  I --> J
  J --> K
  K --> L
  L --> M
  M --> N
  N --> |Repeat for each model| J
  O --> P
  P --> Q
  Q --> R
  R --> O
  R --> S
  S --> T
  T --> U

```
