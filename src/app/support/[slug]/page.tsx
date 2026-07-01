import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentArticle } from "@/components/content/content-article";
import {
  getContentBySlug,
  getStaticSlugs,
  markdownToHtml,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getStaticSlugs("support").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug("support", slug);
  if (!content) return {};
  return { title: content.title, description: content.description };
}

export default async function SupportArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContentBySlug("support", slug);
  if (!content) notFound();

  const html = await markdownToHtml(content.content);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: content.title },
        ]}
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
