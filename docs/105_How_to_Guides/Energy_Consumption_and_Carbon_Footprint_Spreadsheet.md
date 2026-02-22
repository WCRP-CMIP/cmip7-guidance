# Energy Consumption and Carbon Footprint Spreadsheet Guide

#### [Created by CMIP IPO with Scribe](https://scribehow.com/shared/Navigate_spreadsheet_of_the_Energy_Consumption_and_Carbon_Footprint_Task_Team__QAXQxmW5QyGa0saW8BNiNA)

This spreadsheet is distributed to modelling centres participating in **CMIP7 AFT** and ongoing **CMIP7 experiments**.

Its purpose is to collect HPC performance information that enables the Task Team to:

- Estimate **energy consumption**
- Calculate the **carbon footprint**
- Compare efficiency across platforms and experiments

## Please refer to the Guidance notes available on [Zenodo](https://doi.org/10.5281/zenodo.17464966). 

---

## Quick Start (Experienced Users)

If you already understand how to collect HPC performance metrics:

1. **General Information tab**
    - Enter modelling group and contact details
    - Add HPC platform name(s)

2. **HPC centre information**
    - For each machine: location, [PUE](https://edgebuildings.com/wp-content/uploads/2024/03/240313-EDGE-Certification-for-Data-Centers-V4.pdf), emission factor, energy mix %, source

3. **Experiment Metrics tab**
    - Complete **Tier 1 (Strongly recommended)**
    - Add **Tier 2 (Recommended)**
    - Add **Tier 3 (Optional)**

4. Add any comments if needed, for example where metrics cannot be provided due to institution regulations. 
5. Use **Metrics short descriptions** tab as glossary

For definitions or formulas → open the **[Guidelines](https://doi.org/10.5281/zenodo.17464966)** at top of the spreadsheet.

---

# Step-by-Step Instructions

---

## General Information Tab

<details markdown="1">
<summary><strong>Open the spreadsheet to locate the key guidance links</strong></summary>

### Step 1 — Open the tab

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/48a4285f-6fe2-42bb-bedd-cc4388400a3c/ascreenshot_161b275f2f93410d854696572d718cdb_text_export.jpeg" width="800">
<figcaption>Select the <b>General Information</b> tab.</figcaption>
</figure>

---

### Step 2 — Guidelines document (Zenodo)

The [**Zenodo link**](https://doi.org/10.5281/zenodo.17464966) provides:

- Tier 1–3 metric definitions
- Calculation methods
- PUE and emission factor explanations and links
- Best practice

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/9836a0d2-e8be-49e6-897d-0a06b20ac614/ascreenshot_3c8738de214c42b69013890aff02fcbc_text_export.jpeg" width="800">
<figcaption>Link to the full Guidelines and Best Practice document.</figcaption>
</figure>

---

### Step 3 — FAQ and contact

- [FAQ link](https://wcrp-cmip.org/cmip7-task-teams/energy-consumption/#faqs) (updated over time)
- Task Team support email

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/d89fe123-c130-4780-9ca4-c533f14b4f1e/ascreenshot_58554cc201c5401ebdd4dbafce8fb4ae_text_export.jpeg" width="800">
<figcaption>FAQ and contact information.</figcaption>
</figure>

</details>

---

## Modelling Group Information

<details markdown="1">
<summary><strong>Enter details about your modelling centre</strong></summary>

Fill in:

| Field | What to enter | Example |
|-------|--------------|---------|
| Modelling group name | Organisation or group | ECMWF |
| Location | City + country | Hamburg, Germany |
| Contact email | Person completing form | name@email |
| HPC platform name | Primary system name | Levante |

### Screenshots

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/bd0e5011-b0be-4ef0-b472-104b1eddf9a0/ascreenshot_b4bef83fd4a94940b94f10efc0b5eb2f_text_export.jpeg" width="800">
<figcaption>Modelling group name.</figcaption>
</figure>

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/631fc5a0-2f74-42f2-b0ee-8dbcfc06c8d2/ascreenshot_3bf3677463bf415596576aeb57777e35_text_export.jpeg" width="800">
<figcaption>Location and country.</figcaption>
</figure>

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/a919a891-3094-47cf-92ea-68919b75ca3a/ascreenshot_b0e2e8da39724ca9a18c87eab901d9ac_text_export.jpeg" width="800">
<figcaption>Contact email.</figcaption>
</figure>

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/baa83708-e734-4853-90f6-8aac081ed8f5/ascreenshot_58d6279e411841ec9aa6df2d1b71e987_text_export.jpeg" width="800">
<figcaption>HPC platform name.</figcaption>
</figure>

</details>

---

## HPC Centre Information

<details markdown="1">
<summary><strong>Describe each HPC machine</strong></summary>

Add one row **per machine**.

Required information:

| Field | Description |
|--------|------------|
| Platform name | Machine identifier |
| Location | City + country |
| PUE | Power Usage Effectiveness |
| Emission factor | Carbon intensity of electricity |
| Energy mix (%) | Source breakdown |
| Source | Link or text reference |

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/b9af5452-89c5-4af0-84e1-7dde542755ae/ascreenshot_57ca34e0f84c4b74a6b07a0a671aa16b_text_export.jpeg" width="800">
<figcaption>Multiple rows allow several machines.</figcaption>
</figure>

</details>

---

# Experiment Metrics Tab

Select **Experiment Metrics**.

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/317c31c8-3fff-4fd8-b7cc-454dd3f5739d/ascreenshot_fe073d7c375147ed8dd534a6a749e4e1_text_export.jpeg" width="800">
<figcaption>Experiment Metrics tab.</figcaption>
</figure>

---

## Tier 1 — Strongly Recommended (Minimum Required)

<details markdown="1">
<summary><strong>Core inputs required to compute carbon footprint</strong></summary>

A **Setup** = experiments of same type, same mode, same machine.

Enter for each setup:

| Field | Example |
|-----------|-----------|
| Platform name | dropdown |
| Experiment type | Production / Tuning / Discarded |
| Model name | ICON |
| Simulated years | 100 |
| Core hours | 13000 |
| Data output (GB) | 4000 |
| Energy consumption (MJ) | calculated |

</details>

---

## Tier 2 — Recommended

<details markdown="1">
<summary><strong>Performance and efficiency metrics</strong></summary>

| Metric | Example |
|-----------|-----------|
| SYPD | 12 |
| QSYPD | 10.5 |
| RSYPD | 9.5 |
| Parallelisation (cores) | 500 |
| Data output intensity (GB/core-hour) | 0.05 |
| Number of grid points | 1.5E+06 |

Provides deeper insight into performance and resource use.

</details>

---

## Tier 3 — Optional

<details markdown="1">
<summary><strong>Advanced/diagnostic metrics</strong></summary>

| Metric | Example |
|-----------|-----------|
| Complexity | 32 |
| Data output cost | 0.12 |
| Coupling cost | 0.12 |
| Memory bloat | 50 |

Complete only if this data is available.

</details>

---

## Comments

Add any notes or explanations related to:

- Assumptions
- Estimates
- Missing values
- Special configurations

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/e5a712bd-9921-4d6e-882e-bd804b65f8df/ascreenshot_ac6744b2b8234c45b2cb5e980868a7cc_text_export.jpeg" width="800">
<figcaption>Comments section.</figcaption>
</figure>

---

## Metrics Glossary

Open **Metrics short descriptions** for definitions of all fields.

<figure>
<img src="https://colony-recorder.s3.amazonaws.com/files/2026-01-28/cbd37510-c9a0-41fd-a196-c469a9090968/ascreenshot_989d84f9218941f9a65f8ed05886c02a_text_export.jpeg" width="800">
<figcaption>Glossary of metric descriptions.</figcaption>
</figure>

For detailed explanations or formulas, please refer to the **Guidelines document** in the General Information tab.

---

