**UPEC Genomic Database & Machine Learning Dataset**

**Overview**

This repository hosts the genomic data and machine learning feature matrices for 1,184 human-specific UPEC isolates. The dataset was curated to support research into urinary tract pathologies, antibiotic resistance, and virulence factors.

🌐 Click Here to View the Interactive Database

**Dataset Contents**

**1.** Metadata (UPEC_Metadata_Complete.csv)

Contains epidemiological and genomic metadata for all isolates, including:

Accession IDs (BioProject, BioSample)

Host Disease (UTI, Cystitis, Pyelonephritis)

Collection Date and Location

Assembly metrics (Size, GC%, Scaffolds)

**2.** Genomic Features (final_cleaned_no_dot_suffix_duplicates.zip)

A comprehensive binary matrix (0/1) representing the presence/absence of 73,218 genomic features:

AMR Genes: ResFinder, CARD, AMRFinderPlus (includes point mutations)

Virulence Factors: VFDB

Plasmids: PlasmidFinder

Pangenome: Roary (72,590 gene clusters)

**3.** Genome Assemblies (All_Genomes.zip)

FASTA files for all 1,184 isolates, quality filtered (>95% completeness, <5% contamination).

**Methodology**

Sequencing Data: Retrieved from NCBI (July 25, 2024).

Annotation: Prokka (v1.14.6)

Pangenome: Roary (v3.13.0)

Typing: MLST (Achtman), Serotyping (ecOH)

**Citation**

If you use this dataset, please cite the associated manuscript (citation pending) and this repository.
