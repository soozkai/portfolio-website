import react from './Picture/Icon/react_native_icon.png';
import aws from './Picture/Icon/aws_icon.png';
import sql from './Picture/Icon/mysql-logo.png';
import flutter from './Picture/Icon/flutter_icon.png';
import framer_motion from './Picture/Icon/framer-motion-logo.com.svg';
import expressjs from './Picture/Icon/expressjs-icon.svg';
import vscode from './Picture/Icon/vscode.svg'
import git from './Picture/Icon/github-mark.svg';
import {MdWork, MdWorkHistory} from 'react-icons/md';
import memoHomePage from './Picture/Projects/memo app homepage.png'
import memoEdit from './Picture/Projects/memoPage.png'
import memoHomePageWithData from './Picture/Projects/memo app savedData.png'
import subgenHome from './Picture/Projects/subgen homepage.png'
import subgenSetting from './Picture/Projects/subgen setting.png'
import subgenTranslate from './Picture/Projects/subgen translation.png'
import portfolioHero from './Picture/Projects/portfolio hero.png'
import portfolioAbout from './Picture/Projects/portfolio about.png'
import portfolioExp from './Picture/Projects/portfolio experience.png'
import portfolioSkill from './Picture/Projects/portfolio skills.png'
import portfolioProject from './Picture/Projects/portfolio project.png'
import portfolioContact from './Picture/Projects/portfolio contact.png'

let aboutMe = {
    aboutMe_1: 'Hello and welcome to my website! My name is Jaden, and I am a passionate software developer with a strong desire to make a positive impact on the world through my work. I embarked on my journey to become a software engineer when I enrolled in the software engineering degree program at Asia Pacific University of Technology & Innovation (APU). Since then, my fascination with software development has made me a curious person who is always eager to find solutions.',
    aboutMe_2: 'For me, challenges are opportunities for growth. I love learning new technologies and applying them to create software solutions that can help people. This is what motivates me to continually improve my skills. While working on a few solo projects, I realized the importance of being a good team player in the software development industry. Therefore, I am dedicated to working with a talented team to deliver great software.',
    aboutMe_3: 'Thank you for taking the time to read about me, and I look forward to connecting with you!'
}

let timelineElements = [
    {
        id: 1,
        title: "Part-Time Programmer",
        subtitle:"12Make Sdn Bhd",
        discriptions: [ "Maintained IT services, including database and website services, for the \"Penang Safe\" project.",
                        "Developed Python scripts to automate the daily data preparation process.",
                        "Gained hands-on experience in IT service management and automation scripting."
                    ],
        date: "June 2021 - September 2022",
        icon: <MdWorkHistory style={{fill:'#FFFFFF'}} />,
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        subtitle:"12Make Sdn Bhd",
        discriptions: ["Develop an Organization Chart Editing web application as an extensions for an existing Operation Management System(OMS)",
                        "Required a deep understanding of web application development and software integration.",
                        "Gained valuable skills in project management and collaboration with stakeholders."
                        ],
        date: "January 2022 - April 2022",
        icon: <MdWork style={{fill:'#FFFFFF'}}/>,
    },
]

let skills = [
    {
        id: 1,
        skill: "React",
        logo: react,
    },{
        id: 2,
        skill: "Framer Motion",
        logo: framer_motion,
    },{
        id: 3,
        skill: "Express.js",
        logo: expressjs,
    },{
        id: 4,
        skill: "MySQL",
        logo: sql,
    },{
        id: 5,
        skill: "AWS",
        logo: aws,
    },{
        id: 6,
        skill: "Visual Studio Code",
        logo: vscode,
    },{
        id: 7,
        skill: "GitHub",
        logo: git,
    },{
        id: 8,
        skill: "Flutter",
        logo: flutter,
    }
]

