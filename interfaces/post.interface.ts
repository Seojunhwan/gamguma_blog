export interface Comment {
  id: number;
  author: string;
  createAt: string;
  content: string;
  password: string;
}

export interface FrontMatter {
  title: string;
  slug: string;
  author: string;
  hashTags: string[];
  description: string;
  createAt: string;
  isPublish: boolean;
  thumbnail: string;
}

export interface Post {
  content: string;
  slug: string;
  data: FrontMatter;
}
