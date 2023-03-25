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
  carrent,
  jobit,
  tripguide,
  threejs,
  C,
  python,
  sql,
  iit,
  news,
  poke,
  pintrest,
  yoga,
  todo,
  github,
  linkedin,
  leet
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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name:"C++",
    icon: C,
  },
  {
    name:"Python",
    icon: python,
  },
 
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name:"SQL",
    icon: sql,
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
];

const experiences = [
  {
    title: "Apprentice",
    company_name: "IIT BHU",
    icon: iit,
    iconBg: "#383E56",
    date: "December 20221 - March 2022",
    points: [
      "Tech Stack: Pytorch, Keras, and TensorFlow.",
      "News Video Captioning- A ML model that shows video captions of the actions/events happening in the video.",
      "Worked on the deep learning model that helped around 2k+ blind people to understand daily news with help of actions during my apprentice period.",
      "Collaborate with fellow colleagues to manually label the dataset for training the model.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "News Portal",
    description:
      "A real-time web-based application that displays news and its categories, along with the source, date, and time.",
    tags: [
      {
        name: "HTML/CSS,JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Anishguptaprog/News-Project",
  },
  {
    name: "Yoga Site",
    description:
      "Web application that enables users to register for yoga classes at three different levels and also lets you connect to other social media",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: yoga,
    source_code_link: "https://github.com/Anishguptaprog/Yoga-site",
  },
  {
    name: "Pokemon Kingdom",
    description:
      "A frontend catalog application uses ”PokeAPI” to show trending Pokemon details and characteristics in cards.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/Anishguptaprog/Pokemon-Catalouge",
  },
  {
    name: "To-do List",
    description:
      "A simple To-do List using reactJS",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Anishguptaprog/ToDoList-",
  },
  {
    name: "Pintrest Clone",
    description:
      "A printrest clone allows user to login and upload pictures from their devices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pintrest,
    source_code_link: "https://github.com/Anishguptaprog/Pintrest-clone",
  }
];
const contact = [
  {
    title: "Linkedin",
    icon: linkedin,
    source: "https://www.linkedin.com/in/anish-gupta-6a67061b9/"
  },
  {
    title: "Github",
    icon: github,
    source: "https://github.com/Anishguptaprog"
  },
  {
    title: "Leetcode",
    icon: leet,
    source: "https://leetcode.com/kingsman_21/"
  },
];

export { services, technologies, experiences, testimonials, projects, contact };
