// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "這是孤獨一隻雞的故事小天地",
  tagline: "Hi, I'm Chicken 🐔",
  favicon: "img/cLogo.svg",

  // Set the production url of your site here
  url: "https://blog.lychicken.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LonelyYeezhiChicken", // Usually your GitHub org/user name.
  projectName: "chicken-personal", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-23JXYZ7T1V",
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/chicken.jpg",
      metadata: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { property: "og:title", content: "Chicken Say Hi" },
        { property: "og:url", content: "https://blog.lychicken.com/" },
        { property: "og:site_name", content: "孤獨一隻雞" },
        { property: "og:description", content: "這是一隻雞的小天地" },
        { property: "og:locale", content: "zh_TW" },
        { property: "og:width", content: "300" },
        { property: "og:height", content: "301" },
        { property: "article:author", content: "Lonely Yeezhi Chicken" },
        { property: "article:tag", content: "雞" },
        { property: "article:tag", content: "一隻雞" },
        { property: "article:tag", content: "孤獨一隻雞" },
        { property: "article:tag", content: "作品" },
        { property: "article:tag", content: "Chicken" },
        { property: "article:tag", content: "Chicken Say Hi" },
        { property: "article:tag", content: "Lonely Yeezhi Chicken" },
        {
          property: "article:tag",
          content:
            "前端, 後端, 全端, 網頁, 開發, 技術, 網頁開發, 前端開發, 後端開發, 全端開發, JavaScript, HTML, CSS, 經驗分享, 手札, 筆記",
        },
        {
          property: "article:tag",
          content:
            "frontend, backend, web, C#, Java, PHP, JavaScript, HTML, CSS, 經驗分享, 手札, note",
        },
      ],
      navbar: {
        title: "Chicken Say Hi",
        logo: {
          alt: "Chicken Say Hi Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "筆記",
          },
          { to: "/blog", label: "作品", position: "left" },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            href: "https://github.com/LonelyYeezhiChicken",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()}@BY Lonely Yeezhi Chicken.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java"],
      },
      // algolia: {
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
