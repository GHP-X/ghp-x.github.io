import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentArticle } from "@/components/content/content-article";
import { getContentBySlug, markdownToHtml } from "@/lib/content";
import { categoryMeta } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Changelog",
  description: categoryMeta.meta.description,
};

export default async function ChangelogPage() {
  const content = getContentBySlug("meta", "changelog");
  if (!content) notFound();

  const html = await markdownToHtml(content.content);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Changelog" }]}
      />
      <ContentArticle
        title={content.title}
        description={content.description}
        html={html}
        updatedAt={content.updatedAt}
      />
    </div>
  );
}
