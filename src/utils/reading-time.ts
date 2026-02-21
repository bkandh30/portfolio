const WORDS_PER_MINUTE = 200;

export function getReadingTime(body: string | undefined): string {
  if (!body) return '1 min read';

  // Remove code blocks, inline code, images, links
  // and remove markdown characters
  const cleanedBody = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/[#*>\-|_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleanedBody.split(' ').filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
