// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// vercel.app
const mainSiteUrl = 'https://website.softmaple.vercel.app/';
const editorPageUrl = 'https://softmaple.vercel.app/';
const insightsPageUrl = 'https://insights.softmaple.vercel.app/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Soft Maple',
  tagline: 'It\'s cool',
  url: mainSiteUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Soft Maple', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SoftMaple/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SoftMaple/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Soft Maple',
        logo: {
          alt: 'Soft Maple Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: "docs/get-started",
            activeBasePath: "docs",
            label: "Docs",
            position: "left",
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: insightsPageUrl,
            label: 'Insights (Beta)',
            position: 'left',
          },
          {
            href: 'https://github.com/SoftMaple/docs',
            position: 'right',
            className: 'header-github-link',
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Vwsuqq7dQD',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Tom61319231',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SoftMaple/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Soft Maple, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  customFields: {
    editorPageUrl,
  }
};

module.exports = config;
