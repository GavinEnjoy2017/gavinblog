module.exports = {
  title: 'Gavin Blog-前端开发.net开发',
  tagline: 'Gavin Blog-前端开发.net开发',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gavin Blog',
      logo: {
        alt: 'Gavin',
        src: 'img/logo.png',
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: '/', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/GavinEnjoy2017/gavinblog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/doc1',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Social',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/GavinEnjoy2017/gavinblog',
        },
        blog: {
          path: './blog',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
