import ScrollHint from "./ScrollHint";

const Hero = () => {
    return (
        <div className="home">
            <div className="intro-container">
                <h1 className="greeting">Hi, I'm Jaden</h1>
                <p>I am a dedicated software developer who thrives on creating elegant solutions that solve real-world problems.</p>
            </div>
            <div className="scroll-hint-component">
                <ScrollHint />
            </div>
        </div>
    );
}

export default Hero;