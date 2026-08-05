import { createFileRoute } from "@tanstack/react-router";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NOTICES } from "@/data/site";

const TITLE = "Notices & Circulars — Amrapali Silicon City AOA Phase 1";
const DESCRIPTION =
  "Search and download official notices, maintenance circulars, electricity shutdown alerts, AGM notices and legal updates from Amrapali Silicon City AOA, Sector 76 Noida.";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/notices" },
    ],
    links: [{ rel: "canonical", href: "/notices" }],
  }),
  component: NoticesPage,
});

const CATEGORIES = [
  "All",
  "General",
  "Maintenance",
  "Electricity Shutdown",
  "Events",
  "Legal",
  "AOA Meeting",
];

function NoticesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      NOTICES.filter(
        (n) =>
          (category === "All" || n.category === category) &&
          (n.title + n.excerpt).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  );

  return (
    <>
      <PageHero
        eyebrow="Notice Board"
        title="Official notices & circulars"
        subtitle="Every notice issued by the AOA office is published here with a downloadable PDF copy. Search by keyword or filter by category."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-5xl">
          <div className="glass flex flex-col gap-4 rounded-4xl p-5 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notices…"
                className="rounded-full pl-9"
                aria-label="Search notices"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === cat
                      ? "border-transparent gradient-brand text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {filtered.map((notice, i) => (
              <Reveal key={notice.title} delay={i * 0.05}>
                <Card className="rounded-3xl border-border card-hover">
                  <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="rounded-full bg-accent text-accent-foreground">
                          {notice.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{notice.date}</span>
                      </div>
                      <h2 className="mt-3 font-display text-base font-semibold">{notice.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{notice.excerpt}</p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      <Download /> Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted-foreground">
                No notices match your search.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
