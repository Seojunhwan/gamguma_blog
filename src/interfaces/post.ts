export interface FrontMatter {
  title: string;
  author: string;
  hashTags: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  thumbnail: string;
}

export interface Post {
  content: string;
  slug: string;
  metadata: FrontMatter;
}
