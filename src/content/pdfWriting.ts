export interface WritingEntry {
  title: string;
  date: string;
  description: string;
  readingTime: string;
  href: string;
  featured?: boolean;
  body?: string[];
  source?: "essay" | "pdf";
  fileName?: string;
  assetUrl?: string;
}

interface PdfMetadata {
  title?: string;
  date?: string;
  description?: string;
  readingTime?: string;
}

const pdfFiles = import.meta.glob<string>("../../writing/*.pdf", {
  eager: true,
  import: "default",
  query: "?url"
});

const metadataFiles = import.meta.glob<PdfMetadata>("../../writing/*.json", {
  eager: true,
  import: "default"
});

const titleOverrides: Record<string, string> = {
  ai: "AI",
  ml: "ML",
  llm: "LLM",
  mbse: "MBSE",
  pdf: "PDF",
  vc: "VC"
};

const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);

const toSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toTitle = (value: string) =>
  value
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => titleOverrides[word.toLowerCase()] ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");

const readMetadata = (baseName: string): PdfMetadata => {
  return metadataFiles[`../../writing/${baseName}.json`] ?? {};
};

export const getPdfWritingEntries = (): WritingEntry[] => {
  return Object.entries(pdfFiles)
    .map(([path, assetUrl]) => {
      const fileName = path.split("/").at(-1) ?? "";
      const baseName = fileName.replace(/\.pdf$/i, "");
      const metadata = readMetadata(baseName);
      const match = baseName.match(/^(\d{4}-\d{2}-\d{2})[-_ ]+(.+)$/);
      const date = metadata.date ?? match?.[1] ?? toIsoDate(new Date(0));
      const titleSource = metadata.title ?? toTitle(match?.[2] ?? baseName);
      const slug = toSlug(match?.[2] ?? baseName);

      return {
        title: titleSource,
        date,
        description: metadata.description ?? "PDF article by Jon Cristinziano.",
        readingTime: metadata.readingTime ?? "PDF",
        href: `/writing/${slug}.pdf`,
        source: "pdf" as const,
        fileName,
        assetUrl
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
};
