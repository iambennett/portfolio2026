import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { Link } from "react-router";
import { HeroCollage } from "@/components/hero-collage";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

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

const selectedWorkSlugs = [
  "before-the-applause",
  "therapycon-25-raintree-users-conference",
  "zirmed-trade-show-booth-design",
  "educational-directions-website",
  "javs-company-rebrand",
  "hope-for-leaders-in-the-2020s",
];

const selectedWork = selectedWorkSlugs.flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
);

export default function HomeRoute() {
  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <HeroCollage />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Your design challenge has a <span className="text-primary">solution.</span> Let's find it <span className="text-primary">together.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Iam Bennett, a marketing director and multimedia designer
            who loves solving creative challenges. Give me a client goal and
            a blank canvas, and I'll find a smart, memorable way to get
            there.
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

        <div className="relative bg-background">
        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Selected work
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              View all work
              <IconArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
            {selectedWork.map((project) => (
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
        </div>
      </main>
    </div>
  );
}
