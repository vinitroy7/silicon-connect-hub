import { createFileRoute } from "@tanstack/react-router";
import { Building2, GraduationCap, Hospital, ShoppingBag, TrainFront, Trees } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import societyImage from "@/assets/society-view.jpg";
import greenImage from "@/assets/green-area.jpg";
import clubhouseImage from "@/assets/clubhouse.jpg";

const TITLE = "About Society — Master Plan, Facilities & Location | Silicon City AOA";
const DESCRIPTION =
  "Master plan, infrastructure, facilities, connectivity, nearby schools, hospitals, metro and shopping around Amrapali Silicon City Phase 1, Sector 76 Noida.";

export const Route = createFileRoute("/about-society")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about-society" },
    ],
    links: [{ rel: "canonical", href: "/about-society" }],
  }),
  component: AboutSociety,
});

const FACILITIES = [
  "Clubhouse with lounge & indoor games",
  "Swimming pool & kids' pool",
  "Gymnasium",
  "Badminton, basketball & tennis courts",
  "Jogging track & landscaped parks",
  "Children's play areas",
  "Community hall for functions",
  "Ample surface & basement parking",
  "24x7 CCTV & guarded gates",
  "Power backup for common areas",
  "Rainwater harvesting",
  "Waste segregation & composting",
];

const NEARBY = [
  { icon: GraduationCap, title: "Schools", items: ["Lotus Valley International", "Genesis Global School", "Kothari International", "Mayoor School"] },
  { icon: Hospital, title: "Hospitals", items: ["Felix Hospital", "Kailash Hospital", "Jaypee Hospital", "Fortis Noida"] },
  { icon: TrainFront, title: "Metro", items: ["Sector 76 Metro (Aqua Line)", "Sector 137 interchange", "Botanical Garden hub", "Noida–Greater Noida Expressway"] },
  { icon: ShoppingBag, title: "Shopping", items: ["The Great India Place", "Logix City Centre", "DLF Mall of India", "Sector 76 market"] },
];

function AboutSociety() {
  return (
    <>
      <PageHero
        eyebrow="About Society"
        title="Amrapali Silicon City, Phase 1 — Sector 76, Noida"
        subtitle="A large gated township of 12+ high-rise towers with wide internal roads, extensive green cover and a full amenity deck, minutes from the Aqua Line metro and the Noida–Greater Noida Expressway."
      />

      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={societyImage}
              alt="Master-planned towers and walkways at Amrapali Silicon City Phase 1"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-4xl shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold md:text-3xl">Master Plan & Infrastructure</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Phase 1 is planned around a large central green, with towers positioned along the
                perimeter to maximise open space, daylight and cross-ventilation. Internal roads are
                looped so that fire tenders and ambulances can reach every tower entrance.
              </p>
              <p>
                Utility infrastructure includes underground water storage with pumping stations, STP
                and sewerage lines, dedicated DG backup for common services, and distribution
                substations coordinated with NPCL.
              </p>
              <p>
                Vehicular parking is provided across basement and surface bays with a sticker-based
                allocation policy, while pedestrian pathways connect towers to the clubhouse, parks
                and gates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Facilities" title="Amenities inside the campus" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm card-hover">
                  <Building2 className="size-4 shrink-0 text-primary" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <img
                src={clubhouseImage}
                alt="Clubhouse lounge and indoor court at Amrapali Silicon City"
                width={1024}
                height={768}
                loading="lazy"
                className="h-64 w-full rounded-4xl object-cover shadow-card"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src={greenImage}
                alt="Central park and jogging track inside the society"
                width={1024}
                height={768}
                loading="lazy"
                className="h-64 w-full rounded-4xl object-cover shadow-card"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Location & Connectivity"
            title="Everything you need within a few kilometres"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NEARBY.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <span className="gradient-brand mb-4 flex size-11 items-center justify-center rounded-2xl text-primary-foreground">
                      <group.icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold">{group.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="flex items-center gap-3 rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <Trees className="size-5 shrink-0 text-success" />
              Large parks inside the campus plus proximity to Sector 76 district park keep the
              neighbourhood green and walkable throughout the year.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
