import { RiMailLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

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
        'fill':'#FFFFFF',
        'cursor':'pointer'
    }:{
        'width':'28px',
        'height':'28px',
        'padding':'10px',
        'border': '2px solid #FFFFFF',
        'borderRadius': '50%',
        'margin':'2px 2px',
        'fill':'#FFFFFF',
        'cursor':'pointer'
    }

    const downloadResume = ()=>{
        const Resume_URL = 'Resume.pdf';
        const filename = 'Austin\'s Resume.pdf';
        fetch(Resume_URL)
            .then(response => response.blob())
            .then(blob => saveAs(blob, filename))
            .catch(error => console.error(error));
    }

    return (  
        <div className="contact-section" id="contact" ref={reference}>
            <div className="contact-section-container">
                <div className="contact-container">
                    <div>
                        <p className='contact-text'>Download My Resume</p>
                        <HiDownload style={iconStyle} className='contact-icons' onClick={() => downloadResume()}/>
                    </div>
                    <div className="write-email">
                        <p className='contact-text'>Write me an Email</p>
                        <div className="email">
                            <a href="mailto:soozkai@gmail.com" >
                                <RiMailLine style={iconStyle} className='contact-icons'/>
                            </a>
                        </div>
                    </div>
                    <div className="contact-link">
                        <p className='contact-text'>Social Media</p>
                        <div className="social-media-icons">
                            <a href="https://github.com/soozkai" target="_blank" rel="noopener noreferrer">
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