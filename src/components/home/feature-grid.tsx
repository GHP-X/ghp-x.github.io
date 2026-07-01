"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeFeatures } from "@/lib/site-config";

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {homeFeatures.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:border-accent/50 hover:bg-muted hover:shadow-md"
          >
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
            <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
