import {RiMailLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri';

const iconStyle = {
    'width':'30px',
    'height':'30px',
    'padding':'10px',
    'border': '3px solid #FFFFFF',
    'borderRadius': '50%',
    'margin':'0 5px',
    'fill':'#FFFFFF'
}

const Contact = () => {
    return (  
        <div className="contact-section" id="contact">
            <div className="contact-section-container">
                <div className="contact-container">
                    <h1>Let's Connnect !</h1>
                    <div className="write-email">
                        <p className='contact-text'>Write me an email</p>
                        <div className="email">
                            <a href="mailto:changherng.jc@gmail.com" >
                                <RiMailLine style={iconStyle} />
                            </a>
                        </div>
                        
                    </div>
                    <div className="contact-link">
                        <p className='contact-text'>Social Media</p>
                        <div className="social-media-icons">
                            <a href="https://github.com/JadenChun" target="_blank" rel="noopener noreferrer">
                                <RiGithubLine style={iconStyle}/>
                            </a>
                            <a href="https://www.linkedin.com/in/jaden-chun-287392182/" target="_blank" rel="noopener noreferrer">
                                <RiLinkedinLine style={iconStyle}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;