import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Work — Iam Bennett" }];
}

export default function WorkRoute() {
  return (
    <div className="relative h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="work-blob absolute -left-32 top-24 size-[36rem] bg-primary opacity-[0.12] blur-3xl" />
        <div className="work-blob work-blob--alt absolute -right-40 top-[40%] size-[42rem] bg-[hsl(152_60%_45%)] opacity-[0.12] blur-3xl" />
        <div className="work-circle absolute right-[20%] top-[15%] size-72 rounded-full border-2 border-[hsl(152_60%_45%)] opacity-[0.35]" />
        <div
          className="work-circle absolute bottom-[12%] left-[15%] size-96 rounded-full border-2 border-primary opacity-[0.3]"
          style={{ animationDelay: "-9s" }}
        />
      </div>
      <SiteHeader />
      <main className="relative mx-auto max-w-6xl px-6 py-20">
        <ProjectGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
