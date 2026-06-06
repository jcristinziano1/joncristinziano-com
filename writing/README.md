# PDF Writing

Drop PDF articles in this folder and they will be added to the Writing section during `npm run build`.

Use this filename format for the cleanest result:

```text
YYYY-MM-DD-article-title.pdf
```

For example:

```text
2026-06-06-marketplaces-and-trust.pdf
```

That file will appear as a card titled `Marketplaces And Trust`, dated `2026-06-06`, and linked at:

```text
/writing/marketplaces-and-trust.pdf
```

To override the generated card text, add a JSON file with the same base name:

```json
{
  "title": "Marketplaces and Trust",
  "date": "2026-06-06",
  "description": "A short description for the Writing card.",
  "readingTime": "PDF"
}
```
