**UPEC Genomic Database & Machine Learning Dataset**

**🧬 Overview**

This repository hosts a curated genomic dataset and machine learning feature matrices for Human-Specific Uropathogenic Escherichia coli (UPEC). The dataset was designed to facilitate advanced research into urinary tract pathologies, antimicrobial resistance (AMR), and virulence evolution.

It consolidates high-dimensional genomic data from public repositories into a unified, machine-learning-ready format.

**🔗 Access the Interactive Database**

**📉 Data Processing Workflow**

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

1. Metadata (UPEC_Metadata_Complete.csv)

A detailed epidemiological and genomic metadata file containing:

Identifiers: BioProject, BioSample, and Assembly Accessions.

Clinical Data: Host disease pathology (UTI, Cystitis, Pyelonephritis).

Epidemiology: Collection year and geographical location.

Assembly Stats: Genome size, GC content, and scaffold counts.

**2. Genomic Features (final_cleaned_no_dot_suffix_duplicates.zip)**

A comprehensive binary matrix (0/1) tailored for machine learning, representing the presence or absence of 73,218 genomic features:

Feature Type

Tool Used

Description

AMR Genes

ResFinder, CARD, AMRFinderPlus

Acquired resistance genes and point mutations.

Virulence Factors

VFDB

Adhesins, toxins, and siderophores.

Plasmids

PlasmidFinder

Plasmid replicon types.

Pangenome

Roary

72,590 gene clusters (Core + Accessory genome).

**3. Genome Assemblies (All_Genomes.zip)**

Raw FASTA files for all 1,184 isolates. All assemblies have passed quality filtering (>95% completeness, <5% contamination).

**🔬 Methodology**

The dataset was constructed using a standardized bioinformatics pipeline:

Data Retrieval: Public genomes were retrieved from NCBI on July 25, 2024.

Annotation: Genomes were annotated using Prokka (v1.14.6).

Pangenome Analysis: Core and accessory genes were defined using Roary (v3.13.0).

Molecular Typing:

MLST: Sequence Types determined via the Achtman scheme.

Serotyping: Predicted using ecOH.

**📚 Citation**

If you use this dataset in your research, please cite the associated manuscript and this repository:

[Insert Author List]. (2025). Title of the Manuscript. [Journal Name]. DOI: [Insert DOI]

📄 License

This dataset is available under the Creative Commons Attribution 4.0 International license.
