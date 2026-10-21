import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { Link } from "react-router";
import { useState } from "react";
import { HeroCollage } from "@/components/hero-collage";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects, projectTags, type ProjectTag } from "@/lib/projects";

export function meta() {
  return [
    { title: "Iam Bennett — Design Portfolio" },
    {
      name: "description",
      content: "Selected design work by Iam Bennett.",
    },
  ];
}

const recentWorkSlugs = [
  "before-the-applause",
  "appriss-choice-ui-design",
  "chronic-illness-counseling-center",
];

const recentWork = projects.filter((project) =>
  recentWorkSlugs.includes(project.slug),
);

const headerImages = projects
  .flatMap((project) => (project.image ? [project.image] : []))
  .filter((_, index) => index % 3 === 0);

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function HomeRoute() {
  const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
  const visibleProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <header className="sticky top-0 z-10 overflow-hidden border-b border-border/60 bg-background/80 backdrop-blur">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {headerImages.map((image, index) => (
            <div
              key={image}
              className="absolute inset-y-0 bg-cover bg-center opacity-30"
              style={{
                left: `${(index / headerImages.length) * 100}%`,
                width: `${100 / headerImages.length}%`,
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fbcb50ddddfe34df1833554796fdab2ea?format=webp&width=800&height=1200"
              alt="Iam Bennett"
              className="h-12 w-auto"
            />
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <HeroCollage />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Designing brands and products that feel <span className="text-primary">alive.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Iam, a designer working across brand identity, digital
            products, and editorial. Here's a selection of recent work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View work
              <IconArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Selected work
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
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              About
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Iam Bennett, a marketing director and multimedia designer
                who loves solving creative challenges. Give me a client goal and
                a blank canvas, and I'll find a smart, memorable way to get
                there. I serve as Director of Operations & Marketing for
                Educational Directions, LLC, in Louisville, Kentucky, where I
                help keep the work running smoothly and the brand looking sharp.
                I also run a freelance marketing practice.
              </p>
              <p>
                I have more than 25 years of experience helping companies across
                the United States strengthen their brands and stand out through
                innovative design and targeted marketing. Along the way, I've led
                national marketing campaigns and product launches in fields as
                varied as law enforcement, K–12 education, and enterprise pharmacy
                systems. Each experience has reinforced the same lesson: great
                marketing starts with understanding the people you want to reach.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="mb-8 flex items-end justify-between">
              <h3 className="text-xl font-semibold tracking-tight">
                Recent work
              </h3>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
              >
                View full resume
                <IconArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
              {recentWork.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 pb-24 pt-20"
        >
          <div className="rounded-2xl bg-accent p-10 md:p-16">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Have a project in mind?
            </h2>
            <a
              href="mailto:hello@iambennett.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <IconMail size={16} />
              hello@iambennett.com
            </a>
          </div>
          <footer className="mt-12 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Iam Bennett</span>
            <span>Designed in Fusion</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
