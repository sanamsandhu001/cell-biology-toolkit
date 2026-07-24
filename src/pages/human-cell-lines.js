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
            Human Cell Lines
          </Heading>

          <p>
            Standardized reference profiles for widely used human cell lines in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>

          <Heading as="h2">
            About Human Cell Lines
          </Heading>

          <p>
            Human cell lines are among the most widely used in vitro models in
            biomedical research. This collection includes immortalized,
            transformed, and cancer-derived cell lines that support research in
            molecular biology, cancer biology, neuroscience, pharmacology,
            immunology, and regenerative medicine.
          </p>

          <p>
            Each profile provides standardized information on cell line origin,
            morphology, growth characteristics, culture conditions,
            recommended media, biosafety level, common applications, and key
            references, enabling researchers to quickly access reliable
            information for experimental planning.
          </p>

        </section>
        
<section className={styles.featured}>

  <Heading as="h2">
    Human Cell Line Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for widely used human cell lines in biomedical research.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cell-lines/HEK293-Cell-Line-Profile">
      <Heading as="h3">HEK293</Heading>
      <p>Human embryonic kidney cells widely used for transfection and recombinant protein expression.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/HeLa-Cells">
      <Heading as="h3">HeLa</Heading>
      <p>Human cervical carcinoma cell line extensively used in cancer and molecular biology research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/A549-Cell-Line">
      <Heading as="h3">A549</Heading>
      <p>Human lung adenocarcinoma epithelial cell line for respiratory biology and oncology studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/HCT116-Cell-Line">
      <Heading as="h3">HCT116</Heading>
      <p>Human colorectal carcinoma cell line used in cancer genetics and drug discovery.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/SH-SY5Y-Cell-Line">
      <Heading as="h3">SH-SY5Y</Heading>
      <p>Human neuroblastoma cell line widely used in neuroscience and neurodegeneration research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/MCF-Cell-Line">
      <Heading as="h3">MCF-7</Heading>
      <p>Human breast adenocarcinoma cell line commonly used in hormone receptor and breast cancer research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/MDA-MB-231-Cell-Line-Profile">
      <Heading as="h3">MDA-MB-231</Heading>
      <p>Human triple-negative breast cancer cell line for invasion, migration and metastasis studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/THP-1-Cell-Line">
      <Heading as="h3">THP-1</Heading>
      <p>Human monocytic leukemia cell line used for immunology and macrophage differentiation studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/Jurkat-Cell-Line">
      <Heading as="h3">Jurkat</Heading>
      <p>Human T lymphocyte cell line widely used to investigate T-cell signaling and immune responses.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/K562-Cell-Line">
      <Heading as="h3">K562</Heading>
      <p>Human chronic myelogenous leukemia cell line used in hematology and gene expression research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/HL-60-Cell-Line">
      <Heading as="h3">HL-60</Heading>
      <p>Human promyelocytic leukemia cell line capable of differentiation into multiple blood cell lineages.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/U937-Cell-Line">
      <Heading as="h3">U937</Heading>
      <p>Human histiocytic lymphoma cell line frequently used to study monocyte and macrophage biology.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/Raji-Cell-Line">
      <Heading as="h3">Raji</Heading>
      <p>Human Burkitt lymphoma B-cell line widely used in immunology, virology and cancer research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/U87-MG-Cell-Line">
      <Heading as="h3">U87-MG</Heading>
      <p>Human glioblastoma cell line commonly used in neuro-oncology and brain tumor research.</p>
    </Link>

  </div>

</section>

      </main>

    </Layout>
  );
}