import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMMITTEE } from "@/data/site";

const TITLE = "Committee Members — President, Secretary & Executives | Silicon City AOA";
const DESCRIPTION =
  "Meet the elected office bearers and executive members of Amrapali Silicon City AOA — roles, responsibilities and direct contact details.";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/committee" },
    ],
    links: [{ rel: "canonical", href: "/committee" }],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Committee"
        title="Your elected Executive Committee"
        subtitle="Elected by the general body of apartment owners for a two-year term. Every member is reachable directly — governance here is meant to be personal and accountable."
      />

      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMMITTEE.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.08}>
              <Card className="h-full rounded-4xl border-border card-hover">
                <CardContent className="p-7">
                  <div className="flex items-center gap-4">
                    <span className="gradient-brand flex size-16 shrink-0 items-center justify-center rounded-3xl font-display text-lg font-semibold text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold">{member.name}</h2>
                      <Badge className="mt-1 rounded-full bg-accent text-accent-foreground">
                        {member.role}
                      </Badge>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">{member.bio}</p>

                  <h3 className="mt-5 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                    Responsibilities
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {member.duties.map((duty) => (
                      <li key={duty} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                        {duty}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Phone className="size-4 text-primary" /> {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Mail className="size-4 text-primary" /> {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
