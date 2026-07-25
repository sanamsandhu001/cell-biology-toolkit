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
            Rodent Cell Lines
          </Heading>

          <p>
            Standardized reference profiles for widely used rodent cell lines in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About Rodent Cell Lines
  </Heading>

  <p>
    Rodent cell lines provide versatile in vitro models for neuroscience,
    immunology, developmental biology, toxicology, and pharmacological
    research. Derived primarily from mouse and rat tissues, these cell lines
    offer reproducible experimental systems that complement primary cell
    cultures while being easier to maintain and expand.
  </p>

  <p>
    This collection includes standardized reference profiles covering cell
    origin, morphology, growth characteristics, recommended culture
    conditions, differentiation protocols, applications, and biosafety
    information for widely used rodent cell lines.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Rodent Cell Line Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for commonly used mouse and rat cell lines.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cell-lines/BV2-Cell-Line">
      <Heading as="h3">BV2</Heading>
      <p>Mouse microglial cell line widely used to investigate neuroinflammation, innate immunity and microglial activation.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/C8-D1A-Cell-Line">
      <Heading as="h3">C8-D1A</Heading>
      <p>Mouse astrocyte cell line commonly used to study astrocyte biology and neuron-glia interactions.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/Neuro2a-Cell-Line">
      <Heading as="h3">Neuro2a</Heading>
      <p>Mouse neuroblastoma cell line widely used for neuronal differentiation and neurobiology research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/PC12-Cell-Line">
      <Heading as="h3">PC12</Heading>
      <p>Rat pheochromocytoma cell line that differentiates into neuron-like cells following NGF stimulation.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/RAW264-7-Cell-Line">
      <Heading as="h3">RAW264.7</Heading>
      <p>Mouse macrophage cell line extensively used for studies of inflammation, phagocytosis and innate immunity.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/MO3-13-Cell-Line">
      <Heading as="h3">MO3.13</Heading>
      <p>Hybrid human-rodent oligodendrocyte cell line widely used to investigate myelination and demyelinating diseases.</p>
    </Link>

  </div>

</section>      </main>

    </Layout>
  );
}