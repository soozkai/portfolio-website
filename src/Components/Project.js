import data from '../Data/data'
import Modal from "react-modal";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import FadeIn from './FramerMotion/FadeIn';

const Project = () => {
    const initProject = {
        id:0,
        name: "",
        discription: "",
        techStack: "",
        thumbnail:'',
        video:[],
        images:[],
        overview: '',
        goals: [],
        process: [],
        results: '',
        challanges: [],
        takeaways: [],
        github: '',
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalProject, setModalProject] = useState(initProject);

    const handleClick = (project) => {
        setModalProject(project);
        setModalIsOpen(true);
    }

    function handleAfterOpen() {
        document.body.style.overflow = 'hidden';
    }
    
    function handleRequestClose() {
        document.body.style.overflow = 'auto';
        setModalIsOpen(false);
    }

    return (  
        <div className="project-section" id="projects">
            <div className="section-container">
                <FadeIn><h2>My Projects</h2></FadeIn>
                <div className="projects-container">
                {
                    data.projects.map(project=>{
                        return(
                            <div className="project-card" key={project.id}>
                                <div className="project-card-image" onClick={()=>handleClick(project)}>
                                    <img className='images' src={project.thumbnail} alt="" />
                                </div>
                                <div className="project-card-text" onClick={()=>handleClick(project)}>
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
                        )
                    })
                }
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={handleAfterOpen}
                        onRequestClose={handleRequestClose}
                        contentLabel= "Modal"
                        appElement={document.getElementById('root')}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1000
                            },
                            content: {
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80%',
                                maxWidth: '1200px',
                                height:'80%',
                                overflow: 'auto',
                                padding:'0'
                            }
                        }}
                    >
                        <div className="modal-topbar">
                                <IoIosArrowBack style={{fontSize:'25px'}} onClick={() => setModalIsOpen(false)}/>
                        </div>
                        <div className="modal-media">
                            {modalProject.images.map(item=> {
                                return (
                                    <img className='images' src={item} alt="" />
                                )
                            })}
                        </div>
                        <div className="modal-text">
                            <h1>{modalProject.name}</h1>
                            <hr />
                            <h2>Overview</h2>
                            <p>{modalProject.overview}</p>
                            <h2>Technology Choice</h2>
                            <p className=''>{modalProject.techStack}</p>
                            <h2>Goals</h2>
                            <dl className='modal-lists'>
                                {modalProject.goals.map(htmlListItemGenerator)}
                            </dl>
                            <h2>Process</h2>
                            <ol className='modal-lists'>
                                {modalProject.process.map(htmlListItemGenerator)}
                            </ol>
                            <h2>Results</h2>
                            <p>{modalProject.results}</p>
                            <h2>Challanges</h2>
                            <dl className='modal-lists'>
                                {modalProject.challanges.map(htmlListItemGenerator)}
                            </dl>
                            <h2>Takeaways</h2>
                            <dl className='modal-lists'>
                                {modalProject.takeaways.map(htmlListItemGenerator)}
                            </dl>
                            <h2>Source Code</h2>
                            <span>Github link: </span>
                            <a href={modalProject.github}>{modalProject.github}</a>
                        </div>
                    </Modal>
                </div>
                
                </div>
            </div>
        </div>
    );
}

function htmlListItemGenerator(value, index){
    return (
        <li key={index}>{value}</li>
    )
}

export default Project;