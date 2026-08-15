import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { EMERGENCY } from "@/data/site";

const TITLE = "Emergency Contacts — Police, Fire, Ambulance & Lift Help | Silicon City AOA";
const DESCRIPTION =
  "Emergency numbers for Amrapali Silicon City residents — police, fire, ambulance, hospital, electricity, lift support, water supply, security office and maintenance helpdesk.";

export const Route = createFileRoute("/emergency-contacts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/emergency-contacts" },
    ],
    links: [{ rel: "canonical", href: "/emergency-contacts" }],
  }),
  component: EmergencyPage,
});

const GROUPS = ["Emergency", "Society", "Local", "Utility"];

function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Contacts"
        title="Save these numbers today"
        subtitle="Tap any number to call directly. Society numbers are monitored round the clock by the maintenance and security teams."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-5xl space-y-10">
          {GROUPS.map((group) => (
            <div key={group}>
              <h2 className="font-display text-lg font-semibold">{group}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {EMERGENCY.filter((e) => e.group === group).map((item, i) => (
                  <Reveal key={item.label} delay={(i % 2) * 0.06}>
                    <a
                      href={`tel:${item.number}`}
                      className="flex items-center justify-between gap-3 rounded-3xl border border-border bg-card p-5 card-hover"
                    >
                      <span className="font-display text-sm font-semibold">{item.label}</span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <Phone className="size-4" /> {item.number}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
