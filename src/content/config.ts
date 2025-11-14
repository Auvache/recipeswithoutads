import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    servings: z.number(),
    time: z.object({
      prep: z.string(),
      cook: z.string(),
      total: z.string()
    }),
    tags: z.array(z.string()),
    date: z.string(),
    author: z.string()
  })
});

export const collections = { recipes };
