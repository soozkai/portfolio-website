import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import WorkExp from '../Components/WorkExp';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useRef } from "react";
import items from '../Data/NavigationChoices';

const Homepage = () => {
    const AboutRef = useRef(null);
    const ExpRef = useRef(null);
    const SkillRef = useRef(null);
    const ProjectRef = useRef(null);
    const ContactRef = useRef(null);
    const Refs = [AboutRef, ExpRef, SkillRef, ProjectRef, ContactRef];

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    return (  
        <div className="home-page">
            <Navbar items={items} refs={Refs} />
            <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#fffff",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#1D2125",
                    },
                    links: {
                        color: "#1D2125",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    zIndex: 1,
                },
                detectRetina: true,
                zLayers: 1,
            }}
        />
            <Hero />
            <About reference={AboutRef} />
            <WorkExp reference={ExpRef} />
            <Skills reference={SkillRef} />
            <Project reference={ProjectRef} />
            <Contact reference={ContactRef} />
            <Footer />
        </div>
    );
}

export default Homepage
