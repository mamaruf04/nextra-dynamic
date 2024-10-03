import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";

interface Props {
  content: string;
}

export default function DynamicContent({ content }: Props) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    async function prepareMDX() {
      const serialized = await serialize(content);
      setMdxSource(serialized);
    }
    prepareMDX();
  }, [content]);

  if (!mdxSource) return null;

  return <MDXRemote {...mdxSource} />;
}
