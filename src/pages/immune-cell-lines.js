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
            Immune Cell Lines
          </Heading>

          <p>
            Standardized reference profiles for widely used immune cell lines in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About Immune Cell Lines
  </Heading>

  <p>
    Immune cell lines are indispensable models for investigating innate and
    adaptive immunity, hematopoiesis, host-pathogen interactions, cytokine
    signaling, and immune cell differentiation. They provide reproducible
    experimental systems for studying both normal immune function and
    hematological malignancies.
  </p>

  <p>
    This collection includes standardized profiles describing cell origin,
    morphology, growth characteristics, recommended culture conditions,
    differentiation protocols, applications, and biosafety information for
    commonly used immune cell lines.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Immune Cell Line Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for widely used immune and hematopoietic cell lines.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cell-lines/THP-1-Cell-Line">
      <Heading as="h3">THP-1</Heading>
      <p>Human monocytic leukemia cell line widely used for macrophage differentiation and innate immunity studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/Jurkat-Cell-Line">
      <Heading as="h3">Jurkat</Heading>
      <p>Human T lymphocyte cell line used to investigate T-cell signaling, activation and immune responses.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/K562-Cell-Line">
      <Heading as="h3">K562</Heading>
      <p>Human chronic myelogenous leukemia cell line commonly used in hematology and gene expression research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/HL-60-Cell-Line">
      <Heading as="h3">HL-60</Heading>
      <p>Human promyelocytic leukemia cell line capable of differentiation into granulocyte- and macrophage-like cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/U937-Cell-Line">
      <Heading as="h3">U937</Heading>
      <p>Human histiocytic lymphoma cell line widely used to study monocyte differentiation and macrophage biology.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/Raji-Cell-Line">
      <Heading as="h3">Raji</Heading>
      <p>Human Burkitt lymphoma B-cell line extensively used in immunology, virology and lymphoma research.</p>
    </Link>

  </div>

</section>
      </main>

    </Layout>
  );
}