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
            Cell Death & Cell Cycle Assays
          </Heading>

          <p>
            Browse standardized reference guides for assays used to investigate apoptosis, necrosis, caspase activation, and cell cycle progression in cultured cells.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell death and cell cycle assays are fundamental tools for investigating
    cellular responses to physiological and experimental stimuli. These assays
    enable researchers to characterize apoptosis, necrosis, cell cycle
    progression, and treatment-induced changes in cell fate. They are widely
    used in cancer biology, drug discovery, toxicology, immunology, and
    regenerative medicine to evaluate the mechanisms underlying cell survival,
    proliferation, and programmed cell death.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    cell death and cell cycle assays, describing their scientific principles,
    assay workflows, required reagents and instrumentation, experimental
    controls, data analysis, troubleshooting, advantages, limitations, and
    research applications to support accurate and reproducible assessment of
    cellular responses.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Cell Death & Cell Cycle Assays
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for assays used to investigate apoptosis, necrosis, caspase activation, and cell cycle progression in cultured cells.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/Annexin-V-or-Propidium-Iodide-PI-Apoptosis-Assay">
      <Heading as="h3">Annexin V or Propidium Iodide (PI) Apoptosis Assay</Heading>
      <p>Differentiates viable, early apoptotic, late apoptotic, and necrotic cells based on phosphatidylserine exposure and membrane integrity.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Caspase-3or7-Activity-Assay">
      <Heading as="h3">Caspase-3/7 Activity Assay</Heading>
      <p>Measures activation of executioner caspases as a quantitative indicator of apoptotic cell death.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Propidium-Iodide-PI-Cell-Cycle-Analysis">
      <Heading as="h3">Propidium Iodide (PI) Cell Cycle Analysis</Heading>
      <p>Quantifies cellular DNA content by flow cytometry to determine cell cycle distribution and identify cell cycle arrest.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}