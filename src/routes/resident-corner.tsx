import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Resident Corner — Member Services & Requests | Silicon City AOA";
const DESCRIPTION =
  "Resident services at Amrapali Silicon City AOA: membership, maintenance status, receipts, visitor pass, vehicle registration, tenant registration, amenity booking and more.";

export const Route = createFileRoute("/resident-corner")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resident-corner" },
    ],
    links: [{ rel: "canonical", href: "/resident-corner" }],
  }),
  component: ResidentCorner,
});

const SERVICES = [
  ["Member Registration", "Register as an owner-member with proof of ownership."],
  ["Maintenance Status", "View current dues, paid months and pending amounts."],
  ["Download Receipts", "Get PDF receipts for every maintenance payment."],
  ["QR Visitor Pass", "Generate a code your guest shows at the gate."],
  ["Vehicle Registration", "Apply for parking stickers for car and two-wheeler."],
  ["Document Verification", "Submit KYC and ownership documents for records."],
  ["Flat Transfer", "Initiate transfer of AOA records on sale or purchase."],
  ["Move In Request", "Book the service lift and inform security."],
  ["Move Out Request", "Clearance and dues settlement before moving out."],
  ["Tenant Registration", "Owners register tenants with agreement and ID."],
  ["Amenity Booking", "Reserve community hall, lawn or courts."],
  ["Suggestions & Feedback", "Share ideas with the committee."],
  ["Lost & Found", "Report or claim items found in common areas."],
  ["Notice Board", "All active notices in one place."],
];

function ResidentCorner() {
  return (
    <>
      <PageHero
        eyebrow="Resident Corner"
        title="Your services, in one place"
        subtitle="Sign in to your member dashboard to raise requests, pay maintenance and manage visitors. Requests move to the AOA helpdesk with a tracking reference."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <h2 className="font-display text-base font-semibold">{title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                    <Link
                      to="/login"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Open <ArrowRight className="size-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="gradient-brand rounded-4xl p-8 text-center text-primary-foreground">
              <h2 className="font-display text-2xl font-semibold">New here? Become a member</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
                Owner-members get voting rights in the general body, access to the dashboard and
                priority helpdesk support.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild variant="glass" size="lg">
                  <Link to="/downloads">Download membership form</Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link to="/contact">Contact AOA office</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
