import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Reference Library">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
           Reference Library
          </Heading>

          <p>
           Browse standardized reference guides covering cell biology concepts, cell lines, model organisms, laboratory techniques, biomarkers, and essential scientific resources for biomedical research.          
           </p>
           </div>
     
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    The Reference Library serves as a comprehensive scientific knowledge base covering the fundamental concepts, biological systems, and research resources that support modern cell biology and biomedical research. Unlike experimental protocols, these guides focus on explaining the scientific principles, characteristics, and applications of commonly used cells, tissues, biomolecules, laboratory techniques, model systems, and research tools, providing the background knowledge needed to design, perform, and interpret experiments.
  </p>

  <p>
    This collection provides standardized reference guides on topics including cell lines, cellular organelles, biomarkers, signaling pathways, stem cell biology, disease models, laboratory reagents, culture systems, experimental techniques, and other core concepts in life sciences. Each guide summarizes essential background information, biological significance, key characteristics, research applications, advantages, limitations, and related resources, creating a centralized reference for students, educators, and researchers working across cell biology, molecular biology, genetics, neuroscience, immunology, biotechnology, and related biomedical disciplines.
  </p>

</section>
</main>

    </Layout>
  );
}