import type { SvgComponent } from "astro/types";
import Email from "@/assets/icons/email.svg";
import GitHub from "@/assets/icons/github.svg";
import RSS from "@/assets/icons/rss.svg";
import Twitter from "@/assets/icons/twitter.svg";

export const SITE = {
  title: "Lutris",
  description: "Simple blog about stuff i did",
  locale: "id-JKT",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const;

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/authors", label: "Authors" },
];

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/Alvarochann", label: "GitHub", icon: GitHub },
  { href: "mailto:alvarochandra6@gmail.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
];
