import { SiteHeader } from "@/components/site-header";

export function meta() {
  return [{ title: "Resume — Iam Bennett" }];
}

const experience = [
  {
    company: "Educational Directions",
    roles: [
      {
        title: "Director of Operations & Marketing",
        dates: "Jan 2020 – Present",
        bullets: [
          "Collaborate with the president to assist in developing and tracking company budgets, recommend and implement process improvements, conduct customer, brand, and product research, identify new business opportunities, and manage projects and assignments.",
          "Collaborate with the Chief Innovation Officer to develop company narratives for marketing and informational purposes; create and publish blog and social media content; develop professional development sessions, recordings, and production; prepare RFP responses and product narratives; and develop marketing materials.",
          "Collaborate with the Chief Academic Officer to monitor and account for lead and content coaching days; serve as a point of contact for lead and content coaches; ensure new employees are onboarded and set up for payment; track billing and coaching time against contract deliverables; and ensure billing accuracy.",
          "Guided social media strategy for corporate, product, and software channels, maintaining a consistent brand voice.",
          "Coordinated materials and logistics for more than 200 trade shows and events annually.",
        ],
        highlights: [
          "22% increase in average user engagement time",
          "38% organic traffic increase over 2025 YTD",
          "29% more sessions",
          "19.3% increase in page views",
        ],
        highlightsLabel: "Web improvements",
      },
      {
        title: "Director of Marketing",
        dates: "Nov 2018 – Jan 2020",
        bullets: [
          "Shaped branding and corporate identity initiatives that strengthened market presence and ensured a consistent, recognizable brand.",
          "Conceptualized and created the company's graphic design materials.",
          "Designed, built, and managed the company website and email marketing initiatives.",
          "Produced high-quality presentations for in-person, live virtual, and prerecorded professional development sessions that engaged and supported educators.",
          "Collaborated with the Chief Innovation Officer to create a robust company blog, training materials, and a collection of educator worksheets and booklets.",
          "Collaborated with the company president to develop engaging, relevant responses to RFPs.",
          "Designed and maintained the company's trade show exhibit materials.",
        ],
      },
    ],
  },
  {
    company: "Freelance — iambennett.com",
    roles: [
      {
        title: "Freelance Designer",
        dates: "Jan 2008 – Present",
        bullets: [
          "Provide full-service creative support to clients nationwide, from startups building their brands to established corporations looking to sharpen their competitive edge.",
          "Work spans business cards, sales sheets, large-format trade show displays, websites, and more.",
          "Every project starts with understanding each client's goals and audience, then turning those insights into clear, compelling design.",
        ],
      },
    ],
  },
  {
    company: "Justice AV Solutions",
    roles: [
      {
        title: "Director of Marketing",
        dates: "Aug 2017 – Nov 2018",
        bullets: [
          "Led a three-person team comprising a social media manager, a writer, and an events coordinator.",
          "Directed brand identity for JAVS and sub-brands FLEX AV, Notewise, Centro, AVIX, and others; created a branding guide to ensure consistent logo use.",
          "Designed marketing collateral from concept through production, including brochures, sales sheets, packaging, trade show displays, direct mail, and case studies.",
          "Served as the in-house creative resource for every department, designing newsletters, presentations, annual reports, and recruiting materials.",
          "Designed, built, and maintained the company website, integrating web analytics with the NetSuite CRM/ERP.",
          "Managed Act-On marketing automation to run email campaigns, score leads, and route qualified prospects to sales.",
          "Directed agencies, consultants, freelancers, and suppliers to deliver quality work on time and within budget.",
        ],
        highlights: [
          "31% increase in Google Search Traffic over two years",
          "429% increase in international traffic",
          "23.68% decrease in bounce rate",
        ],
        highlightsLabel: "Web improvements",
      },
      {
        title: "Senior Graphic Designer",
        dates: "Jan 2016 – Aug 2017",
        bullets: [
          "Shaped branding and corporate identity initiatives.",
          "Tracked and controlled marketing budgets, aligning spending with company goals.",
          "Designed and launched advertising, public relations, social media, and event campaigns to drive engagement and growth.",
          "Designed and created the company website and integrated an email marketing and customer-scoring platform (Act-On).",
          "Produced multimedia presentations for in-person, live virtual, and recorded professional development sessions for educators.",
          "Developed graphics and multimedia that brought company projects and initiatives to life.",
        ],
      },
    ],
  },
  {
    company: "Appriss",
    roles: [
      {
        title: "Senior Graphic Designer",
        dates: "Nov 2006 – Jan 2016",
        bullets: [
          "Directed the visual identity and brand consistency of marketing materials for Appriss products and services, ensuring a cohesive look and feel across multiple product lines.",
          "Guided graphics and multimedia projects from concept through final delivery across several product lines and services.",
          "Produced page layouts for print and digital marketing materials that presented product information clearly and consistently.",
          "Created large-format graphics and trade show displays that gave the company a consistent brand presence at industry events.",
          "Managed audio and video editing and production, delivering multimedia content that extended brand messaging across digital channels.",
        ],
      },
    ],
  },
  {
    company: "AAA Kentucky",
    roles: [
      {
        title: "Public Affairs Representative / Designer",
        dates: "2001 – 2006",
        bullets: [],
      },
    ],
  },
  {
    company: "Coca-Cola Enterprises",
    roles: [
      {
        title: "Customer Service Specialist",
        dates: "1999 – 2000",
        bullets: [],
      },
    ],
  },
];

