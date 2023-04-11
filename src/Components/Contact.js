import { RiMailLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
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
        'width':'28px',
        'height':'28px',
        'padding':'10px',
        'border': '2px solid #FFFFFF',
        'borderRadius': '50%',
        'margin':'2px 2px',
        'fill':'#FFFFFF'
    }

    const downloadResume = ()=>{
        const Resume_URL = 'JadenChun\'s Resume.pdf';
        const filename = 'JadenChun\'s Resume.pdf';
        var FileSaver = require('file-saver');
        
        fetch( Resume_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
                },
            })
            .then((response) => response.blob())
            .then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                FileSaver.saveAs(fileURL, filename);
            });
        // var link = document.createElement("a"); 
        // link.download = filename;  
        // link.target = "_blank"; 
        // link.href = Resume_URL; 
        // document.body.appendChild(link);  
        // setTimeout(function() { 
        //     link.click();  
        //     document.body.removeChild(link); 
        //     document.getElementById('nextButton').onclick(); 
        // }, 500); 
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