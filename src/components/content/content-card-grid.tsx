"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ContentItem } from "@/types/content";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/page-transition";

interface ContentCardGridProps {
  items: ContentItem[];
  showCategory?: boolean;
}

export function ContentCardGrid({ items, showCategory = false }: ContentCardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <ScrollReveal key={item.href} delay={i * 0.05}>
          <Link href={item.href} className="group block h-full">
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {item.title}
                  </CardTitle>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-accent" />
                </div>
                {showCategory && (
                  <Badge variant="outline" className="w-fit capitalize">
                    {item.category}
                  </Badge>
                )}
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
