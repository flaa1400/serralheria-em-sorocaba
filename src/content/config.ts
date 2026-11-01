import { defineCollection, z } from 'astro:content';

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  servicos: servicosCollection,
};
