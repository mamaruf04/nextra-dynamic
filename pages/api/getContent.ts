import type { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "../types/content";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch your content from your actual API here
  const response = await fetch(
    "https://www.trustguid.com/api/contents?type=Document"
  );
  const data: ApiResponse = await response.json();
  res.status(200).json(data);
}
