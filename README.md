# joncristinziano.com

Production Astro site for Jon Cristinziano.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- Static site generation
- Cloudflare Pages compatible

## Commands

```bash
npm install
npm run dev
npm run build
```

## Project Structure

- `src/pages/` contains the site routes.
- `src/components/` contains reusable Astro components.
- `src/content/site.ts` contains mock essays, projects, resume data, links, and site metadata.
- `src/styles/global.css` contains the design system, theme variables, responsive styles, and print rules.

## Cloudflare Pages Deployment

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages**.
3. Create a new **Pages** project and connect the GitHub repository.
4. Set the framework preset to **Astro**.
5. Use these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `22.12.0` or newer
6. Deploy.
7. Add the custom domain `joncristinziano.com` in Cloudflare Pages and follow the DNS prompts.

The production build uses Astro static output, which is the correct Cloudflare Pages path for this site. Do not use a Workers deploy command or Cloudflare adapter config for this site unless runtime features such as bindings, server islands, or middleware are added later.

## Content Notes

Essay cards currently use mock data from `src/content/site.ts`. To integrate Substack later, replace the `essays` export with data loaded from a build-time RSS fetch or an Astro content collection while preserving the same field shape:

```ts
{
  title: string;
  date: string;
  description: string;
  readingTime: string;
  href: string;
  featured?: boolean;
}
```

## PDF Writing

Drop PDF articles into the root `writing/` folder and they will be added to the Writing section during `npm run build`.

Use filenames like:

```text
YYYY-MM-DD-article-title.pdf
```

For example, `2026-06-06-marketplaces-and-trust.pdf` creates a card titled `Marketplaces And Trust` and emits the PDF at `/writing/marketplaces-and-trust.pdf`.

To override the generated title, date, description, or reading time, add a JSON file with the same base name. See `writing/README.md` for the exact format.
