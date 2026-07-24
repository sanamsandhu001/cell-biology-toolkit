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
           Cell Culture Media
          </Heading>

          <p>
          Browse standardized reference guides for basal and specialized culture media used to support the growth, maintenance, and experimental manipulation of mammalian cells.            </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell culture media provide the essential nutrients, inorganic salts,
    amino acids, vitamins, carbohydrates, buffering systems, and other
    components required to support cell survival, metabolism, proliferation,
    and specialized cellular functions in vitro. Different media formulations
    are optimized for specific cell types, tissues, and experimental
    applications, making media selection a critical factor in successful cell
    culture.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    basal and specialized cell culture media, including their composition,
    applications, advantages, limitations, preparation, storage, and
    recommended use across a wide range of mammalian cell culture systems.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Browse Cell Culture Media
  </Heading>

  <p className={styles.sectionSubtitle}>
    Explore standardized reference guides for commonly used basal, specialized, serum-reduced, and stem cell media used in mammalian cell culture.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/media/DMEM-F12">
      <Heading as="h3">DMEM/F-12</Heading>
      <p>
        A hybrid medium that combines the nutritional richness of DMEM with the diverse formulation of Ham's F-12.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/ham-s-f-12-nutrient-mixture">
      <Heading as="h3">Ham's F-12 Nutrient Mixture</Heading>
      <p>
        A nutrient-rich medium developed for serum-free culture and specialized epithelial cell applications.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/imdm-iscove-s-modified-dulbecco-s-medium">
      <Heading as="h3">IMDM</Heading>
      <p>
        An enriched medium optimized for rapidly proliferating cells, hematopoietic cells, and hybridoma cultures.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/knockout-dmem">
      <Heading as="h3">KnockOut™ DMEM</Heading>
      <p>
        A specialized medium formulated for embryonic stem cells and induced pluripotent stem cell culture.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/leibovitz-s-l-15-medium">
      <Heading as="h3">Leibovitz's L-15 Medium</Heading>
      <p>
        A CO₂-independent medium designed for cultures maintained under atmospheric conditions.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/mccoy-s-5a-medium">
      <Heading as="h3">McCoy's 5A Medium</Heading>
      <p>
        An enriched medium commonly used for fast-growing epithelial and cancer cell lines.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/mem-minimum-essential-medium">
      <Heading as="h3">Minimum Essential Medium (MEM)</Heading>
      <p>
        A classical basal medium suitable for routine maintenance of many established mammalian cell lines.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/neurobasal-medium">
      <Heading as="h3">Neurobasal Medium</Heading>
      <p>
        A specialized medium optimized for long-term culture of primary neurons and neural stem cell-derived cultures.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/neurobasal-plus-medium">
      <Heading as="h3">Neurobasal™ Plus Medium</Heading>
      <p>
        An enhanced neuronal culture medium that supports improved neuronal survival and maturation.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/opti-mem-reduced-serum-medium">
      <Heading as="h3">Opti-MEM™ Reduced Serum Medium</Heading>
      <p>
        A reduced-serum medium optimized for transfection, viral production, and protein expression applications.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/media/williams-e-medium">
      <Heading as="h3">Williams' E Medium</Heading>
      <p>
        A specialized medium developed for the maintenance of primary hepatocytes and liver-derived cell cultures.
      </p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}