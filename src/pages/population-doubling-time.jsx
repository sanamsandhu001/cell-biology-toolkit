import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../components/calculator/calculator.module.css';
import InputField from '../components/calculator/InputField';

export default function PopulationDoublingTimeCalculator() {

  // ==========================
  // Input States
  // ==========================

const [initialCells, setInitialCells] = useState('');
const [finalCells, setFinalCells] = useState('');
const [cultureTime, setCultureTime] = useState('');

const [timeUnit, setTimeUnit] = useState('hours');

const [doublingTime, setDoublingTime] = useState(null);
const [growthRate, setGrowthRate] = useState(null);

// ==========================
// Calculator
// ==========================

function calculate() {

  if (
    initialCells === '' ||
    finalCells === '' ||
    cultureTime === ''
  ) {
    alert("Please enter all required values.");
    return;
  }

  const initial = parseFloat(initialCells);
  const finalCount = parseFloat(finalCells);
let time = parseFloat(cultureTime);

// Convert all inputs to hours

if (timeUnit === "minutes") {
  time = time / 60;
}

if (timeUnit === "days") {
  time = time * 24;
}

  if (
    isNaN(initial) ||
    isNaN(finalCount) ||
    isNaN(time)
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

  if (time <= 0) {
    alert("Culture duration must be greater than zero.");
    return;
  }

  if (finalCount < initial) {
    alert("Final cell number should be greater than or equal to the initial cell number.");
    return;
  }

  // Fold expansion

  const fold = finalCount / initial;

  // Population doublings

  const pd = Math.log(fold) / Math.log(2);

  // Population doubling time

  const pdt = time / pd;

  // Growth rate

  const rate = pd / time;

  setDoublingTime(
    pdt.toFixed(2)
  );

  setGrowthRate(
    rate.toFixed(4)
  );

}

// ==========================
// Reset
// ==========================

function resetCalculator() {

  setInitialCells('');
  setFinalCells('');
  setCultureTime('');

  setTimeUnit('hours');

  setDoublingTime(null);
  setGrowthRate(null);

}

return (

  <Layout title="Population Doubling Time Calculator">

    <main className={styles.container}>

      {/* ==========================
          Hero
      ========================== */}

      <section className={styles.heroSection}>

        <Heading as="h1">
          ⏱ Population Doubling Time Calculator
        </Heading>

        <p className={styles.subtitle}>
          Calculate the population doubling time (PDT) and growth rate of cultured cells using the initial cell count, final cell count, and culture duration.
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

<InputField
  label="Culture Duration"
  value={cultureTime}
  onChange={(e) => setCultureTime(e.target.value)}
  placeholder="72"
  unit={timeUnit}
  unitOptions={["minutes", "hours", "days"]}
  onUnitChange={(e) => setTimeUnit(e.target.value)}
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

      {doublingTime && (

        <section className={styles.resultCard}>

          <Heading as="h2">
            Results
          </Heading>

          <div className={styles.resultGrid}>

            <div className={styles.resultBox}>

              <h3>
                Population Doubling Time
              </h3>

              <p>
               {doublingTime} hours
              </p>
            </div>

            <div className={styles.resultBox}>

              <h3>
                Growth Rate
              </h3>

              <p>
                {growthRate} doublings/{timeUnit === "hours" ? "hour" : "day"}
              </p>

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
          Population Doubling Time (PDT) = (t × log(2)) ÷ log(Nf / Ni)
        </p>

        <p>
          Where:
        </p>

        <ul>
          <li><strong>Ni</strong> = Initial cell number</li>
          <li><strong>Nf</strong> = Final cell number</li>
          <li><strong>t</strong> = Culture duration</li>
        </ul>

        <p className={styles.formula}>
          Growth Rate = Population Doublings ÷ Culture Duration
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
          A culture expands from <strong>500,000</strong> cells to
          <strong> 4,000,000</strong> cells over
          <strong> 72 hours</strong>.
        </p>

        <p className={styles.formula}>
          Fold Expansion = 4,000,000 ÷ 500,000 = 8
        </p>

        <p className={styles.formula}>
          Population Doublings = log(8) ÷ log(2) = 3
        </p>

        <p className={styles.formula}>
          Population Doubling Time = 72 ÷ 3 = 24 hours
        </p>

        <ul>
          <li>Population Doubling Time = <strong>24.00 hours</strong></li>
          <li>Growth Rate = <strong>0.0417 doublings/hour</strong></li>
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

          <li>Use viable cell counts whenever possible.</li>

          <li>Measure culture duration accurately from seeding to harvesting.</li>

          <li>Maintain identical culture conditions throughout the experiment.</li>

          <li>Population doubling time is influenced by passage number, media composition, and cell health.</li>

          <li>Compare doubling times only between experiments performed under similar conditions.</li>

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