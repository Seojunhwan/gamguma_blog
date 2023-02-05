import { Tag } from '@interface';

/**
 * 한 페이지에 보여줄 포스트 수
 */
export const POSTS_PER_PAGE_OFFSET = 10;

/**
 * 페이지네이션에서 보여줄 페이지 수
 */
export const PAGINATION_OFFSET = 7;

/**
 * OG 이미지로 보여줄 썸네일
 */
export const BLOG_THUMBNAIL =
  'https://gamguma-blog.s3.ap-northeast-2.amazonaws.com/thumbnail/blog_thumbnail.jpeg';

/**
 * 프로필 이미지
 */
export const PROFILE_IMAGE = 'https://gamguma-blog.s3.ap-northeast-2.amazonaws.com/profile.jpeg';

/**
 * 태그
 */
export const TAGS = [
  'Javascript',
  'Next.js',
  'Typescript',
  'React',
  'Node.js',
  'AWS',
  'Devops',
  'Algorithm',
  'Blog',
  'ETC',
] as const;

/**
 * 태그 색상
 */
export const TAG_COLORS: Record<Tag, string> = {
  Javascript: '#f1e05a',
  Typescript: '#2b7489',
  React: '#61dafb',
  'Node.js': '#339933',
  AWS: '#232f3e',
  'Next.js': '#000000',
  Devops: '#007396',
  Algorithm: '#f34b7d',
  Blog: '#ff9999',
  ETC: '#555555',
};
