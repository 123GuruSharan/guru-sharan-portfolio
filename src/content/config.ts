import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    projectUrl: z.string().url(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    slug: z.string().optional(),
    technologies: z.array(z.string()),
    icon: z.enum(['code', 'message', 'house', 'user']).optional(),
    featured: z.boolean().default(false),
    publishedDate: z.date(),
    order: z.number().optional(),
  }),
});

const certificatesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    certificateSlug: z.string(),
    description: z.string(),
    image: image(),
    verifyLink: z.string().url().optional(),
    issuedDate: z.date().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  certificates: certificatesCollection,
};
