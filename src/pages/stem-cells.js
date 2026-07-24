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
            Stem Cells
          </Heading>

          <p>
            Standardized reference profiles for widely used stem cells in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About Stem Cells
  </Heading>

  <p>
    Stem cells possess the unique ability to self-renew and differentiate into
    specialized cell types, making them indispensable tools for developmental
    biology, regenerative medicine, disease modeling, drug discovery, and cell
    therapy research. Their versatility allows researchers to investigate
    cellular differentiation, tissue regeneration, and the molecular mechanisms
    underlying human development and disease.
  </p>

  <p>
    This collection provides standardized reference profiles describing stem
    cell origin, morphology, culture requirements, differentiation potential,
    recommended media, applications, quality control, and biosafety
    considerations for commonly used stem cell models.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Stem Cell Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for pluripotent stem cells, neural stem cells, progenitor cells and iPSC-derived cellular models.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/stem-cells/Human-Embryonic-Stem-Cells-hESCs">
      <Heading as="h3">Human Embryonic Stem Cells (hESCs)</Heading>
      <p>Pluripotent stem cells capable of differentiating into all cell types of the human body.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/Induced-Pluripotent-Stem-Cells-iPSCs">
      <Heading as="h3">Induced Pluripotent Stem Cells (iPSCs)</Heading>
      <p>Reprogrammed somatic cells widely used for disease modeling, regenerative medicine and personalized medicine.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/Mouse-Embryonic-Stem-Cells-mESCs">
      <Heading as="h3">Mouse Embryonic Stem Cells (mESCs)</Heading>
      <p>Pluripotent mouse stem cells extensively used in developmental biology and genetic engineering studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/Neural-Stem-Cells-NSCs">
      <Heading as="h3">Neural Stem Cells (NSCs)</Heading>
      <p>Multipotent neural stem cells capable of generating neurons, astrocytes and oligodendrocytes.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/Neural-Progenitor-Cells-NPCs">
      <Heading as="h3">Neural Progenitor Cells (NPCs)</Heading>
      <p>Committed neural progenitors widely used to investigate nervous system development and neurodegenerative disorders.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/iPSC-Derived-Neurons">
      <Heading as="h3">iPSC-Derived Neurons</Heading>
      <p>Human neurons generated from induced pluripotent stem cells for neurological disease modeling and drug screening.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/iPSC-Derived-Astrocytes">
      <Heading as="h3">iPSC-Derived Astrocytes</Heading>
      <p>Human astrocytes differentiated from iPSCs for studies of neuron-glia interactions and neuroinflammation.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/iPSC-Derived-Microglia">
      <Heading as="h3">iPSC-Derived Microglia</Heading>
      <p>Human microglia generated from iPSCs for investigating innate immunity and neurodegenerative diseases.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/iPSC-Derived-Oligodendrocytes">
      <Heading as="h3">iPSC-Derived Oligodendrocytes</Heading>
      <p>Human oligodendrocytes differentiated from iPSCs for studies of myelination and demyelinating disorders.</p>
    </Link>

    <Link className={styles.card} to="/docs/stem-cells/iPSC-Derived-Myocytes">
      <Heading as="h3">iPSC-Derived Myocytes</Heading>
      <p>Human skeletal muscle cells differentiated from iPSCs for muscle development and neuromuscular disease research.</p>
    </Link>

  </div>

</section></main>

    </Layout>
  );
}