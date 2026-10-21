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
      cdn("9f1f2a47d47042269d4f345763bb3209"),
      cdn("a77db9f9002b470b89ecee3882ef0acc"),
      cdn("baa4d21418f54c55afa1aa3edfe2027a"),
      cdn("5052a63d37d2483097947706046f76a5"),
      cdn("dff3f57a15fa44d38495b4e64851a707"),
      cdn("51e2fcc968304a7b80e25c9b87aec0a6"),
      cdn("2fad9aab234c48cda78e0625d1b4235c"),
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
  {
    slug: "educational-directions-website",
    title: "Educational Directions Website",
    category: "Web design",
    description:
      "I designed the Educational Directions website in WordPress and created its graphic organizers, logos, and other site graphics. More recently, the team has integrated AI tools to help with blog posts and image creation for the site.",
    image: cdn("c914db390ae648efb77966d8e2e0a6df"),
    images: [
      cdn("c914db390ae648efb77966d8e2e0a6df"),
      cdn("db2f40a9ae964fa3a50720a2f89582a9"),
      cdn("08f5cd128dc04cb3821f94b18cad9748"),
      cdn("c395fce691fc48b7b0e808e4aa9f6b9c"),
    ],
  },
  {
    slug: "flex-av",
    title: "FLEX AV",
    category: "Branding and print",
    description:
      "FLEX AV is a brand of JAVS. I created the logo and branding for the line, along with marketing cut sheets and trade show displays. I used Illustrator, Photoshop, and InDesign to complete the work.",
    image: cdn("3f336e9d2ebe41ee8266726ac3326d70"),
    images: [
      cdn("3f336e9d2ebe41ee8266726ac3326d70"),
      cdn("0ab4bfbbb6654144a9f42cdf242fd3f5"),
      cdn("2ebe68af44bd4345adb956d0f5cbbfd0"),
      cdn("7f68866186664bb8ac836d612c0ee05a"),
      cdn("c4b2b071715d4f3cb3b5a8bfa7667d14"),
      cdn("da6c14ed787a4caf8965a7b0821b1a6f"),
      cdn("5febbe413b7449b7800360440180528d"),
      cdn("b5a308b6f6214790a7ba44e53c6e92c4"),
    ],
  },
  {
    slug: "zirmed-focus-on-healthcare",
    title: "ZirMed Focus on Healthcare Booklet",
    category: "Illustration and layout",
    description:
      "I created this marketing booklet for ZirMed, which was meant to be fun, colorful, and engaging. I illustrated every image in it and designed the layout. I used Illustrator and InDesign to complete the project.",
    image: cdn("746abde2bae1407ebd223b402068b3a3"),
    images: [
      cdn("746abde2bae1407ebd223b402068b3a3"),
      cdn("1663d7c06dc34ef29f2431e5116896cd"),
      cdn("2ff81d66211c40179f2517016620ca53"),
      cdn("0b82b180235043f7adec6d635e1aed22"),
      cdn("1a86dc51b90242509e5ce1584fb8d064"),
      cdn("9155703325af4b7982942757ea6529d9"),
      cdn("42baf4ff4c1742e78e32087750360cfd"),
      cdn("2af3eda1a80b4cc7839195dbe37a4029"),
      cdn("1430cae5a17b4576a9c69a36781f3592"),
      cdn("1fd05d3c983940ccae839742cc83a3f8"),
      cdn("d4c0bc8feb444ebe805a3b8c3adde3fe"),
      cdn("fbc098552ad142cb993d29cdf1fb458f"),
    ],
  },
  {
    slug: "hanna-the-best-so-far",
    title: "Joe Hanna Album Art - Multiple Albums",
    category: "Album design",
    description:
      "I was blessed to get to work with music artist Joe Hanna on several previous albums, and I was thrilled to get to design his best of cover and inner artwork. Created with Adobe Illustrator and Photoshop.",
    image: cdn("c3d792823aac46ed98ec7545c7652170"),
    images: [
      cdn("c3d792823aac46ed98ec7545c7652170"),
      cdn("f4e6bcf13b6b4f58b4a672165b9f4317"),
      cdn("8dc669b3a95a4fb5a4f345d2e95e05ef"),
      cdn("24976c24280644ad8e972c93da322b19"),
      cdn("2af5199caf8a40ec9be53de4a461791c"),
      cdn("efcfa91fd8874e24af76db0b7f55ac38"),
      cdn("ad762dd71200450f9b19fd11da6bee63"),
      cdn("22c2170cd41b4b00947bf17fe47d03df"),
      cdn("6b41056ce1264c549dbad1899a220eb2"),
      cdn("6547a9acd29b4248aa8f361948387273"),
    ],
  },
  {
    slug: "zirmed-healthcare-challenges-infographic",
    title: "ZirMed - Healthcare Challenges Infographic",
    category: "Infographic",
    description:
      "I created this infographic for the marketing team at ZirMed. It was featured on their website and in a few email campaigns. I used Illustrator to create these graphics.",
    image: cdn("60acc6dbcdc24ce2bd2017e9ded79ee9"),
    images: [cdn("60acc6dbcdc24ce2bd2017e9ded79ee9")],
  },
  {
    slug: "hope-for-leaders-in-the-2020s",
    title: "HOPE for Leaders in the 2020's",
    category: "Book design",
    description:
      "This is a book that I had the pleasure of working with Hope Zoeller, the author on. She initially asked me to work up some graphics for the inside of the book, but then also asked me to design the cover to match. I created these designs in Adobe Illustrator.",
    image: cdn("8ef944e3f81e4288b17a79aac355321c"),
    images: [
      cdn("a0c532fa9e474a429f23d59edad7acea"),
      cdn("8ef944e3f81e4288b17a79aac355321c"),
      cdn("19c86e314fa845468e6212d41d242e8a"),
      cdn("1f1c06d523824690bb24b22342f26ada"),
      cdn("834877f9b7814388b3fae093e7025426"),
      cdn("6a98fcb9a5a243a9b8dde1d5d2f1d741"),
      cdn("c9f16252b6874e7b92bb20c9df6de761"),
      cdn("e0b8cddee1e44c89974885965a12e63c"),
      cdn("0184fe3496b74f07976d30e6544b97d0"),
      cdn("91e859e04bdc4f5f9c9a6cfb18d28683"),
    ],
  },
  {
    slug: "javs-company-rebrand",
    title: "JAVS Company Rebrand",
    category: "Branding",
    description:
      "I was brought into JAVS specifically to help jumpstart a new marketing department. We began with a company rebrand. I was asked to take the current logo and give it a tech savvy update. I used Illustrator to accomplish this logo.",
    image: cdn("a060bb5d721d44b893506f194c506d5a"),
    images: [
      cdn("753288a0f5004ad1abeeedd725f772b5"),
      cdn("623905a40cda4982b2e52bfc8da642a3"),
      cdn("a060bb5d721d44b893506f194c506d5a"),
    ],
  },
  {
    slug: "therapycon-25-raintree-users-conference",
    title: "TherapyCon '25 - Raintree Users' Conference",
    category: "Event design",
    description:
      "I was asked to create all of the show graphics, signage, name badges, program, prospectus, and more for the Raintree Annual Users' Conference called TherapyCon. This was a huge project, and was an absolute blast to work on. The materials include room signs, floor displays, large backdrops, registration tables, event markers, and general signage.",
    image: cdn("5413a5e49d814660a6a273bd2aeff35f"),
    images: [
      cdn("03e043b19b5b479c826155000da8d9b6"),
      cdn("df13baf962544d51ac92c5308219a309"),
      cdn("43af0ef5eff14b9db5a8e0a705f07163"),
      cdn("ec5fafabf5bc43f5a198c96e50c389c3"),
      cdn("b99c8b4df0524458b0de036801269f48"),
      cdn("8da561c3e7204454b69bdd63d9da3970"),
      cdn("f41670ea3dc44c11916fd73a0d237ce5"),
      cdn("9685643373694342b0497a03f64a53e1"),
      cdn("61b7991c69604324ac19b3090e18a0b7"),
      cdn("602b95103b9049e3b8f0cca3378e938c"),
      cdn("86cf9fded27b4c138afe5851eb3f7d62"),
      cdn("2d6e4899946f4c5fa5d6bdc0e784b414"),
      cdn("5d98b45934584634b339d52a39cacaf2"),
      cdn("52762146aa534c74a6ca52c75324103c"),
      cdn("35af999ef97c433ca225245986d075a7"),
      cdn("c8d409dbd9274e15ab358be03fbd5043"),
      cdn("6ace78e919284962874899049220de37"),
      cdn("58c3ec9dffc64cd797d8586629e3b429"),
      cdn("73fa863476af428b98f056327c33f14e"),
      cdn("ce653e64c8564dbc827818a6653b3bf3"),
      cdn("f20990916e4f4c24bfdfa3302c638e47"),
      cdn("6d0d9a7694ff460ea2f299184b15a4ed"),
      cdn("5413a5e49d814660a6a273bd2aeff35f"),
      cdn("84a9ac87f983438fa19ba1cf127ba1f2"),
      cdn("33f186909dfa4c4f96780a72aecc425c"),
      cdn("24fe53f3ed814c228bdfe637559caa9f"),
    ],
  },
  {
    slug: "vine-trade-show-display",
    title: "VINE Trade Show Display",
    category: "Trade show design",
    description:
      "This was a project that I completed during my time at Appriss for VINE (Victim Information and Notification Everyday). It is a 100% vector backdrop and tablecloth display that I created using Adobe Illustrator.",
    image: cdn("022ce1d6133e4593863145982c8d0a08"),
    images: [
      cdn("022ce1d6133e4593863145982c8d0a08"),
      cdn("b4268ab63bab49b2a0d96906c00caa4a"),
      cdn("b5db6143b7a6452d9993f4a825f4f799"),
      cdn("84143951f2d141bd9b3d908d4c31ede0"),
    ],
  },
  {
    slug: "javs-website-redesign",
    title: "JAVS Website",
    category: "Web design",
    description:
      "While working at JAVS, I was asked to redesign the entire website from the ground up. We came up with new navigation, an entirely new design, and deployed it in under 6 months. Later, I was in charge of connecting this website to our marketing automation platform in order to better track and score users, collect leads through forms, and contact them using captured email and contact data.",
    image: cdn("f672bc67d9444f0cbe3146f64955d77b"),
    images: [
      cdn("f672bc67d9444f0cbe3146f64955d77b"),
      cdn("4c2aba0501c2416b812682352540b53f"),
      cdn("6d339ca4772048839398e0803c7fd104"),
    ],
  },
  {
    slug: "javs-various-advertisements",
    title: "JAVS - Various Advertisements",
    category: "Advertising",
    description:
      "While at JAVS, I had the opportunity to create several ads for industry publications, trade show advertisements, and more. Here is a selection of those.",
    image: cdn("f96a77d71da74d9990f89a37bd65bd50"),
    images: [
      cdn("f96a77d71da74d9990f89a37bd65bd50"),
      cdn("71bf96199e654332a30628f6bfb4938d"),
      cdn("40987985339c4b35aa5dd60f31b4b808"),
      cdn("4e82fb0bbfb54f7cb749ae58e2136457"),
      cdn("5b781e2325bc4837b00c1d332c2772b4"),
      cdn("ea95ef9a5fee442ab481e5026f7ce2af"),
      cdn("f0fdf74159094db386ad4ae26092abf1"),
      cdn("451e2a418b484abc86474edd615e1360"),
      cdn("417726d99afd43568fb0d80102f3b5e9"),
      cdn("df674d44d6174fedb5f1828ca989dbe1"),
      cdn("c5fa50455f8c4cedae6bd2ebd0c5ddc7"),
    ],
  },
  {
    slug: "zirmed-trade-show-booth-design",
    title: "ZirMed Trade Show Booth Design",
    category: "Trade show design",
    description:
      "ZirMed approached me and asked if I could make the graphics for a trade show display that they were purchasing. I worked with their marketing department to match their style guide and achieve the look they were going for. All of the images and patterns were drawn by me.",
    image: cdn("d692f25b0c524d478fa2370792df3180"),
    images: [
      cdn("d692f25b0c524d478fa2370792df3180"),
      cdn("4c611c7b66664d07a597273cda5368f6"),
      cdn("ff9c6bb7b85e41af8d0d6742393bc648"),
      cdn("8126f1352e3f48b1ba392acc6713730a"),
      cdn("5000f8ae8c5c499ebfed497d94bd31f6"),
      cdn("85912782a3d044259fbac0954041c0d1"),
      cdn("32ef3658874d4c07a335916978f422b3"),
    ],
  },
];
