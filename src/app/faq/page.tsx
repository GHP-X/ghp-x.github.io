import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentArticle } from "@/components/content/content-article";
import { getContentBySlug, markdownToHtml } from "@/lib/content";
import { categoryMeta } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description: categoryMeta.faq.description,
};

export default async function FaqPage() {
  const content = getContentBySlug("faq", "faq");
  if (!content) notFound();

  const html = await markdownToHtml(content.content);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <ContentArticle
        title={content.title}
        description={content.description}
        html={html}
        updatedAt={content.updatedAt}
      />
    </div>
  );
}
