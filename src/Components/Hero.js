import ScrollHint from "./ScrollHint";

const Hero = () => {
    return (
        <div className="home">
            <div className="intro-container">
                <h1 className="greeting">Hi, I'm Austin</h1>
                <p>I am a passionate software developer driven by the challenge of crafting innovative solutions to address real-world challenges.</p>
            </div>
            <div className="scroll-hint-component">
                <ScrollHint />
            </div>
        </div>
    );
}

export default Hero;