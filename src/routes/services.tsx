import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Download,
  Hammer,
  Lock,
  Phone,
  Receipt,
  Scale,
  Search,
  UserCheck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { QUICK_SERVICES } from "@/data/site";

const TITLE = "Services — Maintenance, Security & Resident Support | Silicon City AOA";
const DESCRIPTION =
  "Services delivered by Amrapali Silicon City AOA: maintenance, security, housekeeping, horticulture, water, lifts, complaint handling and resident support.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const ICONS = {
  wrench: Wrench,
  receipt: Receipt,
  phone: Phone,
  userCheck: UserCheck,
  download: Download,
  scale: Scale,
  calendar: Calendar,
  search: Search,
  hammer: Hammer,
  lock: Lock,
} as const;

const OPERATIONS = [
  { title: "Security & Access Control", body: "Guarded gates, CCTV monitoring, patrolling rounds, visitor verification and vehicle sticker checks." },
  { title: "Housekeeping & Waste", body: "Daily cleaning of lobbies, staircases and common areas with segregated wet/dry waste collection." },
  { title: "Water & Plumbing", body: "Tank cleaning schedule, pump maintenance, leak repairs and tanker arrangements at peak demand." },
  { title: "Electrical & DG Backup", body: "Common-area lighting, panel maintenance, DG servicing and coordination with NPCL for outages." },
  { title: "Lifts & Safety", body: "AMC-backed lift servicing, statutory inspections, fire equipment checks and evacuation drills." },
  { title: "Horticulture", body: "Park upkeep, seasonal plantation, pruning and drip irrigation across the central green." },
];

const SLA = [
  ["Emergency (lift entrapment, major leak, power failure)", "Immediate — within 30 minutes"],
  ["High priority (water supply, security, safety)", "Same day"],
  ["Standard (civil, carpentry, common-area lighting)", "48–72 hours"],
  ["Planned works (painting, resurfacing, upgrades)", "As per committee-approved schedule"],
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services the AOA runs for the society"
        subtitle="From gate to rooftop — maintenance operations, resident-facing digital services and clear resolution timelines for every category of request."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Resident Services" title="Self-service, anytime" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {QUICK_SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS];
              return (
                <Reveal key={service.title} delay={(i % 5) * 0.06}>
                  <Link to={service.to} className="block h-full">
                    <Card className="h-full rounded-3xl border-border card-hover">
                      <CardContent className="p-5">
                        <span className="gradient-brand mb-4 flex size-11 items-center justify-center rounded-2xl text-primary-foreground">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-display text-sm font-semibold">{service.title}</h3>
                        <p className="mt-1.5 text-xs text-muted-foreground">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Operations" title="Day-to-day maintenance functions" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATIONS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section px-4">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Service Levels" title="Committed resolution timelines" />
          <div className="mt-10 overflow-hidden rounded-4xl border border-border">
            {SLA.map(([category, time], i) => (
              <div
                key={category}
                className={`grid gap-1 p-5 sm:grid-cols-3 ${i % 2 ? "bg-secondary/50" : "bg-card"}`}
              >
                <span className="sm:col-span-2 text-sm font-medium">{category}</span>
                <span className="text-sm text-primary">{time}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="brand" size="lg">
              <Link to="/complaints">Raise a service request</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
