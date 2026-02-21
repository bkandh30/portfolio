import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { TOPIC_SLUGS } from './src/data/topics';
import rehypeThScope from './src/utils/rehype-th-scope';

const topicRedirects = Object.fromEntries(
  TOPIC_SLUGS.map((slug) => [
    `/blog/${slug}`,
    {
      status: 301,
      destination: `/blog/topic/${slug}`,
    },
  ]),
);

export default defineConfig({
  site: 'https://bhavyakandhari.vercel.app',
  output: 'static',
  adapter: vercel(),
  redirects: topicRedirects,

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: true,
    },
    rehypePlugins: [
      rehypeSlug,
      rehypeThScope,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-anchor'],
          },
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
