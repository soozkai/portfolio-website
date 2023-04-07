import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMenuItem = ({item, selected, onClick, variant}) => {
    return (  
        <motion.div 
            className="menu-item"
            onClick={onClick}
            animate={{ opacity: selected ? 1 : .5}}
            variants={variant}
        >
            <Link to={item.linkTo} smooth={true} duration={500} onClick={onClick} id='nav-text'>
                {item.text}
            </Link>
            {selected && (
            <motion.div 
                className="underline" 
                layoutId="underline" 
            />
            )}
        </motion.div>
    );
}

export default NavMenuItem;