let projects = [
    {
        id:1,
        name: "SubGen",
        discription: "A windows application that helps to generate captions in real time.",
        techStack: "C++, Qt, Microsoft Azure, rtAudio",
        thumbnail: subgenHome,
        video:[],
        images:[subgenHome, subgenSetting, subgenTranslate],
        overview: 'SubGen is a real-time caption generator that aims to provide real-time captioning for any windows-based application. The application utilizes Microsoft Azure speech services and features a simple graphical user interface (GUI). SubGen is capable of generating both translated and non-translated captions.',
        goals: ['To generate captions with speech transcription in the shortest possible time.','To generate translations of captions with the shortest possible delay.'],
        process: ['Create a prototype with command-line interface (CLI) to test the feasibility of the idea.', 'Design and create GUI for the prototype.','Test and debug the application with the GUI manually.','Compile, prepare, and distribute SubGen.'],
        results: 'All goals were achieved, SubGen is capable of generating dual-language captions shortly after recognizing speech.',
        challanges: ['Addressing audio data from the system\'s output.', 'Creating a pipeline to stream audio output towards Azure Speech API.'],
        takeaways: ['Gained experience in processing PCM audio data.','Developed skills in multi-threading application development.','Gained experience in windows application development with Qt framework in C++.',],
        github: 'https://github.com/JadenChun/real-time-caption-generator',
    },{
        id:2,
        name: "Portfolio Website",
        discription: "A personal website to introduce myself and the projects that I have done.",
        techStack: "HTML, CSS, JavaScript, React, AWS",
        thumbnail: portfolioHero,
        video:[],
        images:[portfolioHero, portfolioAbout, portfolioExp, portfolioSkill, portfolioProject, portfolioContact],
        overview: 'This is a personal portfolio website designed to introduce the my background, skills, and works. It is designed to have a clean and beautiful layout and provide a smooth user experience. I am also planing to use it as a platform for recording my career and personal achievements. As such, the website will be updated continuously to reflect my growth and progress in my career and life.',
        goals: ['To introduce myself with a clean and beautiful design.','Provide smooth user experience for the visitor.'],
        process: ['Design and create the layout for the content.','Completing the content for my portfolio.', 'Adding animation to the component.','Test the result manually.','Deploy to AWS Amplify.'],
        results: 'A responsive website is being developed to showcase my skills and serve as a platform for recording my personal achievements',
        challanges: ['Require to learn along the development as I\'m new to the animation sector of web development before this.','Explore and learn more about the backend knowledge of a web application such as hosting, monitoring, and maintenance.'],
        takeaways: ['Gained experience in full stack development process for a web application.', 'Gained experience in AWS Amplify for hosting and monitoring web application.', 'Gained experience in morden web teachnology such as React and Framer Motion.',],
        github: 'https://github.com/JadenChun/portfolio-website',
    },{
        id:3,
        name: "Memo App",
        discription: "A simple project to learn mobile app development with flutter and dart.",
        techStack: "Dart, Flutter",
        thumbnail: memoHomePageWithData,
        video:[],
        images:[memoHomePage, memoEdit, memoHomePageWithData],
        overview: 'This project is a memo Android application developed using Dart and Flutter. It allows users to save, edit, and delete notes, and stores the data locally on the device. The main purpose of the project is to learn and gain experience in mobile application development using these technologies.',
        goals: ['Develop an Android memo application with save, edit, and delete functions.','To store data locally on the device.'],
        process: ['Design and Create both user interface and functionality for the home page.','Design and create functionality for the memo page.'],
        results: 'The application was successful in providing the save, edit, and delete features for text data.',
        challanges: ['Self-learning Dart and Flutter.','Implementing desire behaviour with an unfamiliar framework and language.'],
        takeaways: ['Improved self-learning and problem solving skills','Gained experience with Dart and Flutter for Android application development'],
        github: 'https://github.com/JadenChun/flutter-note-application',
    },
]

export default {aboutMe, timelineElements, skills, projects};