import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Human Cell Lines">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Cell Proliferation
          </Heading>

          <p>
            Standardized reference guides for assays used to measure cell growth, DNA synthesis, and cellular proliferation in cultured cells.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell proliferation assays are essential tools for measuring cell growth,
    division, and population expansion under normal and experimental
    conditions. They are widely used in cancer biology, developmental biology,
    regenerative medicine, drug discovery, toxicology, and tissue engineering
    to evaluate the effects of genes, growth factors, and therapeutic
    compounds on cellular proliferation.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    cell proliferation assays, describing their scientific principles, assay
    workflows, required reagents and instrumentation, experimental controls,
    data analysis, troubleshooting, advantages, limitations, and research
    applications to support accurate and reproducible assessment of cell
    proliferation.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Cell Proliferation Assays
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for assays used to quantify cell growth, DNA synthesis, and cellular proliferation in cultured cells.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/BrdU-Incorporation-Assay">
      <Heading as="h3">BrdU Incorporation Assay</Heading>
      <p>Measures DNA synthesis by detecting bromodeoxyuridine incorporation into newly synthesized DNA during cell proliferation.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/EdU-Click-Assay">
      <Heading as="h3">EdU Click Assay</Heading>
      <p>Click chemistry-based assay for rapid and sensitive detection of DNA synthesis in proliferating cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Ki-67-Staining">
      <Heading as="h3">Ki-67 Staining</Heading>
      <p>Immunostaining method for identifying actively proliferating cells through expression of the Ki-67 nuclear protein.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/PCNA-Staining">
      <Heading as="h3">PCNA Staining</Heading>
      <p>Detects proliferating cell nuclear antigen (PCNA) to assess DNA replication and cell cycle progression.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Colony-Formation-Clonogenic-Assay">
      <Heading as="h3">Colony Formation (Clonogenic) Assay</Heading>
      <p>Evaluates the long-term proliferative capacity and colony-forming ability of individual cells.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}