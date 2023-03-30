import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../Data/data'
import FadeIn from './FramerMotion/FadeIn';
import { motion } from 'framer-motion';

const WorkExp = () => {
    return (
        <div className="section" id="work-experience">
            <div className="section-container">
                <FadeIn>
                    <h2>Working Experience</h2>
                </FadeIn>
                <div className="working-experience-container">
                    <VerticalTimeline 
                    lineColor='#0C66E4'
                    animate={true}
                    >
                        {
                            data.timelineElements.map(element => {
                                return(
                                    <VerticalTimelineElement
                                        key={element.id}
                                        date={element.date}
                                        contentStyle={{ background: '#ffffff' , borderBottom: '3px solid #8BDBE5'}}
                                        contentArrowStyle={{ borderRight: '7px solid  #ffffff' , background: 'none'}}
                                        iconStyle={{background: '#8BDBE5', boxShadow: 'none', border: '0.25em solid #0C66E4'}}
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
                                            {element.discriptions.map(discription=>{return <li>{discription}</li>})}
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