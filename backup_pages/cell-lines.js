import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function CellLines() {
  return (
    <Layout
      title="Cell Lines"
      description="Cell Line Collection for Cell Biology Toolkit"
    >

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Cell Lines
          </Heading>

          <p>
            Comprehensive profiles of mammalian cell lines used in biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>
          <Heading as="h2">
            About this Collection
          </Heading>

          <p>
            The Cell Line Collection provides standardized profiles for commonly used
            mammalian cell lines in biomedical research. Each profile includes origin,
            morphology, growth characteristics, culture conditions, applications,
            biosafety information and authentication guidance.
          </p>
        </section>

       <section>

  <Heading as="h2">
    Browse Cell Line Collections
  </Heading>

  <div className={styles.grid}>

    <Link className={styles.card} to="/human-cell-lines">
      <Heading as="h3">Human Cell Lines</Heading>
      <p>Immortalized and cancer-derived human cell lines used across biomedical research.</p>
    </Link>

    <Link className={styles.card} to="/immune-cell-lines">
      <Heading as="h3">Immune Cell Lines</Heading>
      <p>Human and murine immune cell models for immunology and inflammation studies.</p>
    </Link>

    <Link className={styles.card} to="/rodent-cell-lines">
      <Heading as="h3">Rodent Cell Lines</Heading>
      <p>Mouse and rat cell lines widely used in neuroscience, cancer and molecular biology.</p>
    </Link>

    <Link className={styles.card} to="/other-mammalian-cell-lines">
      <Heading as="h3">Other Mammalian Cell Lines</Heading>
      <p>Additional mammalian cell models including CHO and related cell lines.</p>
    </Link>

    <Link className={styles.card} to="/stem-cells">
      <Heading as="h3">Stem Cells</Heading>
      <p>Embryonic, induced pluripotent, mesenchymal, neural and hematopoietic stem cell resources.</p>
    </Link>

    <Link className={styles.card} to="/primary-cells">
      <Heading as="h3">Primary Cells</Heading>
      <p>Primary cultures isolated directly from tissues for physiologically relevant studies.</p>
    </Link>

</div>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Featured Cell Lines
  </Heading>

  <p className={styles.sectionSubtitle}>
    Frequently used cell lines across biomedical and cell biology research.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cell-lines/HEK293-Cell-Line-Profile">
      <Heading as="h3">HEK293</Heading>
      <p>Human embryonic kidney cell line.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/HeLa-Cells">
      <Heading as="h3">HeLa</Heading>
      <p>Human cervical carcinoma cell line.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/A549-Cell-Line">
      <Heading as="h3">A549</Heading>
      <p>Human lung adenocarcinoma cell line.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/SH-SY5Y-Cell-Line">
      <Heading as="h3">SH-SY5Y</Heading>
      <p>Human neuroblastoma cell line.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/THP-1-Cell-Line">
      <Heading as="h3">THP-1</Heading>
      <p>Human monocytic leukemia cell line.</p>
    </Link>

    <Link className={styles.card} to="/docs/cell-lines/CHO-Cell-Lines">
      <Heading as="h3">CHO</Heading>
      <p>Chinese hamster ovary cell line.</p>
    </Link>

  </div>

</section>

</main>

</Layout>
  );
}