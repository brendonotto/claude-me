import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await publishedPosts();
  return rss({
    title: 'Brendon Otto',
    description: 'Write-ups from side projects in Rust, Elixir, and whatever else is on the bench.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/posts/${p.id}/`,
    })),
  });
}
