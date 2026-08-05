import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { DOWNLOADS } from "@/data/site";

const TITLE = "Downloads — AOA Forms, Bylaws & Circulars | Silicon City AOA";
const DESCRIPTION =
  "Download AOA forms, membership form, NOC request, bylaws, AGM minutes, maintenance circulars, parking rules and the emergency SOP for Amrapali Silicon City Phase 1.";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const GROUPS = ["Forms", "Governance", "Circulars", "Safety"];

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Forms, bylaws & circulars"
        subtitle="All official documents in one place. Printed copies are also available at the AOA office during working hours."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-5xl space-y-10">
          {GROUPS.map((group) => (
            <div key={group}>
              <h2 className="font-display text-lg font-semibold">{group}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DOWNLOADS.filter((d) => d.group === group).map((doc, i) => (
                  <Reveal key={doc.title} delay={(i % 2) * 0.06}>
                    <Card className="rounded-3xl border-border card-hover">
                      <CardContent className="flex items-center gap-4 p-5">
                        <span className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-2xl text-primary-foreground">
                          <FileText className="size-5" />
                        </span>
                        <span className="flex-1">
                          <span className="block font-display text-sm font-semibold">
                            {doc.title}
                          </span>
                          <span className="text-xs text-muted-foreground">{doc.size}</span>
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toast.info("This document will be published by the AOA office shortly.")}
                        >
                          <Download />
                        </Button>
                      </CardContent>
                    </Card>
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
