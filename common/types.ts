export interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
  password: string;
}

export interface IFrontMatter {
  title: string;
  slug: string;
  author: string;
  hashTags: string[];
  description: string;
  createAt: string;
  isPublish: boolean;
  thumbnail: string;
}

export interface IPost {
  content: string;
  slug: string;
  data: IFrontMatter;
}
