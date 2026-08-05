import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FAQS } from "@/data/site";

const TITLE = "FAQs — Membership, Maintenance & Rules | Silicon City AOA";
const DESCRIPTION =
  "Frequently asked questions about AOA membership, maintenance charges, complaints, tenant registration, hall booking, pets and visitor entry at Amrapali Silicon City Phase 1.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions residents ask most"
        subtitle="Can't find your answer here? Write to the AOA office and we'll add it to this page."
      />

      <section className="section px-4">
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-3xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-sm font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </>
  );
}
