import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './sops.module.css';

export default function About() {
  return (
    <Layout
      title="About Cell Biology Toolkit"
      description="Learn more about the Cell Biology Toolkit and its mission."
    >
      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <Heading as="h1">
            About Cell Biology Toolkit
          </Heading>

          <p>
            An open educational resource providing standardized protocols,
            reference guides, cell line profiles, assays, laboratory tools, and
            scientific resources for cell biology and biomedical research.
          </p>
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.intro}>
          <Heading as="h2">
            Our Mission
          </Heading>

          <p>
            Cell Biology Toolkit was created to make high-quality laboratory
            knowledge more accessible, organized, and practical for students,
            researchers, and educators. Experimental protocols and scientific
            information are often scattered across textbooks, journal articles,
            manufacturer manuals, and institutional websites. This project
            brings these resources together into a structured, standardized, and
            easy-to-navigate knowledge base.
          </p>

          <p>
            Our goal is to support learning, improve experimental
            reproducibility, and provide reliable reference material for
            everyday laboratory work. By presenting information in a consistent
            format, the toolkit enables users to quickly locate essential
            concepts, compare methods, and better understand the principles
            underlying modern cell biology and biomedical research.
          </p>
        </section>

        <section className={styles.featured}>
          <Heading as="h2">
            What You'll Find
          </Heading>

          <div className={styles.grid}>

            <div className={styles.card}>
              <Heading as="h3">Standard Operating Procedures</Heading>
              <p>
                Step-by-step laboratory protocols covering essential cell
                culture techniques and routine experimental workflows.
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h3">Cell Line Profiles</Heading>
              <p>
                Comprehensive reference guides describing commonly used cell
                lines, their characteristics, applications, and culture
                requirements.
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h3">Assays & Techniques</Heading>
              <p>
                Standardized guides for cell-based assays, molecular methods,
                imaging techniques, and experimental analysis.
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h3">Reagents & Growth Factors</Heading>
              <p>
                Reference guides for culture media, supplements, cytokines,
                growth factors, and commonly used laboratory reagents.
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h3">Laboratory Resources</Heading>
              <p>
                Laboratory tools, stem cell methods, calculators, and reference
                materials that support experimental planning and execution.
              </p>
            </div>

            <div className={styles.card}>
              <Heading as="h3">Reference Library</Heading>
              <p>
                Scientific background articles covering key concepts, cell
                biology, laboratory techniques, and biomedical research topics.
              </p>
            </div>

          </div>
        </section>

        <section className={styles.intro} style={{ marginTop: '3rem' }}>
          <Heading as="h2">
            Guiding Principles
          </Heading>

          <p>
            Every resource within the Cell Biology Toolkit is developed around
            a common set of principles: scientific accuracy, standardized
            organization, evidence-based information, clear writing, and
            practical laboratory relevance. The project is continuously updated
            and expanded to reflect commonly used methods and best practices in
            modern biomedical research.
          </p>
        </section>

        <section className={styles.intro}>
          <Heading as="h2">
            About the Author
          </Heading>

          <p>
            Cell Biology Toolkit is developed and maintained by
            <strong> Sanampreet Kaur</strong>, an educator and researcher with
            interests in cell biology, neuroscience, genetics, and biomedical
            research. The project reflects a commitment to creating accessible,
            well-organized scientific resources that support learning, teaching,
            and laboratory practice.
          </p>
        </section>

      </main>

    </Layout>
  );
}