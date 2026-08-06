import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function Calculators() {
  return (
    <Layout
      title="Laboratory Calculators"
      description="Interactive laboratory calculators for the Cell Biology Toolkit"
    >

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Laboratory Calculators
          </Heading>

          <p>
            Interactive calculators designed to simplify routine laboratory calculations for cell culture, solution preparation, and experimental planning.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>

          <Heading as="h2">
            About this Collection
          </Heading>

          <p>
            The Laboratory Calculators collection provides practical tools for performing routine calculations commonly encountered in cell biology and biomedical research laboratories. These calculators are designed to reduce manual calculations, improve reproducibility, and support efficient experimental planning.
          </p>

          <p>
            Each calculator includes the underlying equation, worked examples, laboratory notes, and references to help users understand both the calculation and its practical application.
          </p>

        </section>


        <section className={styles.featured}>

          <Heading as="h2">
            Browse Calculators
          </Heading>

          <div className={styles.grid}>

            <Link className={styles.card} to="/cell-seeding">
              <Heading as="h3">Cell Seeding Calculator</Heading>

              <p>
                Calculate the volume of cell suspension required to seed a desired number of cells.
              </p>
            </Link>

            <Link className={styles.card} to="/population-doubling">
              <Heading as="h3">Population Doubling Calculator</Heading>

              <p>
                Calculate the number of population doublings between two cell counts.
              </p>
            </Link>

            <Link className={styles.card} to="/population-doubling-time">
              <Heading as="h3">Population Doubling Time Calculator</Heading>

              <p>
                Estimate cell doubling time using initial and final cell numbers together with culture duration.
              </p>
            </Link>

            <Link className={styles.card} to="/dilution">
              <Heading as="h3">Solution Dilution Calculator</Heading>

              <p>
                Calculate stock and diluent volumes using the C₁V₁ = C₂V₂ equation.
              </p>
            </Link>

          </div>

        </section>

      </main>

    </Layout>
  );
}