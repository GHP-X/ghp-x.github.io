"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Editing resources from Adobe and more with guides and solutions for creators at every level. Use the password "star" when extracting the files with winRAR.
            (yes this is a unofficial satvrn.li backup site, since its shut down).
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="accent">
            <Link href="/categories">
              Browse Resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/search">Search</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
