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
            Primary Cells
          </Heading>

          <p>
            Standardized reference profiles for widely used primary cells in
            biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About Primary Cells
  </Heading>

  <p>
    Primary cells are isolated directly from living tissues or blood and retain
    many of the structural, molecular, and functional characteristics of their
    tissue of origin. Unlike immortalized cell lines, they more closely
    represent normal physiological conditions, making them invaluable models
    for studying cellular biology, tissue function, disease mechanisms, drug
    responses, and regenerative medicine.
  </p>

  <p>
    This collection provides standardized reference profiles describing cell
    origin, isolation methods, morphology, culture requirements, growth
    characteristics, recommended media, applications, quality control, and
    biosafety considerations for widely used primary cell types in biomedical
    research.
  </p>

</section>

<section className={styles.featured}>

  <Heading as="h2">
    Primary Cell Profiles
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference profiles for primary cells isolated directly from tissues and blood for physiological and translational research.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/primary-cells/Peripheral-Blood-Mononuclear-Cells-PBMCs">
      <Heading as="h3">Peripheral Blood Mononuclear Cells (PBMCs)</Heading>
      <p>Mixed populations of lymphocytes and monocytes widely used in immunology, infectious disease and translational research.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Astrocytes">
      <Heading as="h3">Primary Astrocytes</Heading>
      <p>Primary glial cells used to investigate neuron-glia interactions, neuroinflammation and CNS homeostasis.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Cortical-Neurons">
      <Heading as="h3">Primary Cortical Neurons</Heading>
      <p>Neurons isolated from the cerebral cortex for studies of neuronal development, signaling and neurodegeneration.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Dorsal-Root-Ganglion-DRG-Neurons">
      <Heading as="h3">Primary Dorsal Root Ganglion (DRG) Neurons</Heading>
      <p>Sensory neurons commonly used to study peripheral nerve biology, pain mechanisms and axonal regeneration.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Endothelial-Cells">
      <Heading as="h3">Primary Endothelial Cells</Heading>
      <p>Primary vascular endothelial cells widely used in angiogenesis, vascular biology and inflammation research.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Fibroblasts">
      <Heading as="h3">Primary Fibroblasts</Heading>
      <p>Connective tissue cells extensively used for wound healing, extracellular matrix and fibrosis studies.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Hepatocytes">
      <Heading as="h3">Primary Hepatocytes</Heading>
      <p>Liver parenchymal cells used for metabolism, toxicology, drug metabolism and liver disease research.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Hippocampal-Neurons">
      <Heading as="h3">Primary Hippocampal Neurons</Heading>
      <p>Primary neurons widely used to investigate synaptic plasticity, learning, memory and neurodegenerative disorders.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Macrophages">
      <Heading as="h3">Primary Macrophages</Heading>
      <p>Primary innate immune cells used to study inflammation, host defense, phagocytosis and macrophage polarization.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Microglia">
      <Heading as="h3">Primary Microglia</Heading>
      <p>Resident immune cells of the central nervous system used to investigate neuroinflammation and brain immunity.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Monocytes">
      <Heading as="h3">Primary Monocytes</Heading>
      <p>Circulating blood monocytes widely used for studies of innate immunity, inflammation and monocyte differentiation.</p>
    </Link>

    <Link className={styles.card} to="/docs/primary-cells/Primary-Oligodendrocytes">
      <Heading as="h3">Primary Oligodendrocytes</Heading>
      <p>Primary myelinating glial cells used to investigate myelin formation, white matter biology and demyelinating diseases.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}