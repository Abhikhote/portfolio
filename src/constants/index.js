import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    construction,
    cdac,
    gym,
    dashboard,
    sveri,
    eleation,
    spring,
    sql,
    jsp,
    hibernate,
    qspider,
    sunbeam,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Projects",
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
      title: "Database Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Development Tools",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "Jsp",
      icon: jsp,
    },
    {
      name: "Hibernate",
      icon: hibernate,
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
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    },
   
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Centre for Development of Advanced Computing(CDAC)",
      company_name: "MET IIT Nashik",
      icon: cdac,
      iconBg: "#fcfbfb",
      date: "September  2023 - April 2024",
      points: [
        "Coursework and Training",
        "Hands-on Projects",
        "Lab Work",
        "Workshops and Seminars",
        "Industry Exposure",
        "Soft Skills and Career Development"
      ],
    },
    {
      title: "Pre-Cat Course for cdac",
      company_name: "Sunbeam Institute Pune",
      icon: sunbeam,
      iconBg: "#fcfbfb",
      date: "April 2023 - June  2023",
      points: [
        "Programming Basics",
        "Data Structures and Algorithms",
        "Aptitude and Logical Reasoning",
        "Basic Web Development",
        "Database Concepts",
        "Operating Systems and Linux",
        "Mock Tests and Assessments",
      ],
    },
    {
      title: "java developer",
      company_name: "Qspiders Pune",
      icon: qspider,
      iconBg: "#fcfbfb",
      date: "April 2022 - January 2023",
      points: [
        "Basics of Programming",
        "Core Java Concepts",
        "Java Libraries and APIs",
        "ava Development Tools and Environment",
        "Database Connectivity(Hibernate)",
        "Spring Framework,",       
      ],
    },
    {
      title: "Ansys and HyperWorks Internship",
      company_name: "Eleation pune",
      icon: eleation,
      iconBg: "#fcfbfb",
      date: "January 2022 - March 2022",
      points: [
        "Conducted finite element analysis (FEA) on various mechanical components using ANSYS and HyperWorks",
        "Gained hands-on experience in setting up simulations, meshing, and post-processing results.",
        "Developed a solid understanding of simulation workflows, material properties, and boundary conditions",
      ],
    },
    {
      title: "Bachelor of Technology (Mechanical Engineering)",
      company_name: "SVERI's College of Engineering, Pandharpur",
      icon: sveri,
      iconBg: "#fcfbfb",
      date: "September  2018 - May 2022",
      points:[]
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
      name: "Vedanand Construction",
      description:
        "The Building Dreams Construction Website showcases services, portfolio, and expertise, engaging potential clients and facilitating smooth communication, while serving as a dynamic tool to demonstrate our construction capabilities efficiently",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Spring Framework",
          color: "pink-text-gradient",
        },
      ],
      image: construction,
      source_code_link: "https://github.com/Abhikhote/Construction-website.git",
    },
    {
      name: "Fitness App",
      description:
        "The Gym Management Web Application is designed to manage the day-to-day operations of a fitness center or gym. It provides functionalities for gym members, trainers, and administrators to interact with the system in a user-friendly interface.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Spring boot",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/Abhikhote/fitness_app.git",
    },
    {
      name: "Dashboard",
      description:
        "This dashboard is built using React for efficient component-based development, JavaScript for handling logic, and Tailwind CSS for sleek, responsive design without the hassle of writing custom CSS. The data displayed in the dashboard is static",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/Abhikhote/Dashboard.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  