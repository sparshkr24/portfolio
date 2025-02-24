import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import cybernet from "../assets/cybernet.png"
import cineverse from "../assets/cineverse.png"
import swipe from "../../public/swipe-circle.png"
import scaler from "../../public/scaler.jpg"
import security from "../../public/8ksec.png"
import iiitj from "../../public/iiitj.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "Languages",
    icon: javascript,
  },
  {
    title: "Frameworks & Libraries",
    icon: reactjs,
  },
  {
    title: "Databases",
    icon: mongodb,
  },
  {
    title: "Tools",
    icon: git,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Swipe (YC S21)",
    icon: swipe,
    iconBg: "#fff",
    date: "July 2024 - Ongoing",
    points: [
      "Developed 15+ ERP features, including document tracking, multi-tax support, and scalable bulk uploads for 10K+ entries.",
      "Ensured data integrity in inventory transactions, identified bugs via sanity scripts and backfilled 10M+ records using parallel processing, batching and bulk operations.",
      "Optimized internal sales workflows, integrating automation and marketing campaign tools, boosting sales efficiency 4x.",
      "Tech Stack: Typescript, React, Tailwind, Python, Flask, OOPs, Threads, MySQL, Azure, Git.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Scaler By InterviewBit",
    icon: scaler,
    iconBg: "#fff",
    date: "Dec 2023 - June 2024",
    points: [
      "Built scalable React components with Redux & React Query, driving a 35% increase in user retention via Mixpanel analytics.",
      "Participated in code reviews, ensuring performance, quality, and scalability across production systems.",
      "Tech Stack: HTML5, SCSS, React, Redux, JavaScript, MySQL, RoR, AWS, Git, Jira.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "8kSec",
    icon: security,
    iconBg: "#000000",
    date: "May 2023 - Oct 2023",
    points: [
      "Led a team to build a fraud detection app from scratch, taking full ownership of development.",
      "Enhanced data visualization with 10+ interactive charts/maps, reducing API calls by 30% via optimized Redux state management.",
      "Automated messaging queues and cron jobs within an event-driven Python architecture.",
      "Tech Stack: TypeScript, Next.js, Node, Python, PostgreSQL, AWS, GitHub Actions.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "IIIT Jabalpur",
    icon: iiitj,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developed 5+ ERP features for 3000+ users, enhancing the institute's ERP software.",
      "Optimized database schemas and backend logic, doubling performance and robustness of academic modules.",
      "Conducted code reviews, ensuring high-quality standards and maintainability.",
      "Tech Stack: Python, Django, PostgreSQL.",
    ],
  },
];

const testimonials = [
  {
    testimonial:  
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CyberNet",
    description:
      "A social networking website for programmers to connect and share ideas with each other. Implemented features like authentication, user profiles, posts, and comments",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: cybernet,
    source_code_link: "https://github.com/sparshkr24/Cybernet2",
  },
  {
    name: "Cineverse",
    description:
      "Fully-Responsive and visually-stunning Movie viewing website. Integrated REST API of tmdb database of 140,000+ titles with 3+ categories like top-rated, upcoming etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cineverse,
    source_code_link: "https://github.com/sparshkr24/CineVerse",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresQL",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sparshkr24",
  },
];

export { skills, technologies, experiences, testimonials, projects };
