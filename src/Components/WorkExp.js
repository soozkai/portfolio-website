import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../Data/data';
import FadeIn from './FramerMotion/FadeIn';

const WorkExp = ({reference}) => {
    return (
        <div className="section" id="work-experience" ref={reference}>
            <div className="section-container">
                <FadeIn>
                    <h2>Working Experience</h2>
                </FadeIn>
                <div className="working-experience-container">
                    <VerticalTimeline 
                    lineColor='#5b7c99'
                    animate={true}
                    >
                        {
                            data.timelineElements.map(element => {
                                return(
                                    <VerticalTimelineElement
                                        key={element.id}
                                        date={element.date}
                                        contentStyle={{ background: '#ffffff' , borderBottom: '5px solid #adcad6'}}
                                        contentArrowStyle={{ borderRight: '7px solid  #ffffff' , background: 'none'}}
                                        iconStyle={{background: '#5b7c99', boxShadow: 'none', border: '0.25em solid #5b7c99'}}
                                        style={{background:'transparent'}}
                                        icon={element.icon}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {element.subtitle}
                                        </h4>
                                        <ul className="vertical-timeline-element-discription">
                                            {element.discriptions.map(discription=>{
                                                return <li key={ element.discriptions.indexOf(discription) }> {discription} </li>
                                            })}
                                        </ul>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </div>
        
    );
}

export default WorkExp;