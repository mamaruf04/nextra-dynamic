type Content = {
  ContentID: number;
  ParentContentID?: number;
  Title: string;
};

type SingleContent = {
  ContentID: number;
  ParentContentID?: number;
  Title: string;
  Content: string;
};

export async function getContentById(id: any): Promise<SingleContent> {
  console.log({ id });

  const res = await fetch(
    `https://www.trustguid.com/api/contents/${id}?type=Document`
  );
  const content: SingleContent = await res.json();
  //   const content = {
  //     ContentID: 55,
  //     ContentType: "Document",
  //     Content:
  //       '### When a subgraph is published to The Graph Network, you can visit its subgraph details page on [Graph Explorer](https://thegraph.com/explorer) and use the "Playground" tab to explore the deployed GraphQL API for the subgraph, issuing queries and viewing the schema.\n\n###\n\n> Each subgraph published to The Graph Network has a unique query URL in Graph Explorer for making direct queries that you can find by navigating to the subgraph details page and clicking on the "Query" button on the top right corner.\n\nLearn more about querying from an application [here](https://thegraph.com/docs/en/querying/querying-from-an-application/).\n\nAs you can notice, this query URL must use a unique API key. You can create and manage your API keys in [Subgraph Studio](https://thegraph.com/studio), in the "API Keys" section. Learn more about how to use Subgraph Studio [here](https://thegraph.com/docs/en/deploying/subgraph-studio/).\n\nSubgraph Studio users start on a Free Plan, which allows them to make 100,000 queries per month. Additional queries are available on the Growth Plan, which offers usage based pricing for additional queries, payable by credit card, or GRT on Arbitrum. You can learn more about billing [here](https://thegraph.com/docs/en/billing/).',
  //     ContentCoverImage: null,
  //     CreatedOn: "2024-09-18T18:33:15.758Z",
  //     CreatedBy: "",
  //     UpdatedOn: "2024-09-18T18:49:45.830Z",
  //     UpdatedBy: "",
  //     ApproximateReadTime: 4,
  //     Author: "",
  //     Title: "Querying The Graph",
  //     ParentContentID: null,
  //     RelatedContentIDs: [],
  //   };
  return content;
}

export async function fetchContents(): Promise<Content[]> {
  const res = await fetch(
    "https://www.trustguid.com/api/contents?type=Document"
    // "data.json"
  );
  const contents: Content[] = await res.json();
  console.log({ contents });

  return contents;
}

type SidebarItem = {
  label: string;
  path: string;
  children?: SidebarItem[];
};

export function buildSidebarTree(contents: Content[]): SidebarItem[] {
  const tree: SidebarItem[] = [];

  contents.forEach((item) => {
    if (!item.ParentContentID) {
      tree.push({
        label: item.Title,
        path: `/docs/${item.ContentID}`,
        children: [],
      });
    } else {
      const parent = tree.find(
        (p) => p.path === `/docs/${item.ParentContentID}`
      );
      if (parent) {
        parent.children?.push({
          label: item.Title,
          path: `/docs/${item.ContentID}`,
        });
      }
    }
  });

  console.log("tree:", tree);

  return tree;
}
