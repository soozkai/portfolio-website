import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="categories">
                <Link className="direction" to="about" smooth={true} duration={500} offset={50}>About</Link>
                <Link className="direction" to="work-experience" smooth={true} duration={500} >Experience</Link>
                <Link className="direction" to="skills" smooth={true} duration={500} >Skills</Link>
                <Link className="direction" to="projects" smooth={true} duration={500} >Project</Link>
                <Link className="direction" to="contact" smooth={true} duration={500} >Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;