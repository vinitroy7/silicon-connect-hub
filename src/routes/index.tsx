import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bell,
  Calendar,
  CalendarCheck,
  Download,
  Hammer,
  Lock,
  Mail,
  MapPin,
  Phone,
  Quote,
  Receipt,
  Scale,
  Search,
  UserCheck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  COMMITTEE,
  EMERGENCY,
  EVENTS,
  NEWS,
  NOTICES,
  QUICK_SERVICES,
  SOCIETY,
  STATS,
  TESTIMONIALS,
} from "@/data/site";
import heroImage from "@/assets/hero-aerial.jpg";
import societyImage from "@/assets/society-view.jpg";
import festivalImage from "@/assets/festival.jpg";
import greenImage from "@/assets/green-area.jpg";
import sportsImage from "@/assets/sports.jpg";
import clubhouseImage from "@/assets/clubhouse.jpg";

const TITLE = "Amrapali Silicon City AOA — Phase 1, Sector 76 Noida";
const DESCRIPTION =
  "Official website of the Amrapali Silicon City Apartment Owners Association, Phase 1, Sector 76, Noida — notices, complaints, events, committee, vendors and resident services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
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

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      setDisplay(Math.round(value * Math.min(1, frame / total)));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const galleryItems = [
    { src: festivalImage, label: "Festival Celebrations" },
    { src: greenImage, label: "Green Areas" },
    { src: clubhouseImage, label: "Clubhouse" },
    { src: sportsImage, label: "Sports Facilities" },
    { src: societyImage, label: "Infrastructure" },
    { src: heroImage, label: "Drone Footage" },
  ];

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[620px] overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Aerial view of Amrapali Silicon City residential towers in Sector 76, Noida"
          width={1920}
          height={1088}
          style={{ y: bgY }}
          className="absolute inset-0 size-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.25_0.08_262/0.75)] via-[oklch(0.25_0.08_262/0.55)] to-[oklch(0.2_0.06_262/0.85)]" />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-dark rounded-4xl px-6 py-10 md:px-14 md:py-14"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-white/80 uppercase">
              Official Website
            </span>
            <h1 className="mt-5 font-display text-3xl leading-tight font-semibold text-white md:text-5xl">
              Welcome to
              <span className="mt-2 block text-4xl md:text-6xl">Amrapali Silicon City</span>
              <span className="mt-2 block text-xl font-medium text-white/85 md:text-2xl">
                Apartment Owners Association · Phase 1
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 md:text-base">
              Sector 76, Noida — a registered, resident-elected association serving 2,500+ families
              with transparent maintenance, 24x7 security and a vibrant community life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="brand">
                <Link to="/resident-corner">Become Member</Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <Link to="/login">Resident Login</Link>
              </Button>
              <Button asChild size="lg" variant="success">
                <Link to="/complaints">Raise Complaint</Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <Link to="/notices">Latest Notices</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-4xl glass p-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <span className="text-gradient block">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Society */}
      <section className="section px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={societyImage}
                alt="Towers and landscaped walkways inside Amrapali Silicon City Phase 1"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-4xl shadow-card"
              />
              <div className="glass absolute -right-4 -bottom-8 hidden rounded-3xl p-5 sm:block">
                <p className="font-display text-2xl font-semibold text-gradient">Est. 2011</p>
                <p className="text-xs text-muted-foreground">A community of 2,500+ families</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About the Society"
              title="A township-scale community in the heart of Sector 76"
              subtitle="Amrapali Silicon City Phase 1 spans 12+ residential towers with landscaped greens, a clubhouse, sports facilities and round-the-clock security — all managed with residents at the centre."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Vision", body: "A safe, green and self-reliant township that residents are proud to call home." },
                { title: "Mission", body: "Transparent governance, timely upkeep and responsive resolution of every resident concern." },
                { title: "Goals", body: "Stronger amenities, sustainable utilities and an inclusive community calendar." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-border bg-card p-5 card-hover">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Button asChild variant="brand" className="mt-8">
              <Link to="/about-society">
                Read More <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Quick Services"
            title="Everything residents need, one tap away"
            subtitle="From complaints to hall bookings — the services residents use most, without a single phone call."
          />
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

      {/* Notices */}
      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Notice Board"
              title="Latest notices & circulars"
              subtitle="Published and managed by the AOA office."
            />
            <Button asChild variant="outline">
              <Link to="/notices">
                All notices <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {NOTICES.slice(0, 3).map((notice, i) => (
              <Reveal key={notice.title} delay={i * 0.08}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full bg-accent text-accent-foreground">
                        {notice.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{notice.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold">{notice.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{notice.excerpt}</p>
                    <div className="mt-5 flex items-center gap-3 text-sm">
                      <Link to="/notices" className="font-medium text-primary">
                        Read More
                      </Link>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Download className="size-3.5" /> PDF
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Community Calendar"
            title="Upcoming events"
            subtitle="Festivals, sports and welfare drives across Phase 1."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.filter((e) => e.tag !== "Past")
              .slice(0, 6)
              .map((event, i) => (
                <Reveal key={event.title} delay={i * 0.07}>
                  <Card className="h-full rounded-3xl border-border card-hover">
                    <CardContent className="flex gap-4 p-6">
                      <div className="gradient-brand flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl text-primary-foreground">
                        <CalendarCheck className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold">{event.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {event.date} · {event.time}
                        </p>
                        <p className="text-sm text-muted-foreground">{event.venue}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="brand">
              <Link to="/events">
                View calendar & RSVP <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Governance"
            title="Your elected committee"
            subtitle="Reachable, accountable and resident-elected office bearers."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITTEE.slice(0, 4).map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <Card className="h-full rounded-3xl border-border text-center card-hover">
                  <CardContent className="p-6">
                    <span className="gradient-brand mx-auto flex size-20 items-center justify-center rounded-full font-display text-xl font-semibold text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                      <p className="inline-flex items-center gap-1.5">
                        <Phone className="size-3.5" /> {member.phone}
                      </p>
                      <p className="inline-flex items-center gap-1.5">
                        <Mail className="size-3.5" /> {member.email}
                      </p>
                    </div>
                    <Link to="/committee" className="mt-4 inline-block text-sm font-medium text-primary">
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Life at Silicon City"
            subtitle="Festivals, greens, infrastructure and facilities across the campus."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={item.src}
                    alt={`${item.label} at Amrapali Silicon City Phase 1`}
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
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/gallery">
                Open full gallery <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section px-4">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Testimonials" title="What residents say" />
          <Reveal className="mt-12">
            <Carousel opts={{ loop: true }} className="px-10">
              <CarouselContent>
                {TESTIMONIALS.map((item) => (
                  <CarouselItem key={item.name} className="md:basis-1/2">
                    <Card className="h-full rounded-3xl border-border">
                      <CardContent className="p-7">
                        <Quote className="size-7 text-primary/40" />
                        <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                          “{item.quote}”
                        </p>
                        <p className="mt-5 font-display text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.tower}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* Emergency */}
      <section className="section gradient-soft border-y border-border px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Safety First"
            title="Emergency contacts"
            subtitle="Save these numbers — verified and monitored by the AOA."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EMERGENCY.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) * 0.06}>
                <a
                  href={`tel:${item.number}`}
                  className="flex items-center justify-between gap-3 rounded-3xl border border-border bg-card p-5 card-hover"
                >
                  <span>
                    <span className="block font-display text-sm font-semibold">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.group}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <Phone className="size-4" /> {item.number}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Latest News"
            title="Society, construction & authority updates"
            subtitle="Including NBCC progress and Noida Authority circulars affecting Phase 1."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NEWS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <Card className="h-full rounded-3xl border-border card-hover">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="rounded-full">
                      {item.tag}
                    </Badge>
                    <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Bell className="size-3.5" /> {item.date}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <Reveal className="mx-auto max-w-6xl">
          <div className="gradient-brand relative overflow-hidden rounded-4xl px-6 py-14 text-center text-primary-foreground md:px-16">
            <div
              aria-hidden
              className="absolute -top-24 -left-16 size-72 rounded-full bg-white/15 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-semibold md:text-4xl">
              Join the association. Strengthen the community.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
              Register as a member to access your dashboard, maintenance receipts, QR visitor passes
              and complaint tracking.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="glass">
                <Link to="/resident-corner">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <Link to="/contact">
                  <MapPin /> Visit AOA Office
                </Link>
              </Button>
            </div>
            <p className="relative mt-6 text-xs text-white/70">
              {SOCIETY.address} · {SOCIETY.hours}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
