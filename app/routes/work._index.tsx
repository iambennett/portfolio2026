import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Work — Iam Bennett" }];
}

const backgroundShapes = [
  { top: "8%", left: "6%", width: "16rem", height: "6rem", color: "border-[hsl(152_60%_45%)]", delay: "0s" },
  { top: "30%", right: "8%", width: "20rem", height: "8rem", color: "border-primary", delay: "-4s" },
  { bottom: "10%", left: "25%", width: "12rem", height: "4rem", color: "border-[hsl(152_60%_45%)]", delay: "-8s" },
  { top: "55%", left: "-3%", width: "24rem", height: "7rem", color: "border-primary", delay: "-12s" },
  { top: "12%", right: "30%", width: "14rem", height: "5rem", color: "border-primary", delay: "-6s" },
  { bottom: "5%", right: "20%", width: "18rem", height: "6rem", color: "border-[hsl(152_60%_45%)]", delay: "-15s" },
];

export default function WorkRoute() {
  return (
    <div className="relative h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {backgroundShapes.map((shape, index) => (
          <div
            key={index}
            className={`work-shape absolute rounded-3xl border-2 ${shape.color} opacity-[0.3]`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
              width: shape.width,
              height: shape.height,
              rotate: "-18deg",
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>
      <SiteHeader />
      <main className="relative mx-auto max-w-6xl px-6 py-20">
        <ProjectGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
