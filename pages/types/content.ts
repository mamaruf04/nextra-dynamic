export interface ContentItem {
  ContentID: number;
  ContentType: string;
  Content: string;
  ContentCoverImage: string | null;
  CreatedOn: string;
  CreatedBy: string;
  UpdatedOn: string;
  UpdatedBy: string;
  ApproximateReadTime: number;
  Author: string;
  Title: string;
  ParentContentID: number | null;
  RelatedContentIDs: number[];
  children?: ContentItem[];
}

export interface ApiResponse {
  contents: ContentItem[];
  count: number;
}
