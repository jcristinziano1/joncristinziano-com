# joncristinziano.com

Production Astro site for Jon Cristinziano.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- Static site generation
- Cloudflare Pages compatible
- Cloudflare adapter dependency included for future runtime features

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
   - Node.js version: `22`
6. Deploy.
7. Add the custom domain `joncristinziano.com` in Cloudflare Pages and follow the DNS prompts.

The production build uses Astro static output, which is the correct Cloudflare Pages path for this site. The Cloudflare adapter package is included, and `astro.cloudflare.config.mjs` shows the adapter configuration to use if the site later adds Cloudflare runtime features such as bindings, server islands, or middleware.

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
