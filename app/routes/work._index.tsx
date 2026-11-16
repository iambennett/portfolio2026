import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Work — Iam Bennett" }];
}

const backgroundShapes = [
  { top: "5%", left: "4%", width: "10rem", height: "3rem", color: "border-[hsl(152_60%_45%)]", delay: "0s" },
  { top: "28%", right: "5%", width: "36rem", height: "10rem", color: "border-primary", delay: "-4s" },
  { bottom: "8%", left: "22%", width: "26rem", height: "5rem", color: "border-[hsl(152_60%_45%)]", delay: "-8s" },
  { top: "52%", left: "-6%", width: "18rem", height: "9rem", color: "border-primary", delay: "-12s" },
  { top: "10%", right: "34%", width: "8rem", height: "8rem", color: "border-primary", delay: "-6s" },
  { bottom: "3%", right: "12%", width: "22rem", height: "4rem", color: "border-[hsl(152_60%_45%)]", delay: "-15s" },
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
