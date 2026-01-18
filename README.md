# Simone Sun Portfolio

My personal portfolio website built with Astro showcasing my product design and prototyping work.

## 🚀 Getting Started

### Installation

```sh
npm install
```

### Development

Start the local development server:

```sh
npm run dev
```

The site will be available at `localhost:4321`.

### Build

Build the production site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## 📁 Project Management

Projects are stored in `src/data/projects/`. Each project is a directory containing:
- An `index.md` or `index.mdx` file (the project content)
- A `cover.jpg` or `cover.png` file (the project cover image)
- Any additional images or assets used in the project

### Adding a New Project

1. **Create a project directory** in `src/data/projects/` with a kebab-case name:
   ```sh
   mkdir src/data/projects/my-new-project
   ```

2. **Create an `index.md` or `index.mdx` file** with frontmatter. Required fields:
   ```yaml
   ---
   title: Project Title
   description: A short summary of the project (appears in project listings)
   date: 2024-01-01
   cover: ./cover.jpg  # or ./cover.png
   coverAlt: Alt text for the cover image
   role: UX Designer & Prototyper
   team: co-founder, UI designer, engineer
   tools: Figma, Astro, Three.js
   ---
   ```

3. **Optional frontmatter fields:**
   ```yaml
   client: Client Name
   overview: A longer summary of the project (appears on the project page)
   type: Full time  # or "Contract", "Freelance", etc.
   timeline: 3 months  # or "6 weeks", etc.
   ```

4. **Add your cover image** to the project directory (e.g., `cover.jpg` or `cover.png`)

5. **Write your project content** below the frontmatter. You can use:
   - Markdown for basic formatting
   - MDX for more advanced features (importing components, JSX, etc.)
   - Images referenced relative to the project directory (e.g., `![alt](my-image.png)`)

6. **Add any additional assets** (images, etc.) to the project directory

**Example project structure:**
```
src/data/projects/my-new-project/
├── index.mdx
├── cover.jpg
├── image-1.png
└── image-2.png
```

The project will automatically appear on:
- The homepage (`/`) in the "Selected Works" section
- The work page (`/work`)
- Its own page at `/projects/my-new-project`

### Removing a Project

To remove a project, simply **delete its directory** from `src/data/projects/`:

```sh
rm -rf src/data/projects/project-name
```

For example, to remove `dashboard-wam`:
```sh
rm -rf src/data/projects/dashboard-wam
```

The project will automatically be removed from:
- The homepage project listing
- The work page project listing
- The project routes (its individual page will no longer be generated)

**Important:** After removing a project, clean the build cache to avoid errors:

```sh
rm -rf .astro dist
```

Then rebuild the site:

```sh
npm run build
```

This removes cached build artifacts that may reference the deleted project.

## 📋 Project Schema

Projects must include the following frontmatter fields (as defined in `src/content.config.ts`):

### Required Fields

- `title` (string) - Project title
- `description` (string) - Short summary for project listings
- `date` (date) - Project date in YYYY-MM-DD format
- `cover` (image) - Path to cover image relative to project directory (e.g., `./cover.jpg`)
- `coverAlt` (string) - Alt text for cover image
- `role` (string) - Description of your role (e.g., "UX Designer", "UI/UX Design & Prototyping")
- `team` (string) - Team composition (e.g., "co-founder, UI designer, engineer")
- `tools` (string) - Tools used (e.g., "Figma, Astro, Three.js")

### Optional Fields

- `client` (string) - Client name
- `overview` (string) - Longer summary shown on project page
- `type` (string) - Project type (e.g., "Full time", "Contract")
- `timeline` (string) - Project timeline (e.g., "3 months", "6 weeks")

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
