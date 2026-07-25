import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function HumanCellLines() {
  return (
    <Layout title="Growth Factors & Cytokines">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
           Growth Factors & Cytokines
          </Heading>

          <p>
          Browse standardized reference guides for growth factors, cytokines, and signaling proteins that regulate cell proliferation, differentiation, survival, migration, and immune function in mammalian cell culture.          
          </p>
          </div>
     
      </header>

      <main className={styles.main}>

<section className={styles.intro}>

  <Heading as="h2">
    About this Collection
  </Heading>

  <p>
    Growth factors and cytokines are biologically active signaling proteins that
    regulate cellular communication, proliferation, differentiation, survival,
    migration, and immune responses. In cell culture, these molecules are
    routinely added to culture media to control cell fate, maintain specialized
    cell populations, promote tissue-specific differentiation, and model
    physiological or pathological signaling pathways.
  </p>

  <p>
    This collection provides standardized reference guides for commonly used
    growth factors and cytokines, including their biological functions,
    signaling pathways, receptor interactions, preparation, storage,
    recommended working concentrations, and applications in mammalian cell
    culture, stem cell research, neuroscience, immunology, and regenerative
    medicine.
  </p>

</section>
<section className={styles.featured}>

  <Heading as="h2">
    Browse Growth Factors & Cytokines
  </Heading>

  <p className={styles.sectionSubtitle}>
    Explore standardized reference guides for growth factors, cytokines, and signaling proteins commonly used to regulate cell proliferation, differentiation, survival, stem cell maintenance, and immune function in mammalian cell culture.
  </p>

  <div className={styles.grid}>

    <Link className={styles.card} to="/docs/growth-factors/brain-derived-neurotrophic-factor-bdnf">
      <Heading as="h3">Brain-Derived Neurotrophic Factor (BDNF)</Heading>
      <p>A neurotrophin that promotes neuronal survival, differentiation, synaptic plasticity, and neural development.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/ciliary-neurotrophic-factor-cntf">
      <Heading as="h3">Ciliary Neurotrophic Factor (CNTF)</Heading>
      <p>Supports neuronal survival, glial differentiation, and regeneration of the nervous system.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/epidermal-growth-factor-egf">
      <Heading as="h3">Epidermal Growth Factor (EGF)</Heading>
      <p>Stimulates proliferation, survival, and maintenance of epithelial and stem cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/fibroblast-growth-factor-2-fgf-2">
      <Heading as="h3">Fibroblast Growth Factor 2 (FGF-2)</Heading>
      <p>Supports stem cell self-renewal, angiogenesis, tissue repair, and cellular proliferation.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/fms-like-tyrosine-kinase-3-ligand-flt3-ligand">
      <Heading as="h3">Flt3 Ligand</Heading>
      <p>Promotes proliferation and differentiation of hematopoietic stem and progenitor cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/glial-cell-line-derived-neurotrophic-factor-gdnf">
      <Heading as="h3">Glial Cell Line-Derived Neurotrophic Factor (GDNF)</Heading>
      <p>Supports the survival and maintenance of dopaminergic and motor neurons.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/granulocyte-macrophage-colony-stimulating-factor-gm-csf">
      <Heading as="h3">Granulocyte-Macrophage Colony-Stimulating Factor (GM-CSF)</Heading>
      <p>Stimulates proliferation and differentiation of granulocyte and macrophage progenitor cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/hepatocyte-growth-factor-hgf">
      <Heading as="h3">Hepatocyte Growth Factor (HGF)</Heading>
      <p>Regulates cell growth, motility, morphogenesis, and tissue regeneration.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/insulin-like-growth-factor-1-igf-1">
      <Heading as="h3">Insulin-Like Growth Factor 1 (IGF-1)</Heading>
      <p>Promotes cellular growth, survival, metabolism, and differentiation across diverse cell types.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/interleukin-2-il-2">
      <Heading as="h3">Interleukin-2 (IL-2)</Heading>
      <p>Supports activation, proliferation, and expansion of T lymphocytes in immune cell cultures.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/interleukin-3-il-3">
      <Heading as="h3">Interleukin-3 (IL-3)</Heading>
      <p>Promotes proliferation and differentiation of hematopoietic progenitor cells.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/interleukin-6-il-6">
      <Heading as="h3">Interleukin-6 (IL-6)</Heading>
      <p>Regulates immune responses, inflammation, and survival of multiple cell types.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/macrophage-colony-stimulating-factor-m-csf">
      <Heading as="h3">Macrophage Colony-Stimulating Factor (M-CSF)</Heading>
      <p>Drives differentiation, proliferation, and survival of monocytes and macrophages.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/nerve-growth-factor-ngf">
      <Heading as="h3">Nerve Growth Factor (NGF)</Heading>
      <p>Essential for neuronal survival, neurite outgrowth, and differentiation of sensory and sympathetic neurons.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/oncostatin-m-osm">
      <Heading as="h3">Oncostatin M (OSM)</Heading>
      <p>Regulates cell differentiation, inflammation, tissue remodeling, and regenerative processes.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/platelet-derived-growth-factor-pdgf">
      <Heading as="h3">Platelet-Derived Growth Factor (PDGF)</Heading>
      <p>Stimulates cell proliferation, migration, angiogenesis, and tissue repair.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/stem-cell-factor-scf">
      <Heading as="h3">Stem Cell Factor (SCF)</Heading>
      <p>Maintains hematopoietic stem cells and supports stem cell survival through c-Kit signaling.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/thrombopoietin-tpo">
      <Heading as="h3">Thrombopoietin (TPO)</Heading>
      <p>Promotes megakaryocyte development, platelet production, and hematopoietic stem cell maintenance.</p>
    </Link>

    <Link className={styles.card} to="/docs/growth-factors/vascular-endothelial-growth-factor-vegf">
      <Heading as="h3">Vascular Endothelial Growth Factor (VEGF)</Heading>
      <p>Stimulates angiogenesis, endothelial cell proliferation, and vascular development.</p>
    </Link>

  </div>

</section>
</main>

    </Layout>
  );
}