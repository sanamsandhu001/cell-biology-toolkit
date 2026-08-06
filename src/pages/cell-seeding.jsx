import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../components/calculator/calculator.module.css';
import InputField from '../components/calculator/InputField';

export default function CellSeedingCalculator() {

  // ==========================
  // Input States
  // ==========================

  const [concentration, setConcentration] = useState('');
  const [cellsPerWell, setCellsPerWell] = useState('');
  const [numberOfWells, setNumberOfWells] = useState('');
  const [extraPercent, setExtraPercent] = useState('10');

  const [concUnit, setConcUnit] = useState('cells/mL');
  const [outputUnit, setOutputUnit] = useState('mL');

  // ==========================
  // Results
  // ==========================

  const [totalCells, setTotalCells] = useState(null);
  const [volumeRequired, setVolumeRequired] = useState(null);
  const [volumeWithExtra, setVolumeWithExtra] = useState(null);

  // ==========================
  // Conversion Factors
  // ==========================

  const concentrationFactors = {
    "cells/mL": 1,
    "cells/µL": 1000,
  };

  const volumeFactors = {
    mL: 1,
    "µL": 1000,
  };

  // ==========================
  // Calculator
  // ==========================

  function calculate() {

    if (
      concentration === '' ||
      cellsPerWell === '' ||
      numberOfWells === ''
    ) {
      alert("Please enter all required values.");
      return;
    }

    const conc =
      parseFloat(concentration) *
      concentrationFactors[concUnit];

    const cells =
      parseFloat(cellsPerWell);

    const wells =
      parseFloat(numberOfWells);

    const extra =
      parseFloat(extraPercent);

    if (
      isNaN(conc) ||
      isNaN(cells) ||
      isNaN(wells) ||
      isNaN(extra)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    if (conc <= 0) {
      alert("Cell concentration must be greater than zero.");
      return;
    }

    if (cells <= 0) {
      alert("Desired cells per well must be greater than zero.");
      return;
    }

    if (wells <= 0) {
      alert("Number of wells must be greater than zero.");
      return;
    }

    if (extra < 0) {
      alert("Extra percentage cannot be negative.");
      return;
    }

    const total =
      cells * wells;

    const volume =
      total / conc;

    const volumeExtra =
      volume * (1 + extra / 100);

    const displayVolume =
      outputUnit === "µL"
        ? volume * 1000
        : volume;

    const displayExtra =
      outputUnit === "µL"
        ? volumeExtra * 1000
        : volumeExtra;

    setTotalCells(total.toLocaleString());

    setVolumeRequired(
      displayVolume.toFixed(3)
    );

    setVolumeWithExtra(
      displayExtra.toFixed(3)
    );

  }

  // ==========================
  // Reset
  // ==========================

  function resetCalculator() {

    setConcentration('');
    setCellsPerWell('');
    setNumberOfWells('');
    setExtraPercent('10');

    setConcUnit('cells/mL');
    setOutputUnit('mL');

    setTotalCells(null);
    setVolumeRequired(null);
    setVolumeWithExtra(null);

  }

  return (
<Layout title="Cell Seeding Calculator">
      <main className={styles.container}>

        {/* ==========================
            Hero
        ========================== */}

        <section className={styles.heroSection}>

       <Heading as="h1">
        🧫 Cell Seeding Calculator
       </Heading>

        <p className={styles.subtitle}>
        Calculate the volume of cell suspension required to seed culture plates, dishes, or flasks using the desired cell density and cell concentration.
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
  label="Cell Concentration"
  value={concentration}
  onChange={(e) => setConcentration(e.target.value)}
  placeholder="1000000"
  unit={concUnit}
  unitOptions={["cells/mL", "cells/µL"]}
  onUnitChange={(e) => setConcUnit(e.target.value)}
/>

<InputField
  label="Desired Cells per Well"
  value={cellsPerWell}
  onChange={(e) => setCellsPerWell(e.target.value)}
  placeholder="50000"
/>

<InputField
  label="Number of Wells"
  value={numberOfWells}
  onChange={(e) => setNumberOfWells(e.target.value)}
  placeholder="24"
/>

<InputField
  label="Extra Cell Suspension (%)"
  value={extraPercent}
  onChange={(e) => setExtraPercent(e.target.value)}
  placeholder="10"
/>

<div className={styles.inputGroup}>

  <label htmlFor="outputUnit">Output Unit</label>

  <select
    id="outputUnit"
    className={styles.unitSelect}
    value={outputUnit}
    onChange={(e) => setOutputUnit(e.target.value)}
  >
    <option value="mL">mL</option>
    <option value="µL">µL</option>
  </select>

</div>
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

{totalCells && (

<section className={styles.resultCard}>

<Heading as="h2">
Results
</Heading>

<div className={styles.resultGrid}>

<div className={styles.resultBox}>
<h3>Total Cells Required</h3>
<p>{totalCells} cells</p>
</div>

<div className={styles.resultBox}>
<h3>Cell Suspension Volume</h3>
<p>{volumeRequired} {outputUnit}</p>
</div>

<div className={styles.resultBox}>
<h3>Volume Including Extra</h3>
<p>{volumeWithExtra} {outputUnit}</p>
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
    Total Cells = Cells per Well × Number of Wells
  </p>

  <p className={styles.formula}>
    Volume Required = Total Cells ÷ Cell Concentration
  </p>

  <p className={styles.formula}>
    Final Volume = Volume × (1 + Extra / 100)
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
Seed a 24-well plate with 50,000 cells per well.
</p>

<ul>

<li>Cell concentration = 1 × 10⁶ cells/mL</li>

<li>Total cells = 1,200,000 cells</li>

<li>Volume required = 1.20 mL</li>

<li>10% extra = 1.32 mL</li>

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

<li>Always determine cell concentration immediately after counting.</li>

<li>Mix the suspension thoroughly before aliquoting.</li>

<li>Prepare 5–10% excess suspension to compensate for pipetting losses.</li>

<li>Maintain a homogeneous suspension while seeding multiwell plates.</li>

<li>Avoid repeated pipetting that may damage fragile cells.</li>

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
            <li>ATCC Cell Culture Guides.</li>
            <li>Thermo Fisher Scientific Cell Culture Technical Resources.</li>
            <li>Corning Cell Culture Handbook.</li>
          </ul>

        </section>

      </main>

    </Layout>

  );

}