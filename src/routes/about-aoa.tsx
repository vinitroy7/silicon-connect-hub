import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Flag, Gavel, Goal, HeartHandshake, ScrollText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const TITLE = "About AOA — History, Bylaws & Objectives | Amrapali Silicon City";
const DESCRIPTION =
  "History, formation, registration details, bylaws, vision, mission and core values of the Amrapali Silicon City Apartment Owners Association, Phase 1, Sector 76 Noida.";

export const Route = createFileRoute("/about-aoa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about-aoa" },
    ],
    links: [{ rel: "canonical", href: "/about-aoa" }],
  }),
  component: AboutAoa,
});

const OBJECTIVES = [
  { icon: Goal, title: "Maintain common areas", body: "Upkeep of lifts, lighting, water, sewage, roads, parks and security infrastructure." },
  { icon: Gavel, title: "Represent owners", body: "Single, lawful voice before the builder, NBCC, Noida Authority and utility providers." },
  { icon: HeartHandshake, title: "Build community", body: "Festivals, sports, senior citizen and youth initiatives across all towers." },
  { icon: BadgeCheck, title: "Financial transparency", body: "Audited accounts, published budgets and open general body meetings." },
  { icon: ScrollText, title: "Enforce bylaws", body: "Fair, uniform application of parking, tenancy, renovation and pet rules." },
  { icon: Flag, title: "Safety & compliance", body: "Fire safety audits, lift certification and emergency preparedness drills." },
];

const VALUES = ["Transparency", "Accountability", "Inclusiveness", "Responsiveness", "Sustainability", "Volunteerism"];

function AboutAoa() {
  return (
    <>
      <PageHero
        eyebrow="About AOA"
        title="A registered, resident-elected association for Phase 1"
        subtitle="The Apartment Owners Association of Amrapali Silicon City Phase 1 was formed by owners to take charge of maintenance, safety and representation on behalf of every family living here."
      />

      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold md:text-3xl">History & Formation</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Possession at Amrapali Silicon City, Sector 76 Noida began in phases from 2011. As
                more families moved in, residents organised tower-level groups to address water
                supply, lift reliability, housekeeping and security concerns.
              </p>
              <p>
                These groups came together to form a single Apartment Owners Association for Phase 1,
                registered under the applicable Uttar Pradesh Apartment Act / Societies Registration
                framework, with an elected Executive Committee, written bylaws and audited accounts.
              </p>
              <p>
                Since then the AOA has taken over day-to-day maintenance operations, appointed
                agencies for security and housekeeping, and pursued pending construction and handover
                matters with the builder, NBCC and the Noida Authority.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="rounded-4xl border-border">
              <CardContent className="p-7">
                <h3 className="font-display text-lg font-semibold">Registration Details</h3>
                <dl className="mt-5 divide-y divide-border text-sm">
                  {[
                    ["Association name", "Amrapali Silicon City Apartment Owners Association (Phase 1)"],
                    ["Jurisdiction", "Sector 76, Noida, Gautam Buddha Nagar, Uttar Pradesh"],
                    ["Registration", "Registered under the applicable UP Apartment / Societies Act"],
                    ["Governing document", "Registered AOA Bylaws (available under Downloads)"],
                    ["Elected body", "President, Vice President, Secretary, Treasurer & Executive Members"],
                    ["Term", "Two years, followed by general body elections"],
                    ["General body", "All registered apartment owners of Phase 1"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid gap-1 py-3 sm:grid-cols-3">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="sm:col-span-2 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-xs text-muted-foreground">
                  Exact registration number and certificate copies are shared with members on request
                  at the AOA office.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Objectives" title="What the AOA is mandated to do" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <span className="gradient-brand mb-4 flex size-11 items-center justify-center rounded-2xl text-primary-foreground">
                      <item.icon className="size-5" />
                    </span>
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
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-4xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-semibold">Vision</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                To make Amrapali Silicon City Phase 1 the best-managed residential township in Noida —
                safe, green, financially sound and genuinely community-led.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-4xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-semibold">Mission</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Deliver dependable services, resolve complaints within committed timelines, publish
                every rupee of expenditure and involve residents in every major decision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="gradient-brand h-full rounded-4xl p-7 text-primary-foreground">
              <h3 className="font-display text-lg font-semibold">Core Values</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {VALUES.map((value) => (
                  <li
                    key={value}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
