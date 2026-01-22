// src/components/SEO.tsx
import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
  type?: "website" | "article";
};

const BASE = import.meta.env.VITE_BASE_URL || "https://www.bs-technologie.fr";

export default function SEO({
  title,
  description,
  pathname = "/",
  image,
  noindex = false,
  canonical,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    const url = canonical || new URL(pathname, BASE).toString();
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    if (noindex) {
      let robots = document.querySelector("meta[name='robots']");
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex,nofollow");
    }
  }, [title, description, pathname, image, noindex, canonical, type]);

  return null;
}
