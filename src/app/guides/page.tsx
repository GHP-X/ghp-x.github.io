import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContentCardGrid } from "@/components/content/content-card-grid";
import { getContentByCategory } from "@/lib/content";
import { categoryMeta } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Guides",
  description: categoryMeta.guides.description,
};

export default function GuidesPage() {
  const items = getContentByCategory("guides");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Guides</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {categoryMeta.guides.description}
        </p>
      </header>
      <ContentCardGrid items={items} />
    </div>
  );
}
