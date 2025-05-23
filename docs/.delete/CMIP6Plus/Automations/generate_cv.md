# [Py] Generate CV

The python script used to generate a cv. 

This is run by the action script [link here]. 


## Arguments

```
Create CV 
usage: create_cv.py [-h] [-c COMMIT] [-d DATE] [-t TAG] [-b BRANCH] [-a API]

Github action script to create CVs

options:
  -h, --help            show this help message and exit
  -c COMMIT, --commit COMMIT
                        Commit SHA
  -d DATE, --date DATE  date_commit
  -t TAG, --tag TAG     tag
  -b BRANCH, --branch BRANCH
                        branch
  -a API, --api API     api_token
```


## Program Flow
```mermaid

graph TB

subgraph "Initialize Parameters"
    A[Set relative path]
    B[Set CV prefix]
    C[Define MIP tables prefix]
    D[Define table prefix pattern]
end

subgraph "Argument Parsing"
    E[Parse commit, date, tag, branch, and API token]
end

subgraph "Define Functions"
    F[Read contents from GitHub]
    G[Read JSON from GitHub]
    H[Listify function]
    I[Notnull function]
end

subgraph "Tunable Parameters"
    J[Define additional parameters]
end

subgraph "Other Parameters"
    K[Define additional parameters]
end

subgraph "Read from MIP Tables"
    L[Read source_type, frequency, realm, etc. from MIP tables]
end

subgraph "Main Section"
    M[Loop through structure elements]
    N[Read table_id from GitHub]
    O[Loop through experiments and update source_type]
    P[Handle experiment_id entries]
    Q[Handle activity_id entries]
    R[Handle source_id entries]
end

subgraph "Metadata and Checksum"
    S[Get latest commit from MIP tables]
    T[Update version metadata]
    U[Calculate checksum]
end

subgraph "Checksum"
    V[Extract branch from branch argument]
    W[Remove old branched CVs if branch is main]
    X[Calculate checksum and compare with the old CV]
    Y[Write updated CV to file]
end

A --> E
B --> E
C --> E
D --> E
E --> J
J --> L
E --> F
E --> G
J --> F
J --> G
J --> H
J --> I
L --> M
N --> M
M --> O
O --> P
P --> Q
Q --> R
R --> T
T --> U
U --> V
V --> W
W --> X
X --> Y

```
