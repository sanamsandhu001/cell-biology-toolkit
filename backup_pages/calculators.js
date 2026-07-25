import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function Calculators() {
  return (
    <Layout title="Cell Biology Calculators">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Cell Biology Calculators
          </Heading>

          <p>
            Explore interactive calculators designed to simplify routine laboratory calculations for cell culture, molecular biology, reagent preparation, and experimental planning.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>

          <Heading as="h2">
            About this Collection
          </Heading>

          <p>
            The Cell Biology Calculators collection provides practical tools that simplify routine calculations commonly performed in research laboratories. These calculators help reduce manual errors, improve experimental reproducibility, and save valuable time during experimental planning and data analysis.
          </p>

          <p>
            This collection includes calculators for cell culture, cell counting, reagent and solution preparation, molecular biology workflows, assay analysis, and general laboratory conversions. Whether preparing culture media, calculating cell seeding densities, performing serial dilutions, estimating cell viability, or converting laboratory units, these tools are designed to support students, educators, and researchers throughout everyday laboratory work.
          </p>

        </section>

      </main>

    </Layout>
  );
}