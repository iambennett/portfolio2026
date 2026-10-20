import { Link } from "react-router";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-300 group-hover:-translate-y-1"
        />
      ) : (
        <div
          className={`aspect-[4/3] w-full rounded-xl bg-gradient-to-br ${project.gradient} transition-transform duration-300 group-hover:-translate-y-1`}
        />
      )}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
        {project.year && (
          <span className="text-sm text-muted-foreground">{project.year}</span>
        )}
      </div>
    </Link>
  );
}
