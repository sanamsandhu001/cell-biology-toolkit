// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
title: 'Cell Biology Toolkit',
  tagline: 'Protocols, Cell Lines, Assays and Laboratory Resources',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sanamsandhu001.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sanamsandhu001', // Usually your GitHub org/user name.
  projectName: 'cell-biology-toolkit', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
  hideOnScroll: false,

  items: [
    {
      to: '/',
      label: 'Home',
      position: 'left',
    },
    {
      label: 'Explore',
      position: 'left',
      items: [
        { label: 'SOPs', to: '/sops' },
        { label: 'Cell Lines', to: '/cell-lines' },
        { label: 'Assays', to: '/assays' },
        { label: 'Reagents', to: '/reagents' },
        { label: 'Laboratory Tools', to: '/laboratory-tools' },
        { label: 'Stem Cell Methods', to: '/stem-cell-methods' },
        { label: 'Reference Library', to: '/reference-library' },
      ],
    },
    {
      label: 'Resources',
      position: 'left',
      items: [
        { label: 'Calculators', to: '/calculators' },
      ],
    },
    {
      to: '/about',
      label: 'About',
      position: 'left',
    },
    {
      href: 'https://github.com/Sanamsandhu001/cell-biology-toolkit',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
footer: {
  style: 'dark',
  links: [
    {
      title: 'Explore',
      items: [
        {
          label: 'SOPs',
          to: '/sops',
        },
        {
          label: 'Cell Lines',
          to: '/cell-lines',
        },
        {
          label: 'Assays',
          to: '/assays',
        },
        {
          label: 'Reagents',
          to: '/reagents',
        },
        {
          label: 'Reference Library',
          to: '/reference-library',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'Calculators',
          to: '/docs/calculators',
        },
        {
          label: 'Laboratory Tools',
          to: '/docs/laboratory-tools',
        },
        {
          label: 'Stem Cell Methods',
          to: '/docs/stem-cell-methods',
        },
        {
          label: 'About',
          to: '/about',
        },
      ],
    },
    {
      title: 'Connect',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/Sanamsandhu001/cell-biology-toolkit',
        },
        {
          label: 'Email',
          href: 'mailto:Kaur_sanampreet@outlook.com',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/sanampreet-kaur-82588031a',
        },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} Cell Biology Toolkit. Created by Sanampreet Kaur.`,
},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
