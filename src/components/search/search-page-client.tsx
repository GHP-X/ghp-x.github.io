"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { ArrowRight } from "lucide-react";
import type { SearchDocument } from "@/types/content";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SearchPageClientProps {
  documents: SearchDocument[];
}

export function SearchPageClient({ documents }: SearchPageClientProps) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(documents, {
        keys: ["title", "description", "content", "category"],
        threshold: 0.35,
      }),
    [documents],
  );

  const results = query.trim()
    ? fuse.search(query.trim()).slice(0, 12)
    : [];

  return (
    <div>
      <Input
        type="search"
        placeholder="Search by title, topic, or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-12 text-base"
        autoFocus
      />

      {query.trim() && (
        <div className="mt-6 space-y-3">
          {results.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            results.map(({ item }) => (
              <Link key={item.href} href={item.href} className="group block">
                <Card className="transition-all hover:border-accent/30 hover:shadow-md">
                  <CardHeader className="flex-row items-center justify-between space-y-0">
                    <div>
                      <CardTitle className="text-base group-hover:text-accent transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="mt-1 capitalize">
                        {item.category} · {item.description}
                      </CardDescription>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                  </CardHeader>
                </Card>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
