import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ 
        pattern: "**/*.{md,mdx}",
        base: "./src/data/projects" 
    }),
    schema: ({ image }) => z.object({
        // Required fields
        title: z.string(),
        description: z.string(), // A short summary of the project
        cover: image(),
        coverAlt: z.string(),
      }).passthrough(), // Allow any additional free-form fields (team, tools, timeline, type, client, overview, role, date, etc.)
  });

  export const collections = { projects };
