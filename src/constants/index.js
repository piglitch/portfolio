import { color } from "framer-motion";
import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    expressjs,
    nodejs,
    mongodb,
    git,
    Cognizant,
    carrent,
    rickandmortz,
    toDoList,
    cvBuilder,
    webNymph,
    bloggy,
    picker,
    next,
    postgres,
    go,
    aws,
    drizzle,
    prisma,
    redis,
    python
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
    {
      id: "github",
      title: "Github"
    },
    {
      id: "linkedin"
    }
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "Go",
      icon: go,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,    
    },
    {
      name: "Next",
      icon: next,
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
      name: "Express JS",
      icon: expressjs,
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
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "Drizzle",
      icon: drizzle,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Data warehouse Intern",
      company_name: "Cognizant technology Solutions",
      icon: Cognizant,
      iconBg: "black",
      date: "Dec 2021 - April 2022",
      points: [
        "I honed my technical skills through training in SQL and Git Bash while working as an Intern at Cognizant, prior to my full-time role.",
        "These experiences have equipped me with the ability to effectively analyze and troubleshoot complex issues and deliver quality results, making me a valuable asset to any team.",
      ],
    },
    {
      title: "Programmer Analyst",
      company_name: "Cognizant Technology Solutions",
      icon: Cognizant,
      iconBg: "black",
      date: "May 2022 - May 2023",
      points: [
        "Created reports and dashboards using Power BI, contributing to business intelligence solutions and insights for management.", 
        "Collaborated with cross-functional teams to understand technical requirements and resolve issues efficiently, enhancing problem-solving and communication skills."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Credence",
      icon: Cognizant,
      iconBg: "black",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Built a cron job using Node.js to migrate data from Google Sheets to MySQL, reducing manual effort by 90% and enhancing data integrity.", 
        "Designed and developed responsive user interfaces with Vue.js and Tailwind CSS, improving cross-device consistency and performance.",
        "Managed Git version control and collaborated with a team of developers, resolving merge conflicts and conducting code reviews to improve code quality and reduce bugs."
      ],
    },


  ];
  
  
  
  const projects = [
    {
      name: "Picker",
      description: `Picker is a fast, secure, and developer-friendly CDN (Content Delivery Network) designed to simplify media storage and retrieval. Picker enables developers to store and access assets like images, SVGs, and icons effortlessly. Whether you need to offload image storage from your app or reduce database size, Picker provides a streamlined solution with quick access times and scalable storage, backed by reliable cloud infrastructure.`,
      tags: [
        {
          name: 'ReactJS',
          color: "text-[#61DBFB]"
        },
        {
          name: 'Express',
          color: "text-white"
        },
        {
          name: 'AWS',
          color: "text-orange-400"
        },
        {
          name: 'Redis',
          color: "text-red-500"
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient"
        },
        {
          name: "Prisma",
          color: "green-text-gradient"
        },
      ],
      image: picker,
      source_code_link: "https://github.com/piglitch/picker",
      online_app_link: "https://www.pickercdn.com/",
    },
    {
      name: "Bloggy",
      description: `This blog app is built with cutting-edge technologies to ensure a smooth and secure experience. T3 Stack (TypeScript, Next.js, Drizzle): This powerful combination provides a robust foundation for the application, delivering optimal speed and efficiency.
      NextAuth.js: Securely manage user logins and protect user data with this robust authentication library. PostgreSQL with Drizzle ORM: Leverage the power of PostgreSQL for data storage and utilize Drizzle ORM for seamless interaction with the database.
      Tailwind CSS: Create a visually appealing and responsive user interface that adapts flawlessly to any device. Material UI (MUI): Maintain a consistent and user-friendly experience with a comprehensive set of beautiful and functional icons.`,
      tags: [
        {
          name: 'Next JS',
          color: 'pink-text-gradient',
        },
        {
          name: 'Tailwind',
          color: 'green-text-gradient'
        },
        {
          name: 'PostgreSQL',
          color: 'blue-text-gradient'
        },
        {
          name: 'Drizzle ORM',
          color: 'text-yellow-300'
        },
      ],
      image: bloggy,
      source_code_link: "https://github.com/piglitch/t3stacknextjs",
      online_app_link: "https://t3stacknextjs.vercel.app/",
    },
    {
      name: "Web nymph",
      description: `WebNymph is a dynamic shopping cart application that brings together the latest web technologies to provide a delightful user experience.
      Note: WebNymph is a Frontend Project and is not meant to be used commercially; the items shown in the website are just a bunch of dummy data fetched from Fake Store API.`,
      tags: [
        {
          name: 'React JS',
          color: 'pink-text-gradient',
        },
        {
          name: 'Tailwind',
          color: 'text-red-500'
        },
        {
          name: 'SASS',
          color: 'blue-text-gradient'
        },
        {
          name: 'Material UI',
          color: 'green-text-gradient'
        },
      ],
      image: webNymph,
      source_code_link: "https://github.com/piglitch/shopping-cart",
      online_app_link: "https://web-nymph.vercel.app/",
    },   
    {
      name: "Cv Easy",
      description:
        `Cv Easy stands out with its dynamic customization through React components, accelerated development powered by Vite, and a sleek and professional interface crafted with Material UI. Users benefit from real-time previews for seamless editing, while data persistence ensures the convenience of saving and retrieving progress. The deployment on Vercel guarantees high availability, scalability, and low-latency access, completing a comprehensive and efficient technology stack.`,
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "CRUD",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: cvBuilder,
      source_code_link: "https://github.com/piglitch/cv-builder",
      online_app_link: "https://cv-builder-bice.vercel.app/",
    },    
    {
      name: "twitterCloned",
      description:
        "A clone of twitter. To build this application I have used React on the frontend and for the backend I have used firebase. For styling, material ui and Tailwind have been used for ease of usage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase/firestore",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/piglitch/twitter_clone",
      online_app_link: "https://twitter-clone-ca46c.web.app/",
    },    
    {
      name: "Beautiful Rick and Morties and where to find them",
      description:
        `A dynamic web platform using HTML, CSS, and JavaScript (ES6) to provide detailed information about characters from the animated series "Rick and Morty". The application integrates with the Rick and Morty API for fetching character data and dynamically updates the webpage based on user input. Utilized Webpack for efficient bundling and ESLint for code quality.`,
      tags: [
        {
          name: "JavaScript/ES6",
          color: "blue-text-gradient",
        },
        {
          name: "Webpack",
          color: "green-text-gradient",
        },
        {
          name: "EsLint",
          color: "pink-text-gradient",
        },
        {
          name: "API integration",
          color: "green-text-gradient",
        }
      ],
      image: rickandmortz,
      source_code_link: "https://github.com/piglitch/Rick-and-Mortz",
      online_app_link: "https://rickandmortz.vercel.app/",
    },
    {
      name: "ToDo list",
      description:
        `This to-do list app is built using HTML, CSS, and JavaScript, and it leverages ES6 modules and the factory pattern for code organization. Users can create and manage projects with associated tasks. The app utilizes localStorage for data storage, allowing features like adding tasks, editing descriptions, and marking tasks as complete. Projects and tasks can be easily deleted. The UI includes buttons and icons for intuitive interaction.`,
      tags: [
        {
          name: "JavaScript/ES6",
          color: "blue-text-gradient",
        },
        {
          name: "Webpack",
          color: "green-text-gradient",
        },
        {
          name: "localstorage",
          color: "pink-text-gradient",
        },
        {
          name: "CRUD",
          color: "green-text-gradient",
        }
      ],
      image: toDoList,
      source_code_link: "https://github.com/piglitch/toDo",
      online_app_link: "https://to-do-lovat-two.vercel.app/",
    }    
  ];
  
  export { services, technologies, experiences, projects };