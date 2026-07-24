import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Stem Cell Methods">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Stem Cell Methods
          </Heading>

          <p>
            Browse standardized reference guides for methods used to culture, characterize, genetically modify, and quality-control pluripotent stem cells and stem cell-derived models.
            </p>
        </div>
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Stem cell methodologies are fundamental to regenerative medicine, disease
    modeling, developmental biology, and precision medicine. These techniques
    encompass the generation, maintenance, characterization, genetic
    modification, quality control, and differentiation of pluripotent stem
    cells into specialized cell types and complex three-dimensional models.
  </p>

  <p>
    This collection provides standardized reference guides for widely used stem
    cell methods, describing their scientific principles, experimental
    workflows, required reagents and equipment, quality control measures,
    troubleshooting, advantages, limitations, and research applications to
    support reproducible and reliable stem cell research.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Stem Cell Methods
  </Heading>

  <p className={styles.sectionSubtitle}>
    Browse standardized reference guides for methods used to generate, characterize, maintain, genetically modify, and quality-control pluripotent stem cells and stem cell-derived models.
  </p>

  <div className={styles.grid}>

<Link className={styles.card} to="/docs/stem-cell-methods/iPSC-Reprogramming">
  <Heading as="h3">iPSC Reprogramming</Heading>
  <p>Generates induced pluripotent stem cells from somatic cells through the introduction of defined reprogramming factors.</p>
</Link> 

<Link className={styles.card} to="/docs/stem-cell-methods/iPSC-Characterization">
  <Heading as="h3">iPSC Characterization</Heading>
  <p>Evaluates pluripotency, genomic stability, morphology, and differentiation potential to verify induced pluripotent stem cell quality.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Pluripotency-Assays">
  <Heading as="h3">Pluripotency Assays</Heading>
  <p>Assesses the ability of pluripotent stem cells to differentiate into derivatives of all three embryonic germ layers.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Brain-Organoids">
  <Heading as="h3">Brain Organoids</Heading>
  <p>Generates three-dimensional neural tissue models that recapitulate key aspects of human brain development and disease.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Genome-Editing-in-iPSCs">
  <Heading as="h3">Genome Editing in iPSCs</Heading>
  <p>Introduces targeted genetic modifications into induced pluripotent stem cells for disease modeling and functional studies.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Cryopreservation-and-Biobanking-of-Stem-Cells">
  <Heading as="h3">Cryopreservation & Biobanking</Heading>
  <p>Describes standardized procedures for long-term storage, recovery, and quality preservation of stem cell cultures.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Isogenic-Controls-in-Disease-Modeling">
  <Heading as="h3">Isogenic Controls</Heading>
  <p>Establishes genetically matched control cell lines to minimize background variation in stem cell disease models.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Mycoplasma-Testing-in-Cell-Culture">
  <Heading as="h3">Mycoplasma Testing</Heading>
  <p>Detects mycoplasma contamination to ensure the integrity, reproducibility, and quality of stem cell cultures.</p>
</Link>

<Link className={styles.card} to="/docs/stem-cell-methods/Neurospheres">
  <Heading as="h3">Neurospheres</Heading>
  <p>Establishes three-dimensional neural stem cell cultures for studies of neural development, differentiation, and regeneration.</p>
</Link>


  </div>

</section>
</main>

    </Layout>
  );
}