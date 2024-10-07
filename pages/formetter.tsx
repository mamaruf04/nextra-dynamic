// import { Callout, RemoteContent } from "nextra/components";
// import { buildDynamicMDX, buildDynamicMeta } from "nextra/remote";
// import { filePathGenerator } from "./lib/filePathGenerator";
// import slugify from "slugify";

// export const getStaticPaths = async () => {
//   const filePaths = filePathGenerator().filePaths;

//   const paths = filePaths.map((content) => ({
//     params: { slug: [slugify(content, { lower: true })] },
//   }));

//   console.log({ paths: paths[0].params });

//   return { paths, fallback: "blocking" };
// };

// export async function getStaticProps({ params }) {
//   const response = await fetch(
//     `https://www.trustguid.com/api/contents?type=Document`
//   );
//   const data = await response.json();

//   const path = params.slug?.join("/") ?? "index";
//   console.log({ path });

//   const content = data.contents.find(
//     (c) => slugify(c.Title, { lower: true }) === path
//   );

//   console.log({ content });

//   const dynamicMdx = await buildDynamicMDX(content?.Content, {
//     defaultShowCopyCode: true,
//   });
//   console.log({ dynamicMdx });

//   const { __nextra_pageMap } = await buildDynamicMeta();
//   console.log("__nextra_pageMap", __nextra_pageMap);

//   return { props: { __nextra_pageMap, ...dynamicMdx } };
// }

// <RemoteContent />;
