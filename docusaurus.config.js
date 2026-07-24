// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cell Biology Toolkit',
  tagline: 'Protocols, Cell Lines, Assays and Laboratory Resources',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages configuration
  url: 'https://sanamsandhu001.github.io',
  baseUrl: '/cell-biology-toolkit/',

  organizationName: 'sanamsandhu001',
  projectName: 'cell-biology-toolkit',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/sanamsandhu001/cell-biology-toolkit/tree/main/',
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'editUrl:
  'https://github.com/sanamsandhu001/cell-biology-toolkit/edit/main/docs/',
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
    ({
      // Uncomment this once you create your own social card
      // image: 'img/cell-biology-toolkit-social-card.jpg',

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
              {label: 'SOPs', to: '/sops'},
              {label: 'Cell Lines', to: '/cell-lines'},
              {label: 'Assays', to: '/assays'},
              {label: 'Reagents', to: '/reagents'},
              {label: 'Laboratory Tools', to: '/laboratory-tools'},
              {label: 'Stem Cell Methods', to: '/stem-cell-methods'},
              {label: 'Reference Library', to: '/reference-library'},
            ],
          },
          {
            label: 'Resources',
            position: 'left',
            items: [
              {label: 'Calculators', to: '/calculators'},
            ],
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            href: 'https://github.com/sanamsandhu001/cell-biology-toolkit',
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
                to: '/calculators',
              },
              {
                label: 'Laboratory Tools',
                to: '/laboratory-tools',
              },
              {
                label: 'Stem Cell Methods',
                to: '/stem-cell-methods',
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
                href: 'https://github.com/sanamsandhu001/cell-biology-toolkit',
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