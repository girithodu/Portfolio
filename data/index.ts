export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Jarvis The AI Assistant",
    des: "Jarvis is an AI assistant designed to analyze video transcripts, search books, process data, and retrieve customer, order, and comment information effortlessly.",
    img: "/jarvis-modified.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "c.svg", "/anthropic-white.svg"],
    link: "https://jarvis-girithodu-girijesh-thodupunuris-projects.vercel.app",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoom-clone-bay-seven.vercel.app",
  },
  {
    id: 3,
    title: "Stock Trading App",
    des: "A stock trading app built with Next.js, TypeScript, Python,and Flask. It allows users to buy and sell stocks.",
    img: "/robinhood.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/python-5.svg", "/c.svg"],
    link: "https://github.com/girithodu/stock-trading",
  },
  {
    id: 4,
    title: "Personal Blog",
    des: "A personal blog built with Next.js, Tailwind CSS, and Sanity. It allows admins to create, read, and delete blog posts.",
    img: "/blog-modified.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.svg", "/c.svg"],
    link: "https://gt-sanity-blog.vercel.app",
  }
];



export const testimonials = [
  {
    quote:
      "Girijesh is an outstanding software engineer and team member in agile environments. His effective communication and unwavering strength shine through. Girijesh's comprehension in authentication is truly exceptional, taking his contributions to the next level.",
    name: "Andy Moc",
    title: "Software Engineer",
  },
  {
    quote:
      "I had a fantastic experience working with Giri on the FreshFeasts mobile app. He's a strong collaborator who brings a great attitude to any project. In addition to being a great teammate, he's a skilled developer with strong attention to detail and determination to solve challenging problems. I strongly recommend Giri and wouldn't hesitate to work with him again!",
    name: "Caroline Robbins",
    title: "Full Stack Software Engineer",
  },
  {
    quote:
      "Girijesh is not only technically gifted, he also exhibits all the best qualities you look for in a team member. He is a reliable, empathetic, and naturally curious engineer who goes the extra mile to deliver strong results in his work. My experience working with Girijesh to refactor a monolithic API to a microservices architecture was top-notch and I highly recommend him as a software engineer.",
    name: "Joseph Camarena",
    title: "Software Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Founding Engineer",
    desc: "Built and AI Platform that helps business secure million dollar deals",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    desc: "Contributed to multiple open source projects, including React, Tailwind CSS, and TypeScript.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/girithodu",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/girijesh-thodupunuri/",
  },
];
