import data from '../Data/data'
import FadeIn from './FramerMotion/FadeIn';
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

const skillsContainer = {
    hidden:{},
    visible:{
        transition:{
            staggerChildren: 0.12,
        }
    }
}

const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition:{
            type: "spring",
            damping: 10,
            stiffness: 200
        }
    }
}

const Skills = () => {
    const skillsRef = useRef(null);
    const isInView = useInView(skillsRef);

    return ( 
        <div className="section" id="skills">
            <div className="section-container">
                <FadeIn>
                    <h2>Familiar Techs and Tools</h2>
                </FadeIn>
                <motion.div 
                    className="skills-grid-container" 
                    ref={skillsRef}
                    variants={skillsContainer}
                    initial="hidden"
                    animate={isInView && "visible"}
                >
                        {
                            data.skills.map(skill=>{
                                return(
                                    <motion.div className="skill-block" key={skill.id} variants={skillVariants}>
                                        <img src={skill.logo} width="96" height="96" />
                                        <h4>{skill.skill}</h4>
                                    </motion.div>
                                )
                            })
                        }
                </motion.div>
                
            </div>
        </div>
    );
}

export default Skills;