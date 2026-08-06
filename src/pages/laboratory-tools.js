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
  🧮 Laboratory Calculators
</Heading>

<p>
  Access interactive calculators for solution preparation,
  cell culture planning, population doubling, growth analysis,
  and other routine laboratory calculations.
</p>

<Link
  className={styles.featureButton}
  to="/calculators"
>
  Browse Calculators →
</Link>

 

</section>

      </main>

    </Layout>

  );

}