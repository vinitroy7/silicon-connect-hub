import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SOCIETY } from "@/data/site";

const TITLE = "Contact AOA Office — Sector 76 Noida | Amrapali Silicon City";
const DESCRIPTION =
  "Contact the Amrapali Silicon City AOA office in Sector 76, Noida — address, phone, email, working hours, WhatsApp and enquiry form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(3, "Enter a subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

function ContactPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    toast.success("Thank you — the AOA office will get back to you.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the AOA office"
        subtitle="Visit us during working hours, call the helpdesk, or send an enquiry and we will respond within two working days."
      />

      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Office Address", value: SOCIETY.address },
              { icon: Phone, label: "Helpdesk", value: SOCIETY.phone },
              { icon: Mail, label: "Email", value: SOCIETY.email },
              { icon: Clock, label: "Working Hours", value: SOCIETY.hours },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <Card className="rounded-3xl border-border card-hover">
                  <CardContent className="flex gap-4 p-5">
                    <span className="gradient-brand flex size-11 shrink-0 items-center justify-center rounded-2xl text-primary-foreground">
                      <item.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </span>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <Button asChild variant="success" size="lg" className="w-full">
                <a href={`https://wa.me/${SOCIETY.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-4xl border border-border">
                <iframe
                  title="Amrapali Silicon City AOA office location"
                  src={SOCIETY.mapEmbed}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Card className="rounded-4xl border-border">
              <CardContent className="p-7">
                <h2 className="font-display text-lg font-semibold">Send an enquiry</h2>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" maxLength={80} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" maxLength={255} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" maxLength={120} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={6} maxLength={1000} />
                  </div>
                  <Button type="submit" variant="brand" size="lg">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
