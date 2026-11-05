import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. One Markdown or MDX file per post in src/content/posts/.
// The file name is the slug, so keep the existing slugs when migrating.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
