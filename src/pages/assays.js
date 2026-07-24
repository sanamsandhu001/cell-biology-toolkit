import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function CellLines() {
  return (
    <Layout
title="Assays & Techniques"
description="Assays and laboratory methods for the Cell Biology Toolkit"
>

<header className={styles.hero}>
  <div className={styles.overlay}></div>

  <div className={styles.content}>
    <Heading as="h1">
      Assays & Techniques
    </Heading>

    <p>
      Standardized protocols and reference guides for cellular assays, molecular techniques, and experimental methods used in biomedical research.
    </p>
  </div>
</header>

<main className={styles.main}>

  <section className={styles.intro}>
    <Heading as="h2">
      About this Collection
    </Heading>

    <p>
      The Assays & Techniques Collection provides comprehensive reference guides
      for widely used experimental methods in cell biology and biomedical
      research. Each guide describes the scientific principle, workflow,
      required reagents and equipment, experimental controls, data analysis,
      troubleshooting, and common applications to support reproducible and
      reliable laboratory experiments.
    </p>
  </section>

<section>
  <Heading as="h2">
    Browse Assay Categories
  </Heading>

  <div className={styles.grid}>

    <Link className={styles.card} to="/cell-viability">
      <Heading as="h3">Cell Viability & Cytotoxicity</Heading>
      <p>Assays for measuring cell viability, metabolic activity, membrane integrity and cytotoxicity.</p>
    </Link>

    <Link className={styles.card} to="/cell-proliferation">
      <Heading as="h3">Cell Proliferation</Heading>
      <p>Methods for quantifying cell growth, DNA synthesis and long-term proliferative capacity.</p>
    </Link>

    <Link className={styles.card} to="/cell-death">
      <Heading as="h3">Cell Death & Cell Cycle</Heading>
      <p>Techniques for analyzing apoptosis, caspase activation and cell cycle progression.</p>
    </Link>

    <Link className={styles.card} to="/cell-function">
      <Heading as="h3">Cell Function & Behavior</Heading>
      <p>Functional assays for oxidative stress, migration, senescence and other cellular responses.</p>
    </Link>

    <Link className={styles.card} to="/molecular-techniques">
      <Heading as="h3">Molecular & Imaging Techniques</Heading>
      <p>Methods for protein detection, gene expression analysis and cellular imaging.</p>
    </Link>

    <Link className={styles.card} to="/stem-cell-methods">
      <Heading as="h3">Stem Cell Methods</Heading>
      <p>Protocols and reference guides for stem cell culture, characterization, organoids and disease modeling.</p>
    </Link>

  </div>

</section>
<section className={styles.featured}>
  <Heading as="h2">
    Popular Assays & Methods
  </Heading>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/MTT-Assay">
      <Heading as="h3">MTT Assay</Heading>
      <p>Colorimetric assay for measuring cell metabolic activity as an indicator of viability and proliferation.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/CellTiter-Glo-Luminescent-Cell-Viability-Assay">
      <Heading as="h3">CellTiter-Glo® Assay</Heading>
      <p>ATP-based luminescent assay for rapid and highly sensitive measurement of viable cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Trypan-Blue-Exclusion-Assay">
      <Heading as="h3">Trypan Blue Exclusion</Heading>
      <p>Simple dye exclusion method for determining cell viability and performing routine cell counts.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Western-Blot">
      <Heading as="h3">Western Blot</Heading>
      <p>Gold-standard method for detecting and quantifying specific proteins in biological samples.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cell-methods/Brain-Organoids">
      <Heading as="h3">Brain Organoids</Heading>
      <p>Three-dimensional stem cell-derived models that recapitulate key features of human brain development and disease.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cell-methods/iPSC-Reprogramming">
      <Heading as="h3">iPSC Reprogramming</Heading>
      <p>Generation of induced pluripotent stem cells from somatic cells for disease modeling and regenerative medicine.</p>
    </Link>

  </div>
</section>
</main>

</Layout>
  );
}