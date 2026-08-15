import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-aerial.jpg";
import societyImage from "@/assets/society-view.jpg";
import clubhouseImage from "@/assets/clubhouse.jpg";
import festivalImage from "@/assets/festival.jpg";
import greenImage from "@/assets/green-area.jpg";
import sportsImage from "@/assets/sports.jpg";

const TITLE = "Gallery — Photos, Drone Footage & Facilities | Silicon City AOA";
const DESCRIPTION =
  "Photo and video gallery of Amrapali Silicon City — drone footage, festival albums, clubhouse, sports area, green spaces and construction progress.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: heroImage, label: "Aerial Drone View", cat: "Drone Footage" },
  { src: societyImage, label: "Tower Facades & Walkways", cat: "Infrastructure" },
  { src: clubhouseImage, label: "Clubhouse Lounge", cat: "Clubhouse" },
  { src: festivalImage, label: "Diwali Celebration", cat: "Festival Albums" },
  { src: greenImage, label: "Central Park", cat: "Green Areas" },
  { src: sportsImage, label: "Floodlit Courts", cat: "Sports Area" },
  { src: societyImage, label: "Ongoing Finishing Works", cat: "Construction Progress" },
  { src: festivalImage, label: "Holi Milan", cat: "Festival Albums" },
  { src: greenImage, label: "Kids' Play Zone", cat: "Green Areas" },
];

const CATS = ["All", ...Array.from(new Set(ITEMS.map((i) => i.cat)))];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photos & videos from across the campus"
        subtitle="Curated albums of society life — celebrations, amenities, greens and construction progress in."
      />

      <section className="section px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  cat === c
                    ? "border-transparent gradient-brand text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={`${item.label}-${i}`} delay={(i % 3) * 0.07}>
                <figure className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={item.src}
                    alt={`${item.label} — Amrapali Silicon City`}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.06_262/0.85)] to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 text-white">
                    <span className="block font-display text-sm font-semibold">{item.label}</span>
                    <span className="text-xs text-white/75">{item.cat}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="rounded-4xl border border-border bg-card p-8 text-center">
              <h2 className="font-display text-lg font-semibold">360° tour & drone video</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                An immersive walkthrough of the campus is being produced with the events team. Once
                published it will be embedded here along with the full drone footage reel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
