"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, FileText, Search, X } from "lucide-react";
import type { SearchDocument } from "@/types/content";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  documents: SearchDocument[];
}

function highlightMatch(text: string, indices: readonly [number, number][]) {
  if (!indices.length) return text;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  indices.forEach(([start, end], i) => {
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }
    parts.push(
      <mark key={i} className="rounded bg-accent/25 px-0.5 text-accent">
        {text.slice(start, end + 1)}
      </mark>,
    );
    lastIndex = end + 1;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function CommandPalette({
  open,
  onOpenChange,
  documents,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(documents, {
        keys: [
          { name: "title", weight: 0.45 },
          { name: "description", weight: 0.25 },
          { name: "content", weight: 0.2 },
          { name: "category", weight: 0.1 },
        ],
        threshold: 0.35,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [documents],
  );

  const results = query.trim()
    ? fuse.search(query.trim()).slice(0, 8)
    : documents.slice(0, 6).map((item) => ({ item, matches: [] }));

  const navigate = (href: string) => {
    onOpenChange(false);
    setQuery("");
    router.push(href);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-[12%] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border/50 bg-background/95 shadow-2xl backdrop-blur-xl focus:outline-none">
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <Command shouldFilter={false} className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-border/40 px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <Command.Input
                value={query}
                onValueChange={setQuery}
                placeholder="Search guides, downloads, FAQ..."
                className="flex h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <Command.List className="max-h-[min(420px,50vh)] overflow-y-auto p-2">
              {results.length === 0 ? (
                <Command.Empty className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;
                </Command.Empty>
              ) : (
                <>
                  <Command.Group heading={query ? "Results" : "Popular"}>
                    {results.map(({ item, matches }) => {
                      const titleMatch = matches?.find((m) => m.key === "title");
                      return (
                        <Command.Item
                          key={item.href}
                          value={item.href}
                          onSelect={() => navigate(item.href)}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl px-3 py-3 text-sm outline-none",
                            "aria-selected:bg-muted/60",
                          )}
                        >
                          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium">
                              {titleMatch
                                ? highlightMatch(item.title, titleMatch.indices)
                                : item.title}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-aria-selected:opacity-100" />
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                </>
              )}
            </Command.List>

            <div className="flex items-center justify-between border-t border-border/40 px-4 py-2.5 text-[11px] text-muted-foreground">
              <span>Navigate with ↑ ↓</span>
              <span>Enter to open · Esc to close</span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
