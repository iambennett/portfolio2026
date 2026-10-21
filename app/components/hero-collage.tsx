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

const tiles = [
  { col: 1, row: 1, cols: 3, rows: 3 },
  { col: 4, row: 1, cols: 2, rows: 2 },
  { col: 6, row: 1, cols: 3, rows: 2 },
  { col: 4, row: 3, cols: 2, rows: 2 },
  { col: 6, row: 3, cols: 2, rows: 3 },
  { col: 8, row: 3, cols: 1, rows: 3 },
  { col: 1, row: 4, cols: 3, rows: 2 },
  { col: 4, row: 5, cols: 2, rows: 2 },
  { col: 1, row: 6, cols: 3, rows: 3 },
  { col: 6, row: 6, cols: 3, rows: 3 },
  { col: 4, row: 7, cols: 2, rows: 2 },
];

function pickRandom(source: string[], count: number) {
  const shuffled = [...source];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export function HeroCollage() {
  const [tileImages, setTileImages] = useState(() => images.slice(0, tiles.length));

  useEffect(() => {
    setTileImages(pickRandom(images, tiles.length));
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 grid grid-cols-8 grid-rows-8 gap-3"
        style={{
          width: "max(150vw, 150vh)",
          height: "max(150vw, 150vh)",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="rounded-2xl bg-cover bg-center"
            style={{
              gridColumn: `${tile.col} / span ${tile.cols}`,
              gridRow: `${tile.row} / span ${tile.rows}`,
              backgroundImage: `url(${tileImages[index]})`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
    </div>
  );
}
