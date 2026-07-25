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
            Cell Function & Behavior
          </Heading>

          <p>
            Browse standardized reference guides for assays used to evaluate cell migration, oxidative stress, senescence, and functional cellular responses.
            </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell function and behavior assays provide valuable insights into how cells
    respond to physiological and experimental conditions beyond simple measures
    of viability and proliferation. These assays evaluate processes such as
    cell migration, oxidative stress, cellular senescence, and functional
    responses that are critical in development, tissue repair, cancer biology,
    immunology, aging research, and drug discovery.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    cell function and behavior assays, describing their scientific principles,
    assay workflows, required reagents and instrumentation, experimental
    controls, data analysis, troubleshooting, advantages, limitations, and
    research applications to support accurate and reproducible functional
    characterization of cultured cells.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Cell Function & Behavior Assays
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for assays used to investigate cell migration, oxidative stress, senescence, and other functional cellular responses.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/cellular-assays/Scratch-Wound-Healing-Assay">
      <Heading as="h3">Scratch (Wound Healing) Assay</Heading>
      <p>Measures two-dimensional cell migration by monitoring closure of a defined scratch in a confluent cell monolayer.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Transwell-Migration-Assay">
      <Heading as="h3">Transwell Migration Assay</Heading>
      <p>Evaluates directed cell migration through a porous membrane in response to chemotactic stimuli.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/DCFDA-Reactive-Oxygen-Species-ROS-Assay">
      <Heading as="h3">DCFDA Reactive Oxygen Species (ROS) Assay</Heading>
      <p>Quantifies intracellular reactive oxygen species using a fluorogenic probe to assess oxidative stress.</p>
    </Link>

    <Link className={styles.card} to="/docs/cellular-assays/Senescence-Associated-beta-Galactosidase-SA-beta-Gal-Assay">
      <Heading as="h3">Senescence-Associated β-Galactosidase (SA-β-Gal) Assay</Heading>
      <p>Detects senescent cells through β-galactosidase activity as a hallmark of cellular aging and stress.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}