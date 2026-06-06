import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";

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
  filePath?: string;
}

interface PdfMetadata {
  title?: string;
  date?: string;
  description?: string;
  readingTime?: string;
}

const writingDirectory = join(process.cwd(), "writing");

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
  const metadataPath = join(writingDirectory, `${baseName}.json`);
  if (!existsSync(metadataPath)) return {};

  try {
    return JSON.parse(readFileSync(metadataPath, "utf-8")) as PdfMetadata;
  } catch {
    return {};
  }
};

export const getPdfWritingEntries = (): WritingEntry[] => {
  if (!existsSync(writingDirectory)) return [];

  return readdirSync(writingDirectory)
    .filter((fileName) => extname(fileName).toLowerCase() === ".pdf")
    .map((fileName) => {
      const baseName = basename(fileName, extname(fileName));
      const filePath = join(writingDirectory, fileName);
      const metadata = readMetadata(baseName);
      const match = baseName.match(/^(\d{4}-\d{2}-\d{2})[-_ ]+(.+)$/);
      const date = metadata.date ?? match?.[1] ?? toIsoDate(statSync(filePath).mtime);
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
        filePath
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
};
