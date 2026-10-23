import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

const images = [
  ...new Set(
    projects.flatMap((project) => [
      ...(project.image ? [project.image] : []),
      ...(project.images ?? []),
    ]),
  ),
];

const columnCount = 10;
const tilesPerColumn = 14;
const fadeMask = "linear-gradient(to right, transparent 5%, black 90%)";
const aspectRatios = ["3 / 4", "1 / 1", "4 / 5", "2 / 3", "5 / 4", "1 / 1", "3 / 5"];

function pickRandom(source: string[]) {
  const shuffled = [...source];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function HeroCollage() {
  const [pool, setPool] = useState(images);

  useEffect(() => {
    setPool(pickRandom(images));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask, opacity: 0.1 }}
    >
      <div
        className="absolute left-1/2 top-1/2 flex gap-5"
        style={{
          width: "max(150vw, 150vh)",
          height: "max(150vw, 150vh)",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
      >
        {Array.from({ length: columnCount }, (_, column) => (
          <div
            key={column}
            className="flex flex-1 flex-col gap-5"
            style={{ marginTop: column % 2 ? "-6rem" : 0 }}
          >
            {Array.from({ length: tilesPerColumn }, (_, row) => {
              const index = column * tilesPerColumn + row;
              return (
                <div
                  key={row}
                  className="w-full rounded-2xl bg-cover bg-center"
                  style={{
                    aspectRatio: aspectRatios[(column * 3 + row * 5) % aspectRatios.length],
                    backgroundImage: `url(${pool[index % pool.length]})`,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
