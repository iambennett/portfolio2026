import { HeroCollage } from "@/components/hero-collage";
import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Work — Iam Bennett" }];
}

export default function WorkRoute() {
  return (
    <div className="relative h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <HeroCollage />
      <SiteHeader />
      <main className="relative mx-auto max-w-6xl px-6 py-20">
        <ProjectGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