const notableProjects = [
  "Before the Applause book: Book illustrator; created more than 500 individual hand-drawn illustrations.",
  "Activating Hope podcast: Executive producer, audio editor, and sound engineer.",
  "TherapyCon (Raintree, Inc.): Created display graphics for the entire trade show, including directional and room signs, large-scale thematic displays, a printed show booklet, informational inserts, name badges, and more.",
  "Justice AV Solutions rebrand: Delivered a complete company rebrand, from logo development to a website overhaul, sales sheets, promotional materials, trade show displays, business cards, building signage, and more.",
];

const professionalSummaryClosing =
  "I have more than 25 years of experience helping companies across the United States strengthen their brands and stand out through innovative design and targeted marketing. Along the way, I've led national marketing campaigns and product launches in fields as varied as law enforcement, K–12 education, and enterprise pharmacy systems. Each experience has reinforced the same lesson: great marketing starts with understanding the people you want to reach.";

const skills = [
  ["Brand strategy & identity", "Positioning; messaging; campaigns"],
  [
    "Creative design",
    "Graphic design; large- and small-format design; logos and branding; presentations; cut sheets; banners; illustration; websites; UI/UX",
  ],
  ["Multimedia", "Audio editing; video editing; photography; web graphics"],
  [
    "Marketing",
    "Direct mail; email campaigns; SEO/SEM; analytics; planning and execution",
  ],
  [
    "Software & tools",
    "Adobe Creative Suite; WordPress; HTML/CSS; Google Analytics; Canva; Microsoft Office; AI tools; marketing automation; Mac/PC",
  ],
];

export default function ResumeRoute() {
  return (
    <div className="h-full min-h-0 flex-1 overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          William (Iam) Bennett
        </h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-primary">
          Marketing | Branding | Strategy
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          10620 Gleneagle Place, Louisville, KY 40223 · 502-797-8997 ·
          ibennett00@gmail.com · www.iambennett.com
        </p>

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Professional summary
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed">
            <p>
              I'm Iam Bennett, a marketing director and multimedia designer who
              loves solving creative challenges. Give me a client goal and a
              blank canvas, and I'll find a smart, memorable way to get there.
              I serve as Director of Operations & Marketing for Educational
              Directions, LLC, in Louisville, Kentucky, where I help keep the
              work running smoothly and the brand looking sharp. I also run a
              freelance marketing practice.
            </p>
            <p>{professionalSummaryClosing}</p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Professional experience
          </h2>
          <div className="mt-6 space-y-12">
            {experience.map((job) => (
              <div key={job.company}>
                <h3 className="text-xl font-semibold tracking-tight">
                  {job.company}
                </h3>
                <div className="mt-6 space-y-8 border-l border-border pl-6">
                  {job.roles.map((role) => (
                    <div key={role.title + role.dates}>
                      <p className="font-medium">
                        {role.title}
                        <span className="text-muted-foreground">
                          {" "}
                          | {role.dates}
                        </span>
                      </p>
                      {role.bullets.length > 0 && (
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                          {role.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {role.highlights && (
                        <div className="mt-4 text-sm">
                          <p className="font-medium">{role.highlightsLabel}</p>
                          <ul className="mt-1 space-y-1 text-muted-foreground">
                            {role.highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Notable projects
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
            {notableProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills and expertise
          </h2>
          <dl className="mt-6 space-y-4">
            {skills.map(([label, value]) => (
              <div key={label}>
                <dt className="font-medium">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </h2>
            <p className="mt-6 font-medium">B.S., Spalding University — May 2000</p>
            <p className="text-muted-foreground">
              Major: Communications | Minor: Business Writing
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Volunteering
            </h2>
            <p className="mt-6 text-muted-foreground">
              Louisville Male Marching Band (Board Treasurer); A Hand Up CRC;
              Dare to Care; Mary Byron Project; Angels Pageant System; MAP
              Louisville
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:items-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fbcb50ddddfe34df1833554796fdab2ea?format=webp&width=800&height=1200"
            alt="Iam Bennett"
            className="h-28 w-auto"
          />
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {professionalSummaryClosing}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ibennett00@gmail.com"
                  className="text-primary transition-opacity hover:opacity-80"
                >
                  ibennett00@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15027978997"
                  className="text-primary transition-opacity hover:opacity-80"
                >
                  502-797-8997
                </a>
              </li>
              <li className="text-muted-foreground">
                10620 Gleneagle Place, Louisville, KY 40223
              </li>
              <li>
                <a
                  href="https://www.iambennett.com"
                  className="text-primary transition-opacity hover:opacity-80"
                >
                  www.iambennett.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
