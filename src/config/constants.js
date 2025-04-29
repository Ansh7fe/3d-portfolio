export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Experience",
    link: "#experience",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [6, -11, 0] : isMobile ? [9, -9.5, 0] : isTablet ? [12, -9.5, 0] : [21, -14, -10],
    reactLogoPosition: isSmall ? [6, 8, 0] : isMobile ? [8, 8, 0] : isTablet ? [12, 6, 1] : [14, 6,3],
    // ringPosition: isSmall ? [-27, 30, 0] : isMobile ? [-27, 28, 0] : isTablet ? [-35, 28, 0] : [-40, 28, 8],
    targetPosition: isSmall ? [-6, -11, -10] : isMobile ? [-10, -11, -10] : isTablet ? [-14, -12, -10] : [-20, -15, -8],
  };
};

export const myProjects = [
  {
    title: "Perclean Laundry - CMS platform",
    desc: "Perclean Laundry is a fullstack admin panel for a Pune-based laundry service. It empowers users to track clothing orders, generate invoices, manage sub-vendors, and maintain complete vendor details — all in a single intuitive platform.",
    subdesc:
      "Built as a unique CMS platform using Next.js 14, Material UI, Redux, and Javascript, it is optimized for performance, scalability, and seamless state management.",
    href: "#",
    texture: "/textures/project/project1.mp4",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Material UI",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/javascript.svg",
      },
    ],
  },
  {
    title: "Inque - Fullstack Q&A Platform",
    desc: "Inque is a production-ready fullstack social Q&A platform featuring secure two-factor authentication, dynamic profile management, post creation, comments, likes, and complete user activity history tracking.",
    subdesc:
      "Developed with React.js, Material UI, Redux, Express.js, and MongoDB — Inque ensures scalability, security, and efficient global state handling for a seamless user experience.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Material UI",
        path: "/assets/material-ui.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
    ],
  },
  {
    title: "Fixture Maker - Crossplatform App",
    desc: "Fixture Maker is a cross-platform application for dynamic fixture creation, automatic fixture tree generation, live theme switching, and one-click color scheme customization for various sports tournaments.",
    subdesc:
      "Crafted using React Native, Redux, TypeScript, and Tailwind CSS, Fixture Maker ensures efficient state management, responsiveness, and an outstanding cross-device experience.",
    href: "#",
    texture: "/textures/project/project3.mp4",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Typescript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Tata AIG",
    pos: "Software Engineer",
    duration: "July, 2024 - Present",
    title:
      "Designed scalable payment APIs using Nest.js and built a webhook to block funds until payment completion, improving transaction reliability. Developed dynamic UIs with Next.js and TypeScript, optimizing performance with memoization and revalidation.",
    icon: "/assets/TATA_AIG.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "mavQ",
    pos: "DevOps Engineer Intern",
    duration: "October, 2023 - March, 2024",
    title:
      "Built a Grafana dashboard with Prometheus to monitor metrics and reduce GCP costs by 35%. Developed shell scripts for EBS encryption and managed EKS clusters for deployment, enhancing cloud infrastructure and cost tracking with Python automation.",
    icon: "/assets/mavq.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Upwork",
    pos: "Full Stack Developer (Freelancer)",
    duration: "Nov, 2022 - July, 2024",
    title:
      "Built 2 full-stack web apps and 2 cross-platform mobile apps using React.js, React Native, Express.js, and MongoDB. Developed a Next.js Admin Portal and Tailwind-powered app for a laundry startup, boosting profits by ₹1 lakh+ with streamlined operations.",
    icon: "/assets/upwork.svg",
    animation: "salute",
  },
];