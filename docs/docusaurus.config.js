/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ZITADEL Docs",
  trailingSlash: false,
  url: "https://zitadel.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zitadel",
  projectName: "zitadel",
  scripts: [
    {
      src: "/docs/proxy/js/script.js",
      async: true,
      defer: true,
      "data-domain": "zitadel.com",
      "data-api": "/docs/proxy/api/event",
    },
  ],
  customFields: {
    description:
      "Documentation for ZITADEL - The best of Auth0 and Keycloak combined. Built for the serverless era.",
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
        en: {
            label: 'English',
            direction: 'ltr',
            htmlLang: 'en-US',
            calendar: 'gregory',
            path: 'en',
        },
        zh: {
            label: '简体中文',
            direction: 'ltr',
            htmlLang: 'zh',
            calendar: 'gregory',
            path: 'zh',
        }
    }
  },
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "zitadel, documentation, jwt, saml, oauth2, authentication, serverless, login, auth, authorization, sso, openid-connect, oidc, mfa, 2fa, passkeys, fido2, docker",
      },
    ],
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(243, 244, 246)",
        dark: "rgb(55, 59, 82)",
      },
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      config: {},
    },
    navbar: {
      // title: 'ZITADEL',
      logo: {
        alt: "ZITADEL logo",
        src: "img/zitadel-logo-dark.svg",
        srcDark: "img/zitadel-logo-light.svg",
      },
      items: [
        {
          type: "doc",
          label: "Guides",
          docId: "guides/overview",
          position: "left",
        },
        {
          type: "doc",
          label: "Examples",
          docId: "examples/introduction",
          position: "left",
        },
        {
          type: "doc",
          label: "APIs",
          docId: "apis/introduction",
          position: "left",
        },
        {
          type: "doc",
          label: "Self-Hosting",
          docId: "self-hosting/deploy/overview",
          position: "left",
        },
        {
          type: "doc",
          docId: "concepts/introduction",
          label: "Concepts",
          position: "left",
        },
        {
          type: "doc",
          docId: "manuals/introduction",
          label: "Help",
          position: "left",
        },
        {
          type: "doc",
          docId: "legal/introduction",
          label: "Legal",
          position: "left",
        },
        {
            type: 'localeDropdown',
            position: 'right',
        },
        {
          href: "https://github.com/zitadel/zitadel",
          label: "GitHub",
          position: "right",
          value:
            '<a href="https://github.com/zitadel/zitadel/discussions" style="text-decoration: none; width: 20px; height: 24px; display: flex"><i class="las la-comments"></i></a>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://github.com/zitadel/zitadel" style="text-decoration: none; width: 20px; height: 24px; display: flex"><i class="lab la-github"></i></a>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://zitadel.com/chat" style="text-decoration: none; width: 20px; height: 24px; display: flex; margin: 0 .5rem 0 0"><i class="lab la-discord"></i></a>',
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Chat",
              href: "https://zitadel.com/chat",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/zitadel/zitadel/discussions",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/zitadel",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/zitadel/",
            },
            {
              label: "Blog",
              href: "https://zitadel.com/blog",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Terms and Conditions",
              href: "/legal/terms-of-service",
            },
            {
              label: "Privacy Policy",
              href: "/legal/privacy-policy",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Website",
              href: "https://zitadel.com",
            },
            {
              label: "Contact",
              href: "https://zitadel.com/contact/",
            },
            {
              label: "GitHub",
              href: "https://github.com/zitadel",
            },
            {
              label: "Status",
              href: "https://status.zitadel.com/",
            },
            {
              label: "Docs v1 (deprecated)",
              href: "https://docs-v1.zitadel.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZITADEL Docs - Built with Docusaurus.`,
    },
    algolia: {
      appId: "8H6ZKXENLO",
      apiKey: "124fe1c102a184bc6fc70c75dc84f96f",
      indexName: "zitadel",
      selector: "div#",
    },
    prism: {
      additionalLanguages: ["csharp", "dart", "groovy", "regex"],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/zitadel/zitadel/edit/main/docs/",
          remarkPlugins: [require("mdx-mermaid")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
};
