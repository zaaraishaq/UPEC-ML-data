**UPEC Genomic Database & Machine Learning Dataset**

**🧬 Overview**

This repository hosts a curated genomic dataset and machine learning feature matrices for Human-Specific Uropathogenic _Escherichia coli_ (UPEC). The dataset was designed to facilitate advanced research into:

🦠 Urinary Tract Pathologies
💊 Antimicrobial Resistance (AMR)
🧬 Virulence Evolution

It consolidates high-dimensional genomic data from public repositories into a unified, machine-learning-ready format.

🔗 **Access the Interactive Database** https://zaaraishaq.github.io/UPEC-ML-data/

📉 Data Processing Workflow

The following flowchart illustrates the curation process, specifically highlighting the quality control steps taken before feature extraction.

graph TD
    A[NCBI Retrieval] -->|1,186 Genomes| B[Quality Control & Filtering]
    B --> C{Duplicate Check}
    C -->|Found Duplicates| D[Remove: MG655_ & CFT073_]
    C -->|Unique| E[Keep Genomes]
    D --> F[1,184 Unique Isolates]
    E --> F
    F --> G[Feature Prediction]
    G --> H[Final Binary Matrix]
    style D fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px

**Note on Data Cleaning:**
Initially, 1,186 publicly available UPEC genomes were retrieved from NCBI. During the quality control phase, two duplicate genomes (identified as MG655_ and CFT073_) were detected and removed prior to genomic feature prediction. The final dataset strictly comprises 1,184 unique, high-quality isolates.

**📂 Dataset Contents**
**1. Metadata**<img width="466" height="239" alt="Tools" src="https://github.com/user-attachments/assets/6210982e-7e6c-4142-8160-2d902e61ae34" />
 (UPEC_Metadata_Complete.csv)
A detailed epidemiological and genomic metadata file containing:
Identifiers: BioProject, BioSample, and Assembly Accessions.
Clinical Data: Host disease pathology (UTI, Cystitis, Pyelonephritis).
Epidemiology: Collection year and geographical location.
Assembly Stats: Genome size, GC content, and scaffold counts.

**2. Genomic Features** (Available in Repository)
File: final_cleaned_no_dot_suffix_duplicates.rar
Format: Comprehensive binary matrix (0/1) tailored for machine learning.
Dimensions: 1,184 isolates × 73,218 features.

**3. Genome Assemblies**
Genomes were retrieved from NCBI. To access the raw sequence data for any isolate in this study, please refer to the Accession IDs (BioProject/Assembly) provided in the UPEC_Metadata_Complete.csv file.

**🔬 Methodology**

The dataset was constructed using a standardized bioinformatics pipeline:
Data Retrieval: Public genomes were retrieved from NCBI on July 25, 2024.
Annotation: Genomes were annotated using Prokka (v1.14.6).
Pangenome Analysis: Core and accessory genes were defined using Roary (v3.13.0).
Molecular Typing:
MLST: Sequence Types determined via the Achtman scheme.
Serotyping: Predicted using ecOH.

**📚 Citation**
The manuscript regarding this database and dataset is in submission. 
