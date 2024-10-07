export const filePathGenerator = () => {
  return {
    filePaths1: [
      //   "Querying The Graph",
      "Querying The Graph/Managing API key",
      "Querying The Graph/Querying",
      "Managing API key/Distributed Systems",
      //   "Polling data",
      "Polling data/Operating Graph",
      "getting-started/parser-options.mdx",
      "getting-started/parser.mdx",
      "index.mdx",
    ],
    filePaths: [
      "querying-the-graph",
      "managing-api-key",
      "querying",
      "distributed-systems",
      "polling-data",
      "operating-graph",
    ],
    nestedMeta: {
      index: "Introduction",
      "getting-started": {
        type: "folder",
        items: {
          "parser-options": "Parser Options",
          parser: "Parser",
        },
      },
      "Querying The Graph": {
        type: "folder",
        items: {
          //   "": "Querying The Graph",
          "Managing API key": "Managing API key",
          Querying: "Querying",
        },
      },
      "Managing API key": {
        type: "folder",
        items: {
          "Distributed Systems": "Distributed Systems",
        },
      },
      "Polling data": {
        type: "folder",
        items: {
          //   "": "Polling data",
          "Operating Graph": "Operating Graph",
        },
      },
    },
  };
};
