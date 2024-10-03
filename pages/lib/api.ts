import { ApiResponse, ContentItem } from "../types/content";

export async function fetchContent(): Promise<ContentItem[]> {
  const res = await fetch("/api/getContent");
  const data: ApiResponse = await res.json();
  return data.contents;
}
