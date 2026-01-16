// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string; // chemin relatif ex: "/services"
  image?: string;    // chemin absolu ou relatif (pref absolute)
  noindex?: boolean;
  canonical?: string; // optionnel, si fourni prend le pas sur computed url
  type?: "website" | "article";
  publishedTime?: string; // ISO date si article
};

const DEFAULT = {
  title: "BS-Technologie — Solutions Web & Dev",
  description:
    "BS-Technologie — développement web, audits, optimisation SEO & performances. Nous créons des apps rapides et scalables.",
  image: "/og-default.png", // place this file in /public
  siteName: "BS-Technologie",
  twitter: "@ton_handle",   // remplace si tu as un compte
};

// Base URL (assure-toi de définir en .env: VITE_BASE_URL=https://www.bs-technologie.fr)
const BASE = import.meta.env.VITE_BASE_URL || "https://www.bs-technologie.fr";

export default function SEO({
  title,
  description,
  pathname = "/",
  image,
  noindex = false,
  canonical,
  type = "website",
  publishedTime,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${DEFAULT.title}` : DEFAULT.title;
  const desc = description || DEFAULT.description;
  const absUrl = canonical || new URL(pathname, BASE).toString();
  const absImage = image ? (image.startsWith("http") ? image : new URL(image, BASE).toString()) : new URL(DEFAULT.image, BASE).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": DEFAULT.siteName,
    "url": BASE,
    "logo": new URL("/logo.png", BASE).toString(), // place logo in /public
    "sameAs": [
      // ajoute tes profils si tu en as
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={absUrl} />

      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={DEFAULT.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={absUrl} />
      <meta property="og:image" content={absImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={absImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
