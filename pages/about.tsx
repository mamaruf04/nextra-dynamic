import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchContent } from "./lib/api";
import { ContentItem } from "./types/content";

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState<ContentItem | null>(null);
  const [sidebarItems, setSidebarItems] = useState<ContentItem[]>([]);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    async function loadContent() {
      const allContent = await fetchContent();

      // Create nested structure
      const nestedContent = allContent.reduce<ContentItem[]>((acc, item) => {
        if (!item.ParentContentID) {
          acc.push({ ...item, children: [] });
        } else {
          const parent = acc.find((i) => i.ContentID === item.ParentContentID);
          if (parent && parent.children) {
            parent.children.push(item);
          }
        }
        return acc;
      }, []);

      setSidebarItems(nestedContent);

      if (slug && typeof slug[0] === "string") {
        const currentContent = allContent.find(
          (item) => item.ContentID.toString() === slug[0]
        );
        if (currentContent) setContent(currentContent);
      } else {
        setContent(allContent[0]); // Default to first item
      }
    }

    loadContent();
  }, [slug]);

  useEffect(() => {
    async function prepareMDX() {
      const serialized = await serialize(content!.Content);
      setMdxSource(serialized);
    }
    if (content) {
      prepareMDX();
    }
  }, [content]);

  if (!content?.Content) return <div>Loading...</div>;

  return (
    // <div>
    //   <h1>{content.Title}</h1>

    //   {sidebarItems.length > 0 && <Sidebar items={sidebarItems} />}
    //   {/* <DynamicContent content={content.Content} /> */}

    // </div>
    <MDXRemote {...mdxSource!} />
  );
}
