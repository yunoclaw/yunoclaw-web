/**
 * JSON-LD Structured Data components for Google rich results and sitelinks.
 *
 * These schemas help Google understand our site structure, organization,
 * and navigation — which is what triggers sitelinks in search results.
 */

const SITE_URL = "https://yunoclaw.tech";
const SITE_NAME = "YunoClaw";
const SITE_DESCRIPTION =
  "AI shopping assistant that finds, evaluates, and recommends products under your exact rules.";

/* ─── Organization + WebSite (root layout) ─────────────────────────── */

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    sameAs: [
      "https://github.com/Yunostack",
      // Add social profiles as they become available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/demo?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── SiteNavigationElement (triggers sitelinks) ───────────────────── */

export function SiteNavigationJsonLd() {
  const navItems = [
    { name: "How It Works", url: `${SITE_URL}/how-it-works` },
    { name: "Try the Demo", url: `${SITE_URL}/demo` },
    { name: "For Merchants", url: `${SITE_URL}/merchants` },
    { name: "About", url: `${SITE_URL}/about` },
    { name: "Get Early Access", url: `${SITE_URL}/waitlist` },
    { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
    { name: "Terms of Service", url: `${SITE_URL}/terms` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── WebPage (per-page structured data) ───────────────────────────── */

interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
}

export function WebPageJsonLd({ title, description, url, breadcrumbs }: WebPageJsonLdProps) {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const schemas: object[] = [pageSchema];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/* ─── SoftwareApplication (for rich result panel like Facebook's) ──── */

export function SoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "ShoppingApplication",
    operatingSystem: "Web",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free early access — join the waitlist",
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
