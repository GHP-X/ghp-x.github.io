import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { ContentCategory, ContentFrontmatter, ContentItem } from "@/types/content";

const contentRoot = path.join(process.cwd(), "content");

const categoryRoutes: Record<ContentCategory, string> = {
  categories: "/categories",
  guides: "/guides",
  support: "/support",
  resources: "/resources",
  archive: "/archive",
  faq: "/faq",
  meta: "",
};

function getHref(category: ContentCategory, slug: string): string {
  if (category === "faq") return "/faq";
  if (category === "archive") return "/archive";
  if (category === "meta" && slug === "changelog") return "/changelog";
  const base = categoryRoutes[category];
  return `${base}/${slug}`;
}

function readMarkdownFile(filePath: string): ContentItem | null {
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ContentFrontmatter;

  return {
    ...frontmatter,
    content,
    href: getHref(frontmatter.category, frontmatter.slug),
  };
}

function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(dir, file));
}

export function getAllContent(): ContentItem[] {
  const categories: ContentCategory[] = [
    "categories",
    "guides",
    "support",
    "resources",
    "archive",
    "faq",
    "meta",
  ];

  return categories
    .flatMap((category) =>
      getMarkdownFiles(path.join(contentRoot, category)).map(readMarkdownFile),
    )
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getContentByCategory(category: ContentCategory): ContentItem[] {
  return getAllContent().filter((item) => item.category === category);
}

export function getContentBySlug(
  category: ContentCategory,
  slug: string,
): ContentItem | null {
  const filePath = path.join(contentRoot, category, `${slug}.md`);
  return readMarkdownFile(filePath);
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);
  return result.toString();
}

export function getStaticSlugs(category: ContentCategory): string[] {
  return getContentByCategory(category).map((item) => item.slug);
}
