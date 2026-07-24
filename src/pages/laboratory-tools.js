import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Laboratory Tools">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
           Laboratory Tools
          </Heading>

          <p>
           Browse standardized reference guides for laboratory equipment, instruments, and essential tools commonly used in mammalian cell culture, molecular biology, and biomedical research.          </p>
          </div>
     
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Laboratory tools are fundamental to experimental research, enabling accurate sample preparation, measurement, observation, analysis, and data collection across a wide range of biological and biomedical disciplines. Whether performing routine cell culture procedures, molecular biology experiments, microscopy, or analytical assays, selecting the appropriate equipment and using it correctly are essential for producing reliable, reproducible, and high-quality scientific results.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used laboratory tools and instruments found in research and clinical laboratories. Each guide covers the principle of operation, key components, working mechanism, applications, operating parameters, maintenance requirements, calibration, troubleshooting, safety considerations, and best laboratory practices. Together, these resources are designed to help students, researchers, educators, and laboratory professionals better understand the function and proper use of essential laboratory equipment while promoting accuracy, efficiency, and compliance with good laboratory practices.
  </p>

</section>
</main>

    </Layout>
  );
}