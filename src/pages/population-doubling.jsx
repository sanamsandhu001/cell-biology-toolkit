import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../components/calculator/calculator.module.css';
import InputField from '../components/calculator/InputField';

export default function PopulationDoublingCalculator() {

  // ==========================
  // Input States
  // ==========================

const [initialCells, setInitialCells] = useState('');
const [finalCells, setFinalCells] = useState('');

const [populationDoublings, setPopulationDoublings] = useState(null);
const [foldExpansion, setFoldExpansion] = useState(null);

  // ==========================
  // Results
  // ==========================

  const [totalCells, setTotalCells] = useState(null);
  const [volumeRequired, setVolumeRequired] = useState(null);
  const [volumeWithExtra, setVolumeWithExtra] = useState(null);



 // ==========================
// Calculator
// ==========================

function calculate() {

  if (
    initialCells === '' ||
    finalCells === ''
  ) {
    alert("Please enter all required values.");
    return;
  }

  const initial = parseFloat(initialCells);
  const finalCount = parseFloat(finalCells);

  if (
    isNaN(initial) ||
    isNaN(finalCount)
  ) {
    alert("Please enter valid numbers.");
    return;
  }

  if (initial <= 0) {
    alert("Initial cell number must be greater than zero.");
    return;
  }

  if (finalCount <= 0) {
    alert("Final cell number must be greater than zero.");
    return;
  }

  if (finalCount < initial) {
    alert("Final cell number should be greater than or equal to the initial cell number.");
    return;
  }

  // Fold Expansion

  const fold = finalCount / initial;

  // Population Doublings

  const pd =
    Math.log(fold) / Math.log(2);

  setPopulationDoublings(
    pd.toFixed(3)
  );

  setFoldExpansion(
    fold.toFixed(3)
  );

}

// ==========================
// Reset
// ==========================

function resetCalculator() {

  setInitialCells('');
  setFinalCells('');

  setPopulationDoublings(null);
  setFoldExpansion(null);

}

return (

  <Layout title="Population Doubling Calculator">

    <main className={styles.container}>

      {/* ==========================
          Hero
      ========================== */}

      <section className={styles.heroSection}>

        <Heading as="h1">
          📈 Population Doubling Calculator
        </Heading>

        <p className={styles.subtitle}>
          Calculate the number of population doublings and fold expansion between two cell counts during cell culture experiments.
        </p>

      </section>
      
      {/* ==========================
          Calculator
      ========================== */}

      <section className={styles.card}>

        <Heading as="h2">
          Calculator
        </Heading>

        <InputField
          label="Initial Cell Number (Ni)"
          value={initialCells}
          onChange={(e) => setInitialCells(e.target.value)}
          placeholder="500000"
        />

        <InputField
          label="Final Cell Number (Nf)"
          value={finalCells}
          onChange={(e) => setFinalCells(e.target.value)}
          placeholder="4000000"
        />

        <div className={styles.buttonRow}>

          <button
            className={styles.button}
            onClick={calculate}
          >
            Calculate
          </button>

          <button
            className={styles.secondaryButton}
            onClick={resetCalculator}
          >
            Reset
          </button>

        </div>

      </section>

      {/* ==========================
          Results
      ========================== */}

      {populationDoublings && (

        <section className={styles.resultCard}>

          <Heading as="h2">
            Results
          </Heading>

          <div className={styles.resultGrid}>

            <div className={styles.resultBox}>
              <h3>Population Doublings</h3>
              <p>{populationDoublings}</p>
            </div>

            <div className={styles.resultBox}>
              <h3>Fold Expansion</h3>
              <p>{foldExpansion} ×</p>
            </div>

          </div>

        </section>

      )}
      
      {/* ==========================
          Formula
      ========================== */}

      <section className={styles.infoCard}>

        <Heading as="h2">
          Formula
        </Heading>

        <p className={styles.formula}>
          Population Doublings (PD) = log(Nf / Ni) ÷ log(2)
        </p>

        <p>
          Where:
        </p>

        <ul>
          <li><strong>Ni</strong> = Initial cell number</li>
          <li><strong>Nf</strong> = Final cell number</li>
        </ul>

        <p className={styles.formula}>
          Fold Expansion = Nf ÷ Ni
        </p>

      </section>

      {/* ==========================
          Worked Example
      ========================== */}

      <section className={styles.infoCard}>

        <Heading as="h2">
          Worked Example
        </Heading>

        <p>
          A culture is expanded from <strong>500,000</strong> cells to
          <strong> 4,000,000</strong> cells.
        </p>

        <p className={styles.formula}>
          Fold Expansion = 4,000,000 ÷ 500,000 = 8
        </p>

        <p className={styles.formula}>
          Population Doublings = log(8) ÷ log(2) = 3
        </p>

        <ul>
          <li>Population Doublings = <strong>3.000</strong></li>
          <li>Fold Expansion = <strong>8.000×</strong></li>
        </ul>

      </section>

      {/* ==========================
          Laboratory Notes
      ========================== */}

      <section className={styles.infoCard}>

        <Heading as="h2">
          Laboratory Notes
        </Heading>

        <ul>

          <li>Use viable cell counts rather than total cell counts whenever possible.</li>

          <li>Determine both initial and final cell numbers using the same counting method.</li>

          <li>Population doubling is widely used to monitor cell proliferation and long-term expansion.</li>

          <li>Record passage number together with population doublings when maintaining continuous cell cultures.</li>

          <li>Large deviations from expected doubling values may indicate changes in cell health or growth conditions.</li>

        </ul>

      </section>

      {/* ==========================
          References
      ========================== */}

      <section className={styles.infoCard}>

        <Heading as="h2">
          References
        </Heading>

        <ul>

          <li>Freshney RI. <em>Culture of Animal Cells: A Manual of Basic Technique and Specialized Applications.</em></li>

          <li>ATCC Animal Cell Culture Guide.</li>

          <li>Hayflick L. <em>The Limited In Vitro Lifetime of Human Diploid Cell Strains.</em> Experimental Cell Research (1965).</li>

          <li>Thermo Fisher Scientific Cell Culture Technical Resources.</li>

        </ul>

      </section>

    </main>

  </Layout>

);

}