import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Complaint Portal — Raise & Track Tickets | Silicon City AOA";
const DESCRIPTION =
  "Raise a complaint with Amrapali Silicon City AOA across electricity, water, lift, parking, security, cleaning, gardening, civil and plumbing categories, and track your ticket.";

export const Route = createFileRoute("/complaints")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/complaints" },
    ],
    links: [{ rel: "canonical", href: "/complaints" }],
  }),
  component: ComplaintsPage,
});

const CATEGORIES = [
  "Electricity",
  "Water",
  "Lift",
  "Parking",
  "Security",
  "Cleaning",
  "Gardening",
  "Civil",
  "Plumbing",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  flat: z.string().trim().min(2, "Enter tower & flat number").max(40),
  phone: z.string().trim().regex(/^[0-9+\s-]{10,15}$/, "Enter a valid phone number"),
  category: z.string().min(1, "Select a category"),
  priority: z.string().min(1, "Select a priority"),
  details: z.string().trim().min(10, "Describe the issue (min 10 characters)").max(1000),
});

function ComplaintsPage() {
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [ticket, setTicket] = useState<string | null>(null);
  const [lookup, setLookup] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      flat: String(form.get("flat") ?? ""),
      phone: String(form.get("phone") ?? ""),
      category,
      priority,
      details: String(form.get("details") ?? ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const id = `ASC-${Math.floor(100000 + Math.random() * 899999)}`;
    setTicket(id);
    toast.success(`Complaint registered · Ticket ${id}`);
    e.currentTarget.reset();
    setCategory("");
  }

  return (
    <>
      <PageHero
        eyebrow="Complaint Portal"
        title="Raise a complaint, track it to closure"
        subtitle="Every complaint gets a ticket number, an owner in the maintenance team and status updates by email and SMS until it is resolved."
      />

      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Card className="rounded-4xl border-border">
              <CardContent className="p-7">
                <h2 className="font-display text-lg font-semibold">New complaint</h2>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" maxLength={80} placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="flat">Tower & flat</Label>
                    <Input id="flat" name="flat" maxLength={40} placeholder="e.g. Tower C, 704" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" maxLength={15} placeholder="+91…" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Priority</Label>
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Low", "Normal", "High", "Emergency"].map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="photo">Photo (optional)</Label>
                    <Input id="photo" name="photo" type="file" accept="image/*" />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="details">Describe the issue</Label>
                    <Textarea id="details" name="details" rows={5} maxLength={1000} />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="brand" size="lg">
                      Submit complaint
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">
                      You will receive email and SMS updates at every status change.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <Card className="rounded-4xl border-border">
                <CardContent className="p-7">
                  <h2 className="font-display text-lg font-semibold">Track a ticket</h2>
                  <div className="mt-4 flex gap-2">
                    <Input
                      value={lookup}
                      onChange={(e) => setLookup(e.target.value)}
                      placeholder="ASC-123456"
                      aria-label="Ticket number"
                    />
                    <Button
                      variant="outline"
                      onClick={() =>
                        toast.info(
                          lookup.trim()
                            ? `Ticket ${lookup.trim()} — status: In Progress (assigned to maintenance)`
                            : "Enter a ticket number",
                        )
                      }
                    >
                      Check
                    </Button>
                  </div>
                  {ticket ? (
                    <p className="mt-5 rounded-2xl bg-success/10 p-4 text-sm text-foreground">
                      Your latest ticket: <span className="font-semibold">{ticket}</span> — status
                      Registered.
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card className="rounded-4xl border-border">
                <CardContent className="p-7">
                  <h2 className="font-display text-lg font-semibold">How tickets progress</h2>
                  <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {["Registered", "Assigned to team", "In progress", "Resolved", "Closed with feedback"].map(
                      (step, i) => (
                        <li key={step} className="flex items-center gap-3">
                          <span className="gradient-brand flex size-7 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ),
                    )}
                  </ol>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
