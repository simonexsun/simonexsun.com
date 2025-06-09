import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ 
        pattern: "**/*.{md,mdx}",
        base: "./src/data/projects" 
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        cover: image(),
        coverAlt: z.string(),
        date: z.date(),
        client: z.string(),
        //role_description: z.string(), // OPTIONAL: short description of the type of work I did, e.g. "UI/UX Design", "Development", etc.
        //tags: z.array(z.string()),

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
