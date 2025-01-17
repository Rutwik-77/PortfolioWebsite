/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

const Info = {
  name: "Rutwik Sawarkar",
  stack: [
    "Fullstack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Java Developer",
  ],
  Bio: "Highly motivated IT  Engineer with  hands-on experience in web development and full-stack  technologies, specializing in the MERN stack. Proficient in developing scalable, user-centric solutions using JavaScript, React.js, Node.js, and MongoDB. Strong foundation in software development life cycle (SDLC) and eager to contribute to innovative projects in top-tier organizations.",
};

const ProjectInfo = [
  {
    title: "Book Store App",
    desc: "The Bookstore App I developed using the MERN stack (MongoDB, Express, React, Node.js) and Vite provides a fast, dynamic, and user-friendly platform for browsing and purchasing books. The app's frontend, built with React and Vite, offers a responsive, smooth, and interactive user experience.There is also authentication functionality.",
    image: "/Bookstore.png",
    live: false,
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "TailwindCss",
    ],
    github: "https://github.com/Rutwik-77/bookstore",
  },
  {
    title: "Climate Website",
    desc: "I designed a weather forecast Website using React.js, JavaScript, CSS and using Rapid Api for fetching the data.The website is fully responsive to all the screen types, and it tells the current weather,temperature, and humidity of the city.",
    image: "/Climate.png",
    live: true,
    technologies: ["React.js", "JavaScript", "CSS"],
    github: "https://climatesense.netlify.app",
  },
  {
    title: "Game Store Website",
    desc: "A modern Game Store App built with React and Vite, designed for fast performance and a seamless user experience. It features dynamic game listings with search and filter options, a secure user authentication system, and a fully functional shopping cart.",
    image: "/gameapp.png",
    live: false,
    technologies: ["React.js", "Express.js", "JavaScript", "CSS"],
    github: "https://github.com/Rutwik-77/GameMarket",
  },
  {
    title: "Mern App",
    desc: "A simple MERN stack app with full authentication functionality, including registration, login, and a contact page. The app uses MongoDB to store user and contact data, and Express to handle the backend logic. JWT token-based authentication ensures secure login and access to protected routes. ",
    image: "/MernApp.png",
    live: false,
    technologies: [
      "React.js",
      "Express.js",
      "JavaScript",
      "CSS",
      "JWT",
      "MongoDB",
      "express",
      "Mongoose",
      "CSS",
    ],
    github: "https://github.com/Rutwik-77/SimpleMernApp",
  },
  {
    title: "Portfolio Website",
    desc: "I built it using modern web development technologies like React.js for a dynamic and responsive interface, Tailwind CSS for beautiful and adaptable designs, and TypeScript to ensure type-safe and maintainable code. I also integrated Tabler Icons for sleek visuals, Mantine for powerful UI components, and Firebase for backend functionality and reliable hosting. ",
    image: "/PortfolioWebsite.png",
    live: true,
    technologies: [
      "React.js",
      "Typescript",
      "Firebase",
      "Tailwind Css",
      "Mantine",
      "Tabler icons"
    ],
    github: "https://github.com/Rutwik-77/PortfolioWebsite",
  },
];

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "HTML",
      "BootStrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "java",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "SpringBoot",
      "Spring Security",
      "Spring JPA",
      "JavaScript",
      "MySql",
    ],
  },
  {
    title: "Other Tools",
    skills: ["Github", "VS Code", "Postman", "Vite.js", "Netlify"],
  },
];

const ExperianceInfo = [
  {
    role: "Fullstack Developer (intern)",
    Company: "Hubnex Labs",
    date : "Nov 2024 - Present",
    description:"Gaining a experience in mern stack and also getting an hands on experience on a live projects.",
    skills:["ReactJs","Express.js","MongoDB","NodeJs","Figma","MagicUI"]
  }
]
export { Info, ProjectInfo,SkillsInfo,ExperianceInfo };
