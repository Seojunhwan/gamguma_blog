import fs from 'fs';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'data/posts');

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
