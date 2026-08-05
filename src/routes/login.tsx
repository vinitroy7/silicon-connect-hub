import { Link, createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Resident Login — Member Dashboard | Amrapali Silicon City AOA";
const DESCRIPTION =
  "Sign in to the Amrapali Silicon City AOA member dashboard to view maintenance dues, receipts, visitor passes and complaint status.";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Resident Login"
        title="Member dashboard access"
        subtitle="Sign in with your registered mobile number to receive a one-time password. Accounts are created after ownership or tenancy verification by the AOA office."
      />

      <section className="section px-4">
        <Reveal className="mx-auto max-w-md">
          <Card className="rounded-4xl border-border">
            <CardContent className="p-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.info("Secure OTP login will be activated once the member database is connected.");
                }}
                className="grid gap-4"
              >
                <div className="grid gap-2">
                  <Label htmlFor="mobile">Registered mobile number</Label>
                  <Input id="mobile" name="mobile" maxLength={15} placeholder="+91…" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="flat">Tower & flat number</Label>
                  <Input id="flat" name="flat" maxLength={40} placeholder="e.g. Tower C, 704" />
                </div>
                <Button type="submit" variant="brand" size="lg">
                  Send OTP
                </Button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Not registered yet?{" "}
                <Link to="/resident-corner" className="font-medium text-primary">
                  Become a member
                </Link>
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
