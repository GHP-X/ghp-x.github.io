import { formatDate } from "@/lib/utils";

interface ContentArticleProps {
  title: string;
  description: string;
  html: string;
  updatedAt?: string;
}

export function ContentArticle({
  title,
  description,
  html,
  updatedAt,
}: ContentArticleProps) {
  return (
    <article>
      <header className="mb-10 border-b border-border/40 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        {updatedAt && (
          <p className="mt-4 text-xs text-muted-foreground">
            Last updated {formatDate(updatedAt)}
          </p>
        )}
      </header>
      <div
        className="prose prose-neutral dark:prose-invert max-w-none text-foreground dark:text-foreground prose-headings:text-foreground dark:prose-headings:text-foreground prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-code:rounded-md prose-code:bg-muted/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-border/50 prose-pre:bg-muted/40 prose-blockquote:border-accent/50 dark:prose-blockquote:border-accent/30 prose-blockquote:text-foreground"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
