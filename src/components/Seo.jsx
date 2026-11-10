import { useEffect } from "react";
import { faqs, services } from "../lib/content";
import { SITE } from "../lib/seo";

/* Adds FAQ + Services structured data (JSON-LD) from the same content the page shows,
   so it never goes out of date. Organization / WebSite data lives in index.html. */
export default function Seo() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({
            "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
        {
          "@type": "ItemList",
          name: "Software development services by The One Peace Technology",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem", position: i + 1,
            item: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": `${SITE.url}#organization` } },
          })),
        },
      ],
    };
    let el = document.getElementById("ld-dynamic");
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "ld-dynamic";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }, []);
  return null;
}
