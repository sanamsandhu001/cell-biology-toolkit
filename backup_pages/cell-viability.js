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
            Cell viability & cytotoxicity 
          </Heading>

          <p>
            Reference guides for assays used to evaluate cell viability, metabolic activity, membrane integrity, and cytotoxicity in cultured cells.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell viability and cytotoxicity assays are fundamental tools in cell biology,
    enabling researchers to evaluate cell health, metabolic activity, membrane
    integrity, and responses to experimental treatments. These assays play a
    central role in drug discovery, toxicology, cancer research, regenerative
    medicine, and basic biological studies by providing quantitative measures of
    cell survival, proliferation, and treatment-induced cytotoxicity.
  </p>

  <p>
    This collection provides standardized reference guides for widely used cell
    viability and cytotoxicity assays, including their scientific principles,
    workflows, required reagents, data interpretation, experimental controls,
    troubleshooting, and common research applications to support reliable and
    reproducible laboratory experiments.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Cell Viability & Cytotoxicity Assays
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for assays used to assess cell viability, metabolic activity, membrane integrity, and treatment-induced cytotoxicity in cultured cells.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/MTT-Assay">
      <Heading as="h3">MTT Assay</Heading>
      <p>Colorimetric assay that measures cellular metabolic activity as an indicator of cell viability, proliferation, and cytotoxicity.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/MTS-Assay">
      <Heading as="h3">MTS Assay</Heading>
      <p>Tetrazolium-based assay that generates a soluble formazan product for convenient measurement of viable cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/WST-1-Assay">
      <Heading as="h3">WST-1 Assay</Heading>
      <p>Water-soluble tetrazolium assay for rapid assessment of cell viability and proliferation through metabolic activity.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/XTT-Assay">
      <Heading as="h3">XTT Assay</Heading>
      <p>Colorimetric viability assay that quantifies metabolically active cells by measuring formazan dye production.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Resazurin-Alamar-Blue-Assay">
      <Heading as="h3">Resazurin (Alamar Blue) Assay</Heading>
      <p>Fluorometric and colorimetric assay for evaluating cell viability through the reduction of resazurin to resorufin.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/CellTiter-Glo-Luminescent-Cell-Viability-Assay">
      <Heading as="h3">CellTiter-Glo® Assay</Heading>
      <p>Luminescent ATP-based assay that provides a rapid and sensitive measure of viable cell number.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Trypan-Blue-Exclusion-Assay">
      <Heading as="h3">Trypan Blue Exclusion Assay</Heading>
      <p>Dye exclusion method for distinguishing viable and non-viable cells during routine cell counting.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/LDH-Release-Assay">
      <Heading as="h3">LDH Release Assay</Heading>
      <p>Measures lactate dehydrogenase released from damaged cells to evaluate membrane integrity and cytotoxicity.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}