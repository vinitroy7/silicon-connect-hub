import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, HandHeart, MapPin, Ticket } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EVENTS } from "@/data/site";
import festivalImage from "@/assets/festival.jpg";
import sportsImage from "@/assets/sports.jpg";
import greenImage from "@/assets/green-area.jpg";

const TITLE = "Events & Community Calendar — Amrapali Silicon City AOA";
const DESCRIPTION =
  "Upcoming and past events at Amrapali Silicon City Phase 1 — festivals, sports day, blood donation camps, yoga sessions and resident meetings with RSVP and volunteer signup.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [tab, setTab] = useState<"Upcoming" | "Past">("Upcoming");
  const list = EVENTS.filter((e) => (tab === "Upcoming" ? e.tag !== "Past" : e.tag === "Past"));

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Community calendar"
        subtitle="Festivals, sports, wellness and welfare drives organised by the AOA with resident volunteers across all towers."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center gap-2">
            {(["Upcoming", "Past"] as const).map((value) => (
              <button
                key={value}
                onClick={() => setTab(value)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  tab === value
                    ? "border-transparent gradient-brand text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-primary"
                }`}
              >
                {value} Events
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((event, i) => (
              <Reveal key={event.title} delay={(i % 3) * 0.07}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="gradient-brand flex size-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground">
                        <CalendarCheck className="size-5" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="rounded-full">
                          {event.tag}
                        </Badge>
                        <h2 className="mt-2 font-display text-base font-semibold">{event.title}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {event.date} · {event.time}
                        </p>
                        <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" /> {event.venue}
                        </p>
                      </div>
                    </div>
                    {tab === "Upcoming" ? (
                      <div className="mt-5 flex gap-2">
                        <Button
                          size="sm"
                          variant="brand"
                          onClick={() => toast.success(`RSVP recorded for ${event.title}`)}
                        >
                          <Ticket /> RSVP
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toast.success("Thank you for volunteering!")}
                        >
                          <HandHeart /> Volunteer
                        </Button>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Event Album" title="Moments from past celebrations" />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: festivalImage, label: "Diwali Mela" },
              { src: sportsImage, label: "Sports Day" },
              { src: greenImage, label: "Yoga in the Park" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={item.src}
                    alt={`${item.label} at Amrapali Silicon City`}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.06_262/0.8)] to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-sm font-semibold text-white">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
