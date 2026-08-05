import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { EMERGENCY, NAV_LINKS, SOCIETY } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-4 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="gradient-brand flex size-11 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground">
              ASC
            </span>
            <span className="font-display font-semibold">
              {SOCIETY.name} AOA
              <span className="block text-xs font-normal text-muted-foreground">
                {SOCIETY.phase}, Sector 76, Noida
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The official platform of the Apartment Owners Association — a registered,
            resident-elected body working for transparent maintenance, safety and community life.
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Emergency Numbers</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {EMERGENCY.slice(0, 6).map((item) => (
              <li key={item.label} className="flex justify-between gap-3">
                <span>{item.label}</span>
                <a href={`tel:${item.number}`} className="font-medium text-foreground">
                  {item.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">AOA Office</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {SOCIETY.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              {SOCIETY.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              {SOCIETY.email}
            </li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="AOA office location on Google Maps"
              src={SOCIETY.mapEmbed}
              className="h-36 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SOCIETY.name} {SOCIETY.aoa}, {SOCIETY.phase}, Sector 76,
        Noida. All rights reserved.
      </div>
    </footer>
  );
}
