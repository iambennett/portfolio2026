import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ProjectCard } from "@/components/project-card";
import { projects, type Project } from "@/lib/projects";

export function meta({ params }: { params: { slug?: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return [
    {
      title: project
        ? `${project.title} — Iam Bennett`
        : "Project — Iam Bennett",
    },
  ];
}

function pickRandom<T>(items: T[], count: number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export default function ProjectRoute() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [suggestions, setSuggestions] = useState<Project[]>([]);

  useEffect(() => {
    setSuggestions(
      pickRandom(
        projects.filter((p) => p.slug !== slug),
        3,
      ),
    );
  }, [slug]);

  if (!project) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 bg-background text-foreground">
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/" className="text-sm font-medium text-primary">
          Back to all work
        </Link>
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Iam Bennett
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All work
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm text-muted-foreground">
          {project.category}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
          {project.title}
        </h1>
        {project.description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}
        <div className="mt-12 space-y-6">
          {project.images ? (
            project.images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} image ${index + 1}`}
                className="w-full rounded-xl"
              />
            ))
          ) : (
            <div
              className={`aspect-[4/3] w-full rounded-xl bg-gradient-to-br ${project.gradient}`}
            />
          )}
        </div>
      </main>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          More projects
        </h2>
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {suggestions.map((suggestion) => (
            <ProjectCard key={suggestion.slug} project={suggestion} />
          ))}
        </div>
      </section>
    </div>
  );
}
