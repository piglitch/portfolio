import {
    mobile,
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
    threejs,
    carrent,
    rickandmortz,
    toDoList,
    cvBuilder,
    webNymph,
    rc,
    picturesque,
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
        "As a Programmer Analyst at Cognizant, I played a key role in delivering data integration reports and effectively managing client tickets.", 
        "I worked closely with a team of skilled developers, fostering a collaborative environment to address data-related challenges and ensure seamless operations.", 
        "By leveraging my technical expertise and strong problem-solving skills, I consistently delivered high-quality reports that met client requirements.", 
        "Additionally, I actively participated in troubleshooting sessions, contributing valuable insights to resolve data-related issues and improve overall system performance.", 
        "Through effective communication and teamwork, I facilitated efficient collaboration with cross-functional teams, resulting in successful project outcomes.", 
        "I am confident in my ability to contribute to any organization by leveraging my collaborative mindset and technical acumen to overcome data-related challenges and drive impactful results.",
      ],
    },

  ];
  
  
  
  const projects = [
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
          color: 'green-text-gradient'
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
      name: "Readerscult",
      description: `Readers' Cult is a comprehensive library app designed for efficient book management. Leveraging Express.js and MongoDB, it offers CRUD (Create, Read, Update, Delete) functionalities for books, authors, and genres. The backend employs Express.js for routing and middleware management, while MongoDB facilitates data storage. The frontend is elegantly rendered using templating engines, ensuring a seamless user experience.`,
      tags: [
        {
          name: 'Express',
          color: 'green-text-gradient',
        },
        {
          name: 'Bootstrap',
          color: 'pink-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Pug',
          color: 'blue-text-gradient'
        },
      ],
      image: rc,
      source_code_link: "https://github.com/piglitch/readerscult",
      online_app_link: "https://readerscult.up.railway.app/",
    },
    {
      name: "Picturesque",
      description: `This sleek app, powered by Express.js and MongoDB, offers intuitive CRUD functionalities for pictures and albums. Express.js handles backend routing and middleware, while MongoDB ensures efficient data storage. The frontend is elegantly designed for a smooth user experience. With Snapshot Savvy, simplify your picture management effortlessly.`,
      tags: [
        {
          name: 'Express',
          color: 'green-text-gradient',
        },
        {
          name: 'Bootstrap',
          color: 'pink-text-gradient'
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient'
        },
        {
          name: 'Pug',
          color: 'blue-text-gradient'
        },
      ],
      image: picturesque,
      source_code_link: "https://github.com/piglitch/inventory-app",
      online_app_link: "https://picturesque.up.railway.app/catalog",
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
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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