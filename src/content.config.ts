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
        client: z.string().optional(),
        overview: z.string().optional(), // A longer summary of the project
        role: z.string(), // short description of the type of work I did, e.g. "UI/UX Design", "Development", etc.
        type: z.string().optional(), // e.g. "Full time", "Contract", "Internship"
        timeline: z.string().optional(), // e.g. "3 months", "6 weeks"
        team: z.string(), // e.g. "co-founder, UI designer, engineer"
        tools: z.string(), // e.g. "Figma, Astro, Three.js"
        display: z.enum(['Side Project', 'Selected Work']).default('Selected Work'),


        /*
        name: z.string(),
        type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
        launch_date: z.date(),
        status: z.enum(['Active', 'Inactive', 'Decommissioned']),
        destination: z.string(),
        operator: z.string(),
        notable_discoveries: z.array(z.string()),
        */
      }),
  });

  export const collections = { projects };
