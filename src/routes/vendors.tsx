import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, Star } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { VENDORS } from "@/data/site";

const TITLE = "Vendor Directory — Verified Electricians, Plumbers & More | Silicon City AOA";
const DESCRIPTION =
  "Verified vendor directory for Amrapali Silicon City residents — electricians, plumbers, housekeeping, carpenters, internet, gas, courier, cabs and laundry with ratings and timings.";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vendors" },
    ],
    links: [{ rel: "canonical", href: "/vendors" }],
  }),
  component: VendorsPage,
});

const TRADES = ["All", ...Array.from(new Set(VENDORS.map((v) => v.trade)))];

function VendorsPage() {
  const [trade, setTrade] = useState("All");
  const list = trade === "All" ? VENDORS : VENDORS.filter((v) => v.trade === trade);

  return (
    <>
      <PageHero
        eyebrow="Vendor Directory"
        title="Verified service providers for residents"
        subtitle="Vendors listed here are known to the AOA and rated by residents. Rates are settled directly between the resident and the vendor."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {TRADES.map((t) => (
              <button
                key={t}
                onClick={() => setTrade(t)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  trade === t
                    ? "border-transparent gradient-brand text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((vendor, i) => (
              <Reveal key={vendor.name} delay={(i % 3) * 0.06}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="rounded-full">
                      {vendor.trade}
                    </Badge>
                    <h2 className="mt-3 font-display text-base font-semibold">{vendor.name}</h2>
                    <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      <p className="inline-flex items-center gap-1.5">
                        <Star className="size-3.5 text-success" /> {vendor.rating} / 5 resident rating
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-primary" /> {vendor.availability}
                      </p>
                    </div>
                    <Button asChild variant="brand" size="sm" className="mt-5">
                      <a href={`tel:${vendor.phone}`}>
                        <Phone /> {vendor.phone}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="rounded-3xl border border-border bg-secondary/50 p-6 text-center text-xs text-muted-foreground">
              Disclaimer: the AOA facilitates this directory for convenience. Residents should verify
              credentials and agree on charges before engaging any vendor.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
