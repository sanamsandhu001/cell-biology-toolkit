import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Supplements">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
           Supplements
          </Heading>

          <p>
          Browse standardized reference guides for serum, amino acids, antibiotics, buffers, and defined supplements used to optimize mammalian cell culture and experimental research.        
           </p>
          </div>
     
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Cell culture supplements are added to basal media to enhance cell growth,
    viability, metabolism, and specialized cellular functions. These reagents
    provide essential nutrients, growth-promoting proteins, amino acids,
    buffering agents, and antimicrobial compounds that help create an optimal
    environment for maintaining healthy and reproducible cell cultures.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    cell culture supplements, including sera, serum replacements, amino acids,
    antibiotics, buffers, and chemically defined additives. Each guide
    describes the biological role, composition, preparation, storage,
    recommended use, and laboratory applications of individual supplements to
    support consistent and reproducible experimental workflows.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Browse Supplements
  </Heading>

  <p className={styles.sectionSubtitle}>
    Explore standardized reference guides for serum replacements, amino acids, buffers, vitamins, lipids, and defined supplements used to support mammalian cell culture.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/supplements/Albumax">
      <Heading as="h3">Albumax®</Heading>
      <p>
        A lipid-rich bovine serum albumin supplement used as a chemically defined serum replacement for mammalian cell culture.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/B-27-Supplement">
      <Heading as="h3">B-27™ Supplement</Heading>
      <p>
        A serum-free supplement optimized for neuronal, neural stem cell, and organoid cultures.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/bovine-serum-albumin-bsa">
      <Heading as="h3">Bovine Serum Albumin (BSA)</Heading>
      <p>
        A multifunctional protein supplement used for stabilization, protein delivery, and serum-free culture applications.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/chemically-defined-lipid-concentrate-cdlc">
      <Heading as="h3">Chemically Defined Lipid Concentrate</Heading>
      <p>
        A defined lipid supplement that supports membrane synthesis, metabolism, and serum-free cell culture.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/glutamax-supplement">
      <Heading as="h3">GlutaMAX™ Supplement</Heading>
      <p>
        A stabilized L-glutamine substitute that improves media stability and supports long-term cell growth.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/hepes-buffer">
      <Heading as="h3">HEPES Buffer</Heading>
      <p>
        A biological buffer that helps maintain physiological pH during cell handling outside a CO₂ incubator.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/its-supplement-insulin-transferrin-selenium">
      <Heading as="h3">ITS Supplement</Heading>
      <p>
        A chemically defined mixture of insulin, transferrin, and selenium used in serum-reduced and serum-free media.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/knockout-serum-replacement">
      <Heading as="h3">KnockOut™ Serum Replacement</Heading>
      <p>
        A defined serum replacement formulated to support embryonic and induced pluripotent stem cell cultures.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/l-glutamine">
      <Heading as="h3">L-Glutamine</Heading>
      <p>
        An essential amino acid supplement that supports cellular metabolism, protein synthesis, and proliferation.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/mem-vitamin-solution-100">
      <Heading as="h3">MEM Vitamin Solution (100×)</Heading>
      <p>
        A concentrated vitamin supplement used to enrich culture media and support cellular metabolism.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/n-2-supplement">
      <Heading as="h3">N-2 Supplement</Heading>
      <p>
        A chemically defined supplement that supports serum-free culture of neurons and other specialized cell types.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/non-essential-amino-acids-neaa">
      <Heading as="h3">Non-Essential Amino Acids (NEAA)</Heading>
      <p>
        A balanced amino acid supplement that reduces the metabolic burden of amino acid synthesis in cultured cells.
      </p>
    </Link>

    <Link className={styles.card} to="/docs/supplements/mercaptoethanol-2-mercaptoethanol-me">
      <Heading as="h3">β-Mercaptoethanol (2-Mercaptoethanol)</Heading>
      <p>
        A reducing agent commonly added to stem cell and lymphocyte cultures to maintain a reduced intracellular environment.
      </p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}