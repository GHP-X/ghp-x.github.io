import type { Metadata } from "next";
import { Search } from "lucide-react";
import searchIndex from "@/data/search-index.json";
import type { SearchDocument } from "@/types/content";
import { ContentCardGrid } from "@/components/content/content-card-grid";
import { getAllContent } from "@/lib/content";
import { SearchPageClient } from "@/components/search/search-page-client";

export const metadata: Metadata = {
  title: "Search",
  description: "Search guides, downloads, FAQ, and support articles.",
};

export default function SearchPage() {
  const allContent = getAllContent();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <Search className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
        <p className="mt-3 text-muted-foreground">
          Find guides, downloads, and answers instantly.
        </p>
      </div>

      <SearchPageClient documents={searchIndex as SearchDocument[]} />

      <div className="mt-16">
        <h2 className="mb-6 text-lg font-semibold">All pages</h2>
        <ContentCardGrid items={allContent} showCategory />
      </div>
    </div>
  );
}
