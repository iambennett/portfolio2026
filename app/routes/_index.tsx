import { IconArrowUpRight, IconMail } from "@tabler/icons-react";

export function meta() {
  return [
    { title: "Iam Bennett — Design Portfolio" },
    {
      name: "description",
      content: "Selected design work by Iam Bennett.",
    },
  ];
}

const projects = [
  {
    title: "American Boat & Yacht",
    category: "Website and brand identity",
    year: "",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fd7986beb7cbb4baab6102cba8c2b32f8?format=webp&width=800&height=1200",
  },
  {
    title: "Andrea Go Bowl T-Shirt",
    category: "T-shirt design",
    year: "",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F6724c11da5934bf0bdf7d01760a3876f?format=webp&width=800&height=1200",
  },
  {
    title: "Northwind Brand System",
    category: "Brand identity",
    year: "2026",
    gradient: "from-blue-500 via-sky-400 to-cyan-300",
  },
  {
    title: "Field Notes App",
    category: "Product design",
    year: "2025",
    gradient: "from-stone-700 via-stone-500 to-blue-300",
  },
  {
    title: "Harbor Editorial",
    category: "Editorial",
    year: "2025",
    gradient: "from-blue-600 via-blue-300 to-sky-100",
  },
  {
    title: "Pulse Dashboard",
    category: "Web design",
    year: "2024",
    gradient: "from-zinc-900 via-zinc-700 to-blue-500",
  },
  {
    title: "Study Motion Series",
    category: "Motion",
    year: "2024",
    gradient: "from-sky-300 via-blue-500 to-indigo-600",
  },
  {
    title: "Atlas Design System",
    category: "Design systems",
    year: "2023",
    gradient: "from-neutral-200 via-blue-200 to-sky-300",
  },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function HomeRoute() {
  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Iam Bennett
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
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for select projects
          </p>
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
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Selected work
            </h2>
            <span className="text-sm text-muted-foreground">
              {projects.length} projects
            </span>
          </div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group cursor-pointer">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-300 group-hover:-translate-y-1"
                  />
                ) : (
                  <div
                    className={`aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} transition-transform duration-300 group-hover:-translate-y-1`}
                  />
                )}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                  {project.year && (
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  )}
                </div>
              </article>
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
                <span className="text-foreground">
                  I help teams turn rough ideas into clear, memorable work.
                </span>{" "}
                My process starts with research and sketches, then moves
                quickly into prototypes that can be tested with real people.
              </p>
              <p>
                Previously I worked with startups and studios on identity
                systems, product interfaces, and launch campaigns.
              </p>
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
