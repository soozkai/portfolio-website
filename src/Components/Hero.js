import ScrollHint from "./ScrollHint";

const Hero = () => {
    return (
        <div className="home">
            <div className="intro-container">
                <h1 className="greeting">Hi, I'm Jaden</h1>
                <p>I like to build elegant software that solve real world problems. </p>
            </div>
            <div className="scroll-hint-component">
                <ScrollHint />
            </div>
        </div>
    );
}

export default Hero;