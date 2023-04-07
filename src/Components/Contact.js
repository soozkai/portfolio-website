import {RiMailLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri';
import { useState, useEffect } from 'react';

const Contact = ({reference}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    
    const iconStyle = (windowWidth > 500) ? {
        'width':'30px',
        'height':'30px',
        'padding':'10px',
        'border': '3px solid #FFFFFF',
        'borderRadius': '50%',
        'margin':'0 5px',
        'fill':'#FFFFFF'
    }:{
        'width':'20px',
        'height':'20px',
        'padding':'6px',
        'border': '2px solid #FFFFFF',
        'borderRadius': '50%',
        'margin':'2px 2px',
        'fill':'#FFFFFF'
    }

    return (  
        <div className="contact-section" id="contact" ref={reference}>
            <div className="contact-section-container">
                <div className="contact-container">
                    <h1>Let's Connnect !</h1>
                    <div className="write-email">
                        <p className='contact-text'>Write me an email</p>
                        <div className="email">
                            <a href="mailto:changherng.jc@gmail.com" >
                                <RiMailLine style={iconStyle} className='contact-icons'/>
                            </a>
                        </div>
                        
                    </div>
                    <div className="contact-link">
                        <p className='contact-text'>Social Media</p>
                        <div className="social-media-icons">
                            <a href="https://github.com/JadenChun" target="_blank" rel="noopener noreferrer">
                                <RiGithubLine style={iconStyle} className='contact-icons'/>
                            </a>
                            <a href="https://www.linkedin.com/in/jaden-chun-287392182/" target="_blank" rel="noopener noreferrer">
                                <RiLinkedinLine style={iconStyle} className='contact-icons'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;