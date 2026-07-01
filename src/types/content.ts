export type ContentCategory =
  | "categories"
  | "guides"
  | "support"
  | "resources"
  | "archive"
  | "faq"
  | "meta";

export interface ContentFrontmatter {
  title: string;
  description: string;
  slug: string;
  category: ContentCategory;
  updatedAt: string;
}

export interface ContentItem extends ContentFrontmatter {
  content: string;
  href: string;
}

export interface SearchDocument {
  title: string;
  description: string;
  slug: string;
  category: ContentCategory;
  href: string;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface CategoryGroup {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
  items: ContentItem[];
}
