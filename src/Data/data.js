import react from './Picture/Icon/react_native_icon.png';
import aws from './Picture/Icon/aws_icon.png';
import sql from './Picture/Icon/mysql-logo.png';
import flutter from './Picture/Icon/flutter_icon.png';
import subgen from './Picture/SubGen_icon.png';
import framer_motion from './Picture/Icon/framer-motion-logo.com.svg';
import expressjs from './Picture/Icon/expressjs-icon.svg';
import vscode from './Picture/Icon/vscode.svg'
import git from './Picture/Icon/github-mark.svg';

import {MdWork, MdWorkHistory} from 'react-icons/md';


let timelineElements = [
    {
        id: 1,
        title: "Part-Time Programmer",
        subtitle:"12Make Sdn Bhd",
        discriptions: [ "Maintain the IT services such as database and website services of the \"Penang Safe\" project.",
                        "Writing pythohn script to automate the daily basis data preparing process."],
        date: "June 2021 - September 2022",
        icon: <MdWorkHistory style={{fill:'#FFFFFF'}} />,
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        subtitle:"12Make Sdn Bhd",
        discriptions: ["Develop an Organization Chart Editing web application as an extensions for an existing Operation Management System(OMS)"],
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
        thumbnail:subgen,
        video:[],
        images:[subgen],
        overview: 'SubGen is a Real time caption generator using Microsoft Azure speech services. SubGen is a windows application with simple graphical user interface (GUI). It is aim to provide real time captioning feature for every application that runs on windows. The caption generated by SubGen could be either non-translated, translated, or both.',
        goals: ['Generate caption with speech transcription in least delay possible.','Generate caption\'s translation in least delay possible.'],
        process: ['Testing idea feasibility by creating a prototype with command-line interface (CLI).', 'Design and create GUI for the prototype.','Testing the application with the GUI.','Compile, prepare, and distribute SubGen.'],
        results: 'Both of the goals has been accomplished, subgen could generate dual languages caption in a short time after recognized the speech.',
        challanges: ['Dealing with the audio processing in Windows.', 'Creating a pipeline to stream the audio output towards Azure Speech API'],
        takeaways: ['Experience in processing PCM audio data.','Experience in developing multi-threading application','Exprience in windwos application development with Qt framework in C++',],
        github: 'https://github.com/JadenChun/real-time-caption-generator',
    },{
        id:2,
        name: "Portfolio Website",
        discription: "A personal website to introduce myself and the projects that I have done.",
        techStack: "html, css, javascript, React, AWS",
        thumbnail:'',
        video:[],
        images:[''],
        overview: 'This is my personal portfolio website that introduce myself including my background, skills, and works. I am looking forward to use this website to record my carrier or even life in future. Hecne, there will be continuously improvement for this project.',
        goals: ['Introduce myself with a clean and beautiful design','Smooth user experience when reading the website.'],
        process: ['Design and create the layout for the content.','Completing the content for my portfolio', 'Adding animation to the component.',],
        results: '',
        challanges: ['Require to learn along the development as I\'m new to the animation sector of web development before this.','Explore and learn more about the backend knowledge of a web application such as hosting, monitoring, and maintenance.'],
        takeaways: ['Experience in full development process for a web application', 'Experience in AWS cloud for hosting and monitoring web application', 'Experience in morden web teachnology such as React, Framer Motion, and Express.js',],
        github: 'https://github.com/JadenChun/portfolio-website',
    },{
        id:3,
        name: "Memo App",
        discription: "A simple project to learn mobile app development with flutter and dart.",
        techStack: "Dart, Flutter",
        thumbnail:'',
        video:[],
        images:[''],
        overview: 'This ia a memo android application that provide user some simple functionalities including save, edit, and delete notes. It is meant to be a project to learn dart and flutter in mobile application development.',
        goals: ['Provide save, edit, and delete functions and store data in local memory.'],
        process: ['Design and Create both ui and functionalities for home page.','Design and create functionalities for memo page.'],
        results: 'The results of the project could successfully prodive save, edit, and delete feature upon text data.',
        challanges: ['Self-learning Dart and Flutter.','Create desire behaviour with unfamiliar framework and language.'],
        takeaways: ['Improve self-learning and problem solving skills','Experiece with Dart and Flutter specifically for simple android application'],
        github: 'https://github.com/JadenChun/real-time-caption-generator',
    },
]

export default {timelineElements, skills, projects};