import data from "../Data/data";
import FadeIn from "./FramerMotion/FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import * as React from "react";

const skillsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
};

const Skills = ({ reference }) => {
  const skillsRef = useRef(null);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // return (
  const skillGrid = (
    <motion.div
      className="skills-grid-container"
      ref={skillsRef}
      variants={skillsContainer}
      initial="hidden"
      animate="visible"
    >
      {data.skills.map((skill) => {
        return (
          <motion.div
            className="skill-block"
            key={skill.id}
            variants={skillVariants}
          >
            <img src={skill.logo} width="96" height="96" />
            <h4>{skill.skill}</h4>
          </motion.div>
        );
      })}
    </motion.div>
  );

  const skillList = (
    <Box sx={{ width: "90%", height: 596, margin: "auto" }}>
      <div className="background-container">
        <div className="skill-details">
          <h4>Flutter</h4>
          <p>
            platform channel, work manager, provider, riverpod, bloc, sqflite,
            shared preference, localization, http
          </p>
          <h4>Tools & Services</h4>
          <p>
            Figma, DhiWise, Github, Android studio, Xcode, Firebase, Google
            Cloud Platform
          </p>
          <h4>Programing languages</h4>
          <p>Flutter/Dart, Java, Javascript, Python, HTML/CSS, PHP, C++</p>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="section" id="skills" ref={reference}>
      <div className="section-container">
        <FadeIn>
          <h2>Familiar Techs and Tools</h2>
        </FadeIn>
        <Box sx={{ width: "100%", typography: "body1", marginTop: "5vh" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
              >
                <Tab label="summary" value="1" />
                <Tab label="details" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">{skillGrid}</TabPanel>
            <TabPanel value="2">{skillList}</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Skills;
