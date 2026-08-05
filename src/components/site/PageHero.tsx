import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border gradient-soft">
      <div
        aria-hidden
        className="gradient-brand pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-success/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24 md:pb-20">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
