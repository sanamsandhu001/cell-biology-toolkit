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
            Standardized reference profiles for widely used mammalian cell lines in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About Other Mammalian Cell Lines
  </Heading>

  <p>
    Mammalian cell lines derived from non-human species play a central role in
    biotechnology, pharmaceutical development, vaccine production, and basic
    biological research. Many possess unique growth characteristics and protein
    expression capabilities that make them valuable for both research and
    industrial applications.
  </p>

  <p>
    This collection includes standardized reference profiles describing cell
    origin, morphology, culture requirements, applications, and biosafety
    information for commonly used mammalian cell lines outside the primary
    human and rodent categories.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Other Mammalian Cell Line Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for widely used mammalian cell lines from non-human species and specialized hybrid models.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cell-lines/CHO-Cell-Lines">
      <Heading as="h3">CHO</Heading>
      <p>Chinese hamster ovary cell lines extensively used for recombinant protein production, biopharmaceutical manufacturing and biotechnology research.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/MO3-13-Cell-Line">
      <Heading as="h3">MO3.13</Heading>
      <p>Human-rodent hybrid oligodendrocyte cell line widely used to investigate oligodendrocyte differentiation, myelination and demyelinating disorders.</p>
    </Link>

  </div>

</section>     

</main>

    </Layout>
  );
}