# Runbook

## Adding Writing Posts

Long-form HTML posts are stored in `src/content/essays.ts`.

To add a new post:

1. Add a new object to the exported `essays` array.
2. Use this shape:

```ts
{
  title: "Post title",
  date: "YYYY-MM-DD",
  description: "Short subheader used on the Writing card and post page.",
  readingTime: "5 min read",
  href: "/posts/post-slug",
  featured: true,
  source: "essay",
  body: [
    "First paragraph.",
    "Second paragraph.",
    "Use one array item per rendered paragraph."
  ]
}
```

Formatting rules:

- Preserve intentional paragraph breaks from the source document.
- Do not split a continuous source paragraph into multiple `body` entries.
- Use one `body` array string for each paragraph that should render as a separate paragraph.
- Keep `href` in sync with the desired slug; `src/pages/posts/[slug].astro` generates post pages from the `essays` array.
- Writing cards are generated from `writingEntries` in `src/content/site.ts`, which currently sorts and renders the entries from `essays`.

After editing posts, run:

```bash
PATH=/usr/local/bin:$PATH /usr/local/bin/npm run build
```

Confirm:

- The Writing tab links to `/posts/<slug>`.
- The post page renders the title, date, reading time, description, and body.
- The build has 0 Astro diagnostics.

## PDF Writing

The `writing/` folder still supports dropped PDF files through `src/content/pdfWriting.ts`, but the main Writing list currently renders HTML essays from `src/content/essays.ts`.

Use PDFs as source/reference material when needed, then transcribe or extract the final article into `src/content/essays.ts` so the post keeps the site's normal HTML article layout.
