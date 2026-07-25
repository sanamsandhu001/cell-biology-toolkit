import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>

      <div className={styles.heroOverlay}></div>

      <div className={`container ${styles.heroContent}`}>

        <Heading as="h1" className={styles.heroTitle}>
          Cell Biology Toolkit
        </Heading>

        <p className={styles.heroSubtitle}>
          Comprehensive protocols, cell line profiles, assays,
          reagents, laboratory tools, and reference resources
          for modern cell biology.
        </p>

        <div className={styles.buttons}>
          <a
            className="button button--primary button--lg"
            href="#explore-toolkit"
          >
            Explore the Toolkit
          </a>
        </div>

      </div>

    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
<Layout
  title="Cell Biology Toolkit"
  description="Open educational resource featuring standardized protocols, cell lines, assays, reagents, laboratory tools, and reference guides for cell biology."
>     
<HomepageHeader />

      <main>

        <div id="explore-toolkit">
          <HomepageFeatures />
        </div>

        {/* Why Cell Biology Toolkit */}

        <section className={styles.valuesSection}>
          <div className="container">

            <Heading as="h2" className={styles.valuesTitle}>
              Why Cell Biology Toolkit?
            </Heading>

            <p className={styles.valuesSubtitle}>
              Built to make high-quality cell biology resources more accessible,
              practical, and reliable for students, educators, and researchers.
            </p>

            <div className={styles.valuesGrid}>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔓</div>
                <h3>Open Access</h3>
                <p>
                  Freely available educational resources for learning,
                  teaching, and biomedical research.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🧬</div>
                <h3>Scientifically Curated</h3>
                <p>
                  Carefully organized using trusted scientific literature
                  and established laboratory practices.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🧪</div>
                <h3>Practical Learning</h3>
                <p>
                  Protocols and reference guides designed for real laboratory
                  workflows and biomedical education.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🌱</div>
                <h3>Continuously Growing</h3>
                <p>
                  Regularly expanded with new protocols, assays,
                  cell lines, and scientific resources.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

    </Layout>
  );
}