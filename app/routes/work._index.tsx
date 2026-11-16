import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Work — Iam Bennett" }];
}

const backgroundShapes = [
  { top: "5%", left: "4%", height: "22vh", color: "border-[hsl(152_60%_45%)]", delay: "0s" },
  { top: "18%", right: "5%", height: "60vh", color: "border-primary", delay: "-4s" },
  { bottom: "6%", left: "22%", height: "38vh", color: "border-[hsl(152_60%_45%)]", delay: "-8s" },
  { top: "45%", left: "-6%", height: "55vh", color: "border-primary", delay: "-12s" },
  { top: "8%", right: "34%", height: "30vh", color: "border-primary", delay: "-6s" },
  { bottom: "2%", right: "12%", height: "45vh", color: "border-[hsl(152_60%_45%)]", delay: "-15s" },
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
            className={`work-shape absolute rounded-3xl border-2 ${shape.color} opacity-[0.15]`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
              height: shape.height,
              aspectRatio: "6 / 4",
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
