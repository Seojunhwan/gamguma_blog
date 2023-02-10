import type { ParsedUrlQuery } from 'querystring';
import { TAGS } from '@constants';

export type Tag = typeof TAGS[number];

export interface FrontMatter {
  title: string;
  slug: string;
  author: string;
  hashTags: Tag[];
  description: string;
  createAt: string;
  isPublished: boolean;
  thumbnail: string;
}

export interface Post {
  content: string;
  slug: string;
  data: FrontMatter;
}

export interface GetStaticPropsResult {
  posts: Post[];
  paginationLength: number;
  currentPage: number;
}

export interface GetStaticPropsParams extends ParsedUrlQuery {
  index: string;
}
