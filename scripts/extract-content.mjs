import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mirrorRoot = path.join(root, "..");
const contentDir = path.join(root, "content");

const pages = [
  { file: "windows.html", slug: "windows", category: "categories", title: "Windows Downloads", description: "Software and plugins for Windows." },
  { file: "mac.html", slug: "macos", category: "categories", title: "macOS Downloads", description: "Software and plugins for macOS." },
  { file: "extensions.html", slug: "extensions", category: "categories", title: "Extensions & Scripts", description: "After Effects extensions and scripts." },
  { file: "archived.html", slug: "archive", category: "archive", title: "Archive", description: "Legacy and archived downloads." },
  { file: "faq.html", slug: "faq", category: "faq", title: "Frequently Asked Questions", description: "Common questions and troubleshooting." },
  { file: "tutorials.html", slug: "tutorials", category: "support", title: "Visual Installation Tutorials", description: "Step-by-step video guides." },
  { file: "gcc.html", slug: "adobe-ungenuine-fix", category: "support", title: "Adobe Ungenuine Popup Fix", description: "Remove the Adobe Genuine Service popup." },
  { file: "maxon.html", slug: "maxon-fixes", category: "support", title: "Maxon Troubleshooting", description: "Red Giant and Maxon plugin fixes." },
  { file: "extract.html", slug: "extract-archives", category: "support", title: "Extract Zip & 7z Files", description: "How to properly extract archives." },
  { file: "beginnersguide.html", slug: "beginners-guide", category: "guides", title: "After Effects Beginners Guide", description: "Everything new editors need to know." },
  { file: "versionswapguide.html", slug: "changing-ae-version", category: "guides", title: "Changing After Effects Version", description: "Upgrade without losing plugins." },
  { file: "ae-paths.html", slug: "ae-installation-paths", category: "guides", title: "After Effects Installation Paths", description: "Default install locations." },
  { file: "macked.html", slug: "macked-activation", category: "guides", title: "MacKed Adobe Activation", description: "MacKed activation guide." },
  { file: "genp.html", slug: "genp-activation", category: "guides", title: "GenP Adobe Activation", description: "GenP activation guide for Windows." },
  { file: "rosetta.html", slug: "rosetta-guide", category: "guides", title: "Rosetta (M1+) Guide", description: "Apple Silicon compatibility guide." },
  { file: "websites.html", slug: "helpful-websites", category: "resources", title: "Helpful Websites", description: "Tools, fonts, and downloaders." },
  { file: "footage.html", slug: "amv-footage", category: "resources", title: "AMV Footage", description: "Footage resources for editors." },
  { file: "safety.html", slug: "safety", category: "resources", title: "Safety Inquiries", description: "Safety and trust information." },
  { file: "changelog.html", slug: "changelog", category: "meta", title: "Recent Updates", description: "Latest site and resource updates." },
];

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
});
turndown.use(gfm);

turndown.addRule("removeAnchors", {
  filter: (node) => node.nodeName === "A" && node.getAttribute("class")?.includes("header-anchor"),
  replacement: () => "",
});

function extractPage(page) {
  const htmlPath = path.join(mirrorRoot, page.file);
  if (!fs.existsSync(htmlPath)) {
    console.warn(`Missing: ${page.file}`);
    return;
  }

  const html = fs.readFileSync(htmlPath, "utf-8");
  const $ = cheerio.load(html);

  const doc = $(".vp-doc").first();
  if (!doc.length) {
    console.warn(`No content in: ${page.file}`);
    return;
  }

  doc.find(".table-of-contents").remove();
  doc.find(".header-anchor").remove();
  doc.find("button.copy").remove();

  doc.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    if (href.endsWith(".html")) {
      const base = href.replace(".html", "").replace(/\.html#.*$/, "");
      const mapped = pages.find((p) => p.file.startsWith(base));
      if (mapped) {
        $(el).attr("href", `/${mapped.category}/${mapped.slug}`);
      } else if (base === "index") {
        $(el).attr("href", "/");
      }
    }
  });

  const innerHtml = doc.html() || "";
  let markdown = turndown.turndown(innerHtml);

  markdown = markdown
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\.html#/g, "#")
    .trim();

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = page.title || (titleMatch ? titleMatch[1].replace(/ ✦ Satvrn$/, "").replace(/^✦ /, "") : page.slug);

  const descMatch = html.match(/name="description" content="([^"]+)"/);
  const description = page.description || descMatch?.[1] || "";

  const lastUpdatedMatch = html.match(/datetime="([^"]+)"/);
  const updatedAt = lastUpdatedMatch?.[1] || new Date().toISOString();

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
slug: "${page.slug}"
category: "${page.category}"
updatedAt: "${updatedAt}"
---

`;

  const outDir = path.join(contentDir, page.category);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `${page.slug}.md`), frontmatter + markdown);
  console.log(`Extracted: ${page.category}/${page.slug}.md`);
}

fs.mkdirSync(contentDir, { recursive: true });
pages.forEach(extractPage);

const searchIndex = pages
  .map((page) => {
    const filePath = path.join(contentDir, page.category, `${page.slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const body = raw.replace(/^---[\s\S]*?---\n/, "").slice(0, 2000);
    const href =
      page.category === "faq"
        ? "/faq"
        : page.category === "archive"
          ? "/archive"
          : page.category === "meta" && page.slug === "changelog"
            ? "/changelog"
            : `/${page.category}/${page.slug}`;
    return {
      title: page.title,
      description: page.description,
      slug: page.slug,
      category: page.category,
      href,
      content: body,
    };
  })
  .filter(Boolean);

const dataDir = path.join(root, "src", "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "search-index.json"),
  JSON.stringify(searchIndex, null, 2),
);
console.log(`Search index: ${searchIndex.length} documents`);
console.log("Done.");
