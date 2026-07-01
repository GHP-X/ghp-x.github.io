import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "ghp.wtf",
  tagline: "Premium editing resources, reimagined.",
  description:
    "Curated software, plugins, guides, and troubleshooting for After Effects editors.",
  url: "https://ghp.wtf",
  discord: "https://discord.gg/satvrn",
  keywords: [
    "after effects",
    "video editing",
    "plugins",
    "motion graphics",
    "guides",
  ],
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/resources" },
  { label: "Archive", href: "/archive" },
  { label: "FAQ", href: "/faq" },
];

export const categoryMeta = {
  categories: {
    label: "Categories",
    description: "Downloads organized by platform and type.",
    href: "/categories",
  },
  guides: {
    label: "Guides",
    description: "In-depth walkthroughs for editors at every level.",
    href: "/guides",
  },
  support: {
    label: "Support",
    description: "Fixes, tutorials, and troubleshooting.",
    href: "/support",
  },
  resources: {
    label: "Resources",
    description: "External tools, footage, and community links.",
    href: "/resources",
  },
  archive: {
    label: "Archive",
    description: "Legacy downloads and deprecated resources.",
    href: "/archive",
  },
  faq: {
    label: "FAQ",
    description: "Answers to the most common questions.",
    href: "/faq",
  },
  meta: {
    label: "Updates",
    description: "Changelog and recent site updates.",
    href: "/changelog",
  },
} as const;

export const homeFeatures = [
  {
    title: "Windows",
    description: "Software and plugins for Windows editors.",
    href: "/categories/windows",
  },
  {
    title: "macOS",
    description: "Everything you need for Apple Silicon and Intel Macs.",
    href: "/categories/macos",
  },
  {
    title: "Extensions",
    description: "Scripts and CEP extensions for After Effects.",
    href: "/categories/extensions",
  },
  {
    title: "Beginners Guide",
    description: "Start your editing journey with confidence.",
    href: "/guides/beginners-guide",
  },
  {
    title: "Adobe Popup Fix",
    description: "Remove the unlicensed Adobe app warning.",
    href: "/support/adobe-ungenuine-fix",
  },
  {
    title: "Helpful Websites",
    description: "Fonts, tools, and downloaders worth bookmarking.",
    href: "/resources/helpful-websites",
  },
];
