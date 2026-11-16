import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects, projectTags, type ProjectTag } from "@/lib/projects";

const projectsByPictureCount = [...projects].sort(
  (a, b) => (b.images?.length ?? 0) - (a.images?.length ?? 0),
);

export function ProjectGrid() {
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
  const visibleProjects = activeTag
    ? projectsByPictureCount.filter((project) => project.tags.includes(activeTag))
    : projectsByPictureCount;

  return (
    <>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          My Work
        </h2>
        <span className="text-sm text-muted-foreground">
          {visibleProjects.length} projects
        </span>
      </div>
      <div className="mb-10 flex flex-wrap gap-2">
        {[null, ...projectTags].map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag ?? "all"}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {tag ?? "All"}
            </button>
          );
        })}
      </div>
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
