import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../components/calculator/calculator.module.css';
import InputField from '../components/calculator/InputField';

export default function DilutionCalculator() {

  // ==========================
  // Input States
  // ==========================

  const [c1, setC1] = useState('');
  const [c2, setC2] = useState('');
  const [v2, setV2] = useState('');

  const [c1Unit, setC1Unit] = useState('mM');
  const [c2Unit, setC2Unit] = useState('mM');
  const [v2Unit, setV2Unit] = useState('mL');

  // ==========================
  // Result States
  // ==========================

  const [v1, setV1] = useState(null);
  const [diluent, setDiluent] = useState(null);

  // ==========================
  // Unit Conversion Factors
  // ==========================

  const concentrationFactors = {
    M: 1000,
    mM: 1,
    "µM": 0.001,
    nM: 0.000001,
  };

  const volumeFactors = {
    L: 1000,
    mL: 1,
    "µL": 0.001,
  };

  // ==========================
  // Calculator
  // ==========================

  function calculate() {

    // Check empty fields

    if (c1 === '' || c2 === '' || v2 === '') {
      alert("Please enter all required values.");
      return;
    }

    // Convert to base units

    const stock =
      parseFloat(c1) * concentrationFactors[c1Unit];

    const desired =
      parseFloat(c2) * concentrationFactors[c2Unit];

    const finalVolume =
      parseFloat(v2) * volumeFactors[v2Unit];

    // Validate numbers

    if (
      isNaN(stock) ||
      isNaN(desired) ||
      isNaN(finalVolume)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    // Biological validation

    if (stock <= 0) {
      alert("Stock concentration must be greater than zero.");
      return;
    }

    if (desired <= 0) {
      alert("Desired concentration must be greater than zero.");
      return;
    }

    if (finalVolume <= 0) {
      alert("Final volume must be greater than zero.");
      return;
    }

    if (desired > stock) {
      alert("Desired concentration cannot exceed stock concentration.");
      return;
    }

    // Calculation

    const requiredStock =
      (desired * finalVolume) / stock;

    const requiredDiluent =
      finalVolume - requiredStock;

    // Convert back to selected output unit

    const outputStock =
      requiredStock / volumeFactors[v2Unit];

    const outputDiluent =
      requiredDiluent / volumeFactors[v2Unit];

    setV1(outputStock.toFixed(3));
    setDiluent(outputDiluent.toFixed(3));

  }

  // ==========================
  // Reset Calculator
  // ==========================

  function resetCalculator() {

    setC1('');
    setC2('');
    setV2('');

    setC1Unit('mM');
    setC2Unit('mM');
    setV2Unit('mL');

    setV1(null);
    setDiluent(null);

  }
return (
    <Layout title="Solution Dilution Calculator">

      <main className={styles.container}>

        {/* ==========================
            Hero
        ========================== */}

        <section className={styles.heroSection}>

          <Heading as="h1">
            🧪 Solution Dilution Calculator
          </Heading>

          <p className={styles.subtitle}>
            Calculate the volume of stock solution and diluent required to prepare laboratory solutions using the C₁V₁ = C₂V₂ equation.
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
            label="Stock Concentration (C₁)"
            value={c1}
            onChange={(e) => setC1(e.target.value)}
            placeholder="100"
            unit={c1Unit}
            unitOptions={["M", "mM", "µM", "nM"]}
            onUnitChange={(e) => setC1Unit(e.target.value)}
          />

          <InputField
            label="Desired Concentration (C₂)"
            value={c2}
            onChange={(e) => setC2(e.target.value)}
            placeholder="10"
            unit={c2Unit}
            unitOptions={["M", "mM", "µM", "nM"]}
            onUnitChange={(e) => setC2Unit(e.target.value)}
          />

          <InputField
            label="Final Volume (V₂)"
            value={v2}
            onChange={(e) => setV2(e.target.value)}
            placeholder="50"
            unit={v2Unit}
            unitOptions={["L", "mL", "µL"]}
            onUnitChange={(e) => setV2Unit(e.target.value)}
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

        {v1 && (

          <section className={styles.resultCard}>

            <Heading as="h2">
              Results
            </Heading>

            <div className={styles.resultGrid}>

              <div className={styles.resultBox}>

                <h3>
                  Stock Solution Required
                </h3>

                <p>
                  {Number(v1).toLocaleString()} {v2Unit}
                </p>

              </div>

              <div className={styles.resultBox}>

                <h3>
                  Diluent Required
                </h3>

                <p>
                  {Number(diluent).toLocaleString()} {v2Unit}
                </p>

              </div>

            </div>

          </section>

        )}
        {/* 
        ==========================
            Formula
        ========================== */}

        <section className={styles.infoCard}>

          <Heading as="h2">
            Formula
          </Heading>

          <p className={styles.formula}>
            C₁V₁ = C₂V₂
          </p>

          <p>
            Rearranging the equation:
          </p>

          <p className={styles.formula}>
            V₁ = (C₂ × V₂) / C₁
          </p>

          <p>
            Where:
          </p>

          <ul>
            <li><strong>C₁</strong> = Stock concentration</li>
            <li><strong>V₁</strong> = Volume of stock solution required</li>
            <li><strong>C₂</strong> = Desired concentration</li>
            <li><strong>V₂</strong> = Final volume of solution</li>
          </ul>

        </section>

        {/* ==========================
            Worked Example
        ========================== */}

        <section className={styles.infoCard}>

          <Heading as="h2">
            Worked Example
          </Heading>

          <p>
            Prepare <strong>50 mL</strong> of a <strong>10 mM</strong> solution from a <strong>100 mM</strong> stock.
          </p>

          <p className={styles.formula}>
            V₁ = (10 × 50) / 100
          </p>

          <p className={styles.formula}>
            V₁ = 5 mL
          </p>

          <p>
            Therefore:
          </p>

          <ul>
            <li>Stock solution = <strong>5 mL</strong></li>
            <li>Diluent = <strong>45 mL</strong></li>
          </ul>

        </section>

        {/* 
        ==========================
            Laboratory Notes
        ========================== */}

        <section className={styles.infoCard}>

          <Heading as="h2">
            Laboratory Notes
          </Heading>

          <ul>
            <li>Always verify that stock and desired concentrations are expressed in compatible units.</li>
            <li>Prepare 5–10% extra solution to compensate for pipetting losses.</li>
            <li>Mix the solution thoroughly after dilution.</li>
            <li>Label every prepared solution with concentration, preparation date and initials.</li>
            <li>Use calibrated pipettes for accurate volume measurements.</li>

          </ul>

        </section>

        {/* 
        ==========================
            References
        ========================== */}

        <section className={styles.infoCard}>

          <Heading as="h2">
            References
          </Heading>

          <ul>
            <li>Freshney RI. <em>Culture of Animal Cells: A Manual of Basic Technique and Specialized Applications.</em></li>
            <li>ATCC Cell Culture Guides.</li>
            <li>Thermo Fisher Scientific Cell Culture Technical Resources.</li>
            <li>Corning Cell Culture Handbook.</li>
          </ul>

        </section>

      </main>

    </Layout>

  );

}