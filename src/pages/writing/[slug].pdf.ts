import { readFileSync } from "node:fs";
import { getPdfWritingEntries } from "@/content/pdfWriting";

export function getStaticPaths() {
  return getPdfWritingEntries().map((entry) => ({
    params: { slug: entry.href.split("/").at(-1)?.replace(/\.pdf$/, "") },
    props: { entry }
  }));
}

export function GET({ props }: { props: { entry: ReturnType<typeof getPdfWritingEntries>[number] } }) {
  if (!props.entry.filePath) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(readFileSync(props.entry.filePath), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${props.entry.fileName ?? "article.pdf"}"`
    }
  });
}
