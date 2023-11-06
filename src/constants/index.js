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
    nodejs,
    mongodb,
    git,
    Cognizant,
    threejs,
    carrent,
    rickandmortz,
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
      title: "Frontend Developer",
      icon: web,
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
      source_code_link: "https://github.com/piglitch/Beautiful-Rick-and-Morties-and-where-to-find-them",
      online_app_link: "https://rickandmortz.vercel.app/",
    },
    {
      
    }

    
  ];
  
  export { services, technologies, experiences, projects };