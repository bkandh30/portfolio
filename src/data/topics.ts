export const TOPIC_SLUGS = [
  'system-design',
  'research-papers',
  'projects-deep-dive',
  'java',
] as const;

type TopicSlug = (typeof TOPIC_SLUGS)[number];

interface TopicMeta {
  slug: TopicSlug;
  title: string;
  description: string;
}

export const topics: readonly TopicMeta[] = [
  {
    slug: 'system-design',
    title: 'System Design',
    description: 'Core concepts, patterns, and trade-offs for building scalable systems.',
  },
  {
    slug: 'research-papers',
    title: 'Research Papers',
    description: 'Summaries and commentary on influential computer science papers.',
  },
  {
    slug: 'projects-deep-dive',
    title: 'Projects Deep Dive',
    description: 'In-depth technical walkthroughs of projects and architecture decisions.',
  },
  {
    slug: 'java',
    title: 'Java',
    description: 'Deep dive of internal working of Java programming language',
  },
];
