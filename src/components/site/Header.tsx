import { Link } from "@tanstack/react-router";
import { Menu, Phone, ShieldAlert, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoAsset from "@/assets/aoa-logo.jpeg.asset.json";
import { NAV_LINKS, SOCIETY } from "@/data/site";

const PRIMARY = ["Home", "About Society", "Committee", "Services", "Notices", "Events", "Gallery"];

export function Header() {
  const [open, setOpen] = useState(false);
  const primary = NAV_LINKS.filter((l) => PRIMARY.includes(l.label));
  const more = NAV_LINKS.filter((l) => !PRIMARY.includes(l.label));

  return (
    <header className="sticky top-0 z-50">
      <div className="gradient-brand hidden text-xs text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <span className="inline-flex items-center gap-2">
            <Phone className="size-3.5" /> Helpdesk {SOCIETY.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldAlert className="size-3.5" /> Emergency 112 · {SOCIETY.email}
          </span>
        </div>
      </div>

      <div className="glass border-x-0 border-t-0">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Amrapali Silicon City AOA logo"
              className="size-11 rounded-2xl bg-white object-contain shadow-card"
            />
            <span className="leading-tight">
              <span className="block font-display text-sm font-semibold md:text-base">
                {SOCIETY.name} AOA
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Sector 76, Noida
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {primary.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary">
                More <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {more.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link to={link.to}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button asChild variant="brand" size="sm" className="hidden sm:inline-flex">
              <Link to="/complaints">Raise Complaint</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto">
                <div className="mt-8 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      activeProps={{ className: "bg-secondary text-primary" }}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="brand" className="mt-4">
                    <a href={`tel:${SOCIETY.phone.replace(/\s/g, "")}`}>
                      Call Helpdesk {SOCIETY.phone}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
