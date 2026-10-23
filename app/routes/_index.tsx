import {
  IconArrowUpRight,
  IconBrandAdobeIllustrator,
  IconBrandAdobeIndesign,
  IconBrandAdobePhotoshop,
  IconBrandGoogle,
  IconBrandHtml5,
  IconBrandOffice,
  IconBrandOpenai,
  IconBrandWindows,
  IconBrandWordpress,
  IconBox,
  IconMicrophone,
  IconPencil,
  IconSparkles,
  IconWaveSine,
  type TablerIcon,
} from "@tabler/icons-react";
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

const capabilities = [
  "Logos",
  "Branding",
  "Illustration",
  "Business cards",
  "Publications",
  "Layout",
  "Trade shows",
  "Websites",
  "Apparel",
  "Packaging design",
  "Direct mail",
  "Email campaigns",
  "Advertising",
  "UX/UI",
];

const software: { name: string; icon: TablerIcon }[] = [
  { name: "Adobe Photoshop", icon: IconBrandAdobePhotoshop },
  { name: "Adobe Illustrator", icon: IconBrandAdobeIllustrator },
  { name: "Adobe InDesign", icon: IconBrandAdobeIndesign },
  { name: "Adobe Audition", icon: IconWaveSine },
  { name: "WordPress", icon: IconBrandWordpress },
  { name: "HTML/CSS", icon: IconBrandHtml5 },
  { name: "Google Workspace", icon: IconBrandGoogle },
  { name: "Microsoft Office", icon: IconBrandOffice },
  { name: "Windows & Mac", icon: IconBrandWindows },
  { name: "Builder.io", icon: IconBox },
  { name: "Jasper", icon: IconPencil },
  { name: "ChatGPT", icon: IconBrandOpenai },
  { name: "Adobe Firefly", icon: IconSparkles },
  { name: "Riverside Podcasting", icon: IconMicrophone },
];

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

const testimonials = [
  {
    quote:
      "Iam is a brilliant marketer with many years of experience! Immediately after being hired he designed and developed the company website from scratch, while masterfully re-branding the company from top to bottom to give us a more modern, professional look and feel. He is extremely enthusiastic about his work which is infectious, makes it fun to work on projects together, and is easy to collaborate with. He always has a creative, positive outlook and he’s good at organizing and bringing people together. Iam's presentation style is open and inviting to questions, while being engaging and thorough. If you have creative or marketing needs, you'd be at a loss to not have Iam lead the charge. He’s like Bluetooth: easily paired to any challenge!",
    name: "Topher Vessels, MCP",
    role: "Full Stack .NET Developer | Master Certified Crestron Programmer",
  },
  {
    quote:
      "Let's just say when I was hired by JAVS to create a marketing and product department, I knew exactly who my first hire was going to be. I worked with Iam at Appriss and then contracted with him at ZirMed. Then when I brought him onboard at JAVS, he helped me rebrand the company which meant launching a new website, creating new marketing materials, designing a new conference booth, implementing a new marketing automation platform, and the list goes on and on. He is one of the most proactive people I have ever worked with, constantly engaged and bringing new ideas to the table. I would always joke with him that he creates his own job security! He also worked on the domestic and international partner marketing initiatives which received rave reviews. He has one of the best worth ethics I have ever seen. He truly works hard but also loves having fun at the same time. He also knows how to deliver what someone wants graphically. Give him some insight into what you want, and he will blow it out of the water. Two words that describe him are creative genius! Any company would be lucky to have him.",
    name: "Theresa DaSilva",
    role: "Marketing Executive | Realtor | Real Estate Investor",
  },
];

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
          <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fda1b5357d95e4bb7956f6983f8ef05d2?format=webp&width=800&height=1200"
              alt="Illustration of Iam Bennett"
              className="w-full max-w-xs rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                About Me
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
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
              <Link
                to="/resume"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View full resume
                <IconArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-8 text-xl font-semibold tracking-tight">
                Design capabilities
              </h3>
              <ul className="flex flex-wrap gap-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-8 text-xl font-semibold tracking-tight">
                Software & tools
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {software.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-sm">
                    <Icon size={22} className="shrink-0 text-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="testimonials" className="overflow-hidden py-20">
          <h2 className="mx-auto mb-10 max-w-6xl px-6 text-2xl font-semibold tracking-tight md:text-3xl">
            Testimonials
          </h2>
          <div className="testimonial-marquee flex w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <figure
                key={index}
                aria-hidden={index >= testimonials.length}
                className="mr-6 w-[min(85vw,30rem)] shrink-0 rounded-xl border border-border bg-card p-8"
              >
                <blockquote className="text-base leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="block text-muted-foreground">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 pb-24 pt-20 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Iam Bennett</span>
          <span>Designed in Fusion</span>
        </footer>
        </div>
      </main>
    </div>
  );
}
