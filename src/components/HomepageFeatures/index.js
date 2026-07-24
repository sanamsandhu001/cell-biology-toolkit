import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const categories = [
  {
    title: 'Standard Operating Procedures',
    image: '/img/sop.png',
    description: 'Validated protocols for routine cell culture workflows.',
    link: '/sops',
  },
  {
    title: 'Assays & Techniques',
    image: '/img/assays.png',
    description: 'Experimental methods for cell biology research.',
    link: '/assays',
  },
  {
    title: 'Reagents & Growth Factors',
    image: '/img/reagents.png',
    description: 'Culture media, supplements, cytokines and reagents.',
    link: '/reagents',
  },
  {
    title: 'Cell Lines',
    image: '/img/celllines.png',
    description: 'Reference profiles for commonly used cell lines.',
    link: '/cell-lines',
  },
  {
    title: 'Laboratory Tools',
    image: '/img/tools.png',
    description: 'Calculators, equipment guides and practical resources.',
    link: '/laboratory-tools',
  },
  {
    title: 'Reference Library',
    image: '/img/library.png',
    description: 'Background knowledge, terminology and reference material.',
    link: '/reference-library',
  },
];
function CategoryCard({ title, image, description, link }) {
  return (
    <Link to={link} className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />

      <div className={styles.cardContent}>
        <Heading as="h3">{title}</Heading>

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">

        <Heading as="h2" className={styles.heading}>
          Explore the Toolkit
        </Heading>

        <p className={styles.subheading}>
          Browse scientific resources by category.
        </p>

        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

      </div>
    </section>
  );
}
