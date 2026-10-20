import { projects } from "@/lib/projects";

const images = [...new Set(projects.flatMap((project) => project.images ?? []))];

const slices = [
  { left: "-8%", width: "26%", opacity: 0.22, duration: 26, delay: 0 },
  { left: "14%", width: "18%", opacity: 0.14, duration: 32, delay: -6 },
  { left: "34%", width: "30%", opacity: 0.2, duration: 24, delay: -12 },
  { left: "58%", width: "16%", opacity: 0.12, duration: 30, delay: -3 },
  { left: "70%", width: "24%", opacity: 0.18, duration: 28, delay: -18 },
  { left: "90%", width: "20%", opacity: 0.1, duration: 34, delay: -9 },
];

export function HeroCollage() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <style>{`
        @keyframes hero-collage-drift {
          from { transform: translate3d(-6%, 0, 0) rotate(45deg); }
          to { transform: translate3d(6%, 0, 0) rotate(45deg); }
        }
      `}</style>
      {slices.map((slice, index) => (
        <div
          key={index}
          className="absolute -top-1/2 -bottom-1/2 bg-cover bg-center"
          style={{
            left: slice.left,
            width: slice.width,
            opacity: slice.opacity,
            backgroundImage: `url(${images[index % images.length]})`,
            transform: "rotate(45deg)",
            animation: `hero-collage-drift ${slice.duration}s ease-in-out ${slice.delay}s infinite alternate`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
  );
}
