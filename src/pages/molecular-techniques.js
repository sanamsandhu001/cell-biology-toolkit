import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Molecular & Imaging Techniques">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Molecular & Imaging Techniques
          </Heading>

          <p>
            Browse standardized reference guides for techniques used to visualize cellular structures, detect biomolecules, and analyze gene and protein expression.
            </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Molecular and imaging techniques are essential tools for investigating
    gene expression, protein abundance, cellular localization, and molecular
    mechanisms in biological research. These methods enable researchers to
    visualize cellular structures, detect specific biomolecules, and quantify
    changes in gene and protein expression across a wide range of experimental
    models.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    molecular and imaging techniques, describing their scientific principles,
    experimental workflows, required reagents and instrumentation,
    experimental controls, data analysis, troubleshooting, advantages,
    limitations, and research applications to support accurate and
    reproducible laboratory investigations.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Molecular & Imaging Techniques
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for techniques used to visualize cellular structures, detect biomolecules, and analyze gene and protein expression.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/Immunocytochemistry-ICC">
      <Heading as="h3">Immunocytochemistry (ICC)</Heading>
      <p>Detects and visualizes intracellular proteins using antigen-specific antibodies in fixed cultured cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Immunofluorescence-IF">
      <Heading as="h3">Immunofluorescence (IF)</Heading>
      <p>Uses fluorescently labeled antibodies to localize and visualize target proteins with high specificity.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Western-Blot">
      <Heading as="h3">Western Blot</Heading>
      <p>Identifies and quantifies specific proteins following electrophoretic separation and antibody-based detection.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Quantitative-Real-Time-PCR-qPCR">
      <Heading as="h3">Quantitative Real-Time PCR (qPCR)</Heading>
      <p>Measures gene expression by quantifying amplified nucleic acids in real time using fluorescent detection.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}