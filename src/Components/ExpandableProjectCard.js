import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const ExpandableProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e)=>{
        if(e.target.id === 'close' || e.target.className==="backdrop"){
            setIsOpen(false)
            document.body.style.overflow = 'auto';
        }else{
            setIsOpen(true)
            document.body.style.overflow = 'hidden';
        }
    }
    const cardTextParentVariants = {
        hidden:{},
        show:{
            transition:{
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
    }

    const cardTextChildrenVariants = {
        hidden: { opacity: 0, x: 80 },
        show: { opacity: 1, x: 0 },
    }

    const modalTextParentVariants = {
        hidden:{},
        show:{
            transition:{
                delay: 1,
                staggerChildren: 0.1,
            }
        }
    }

    const modalTextChildrenVariants = {
        hidden: { opacity: 0, y: 80 },
        show: {
            opacity: 1, 
            y: 0, 
            transition:{
                // type: "tween"
            }
        },
    }

    return (
        <motion.div
            className="backdrop"
            onClick={(e)=>handleClick(e)}
            style={isOpen && {
                zIndex: 1000,
                position:"fixed",
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                width: '100%',
                height:'100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <motion.div
                className="expandable-cards" 
                style={isOpen && {
                    width: '80%',
                    maxWidth: '1200px',
                    height:'80%',
                    overflow: 'auto',
                    padding:'0',
                    margin:'auto',
                    background:'white',
                    overflow: 'hidden',
                    borderRadius: '10px'
                }}
                layout
                transition={{ duration: 0.5, type: 'spring' }}
            >
                {isOpen ?
                    <motion.div className= 'modal'>
                        <motion.div
                            initial = {{ opacity: 0 }}
                            animate = {{ opacity: 1 }}
                            transition={{ delay: 0.2 , duration: 0.1 , when:"beforeChildren"}}
                        >
                            <div className="modal-topbar">
                                <IoIosArrowBack id="close" style={{ fontSize:'25px', cursor: "pointer" }} />
                            </div>
                            <div className="modal-media">
                                {project.images.map(item=> {
                                    return (
                                        <img className='images' src={item} alt="" key={project.images.indexOf(item)} />
                                    )
                                })}
                            </div>
                            <motion.div className="modal-text" variants={modalTextParentVariants} initial='hidden' animate='show'>
                                <motion.h1 variants={modalTextChildrenVariants}>{project.name}</motion.h1>
                                <motion.hr variants={modalTextChildrenVariants}/>
                                <motion.h2 variants={modalTextChildrenVariants}>Overview</motion.h2>
                                <motion.p variants={modalTextChildrenVariants}>{project.overview}</motion.p>
                                <motion.h2 variants={modalTextChildrenVariants}>Technology Choice</motion.h2>
                                <motion.p variants={modalTextChildrenVariants}>{project.techStack}</motion.p>
                                <motion.h2 variants={modalTextChildrenVariants}>Goals</motion.h2>
                                <motion.dl className='modal-lists' variants={modalTextChildrenVariants}>
                                    {project.goals.map(htmlListItemGenerator)}
                                </motion.dl>
                                <motion.h2 variants={modalTextChildrenVariants}>Process</motion.h2>
                                <motion.ol className='modal-lists' variants={modalTextChildrenVariants}>
                                    {project.process.map(htmlListItemGenerator)}
                                </motion.ol>
                                <motion.h2 variants={modalTextChildrenVariants}>Results</motion.h2>
                                <motion.p variants={modalTextChildrenVariants}>{project.results}</motion.p>
                                <motion.h2 variants={modalTextChildrenVariants}>Challanges</motion.h2>
                                <motion.dl className='modal-lists' variants={modalTextChildrenVariants}>
                                    {project.challanges.map(htmlListItemGenerator)}
                                </motion.dl>
                                <motion.h2 variants={modalTextChildrenVariants}>Takeaways</motion.h2>
                                <motion.dl className='modal-lists' variants={modalTextChildrenVariants}>
                                    {project.takeaways.map(htmlListItemGenerator)}
                                </motion.dl>
                                <motion.h2 variants={modalTextChildrenVariants}>Source Code</motion.h2>
                                <motion.span variants={modalTextChildrenVariants}>Github link: </motion.span>
                                <motion.a href={project.github} variants={modalTextChildrenVariants}>{project.github}</motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div> 
                    :
                    <div>
                        <motion.div 
                            className="project-card"
                            initial = {{ opacity: 0 }}
                            animate = {{ opacity: 1 }}
                            transition = {{ duration: 0.2 }}
                            whileHover = {{ scale: 1.1, y: -10 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <div className="project-card-image">
                                <img className='images' src={project.thumbnail} alt="" />
                            </div>
                            <motion.div 
                                className="project-card-text"
                                initial = 'hidden'
                                animate = 'show'
                                variants={cardTextParentVariants}
                            >
                                <motion.div variants={cardTextParentVariants}>
                                    <motion.h3 className='project-name' variants={cardTextChildrenVariants}>{project.name}</motion.h3>
                                    <motion.p className='project-discription' variants={cardTextChildrenVariants}>{project.discription}</motion.p>
                                </motion.div>
                                <motion.div variants={cardTextParentVariants}>
                                    <motion.p className='project-tech-stack' variants={cardTextChildrenVariants}>Technology: {project.techStack}</motion.p>
                                    <motion.span className='learn-more' variants={cardTextChildrenVariants} >
                                        <span className='learn-more-text'> Learn more about the project </span>
                                        <span className='learn-more-arrow'></span>
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                }
            </motion.div>
        </motion.div>
    );
}

function htmlListItemGenerator(value, index){
    return (
        <li key={index}>{value}</li>
    )
}

export default ExpandableProjectCard;