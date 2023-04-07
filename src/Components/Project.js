import data from '../Data/data'
import FadeIn from './FramerMotion/FadeIn';
import ProjectCard from './ExpandableProjectCard';

const Project = ({reference}) => {
    return (
        <div className="project-section" id="projects" ref={reference}>
            <div className="section-container">
                <FadeIn><h2>My Projects</h2></FadeIn>
                <div className="projects-container">
                    {data.projects.map(project=>{
                        return(
                            <ProjectCard 
                                project={project}
                                key={project.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Project;