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
            document.getElementById('projects').scrollIntoView({block:"end"});
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={(e)=>handleClick(e)}
            style={isOpen && {
                zIndex: 1000,
                position:"absolute",
                width: '100%',
                height:'110%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
            }}
        >
            <motion.div
            className="expandable-cards" 
            layout
            style={isOpen && {
                width: '80%',
                maxWidth: '1200px',
                height:'75%',
                overflow: 'auto',
                padding:'0',
                margin:'auto',
                marginTop:'10vh',
                background:'white',
                overflow: 'hidden',
                borderRadius: '10px'
            }}
            >
                {isOpen ?
                <div className='modal'>
                    <div className="modal-topbar">
                        <IoIosArrowBack id="close" style={{fontSize:'25px'}} />
                    </div>
                    <div className="modal-media">
                        {project.images.map(item=> {
                            return (
                                <img className='images' src={item} alt="" key={project.images.indexOf(item)} />
                            )
                        })}
                    </div>
                    <div className="modal-text">
                        <h1>{project.name}</h1>
                        <hr />
                        <h2>Overview</h2>
                        <p>{project.overview}</p>
                        <h2>Technology Choice</h2>
                        <p className=''>{project.techStack}</p>
                        <h2>Goals</h2>
                        <dl className='modal-lists'>
                            {project.goals.map(htmlListItemGenerator)}
                        </dl>
                        <h2>Process</h2>
                        <ol className='modal-lists'>
                            {project.process.map(htmlListItemGenerator)}
                        </ol>
                        <h2>Results</h2>
                        <p>{project.results}</p>
                        <h2>Challanges</h2>
                        <dl className='modal-lists'>
                            {project.challanges.map(htmlListItemGenerator)}
                        </dl>
                        <h2>Takeaways</h2>
                        <dl className='modal-lists'>
                            {project.takeaways.map(htmlListItemGenerator)}
                        </dl>
                        <h2>Source Code</h2>
                        <span>Github link: </span>
                        <a href={project.github}>{project.github}</a>
                    </div>
                </div> :
                <div className="project-card">
                    <div className="project-card-image">
                        <img className='images' src={project.thumbnail} alt="" />
                    </div>
                    <div className="project-card-text">
                        <div>
                            <h3 className='project-name'>{project.name}</h3>
                            <p className='project-discription'>{project.discription}</p>
                        </div>
                        <div>
                            <p className='project-tech-stack'>Technology: {project.techStack}</p>
                            <span className='learn-more'>
                                <span className='learn-more-text'>Learn more about the project </span>
                                <span className='learn-more-arrow'></span>
                            </span>
                        </div>
                    </div>
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