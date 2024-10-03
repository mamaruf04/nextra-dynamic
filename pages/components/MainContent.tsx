import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchContent } from "../lib/api";
import { ContentItem } from "../types/content";
import DynamicContent from "./DynamicContent";
// export const meta = { title: "Page Title" };

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState<ContentItem | null>(null);
  const [sidebarItems, setSidebarItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    async function loadContent() {
      const allContent = await fetchContent();

      // const nestedContent = allContent.reduce<ContentItem[]>((acc, item) => {
      //   if (!item.ParentContentID) {
      //     acc.push({ ...item, children: [] });
      //   } else {
      //     const parent = acc.find((i) => i.ContentID === item.ParentContentID);
      //     if (parent && parent.children) {
      //       parent.children.push(item);
      //     }
      //   }
      //   return acc;
      // }, []);

      // setSidebarItems(nestedContent);

      // console.log({ nestedContent });

      // if (slug && typeof slug[0] === "string") {
      //   const currentContent = allContent.find(
      //     (item) => item.ContentID.toString() === slug[0]
      //   );
      //   if (currentContent) setContent(currentContent);
      // } else {
      //   setContent(allContent[0]);
      // }

      setContent(allContent[0]);
    }

    loadContent();
  }, [slug]);

  return content?.Content ? (
    <DynamicContent content={content!.Content} />
  ) : (
    <div>Loading...</div>
  );
}
