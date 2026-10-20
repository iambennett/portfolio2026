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
    slug: "appriss-choice-ui-design",
    title: "CHOICE for Appriss",
    category: "UI design",
    description:
      "I designed the graphical user interface for CHOICE, a product for Appriss. I created it in Illustrator and Photoshop, and worked with the engineers at the company to export the necessary images, recreate the styles, and generate the animations needed for the user experience.",
    image: cdn("33aa0aaf7fbe47469ec1ad8b48d8c9cd"),
    images: [
      cdn("33aa0aaf7fbe47469ec1ad8b48d8c9cd"),
      cdn("49eb8142f58e4647a98839c787c12cdd"),
      cdn("a178e0c7fe214f72afb575d7784bd3a3"),
      cdn("009a605f77544ff288928d89fb230c95"),
      cdn("0c8e08c4e8fd4c479653a8db37e225d1"),
      cdn("44b472f3b4c5477aabc96c4fe4f41547"),
    ],
  },
  {
    slug: "chronic-illness-counseling-center",
    title: "Chronic Illness Counseling Center",
    category: "Branding and marketing",
    description:
      "This is a branding project that I did for Chronic Illness Counseling Center. Created in Illustrator, the branding resembles a dandelion with petals floating off into the wind. I also created business cards, a website, and some marketing material for the company.",
    image: cdn("574783926607433890b3e818559157ac"),
    images: [
      cdn("574783926607433890b3e818559157ac"),
      cdn("b1ccd8a4f58140f99f8793a15c4681e0"),
      cdn("33aed511f9374c5fa9e7e7955374001b"),
      cdn("46f39eeea16b4c6b8da545952a9c523b"),
    ],
  },
  {
    slug: "javs-direct-mail",
    title: "Justice AV Solutions Direct Mail",
    category: "Direct mail",
    description:
      "This is a direct mail piece that I completed while working for Justice AV Solutions (JAVS). The mailing list was curated from web leads that we gathered after I integrated a marketing automation platform (Act-On) into the company website. This mailer was created in Adobe InDesign and Adobe Illustrator.",
    image: cdn("d5feedec14464fc8b16683ce9680b238"),
    images: [
      cdn("d5feedec14464fc8b16683ce9680b238"),
      cdn("1e3ce61421e04d29b4dc5eb3c47e7f6a"),
      cdn("5cc9c6375b1c44c69e2adb4117f3c777"),
      cdn("690d226a1cd345aaa96ec457b93e54aa"),
    ],
  },
  {
    slug: "educational-directions-sales-sheets",
    title: "Educational Directions Sales Sheets",
    category: "Sales collateral",
    description:
      "This is a company sales sheet project that I completed for Educational Directions. I created it using Adobe Photoshop, Illustrator, and InDesign.",
    image: cdn("44965928790b4366b3c1a8df597b1b03"),
    images: [
      cdn("44965928790b4366b3c1a8df597b1b03"),
      cdn("2e31a0ac2011413faebbc9cbedc0f637"),
      cdn("2b535a2fae9a4aab83a9d6c7e9e9dfda"),
      cdn("5e80ed84896e4cbc93c379e3c37cc673"),
    ],
  },
  {
    slug: "graham-financial-services",
    title: "Graham Financial Services",
    category: "Branding and web design",
    description:
      "Denise Graham, the owner, approached me about rebranding her company so that several smaller businesses could sit under one umbrella, Graham Financial Services. This project includes the logo for the main company and the D&G Tax & Financial Services branding and website. I created the branding and website elements in Adobe Photoshop and Illustrator, and built the website in WordPress.",
    image: cdn("2044f60f60c7424fb69b6f904ab8b3f6"),
    images: [
      cdn("2044f60f60c7424fb69b6f904ab8b3f6"),
      cdn("afab0d902f134f599a403552813a6b7f"),
      cdn("1356574a58f04128a8224ceff391cc7f"),
      cdn("ae088ed2cbb346ac867d9d2b71b9a0cd"),
    ],
  },
  {
    slug: "dynamic-wellness",
    title: "Dynamic Wellness",
    category: "Branding, print, and web design",
    description:
      "Dynamic Wellness had no branding and no website when I started working with the owner. Together we created the logo, business cards, sales sheets, folders, and other sales materials. This project also includes a rebrand of the initial website that I created for her. I used Photoshop and Illustrator for the branding and web imagery, and deployed the website through WordPress.",
    image: cdn("b3f942b45e3e40f8bda78fc652cad0cd"),
    images: [
      cdn("b3f942b45e3e40f8bda78fc652cad0cd"),
      cdn("b4bc4326127e499d958fdb15de431bf1"),
      cdn("4e5f58d776964b06a0bc9b2d3f17e8b1"),
      cdn("5aeb2a1e56a84d568a2cd863acbff6a0"),
      cdn("2f55e41e61ee46e2a8109ef329ad2be2"),
      cdn("2790689751ec40ac855b81ec9c2b4a3a"),
    ],
  },
  {
    slug: "educational-directions-rebrand",
    title: "Educational Directions Rebrand",
    category: "Branding",
    description:
      "I have designed several iterations of logos for Educational Directions over the years, along with the branding that accompanied each version. This is the most recent branding for the company. I have also created its marketing materials, website, business cards, trade show displays, and direct and email marketing campaigns.",
    image: cdn("fe3740bd3c1f42829bf2db09162b9b48"),
    images: [
      cdn("fe3740bd3c1f42829bf2db09162b9b48"),
      cdn("4a345d08c0f04cd1a70a9ededa653fb2"),
      cdn("80d16f13f6684a6c838b6929ee74383f"),
    ],
  },
];
