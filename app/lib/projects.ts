const cdn = (id: string) =>
  `https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2F${id}?format=webp&width=800&height=1200`;

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  image?: string;
  gradient?: string;
  description?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "american-boat-and-yacht",
    title: "American Boat & Yacht",
    category: "Website and brand identity",
    image: cdn("d7986beb7cbb4baab6102cba8c2b32f8"),
    images: [
      cdn("d7986beb7cbb4baab6102cba8c2b32f8"),
      cdn("4364ee0c300547ccbc0d1868cbb1f920"),
      cdn("7f43e3f8cc7345e697e9ef1fcc32d5d8"),
      cdn("f488b277735f45f0b3094f819ef828b5"),
    ],
  },
  {
    slug: "andrea-go-bowl-t-shirt",
    title: "Andrea Go Bowl T-Shirt",
    category: "T-shirt design",
    description:
      "BJ Thorne, founder of the Arkansas Angels Pageant, approached me about a fundraiser she was organizing to benefit hydrocephalus awareness. The fundraiser was a bowling event, so I designed the shirt around a bowling theme, with a hand signing \"I love you\" in American Sign Language. The shirt was created in Adobe Illustrator.",
    image: cdn("6724c11da5934bf0bdf7d01760a3876f"),
    images: [
      cdn("6724c11da5934bf0bdf7d01760a3876f"),
      cdn("4e800867beb2472a8473e9a33a4c314f"),
      cdn("ac1c27831d8f48148f40c54c321c5fdf"),
      cdn("af32c516319f4875bf20722b61c7bb8b"),
    ],
  },
  {
    slug: "angels-pageant-system",
    title: "Angels Pageant System",
    category: "Branding and print",
    description:
      "The Angels Pageant System is a non-profit that puts on free pageants for children with disabilities. While volunteering with the organization, I created its branding, business cards, folders, brochures, websites, T-shirt graphics, and more.",
    image: cdn("5291385798ac45d98e0561878c6000bd"),
    images: [
      cdn("5291385798ac45d98e0561878c6000bd"),
      cdn("83e1663cc9cf4182a765977b753f0a4e"),
      cdn("ac4f4365e2a440ef893c246723eefdb4"),
      cdn("561e14fda03e440d80b97bdfb16b5483"),
    ],
  },
  {
    slug: "appriss-corporate-site-redesign",
    title: "Appriss Corporate Site Redesign",
    category: "Website design and development",
    year: "2015",
    description:
      "This was a redesign of the Appriss.com corporate site. The company hosted the website internally and did not want any content management system running on its servers, so I hand coded everything in HTML and CSS. I also created all of the images for the site. The project spanned over 50 unique pages, and web traffic increased by 27% in the year following the update.",
    image: cdn("6e45be8be62a423082f70ebfab3ba6f6"),
    images: [
      cdn("6e45be8be62a423082f70ebfab3ba6f6"),
      cdn("e113b38ae8a24103be6526725e372fcc"),
      cdn("63d1f63f178e4137ae5088a47cbfd108"),
      cdn("30161e088efb44b694efc1fa2c3e817a"),
      cdn("e6100db8cf1542c885c7e9bfd8f399dd"),
      cdn("1f0b74d16dff4e889543d574880e6ded"),
    ],
  },
  {
    slug: "appriss-trade-show-display",
    title: "Appriss Trade Show Display",
    category: "Trade show design",
    description:
      "I designed this trade show display for Appriss using Adobe Illustrator and Photoshop to create the large-scale print files the build required.",
    image: cdn("3a2526c8047642c0b90a1352fff0cf4f"),
    images: [
      cdn("3a2526c8047642c0b90a1352fff0cf4f"),
      cdn("930a1893400e41f1b590a1ef7554bab1"),
      cdn("be6e5c09758a4a4a9ec8186f60ab6ad0"),
      cdn("7575bb69631641f3b98af4ee69ea6589"),
    ],
  },
  {
    slug: "art-in-speed-park",
    title: "Art in Speed Park",
    category: "WordPress website design",
    description:
      "Art in Speed Park is an annual art show in Speed Park, in southern Indiana. I built this website in WordPress and added custom code and CSS customizations so the site would stand out visually.",
    image: cdn("4a3a41ff1361435a88d7f718bf00d356"),
    images: [
      cdn("4a3a41ff1361435a88d7f718bf00d356"),
      cdn("e0cbf5e63b254a7c9e0f768956c53a7e"),
      cdn("6c594d0826c248659394bf9efe437d7c"),
      cdn("ec72d14c027d4e17986832be664ef0f9"),
    ],
  },
  {
    slug: "before-the-applause",
    title: "Before the Applause",
    category: "Book illustration",
    description:
      "This project is from the book, \"Before the Applause - Why Artists Need to be Good Project Managers.\" I was honored to be the illustrator for this book. The writers approached me and were very open to whatever ideas I had, so after a few rounds of sketches, we decided on some fun characters that represented different artistic ventures, and I started working in Illustrator to create the over 500 hand sketched images for this book. Find it now at Amazon.com!",
    image: cdn("dc043dfa1e194f8dbffc17cdbda7dc8b"),
    images: [
      cdn("dc043dfa1e194f8dbffc17cdbda7dc8b"),
      cdn("dab6c1c97d2d45979105859f34c6fc6b"),
      cdn("87433ff2ec9a4690ac159df5eac5e9d8"),
      cdn("82ead03405504e46823b1ce83ce954d1"),
      cdn("1c9909ba23a844c3962f96bf12f91e94"),
      cdn("4b209de5187d47c4bfdee17ba06c5975"),
      cdn("b0dad4a6a92f4b26bb5d2a4b01f52a83"),
    ],
  },
  {
    slug: "turning-around-turnaround-schools",
    title: "Turning Around Turnaround Schools",
    category: "Book cover design",
    description:
      "The project is a book cover that I designed for Turning Around Turnaround Schools. This book is about getting to the root causes of why schools fail, and how to turn them around. Find it on Amazon.com today.",
    image: cdn("44f51eac3d93449e8d60a717454820ea"),
    images: [
      cdn("44f51eac3d93449e8d60a717454820ea"),
      cdn("91a11f1b4bed4a07a54c47ba9c2b9fc4"),
      cdn("6432c75480164b06b242e0165ceb1680"),
    ],
  },
  {
    slug: "northwind-brand-system",
    title: "Northwind Brand System",
    category: "Brand identity",
    year: "2026",
    gradient: "from-blue-500 via-sky-400 to-cyan-300",
  },
  {
    slug: "field-notes-app",
    title: "Field Notes App",
    category: "Product design",
    year: "2025",
    gradient: "from-stone-700 via-stone-500 to-blue-300",
  },
  {
    slug: "harbor-editorial",
    title: "Harbor Editorial",
    category: "Editorial",
    year: "2025",
    gradient: "from-blue-600 via-blue-300 to-sky-100",
  },
  {
    slug: "pulse-dashboard",
    title: "Pulse Dashboard",
    category: "Web design",
    year: "2024",
    gradient: "from-zinc-900 via-zinc-700 to-blue-500",
  },
  {
    slug: "study-motion-series",
    title: "Study Motion Series",
    category: "Motion",
    year: "2024",
    gradient: "from-sky-300 via-blue-500 to-indigo-600",
  },
  {
    slug: "atlas-design-system",
    title: "Atlas Design System",
    category: "Design systems",
    year: "2023",
    gradient: "from-neutral-200 via-blue-200 to-sky-300",
  },
];
