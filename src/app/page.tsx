import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold tracking-tight">Main resources</h2>
      </section>

      <FeatureGrid />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-12 shadow-soft">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Looking for something specific?
            </h2>
            <p className="text-muted-foreground">
              Use the search function to explore our entire knowledge base, or join our Discord community for real-time support.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/search">
                  Open Search
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={siteConfig.discord} target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
