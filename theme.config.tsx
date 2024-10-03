// import { buildSidebarTree, fetchContents } from "./pages/lib/sidebar";

// const getConfig = async () => {
//   const contents = await fetchContents();
//   console.log({ contents });

//   const sidebarItems = buildSidebarTree(contents);

//   return {
//     navbar: {},
//     repositoryBase: "https://github.com/your-repo",
//     sidebar: sidebarItems,
//     docsRepositoryBase: "https://github.com/your-repo/docs",
//     footer: {
//       text: `© Trustguid copyright | ${new Date().getFullYear()}`,
//     },
//   };
// };

// export default getConfig;

export default {
  project: {
    link: "https://github.com/shuding/nextra",
  },
  logo: <b>Project</b>,
};

// theme.config.tsx -- version 2
// import { DocsThemeConfig } from "nextra-theme-docs";
// import Sidebar from "./pages/components/Sidebar";

// const config: DocsThemeConfig = {
//   sidebar: {
//     titleComponent: ({ title, type }) => <span>{title}</span>,
//     defaultMenuCollapseLevel: 1,
//     toggleButton: true,
//   },
//   useNextSeoProps() {
//     return {
//       titleTemplate: "%s – Your Site Name",
//     };
//   },
//   components: {
//     sidebar: Sidebar as React.FC<any>,
//   },
// };

// export default config;
