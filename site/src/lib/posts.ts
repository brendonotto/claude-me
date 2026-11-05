import { getCollection } from 'astro:content';

export async function publishedPosts() {
  const all = await getCollection('posts', ({ data }) => !data.draft || import.meta.env.DEV);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function fmt(d: Date) {
  return d.toISOString().slice(0, 10);
}
