import { topics } from '@/data/topics';
import { getCollection, type CollectionEntry } from 'astro:content';
import { getTagSlug } from '@/utils/tag';
import { getReadingTime } from './reading-time';

type BlogPost = CollectionEntry<'blog'>;

interface PostNavLink {
  slug: string;
  title: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
}

interface TagArchive {
  label: string;
  slug: string;
  posts: BlogPost[];
}

function getPostTimestamp(post: BlogPost): number {
  return new Date(post.data.date).getTime();
}

function sortPostsByDateDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => getPostTimestamp(b) - getPostTimestamp(a));
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return sortPostsByDateDesc(posts);
}

export function getTopicPostCounts(posts: BlogPost[]): Map<string, number> {
  const postCounts = new Map<string, number>();

  for (const post of posts) {
    const count = postCounts.get(post.data.topic) ?? 0;
    postCounts.set(post.data.topic, count + 1);
  }

  return postCounts;
}

export function getPostsByTopic(posts: BlogPost[], topicSlug: string): BlogPost[] {
  return posts.filter((post) => post.data.topic === topicSlug);
}

export function getTagArchives(posts: BlogPost[]): TagArchive[] {
  const postsByTagLabel = new Map<string, BlogPost[]>();

  for (const post of posts) {
    const uniqueTags = new Set(post.data.tags);

    for (const tagLabel of uniqueTags) {
      const tagPosts = postsByTagLabel.get(tagLabel) ?? [];
      tagPosts.push(post);
      postsByTagLabel.set(tagLabel, tagPosts);
    }
  }

  const sortedTagLabels = Array.from(postsByTagLabel.keys()).sort((a, b) => a.localeCompare(b));
  const labelBySlug = new Map<string, string>();

  return sortedTagLabels.map((tagLabel) => {
    const tagSlug = getTagSlug(tagLabel);
    if (tagSlug.length === 0) {
      throw new Error(
        `Invalid tag "${tagLabel}". Tags must include at least one alphanumeric character.`,
      );
    }

    const existingLabel = labelBySlug.get(tagSlug);
    if (existingLabel && existingLabel !== tagLabel) {
      throw new Error(
        `Tag slug collision detected for "${existingLabel}" and "${tagLabel}". ` +
          'Tags must resolve to unique slugs.',
      );
    }

    labelBySlug.set(tagSlug, tagLabel);

    return {
      label: tagLabel,
      slug: tagSlug,
      posts: postsByTagLabel.get(tagLabel) ?? [],
    };
  });
}

export function assertNoReservedBlogSlugs(posts: BlogPost[]): void {
  const reservedTopicSlugs = new Set<string>(topics.map((topic) => topic.slug));
  const conflictingSlugs = posts
    .map((post) => post.id)
    .filter(
      (slug) => reservedTopicSlugs.has(slug) || slug === 'topic' || slug.startsWith('topic/'),
    );

  if (conflictingSlugs.length > 0) {
    throw new Error(
      `Invalid blog post slugs detected: ${conflictingSlugs.join(', ')}. ` +
        'Post slugs cannot match topic slugs or use the reserved "topic/" prefix.',
    );
  }
}

export function getAdjacentPostLinks(
  posts: BlogPost[],
  index: number,
): {
  prevPost: PostNavLink | null;
  nextPost: PostNavLink | null;
} {
  const prevPost =
    index < posts.length - 1
      ? { slug: posts[index + 1].id, title: posts[index + 1].data.title }
      : null;

  const nextPost =
    index > 0 ? { slug: posts[index - 1].id, title: posts[index - 1].data.title } : null;

  return { prevPost, nextPost };
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit = 3,
): RelatedPost[] {
  const currentTags = new Set(currentPost.data.tags);

  return posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => ({
      post,
      overlap: post.data.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map((entry) => ({
      slug: entry.post.id,
      title: entry.post.data.title,
      date: entry.post.data.date,
      summary: entry.post.data.summary,
      tags: entry.post.data.tags,
    }));
}

export function getPostCardProps(post: BlogPost) {
  return {
    slug: post.id,
    title: post.data.title,
    date: post.data.date,
    summary: post.data.summary,
    tags: post.data.tags,
    readingTime: getReadingTime(post.body),
  };
}
