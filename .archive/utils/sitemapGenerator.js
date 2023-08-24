const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const DOMAIN = 'https://gamguma.dev';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby([
    // include
    'pages/**/*.tsx',
    'pages/*.tsx',
    // exclude
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/post/*.tsx',
    '!pages/tags.tsx',
  ]);

  const postPaths = await globby(['posts/**/*.mdx']);

  const publishPosts = postPaths
    .map((postPath) => {
      const source = fs.readFileSync(postPath);
      const { data } = matter(source);
      if (data.isPublished) {
        return postPath;
      }
    })
    .filter((post) => post);

  const pagesSitemap = `
    ${[...pages, ...publishPosts]
      .map((page) => {
        const path = page
          .replace('pages/', '')
          .replace('.tsx', '')
          .replace('.mdx', '')
          .replace(/\/index/g, '')
          .replace('posts', 'post');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
            ${routePath === '' ? '<priority>1.00</priority>' : '<priority>0.80</priority>'}
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf8');
})();
