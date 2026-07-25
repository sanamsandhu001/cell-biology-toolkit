import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Reagents & Growth Factors">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Reagents & Growth Factors
          </Heading>

          <p>
            Browse standardized reference guides for cell culture media, supplements, growth factors, cytokines, antibiotics, and other essential reagents used in biomedical research.
            </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell culture experiments rely on carefully selected media, supplements,
    growth factors, cytokines, antibiotics, and other biological reagents to
    support cell survival, proliferation, differentiation, and specialized
    cellular functions. Proper reagent selection and handling are essential for
    maintaining reproducible experimental conditions and obtaining reliable
    research outcomes.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    cell culture reagents and growth factors, describing their biological
    functions, preparation, storage, recommended working concentrations,
    applications, handling considerations, troubleshooting, and best practices
    to support consistent and reproducible laboratory workflows.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Browse by Category
  </Heading>

  <p className={styles.sectionSubtitle}>
    Explore standardized reference collections covering the essential reagents used in mammalian cell culture and experimental biology.
  </p>

  <div className={styles.grid}>
    
<Link className={styles.card} to="/media">
  <Heading as="h3">Cell Culture Media</Heading>
  <p>
    Explore basal media formulated to provide the nutrients, salts, vitamins,
    amino acids, and energy sources required for mammalian cell growth and
    maintenance.
  </p>
</Link>

<Link className={styles.card} to="/supplements">
  <Heading as="h3">Supplements</Heading>
  <p>
    Browse serum, amino acids, defined supplements, antibiotics, and other
    additives used to optimize culture conditions and support healthy cell
    growth.
  </p>
</Link>

<Link className={styles.card} to="/growth-factors">
  <Heading as="h3">Growth Factors & Cytokines</Heading>
  <p>
    Discover signaling proteins that regulate cell proliferation,
    differentiation, migration, survival, immune function, and stem cell
    maintenance in vitro.
  </p>
</Link>

 
  </div>

</section>
</main>

    </Layout>
  );
}