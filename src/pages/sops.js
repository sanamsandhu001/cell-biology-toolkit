import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function SOPs() {
  return (
    <Layout
      title="Standard Operating Procedures"
      description="Standard Operating Procedures for Cell Biology Toolkit">

      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            Standard Operating Procedures
          </Heading>

          <p>
            Standardized laboratory protocols for reproducible
            mammalian cell culture.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>
          <Heading as="h2">
            About this Collection
          </Heading>

          <p>
            This section contains validated Standard Operating Procedures
            covering routine mammalian cell culture workflows,
            aseptic technique, laboratory equipment, biosafety,
            cryopreservation and quality control.
          </p>
        </section>

        <section>

          <Heading as="h2">
            Browse SOPs
          </Heading>

          <Heading as="h3" className={styles.sectionHeading}>
  Cell Culture Fundamentals
</Heading>

<p className={styles.sectionDescription}>
  Essential procedures covering routine mammalian cell culture, including
  thawing, passaging, media preparation, cell seeding, cryopreservation,
  and recovery of mammalian cells.
</p>

<div className={styles.grid}>

            <Link className={styles.card} to="/docs/sops/sop-001-cell-thawing">
              Cell Thawing
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-002-passaging-adherent-mammalian-cells">
              Passaging Adherent Mammalian Cells
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-003-cryopreservation">
              Cryopreservation
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-004-cell-counting-and-viability-assessment-using-trypan-blue">
              Cell Counting & Viability
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-005-preparation-of-complete-culture-medium">
              Preparation of Complete Culture Medium
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-006-routine-culture-medium-change">
              Routine Culture Medium Change
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-007-cell-seeding">
              Cell Seeding
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-008-passaging-suspension-mammalian-cells">
              Passaging Suspension Cells
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-009-preparation-of-a-single-cell-suspension">
              Preparation of Single-Cell Suspension
            </Link>

            <Link className={styles.card} to="/docs/sops/sop-010-cell-recovery-following-cryopreservation">
              Cell Recovery After Cryopreservation
            </Link>

          </div>

          <br />
          
          <Heading as="h3" className={styles.sectionHeading}>
  Aseptic Technique & Biosafety
</Heading>

<p className={styles.sectionDescription}>
  Standard operating procedures for maintaining sterility, safe laboratory
  practices, biosafety cabinet operation, sterile solution preparation,
  and biological waste management.
</p>

<div className={styles.grid}>

  <Link
    className={styles.card}
    to="/docs/sops/sop-011-aseptic-technique-in-cell-culture"
  >
    Aseptic Technique
  </Link>

  <Link
    className={styles.card}
    to="/docs/sops/sop-012-operation-of-a-class-ii-biosafety-cabinet"
  >
    Class II Biosafety Cabinet
  </Link>

  <Link
    className={styles.card}
    to="/docs/sops/sop-013-sterile-filtration-of-solutions"
  >
    Sterile Filtration
  </Link>

  <Link
    className={styles.card}
    to="/docs/sops/sop-014-cleaning-and-disinfection-of-a-class-ii-biosafety-cabinet"
  >
    Cleaning & Disinfection
  </Link>

  <Link
    className={styles.card}
    to="/docs/sops/sop-015-cell-culture-waste-disposal"
  >
    Cell Culture Waste Disposal
  </Link>

</div>

          <Heading as="h3" className={styles.sectionHeading}>
  Laboratory Equipment
</Heading>

<p className={styles.sectionDescription}>
  Guidelines for the operation, maintenance, and routine use of essential
  laboratory equipment used in mammalian cell culture and biomedical
  research.
</p>

<div className={styles.grid}>

  <Link className={styles.card} to="/docs/sops/sop-016-operation-of-a-co-incubator">
    CO₂ Incubator
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-017-operation-of-a-laboratory-water-bath">
    Water Bath
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-018-operation-of-a-laboratory-centrifuge">
    Centrifuge
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-019-operation-of-an-inverted-microscope">
    Inverted Microscope
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-020-operation-of-a-hemocytometer">
    Hemocytometer
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-021-operation-of-micropipettes">
    Micropipette Operation & Calibration
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-022-storage-and-retrieval-of-cryopreserved-cells-in-liquid-nitrogen">
    Liquid Nitrogen Storage
  </Link>

</div>
  
  <Heading as="h3">
  Cell Quality Control
</Heading>

<p className={styles.sectionDescription}>
  Procedures for monitoring culture quality, documenting cell health,
  detecting contamination, and maintaining the integrity and
  traceability of mammalian cell lines.
</p>

<div className={styles.grid}>

  <Link className={styles.card} to="/docs/sops/sop-023-cell-morphology-assessment">
    Cell Morphology Assessment
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-024-estimation-of-cell-confluency">
    Estimation of Cell Confluency
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-025-detection-of-cell-culture-contamination">
    Detection of Cell Culture Contamination
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-026-mycoplasma-testing-of-cell-cultures">
    Mycoplasma Testing
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-027-cell-line-authentication">
    Cell Line Authentication
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-028-cell-culture-record-keeping-and-documentation">
    Recording Passage Number
  </Link>

</div>

<Heading as="h3">
  Reagent Preparation & Cell Banking
</Heading>

<p className={styles.sectionDescription}>
  Standardized procedures for preparing commonly used laboratory reagents,
  extracellular matrix coatings, and establishing reliable long-term
  cell banking systems.
</p>

<div className={styles.grid}>

  <Link className={styles.card} to="/docs/sops/sop-029-cleaning-and-maintenance-of-a-co-incubator">
    Cleaning and Maintenance of a CO₂ Incubator
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-030-response-to-cell-culture-spills">
    Response to Cell Culture Spills
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-031-receipt-and-handling-of-new-cell-lines">
    Receipt and Handling of New Cell Lines
  </Link>

  <Link className={styles.card} to="/docs/sops/sop-032-establishment-and-management-of-master-and-working-cell-banks">
    Establishment & Management of Master and Working Cell Banks
  </Link>

</div>

        </section>

      </main>

    </Layout>
  );
}
