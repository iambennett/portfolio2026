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
  IconChevronLeft,
  IconChevronRight,
  IconQuoteFilled,
  IconMicrophone,
  IconPencil,
  IconSparkles,
  IconWaveSine,
  type TablerIcon,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
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
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fdd61991aa0254dc693ba9083c561a8bb?format=webp&width=800&height=1200",
  },
  {
    quote:
      "Let's just say when I was hired by JAVS to create a marketing and product department, I knew exactly who my first hire was going to be. I worked with Iam at Appriss and then contracted with him at ZirMed. Then when I brought him onboard at JAVS, he helped me rebrand the company which meant launching a new website, creating new marketing materials, designing a new conference booth, implementing a new marketing automation platform, and the list goes on and on. He is one of the most proactive people I have ever worked with, constantly engaged and bringing new ideas to the table. I would always joke with him that he creates his own job security! He also worked on the domestic and international partner marketing initiatives which received rave reviews. He has one of the best worth ethics I have ever seen. He truly works hard but also loves having fun at the same time. He also knows how to deliver what someone wants graphically. Give him some insight into what you want, and he will blow it out of the water. Two words that describe him are creative genius! Any company would be lucky to have him.",
    name: "Theresa DaSilva",
    role: "Marketing Executive | Realtor | Real Estate Investor",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F427b8e0ca603400590fbe15efbd718fc?format=webp&width=800&height=1200",
  },
  {
    quote:
      "I cannot convey, in the limited space provided, how essential Iam is to the product portfolio and digital face of Appriss. I, for one, depend heavily on Iam for direction, design and creativity in all of the Public Safety Products. He gives each of the products I am responsible for a look and feel like no other. His development of intranets, external websites, and sales collateral has given Appriss a consistent and professional appearance. He has consistently over delivered in any project and in less than estimated time. His attitude and demeanor are exemplary. A true find.",
    name: "Glenn Wright",
    role: "Author | Product + Engineering Leadership",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F7a62ebc19f824bbb9075512fab8f7d66?format=webp&width=800&height=1200",
  },
  {
    quote:
      "Iam has been an incredible value add to my consulting business. He created my logo, my website, my brochures, my marketing materials etc. He has always exceeded my expectations in quality and has been very, very reasonable in terms of cost. In addition, he is so easy with which to work. He is personable, responsive, creative, and usually a mind reader. Iam regularly amazes me; with very little direction, he gives me exactly what I want. . . or better. I have referred Iam to other small business owners, and the reviews have been 100% positive. Iam is just a really talented guy that does great work.",
    name: "Joe DeSensi, Ed.D",
    role: "President of Educational Directions, LLC",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F55e09a08d0d54a25b031936889b23ac5?format=webp&width=800&height=1200",
  },
  {
    quote:
      "Iam did an outstanding job on my company logo and website. His design captured the essence of my business. The response from my clients has been extremely positive. If I could have checked all the attributes, I definitely would have done so. I've recommended him to many of my colleagues and friends. All have been just as pleased with his work.",
    name: "Hope Zoeller, Ed.D",
    role: "Facilitator of Leader Success",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F0e08c672629e4d288bfe71eb3789bef4?format=webp&width=800&height=1200",
  },
];

const TESTIMONIAL_INTERVAL_MS = 15000;

const TESTIMONIALS_PER_PAGE = 3;
const testimonialPageCount = Math.ceil(
  testimonials.length / TESTIMONIALS_PER_PAGE,
);

function TestimonialCard({
  testimonial,
  featured,
}: {
  testimonial: (typeof testimonials)[number];
  featured: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const measure = () => {
      const el = quoteRef.current;
      if (el) setOverflows(el.scrollHeight > el.clientHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <figure
      className={`relative flex flex-col rounded-md px-8 pb-8 pt-20 text-center ${
        featured ? "bg-card shadow-xl" : "bg-muted"
      }`}
    >
      {testimonial.photo && (
        <img
          src={testimonial.photo}
          alt=""
          className="absolute left-1/2 top-0 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background object-cover"
        />
      )}
      <IconQuoteFilled size={28} className="mx-auto mb-4 text-primary" />
      <blockquote
        ref={quoteRef}
        className={`text-sm leading-relaxed text-muted-foreground ${
          expanded ? "" : "line-clamp-5 min-h-[7.11rem]"
        }`}
      >
        {testimonial.quote}
      </blockquote>
      {(overflows || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 inline-flex items-center gap-1 self-center text-xs font-medium text-primary transition-opacity hover:opacity-80"
        >
          {expanded ? "Shrink Testimonial" : "Full Testimonial"}
          <IconArrowUpRight size={14} />
        </button>
      )}
      <figcaption className="mt-6 text-sm">
        <span className="block font-semibold text-primary">
          {testimonial.name}
        </span>
        <span className="block text-xs text-muted-foreground">
          {testimonial.role}
        </span>
      </figcaption>
    </figure>
  );
}

function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const visible = testimonials.slice(
    page * TESTIMONIALS_PER_PAGE,
    (page + 1) * TESTIMONIALS_PER_PAGE,
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % testimonialPageCount);
    }, TESTIMONIAL_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [page]);

  const step = (direction: number) => {
    setPage(
      (current) =>
        (current + direction + testimonialPageCount) % testimonialPageCount,
    );
  };

  const arrowClass =
    "absolute top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent";

  return (
    <section id="testimonials" className="py-20">
      <h2 className="mx-auto mb-10 max-w-6xl px-6 text-2xl font-semibold tracking-tight md:text-3xl">
        Testimonials
      </h2>
      <div className="relative">
        <div className="mx-auto grid w-[min(calc(100%-8rem),72rem)] gap-x-8 gap-y-16 pt-14 md:grid-cols-3">
          {visible.map((testimonial, position) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              featured={position === 1}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
          className={`${arrowClass} left-4`}
        >
          <IconChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next testimonial"
          className={`${arrowClass} right-4`}
        >
          <IconChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

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

        <section
          id="capabilities"
          className="bg-muted"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--foreground) / 0.04) 0 1px, transparent 1px 14px)",
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
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

        <TestimonialsCarousel />

        <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 pb-24 pt-20 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Iam Bennett</span>
          <span>Designed in Fusion</span>
        </footer>
        </div>
      </main>
    </div>
  );
}
