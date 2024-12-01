import react from "./Picture/Icon/react_native_icon.png";
import aws from "./Picture/Icon/aws_icon.png";
import flask from "./Picture/Icon/Flask.png";
import expressjs from "./Picture/Icon/expressjs-icon.svg";
import Vue from "./Picture/Icon/vue1.png";
import mongodb from "./Picture/Icon/mongodb2.png";
import MySQL from "./Picture/Icon/mysql-logo.png";
import firebase from "./Picture/Icon/firebase.svg";
import git from "./Picture/Icon/github-mark.svg";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import gdlogin  from "./Picture/Projects/gdlogin.jpg";
import gdtv from "./Picture/Projects/gdtv.png";
import gdmedia from "./Picture/Projects/gdmedia.png";
import gderror from "./Picture/Projects/gderror.png";
import portfolio1 from "./Picture/Projects/portfolio1.png";
import portfolio2 from "./Picture/Projects/portfolio2.png";
import portfolio3 from "./Picture/Projects/portfolio3.png";
import Landing207 from "./Picture/Projects/Landing207.png";
import Mainpage207 from "./Picture/Projects/MainPage_207.png";


let aboutMe = {
  aboutMe_1:
    "The project I am currently working on is focused on building a comprehensive hotel management system. The system enables centralized control and configuration of in-room Android TV servers, allowing seamless content management for guests while ensuring efficient backend operations.",
  aboutMe_2:
    "I have always been passionate about tackling challenges with creative and practical solutions. Each project I take on is an opportunity to grow, and I strive to continuously expand my knowledge and skills to deliver impactful and meaningful results.",
  aboutMe_3:
    "Thank you for taking the time to learn about me. I’m excited to share my journey and look forward to exploring potential opportunities to collaborate and create innovative solutions together!",
};

let timelineElements = [
  {
    id: 1,
    title: "Freelance Developer",
    subtitle: "GD Media from Base One Engineering",
    discriptions: [
      "Developed dynamic web applications using React, Node.js, and Express.js.",
      "Collaborated with clients to deliver customized solutions, including dashboards and interactive UIs.",
      "Integrated cloud services like AWS and Firebase for seamless application functionality.",
    ],
    date: "August 2024 - Present",
    icon: <MdWorkHistory style={{ fill: "#FFFFFF" }} />,
  },
  {
    id: 2,
    title: "Computer Science Research Assistant",
    subtitle: "Faculty of Science, Queensland University of Technology",
    discriptions: [
      "Contributed to a research project focusing on inclusiv technology design for users with disabilities.",
      "Designed and implemented interactive prototypes to validate user-centered methodologies.",
      "Published findings that highlighted the impact of accessible software development practices.",
    ],
    date: "June 2024 - December 2024",
    icon: <MdWork style={{ fill: "#FFFFFF" }} />,
  },

];

let skills = [
  {
    id: 1,
    skill: "React",
    logo: react,
  },
  {
    id: 2,
    skill: "Express.js",
    logo: expressjs,
  },
  {
    id: 3,
    skill: "Flask",
    logo: flask, 
  },
  {
    id: 4,
    skill: "AWS",
    logo: aws,
  },
  {
    id: 5,
    skill: "Firebase",
    logo: firebase,
  },
  {
    id: 8,
    skill: "MongoDB",
    logo: mongodb
  },
  {
    id: 9,
    skill: "GitHub",
    logo: git,
  },
  {
    id: 10,
    skill: "Vue",
    logo: Vue,
  },
  {
    id: 11,
    skill: "MySQL",
    logo: MySQL,
  },
];

let skillDetails = [
  "JavaScript Frameworks & Libraries: React, Node.js, Express.js, Next.js, Redux, Material-UI",
  "Tools & Services: GitHub, Visual Studio Code, Postman, Firebase, AWS, Docker",
  "Programing languages: JavaScript, HTML/CSS, Python, C#",
];

let projects = [
  {
    id: 1,
    name: "Hotel TV Management System",
    description:
    "A centralized platform for hotel administrators to manage and configure content displayed on in-room Android TV servers.",
    techStack: "React, Node.js, Express.js, MySQL, RabbitMQ",
    thumbnail: gdlogin,
    video: [],
    images: [gdlogin, gdmedia, gdtv, gderror],
    overview:
      "This project enables hotels to streamline content delivery to in-room Android TVs via a user-friendly web dashboard. Administrators can configure channels, schedules, and custom messages for guests.",
      goals: [
        "Provide an intuitive dashboard for TV content management.",
        "Enable seamless synchronization between the server and in-room devices.",
        "Ensure robust backend services to handle large-scale operations.",
      ],
      process: [
        "Develop a RESTful API for content management.",
        "Design a responsive and accessible user interface.",
        "Integrate Android TV communication protocols.",
        "Deploy the application on AWS for scalability.",
      ],
      results:
        "A fully operational system deployed in a real-world hotel setting, enhancing guest experiences and streamlining administrative tasks.",
      challenges: [
        "Ensuring real-time updates across multiple devices.",
        "Integrating TV-specific APIs for seamless content delivery.",
      ],
      takeaways: [
        "Gained hands-on experience with IoT integrations.",
        "Improved understanding of real-time systems and backend scalability.",
      ],
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "A personal website showcasing my projects, skills, and professional journey.",
      techStack: "HTML, CSS, JavaScript, React, AWS Amplify",
      thumbnail: portfolio1,
      video: [],
      images: [portfolio1,portfolio2,portfolio3],
      overview:
        "This portfolio website introduces my background, technical expertise, and completed projects. It features a responsive design, animations, and a clean layout to provide a seamless user experience.",
      goals: [
        "Create a professional and visually appealing online presence.",
        "Showcase technical skills and project accomplishments.",
      ],
      process: [
        "Design a user-friendly layout.",
        "Implement animations using Framer Motion for better engagement.",
        "Deploy the website on AWS Amplify.",
      ],
      results:
        "A responsive and dynamic portfolio website that successfully showcases my professional profile and serves as a platform for career growth.",
      challenges: [
        "Learning and implementing advanced animations.",
        "Deploying and managing the website on a cloud platform.",
      ],
      takeaways: [
        "Enhanced knowledge of modern web development frameworks.",
        "Improved deployment and hosting skills with AWS.",
      ],
      github: "https://github.com/soozkai/portfolio-website",
    },
    {
      id: 3,
      name: "Charity Event Website",
      description:
        "A responsive web application to manage and promote charity events.",
      techStack: "HTML, CSS, Flask, Boostrap",
      thumbnail: Landing207,
      video: [],
      images: [Landing207,Mainpage207],
      overview:
        "The Charity Event Website is a Flask-based web application designed to streamline event management and user participation for charity organizations. It includes features like event listings, user authentication, event history tracking, and a responsive design for seamless user experience.",
      goals: [
        "Provide a platform to manage and promote charity events.",
        "Ensure secure user authentication and access control.",
        "Archive and display the history of past events.",
      ],
      process: [
        "Set up Flask for server-side routing and backend logic.",
        "Design the UI with HTML and CSS for a responsive layout.",
        "Implement user authentication and event management features.",
      ],
      results:
        "A fully functional charity event management website with a responsive design, user authentication, and event tracking capabilities.",
      challenges: [
        "Learning Flask and integrating it with frontend technologies.",
        "Implementing secure user authentication mechanisms.",
      ],
      takeaways: [
        "Gained experience in web development with Flask.",
        "Improved skills in designing responsive web applications.",
        "Learned best practices for user authentication and data security.",
      ],
    },
  ];
export default { aboutMe, timelineElements, skills, projects, skillDetails };
