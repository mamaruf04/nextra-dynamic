import { createCatchAllMeta } from "nextra/catch-all";

export default () => {
  // const response = await fetch(
  //   "https://www.trustguid.com/api/contents?type=Document"
  // );
  // const data = await response.json();

  // const filePaths = data.contents.map((item: any) => {
  //   return item.Title + ".mdx";
  // });

  // const filePaths2 = filePathGenerator().filePaths;
  // const nestedMeta = filePathGenerator().nestedMeta;

  const filePaths = [
    "querying-the-graph.mdx",
    "managing-api-key.mdx",
    "querying.mdx",
    "distributed-systems.mdx",
    "polling-data.mdx",
    "operating-graph.mdx",
  ];

  const allMeta = createCatchAllMeta(filePaths);

  console.log({ allMeta });

  return allMeta;
};

// async function meta() {
//   const response = await fetch(
//     "https://www.trustguid.com/api/contents?type=Document"
//   );
//   const data = await response.json();

//   // Map API response titles to sidebar items
//   const filePaths = data.contents.map((content: any) => content.Title);

//   const testMeta = createCatchAllMeta(filePaths);
//   // console.log({ testMeta });

//   console.log({ testMeta });

//   return testMeta;
// }

// meta();

// const filePaths = [
//   "Querying The Graph",
//   "Managing API key",
//   "Querying",
//   "Distributed Systems",
//   "Polling data",
//   "Operating Graph",
// ];

// export default () => createCatchAllMeta(filePaths);
