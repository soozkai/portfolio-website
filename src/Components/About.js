import FloatAnimation from "./FramerMotion/FloatAnimation";
import FadeIn from "./FramerMotion/FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const aboutContainer = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const aboutContent ={
    hidden: { opacity: 0, y: -50 },
    visible: { 
        y: 0,
        opacity: 1,
        transition:{
            duration: 1
        }
    }
}

const About = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { amount:"all" });

    return ( 
        <div className="section" id="about">
            <div className="section-container">
                <motion.div 
                    className="about-me"
                    ref={aboutRef}
                    variants={aboutContainer}
                    initial="hidden"
                    // animate={ isInView ? "visible" : "hidden" }
                    animate={isInView && "visible"}
                >
                    <motion.h2 variants={aboutContent}>
                        About Me
                    </motion.h2>
                    <motion.p variants={aboutContent}>
                        Welcome to my little website! I am Jaden, a passionate software developer who want to change the world with my work.
                        My journey to become a software engineer begins after I join Asia Pacific University {"(APU)"} for the software engineering degree. 
                        I am intrested with software develpment and this makes me become a curious person who always try to find the solutions on my own since then.
                    </motion.p>
                    <motion.p variants={aboutContent}>
                        I see challenges as gain, while learning technologies and using them to create software solutions that helps people; 
                        it is also my motivation to keep improving my skills.
                        After doing a fews projects on my own, I understood the importance of being a good team player as a software developer. 
                        I am dedicated to join an excellent team and working with talented team mate to deliver great software.
                    </motion.p>
                </motion.div>
                <FadeIn>
                    <div className="background-container">
                        <h3>Learn me at a glance</h3>
                        <div className="background">
                            <h4>Current Location</h4>
                            <p>Malaysia</p>
                            <h4>Educations</h4>
                            <p>Software Engineering Degree from Asia Pacific University {"(APU)"}</p>
                            <h4>Intrested Field of IT</h4>
                            <p>Artificial Inteligent(AI), Web, Desktop, and Mobile Application</p>
                            <h4>Personalities</h4>
                            <p>Proactive, Self-Motivated, Organised, and Disciplined</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default About;