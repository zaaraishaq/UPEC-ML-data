**UPEC Genomic Database & Machine Learning Dataset**

**🧬 Overview**

This repository provides a curated genomic dataset and high-dimensional machine learning feature matrices for 1,184 human-specific Uropathogenic Escherichia coli (UPEC) isolates. By integrating pangenomic profiling with supervised machine learning, this framework enables the identification of lineage-specific genomic signatures, mobile genetic architecture, and metabolic markers driving UPEC pathoadaptation.

**📂 Dataset Contents**
**1. Metadata**
 (UPEC_Metadata_Complete.csv)
A detailed epidemiological and genomic metadata file containing:
Identifiers: BioProject, BioSample, and Assembly Accessions.
Clinical Data: Host disease pathology (UTI, Cystitis, Pyelonephritis).
Epidemiology: Collection year and geographical location.
Assembly Stats: Genome size, GC content, and scaffold counts.

**2. Machine Learning Matrix** (Available in Repository)
File: Statistically_Significant_Dataset.csv
Format: Comprehensive binary matrix (0/1) tailored for machine learning.
Dimensions: 838 isolates × 12,012 statistically significant genomic features.

**3. Genome Assemblies**
Genomes were retrieved from NCBI. To access the raw sequence data for any isolate in this study, please refer to the Accession IDs (BioProject/Assembly) provided in the UPEC_Metadata_Complete.csv file.

**🔬 Methodology**

The dataset was constructed using a standardized bioinformatics pipeline:
Data Retrieval: Public genomes were retrieved from NCBI on July 25, 2024.
Annotation: Genomes were annotated using Prokka (v1.14.6).
Pangenome Analysis: Core and accessory genes were defined using Roary (v3.13.0).
MLST: Sequence Types determined via the Achtman scheme.
Serotyping: Predicted using ecOH.
Resistome: ResFinder, CARD, AMRFinderPlus and PointFinder.
Virulome: VFDB & E. coli_VF databases.
Mobilome: Predicted through PlasmidFinder, IntegronFinder, ISEScan and PHASTEST.

**📚 Citation**
The manuscript regarding this database and dataset is under review. 
