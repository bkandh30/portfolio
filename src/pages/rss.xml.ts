import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedBlogPosts } from '@/utils/blog';

export async function GET(context: APIContext) {
  const sortedPosts = await getPublishedBlogPosts();
  const siteUrl = context.site!;

  return rss({
    title: 'Bhavya Kandhari - Blog',
    description:
      'Writing about technology, system design, distributed systems, engineering, and technical reading.',
    site: siteUrl.toString(),
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: new URL(`/blog/${post.id}/`, siteUrl).toString(),
      categories: post.data.tags,
    })),
    customData: '<language>en-US</language>',
  });
}
