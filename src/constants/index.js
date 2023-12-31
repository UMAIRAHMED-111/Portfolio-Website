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
  meta,
  starbucks,
  tesla,
  shopify,
  upwork,
  br,
  gdsc,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: backend,
  },
  {
    title: "NodeJs Developer",
    icon: creator,
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
    title: "Freelance Software Engineer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developing mern stack web applications using React.js, Next.Js and other related technologies.",
      "Utilizing Node.Js using Express.Js on the server side",
      "Use styling solutions such as MaterialUI, TailwindCSS and Styled Components for eye catching user interfaces",
      "Use of Dockers and Kubernetes for containerization",
      "Made use of reacts premium state management solution 'Redux' to manage state across entire website",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Registrations Head",
    company_name: "Developer Student Clubs - IBA",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - August 2023",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Collaborating with development team to create user-friendly website for event information and event registration",
      "Coordinated and managed the online registration portal for the event HackFest.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Brothers Roofing",
    icon: br,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Developed entire website using the MERN stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design, responsive Styling done using Tailwind CSS",
      "Participating in code reviews and providing constructive feedback",
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
    name: "Airline Management System",
    description:
      "Web-based platform that allows users to search, book, and manage airlines, providing a convenient and efficient solution for air travel needs. User facing website + admin dashboard + ERP for pilots, managers, crews and engineers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crown Clothing - An Ecommerce Website",
    description:
      "A cutting-edge React ecommerce project with React 18, GraphQL, Redux, and Firebase. Master React features, state management, architecture decisions, and PWA conversion. Test with Jest, Enzyme, and Stripe API for online payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Brother's Roofing Website - Ontario (Canada)",
    description:
      "A landing page for a Roofing Services provider located in Ontario Canada. Website created using react with Custom Backend using the MERN stack. Styled using Tailwind CSS. State management using Redux.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
