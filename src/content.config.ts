import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ 
        pattern: "**/*.{md,mdx}",
        base: "./src/data/projects" 
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(), // A short summary of the project
        cover: image(),
        coverAlt: z.string(),
        date: z.date(),
      }).passthrough(), // Allow additional fields in markdown without validation
  });

  export const collections = { projects };
