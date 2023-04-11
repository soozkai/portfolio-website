import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavMenuItem from "./NavMenuItem";
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = ({items, refs}) => {
    const [isIntersecting, setIsIntersecting] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const clickTimeout = useRef(null);
    const [selected, setSelected] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const aboutSection = items.filter((item)=>item.text==="About").map((item)=> item.linkTo)[0];
    const contactSection = items.filter((item)=>item.text==="Contact").map((item)=> item.linkTo)[0];
    const projectSection = items.filter((item)=>item.text==="Project").map((item)=> item.linkTo)[0];
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(entry.target.id);
                }else{
                    if (entry.target.id === contactSection) {
                        setIsIntersecting(projectSection);
                    }
                    else if (entry.target.id === aboutSection && entry.boundingClientRect.y > 0){
                        setIsIntersecting(null);
                    }
                }
            }, {
                threshold: 0.5,
            }
        );
        window.addEventListener('resize', handleWindowResize);
        refs.forEach((component) => {
            observer.observe(component.current);
        });
        return () => {
            window.removeEventListener('resize', handleWindowResize);
            refs.forEach((component) => {
                observer.unobserve(component.current);
            });
        };
    },[]);

    useEffect(() => {
        if(!isClicked){
            const newIndex = items.map((item, index) => {if (item.linkTo === isIntersecting) return index})
                                .filter((index) => index >= 0 )[0]
            setSelected(newIndex)
        }
    }, [isIntersecting]);

    const handleClick = (index) => {
        setIsClicked(true);
        clearTimeout(clickTimeout.current);
        setSelected(index);
        clickTimeout.current = setTimeout(() => {
            setIsClicked(false);
        }, 1000);
        if(isNavMenuOpen){
            setIsNavMenuOpen(!isNavMenuOpen)
            document.body.style.overflow = 'auto'
        }
    }

    const navMenuVariants = {
        hidden: { y: -9000 },
        show: {
            y: 0,
            transition: {
                duration: 0.2,
                when:"beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const navMenuItemVariants = {
        hidden: { scale: 0 },
        show: { scale: 1 }
    }

    useEffect(()=>{
        if(isNavMenuOpen){
            document.getElementById('close-menu').classList.add('white-text')
            document.querySelectorAll('#nav-text').forEach((navText)=>navText.classList.add('white-text'))
        }
    },[isNavMenuOpen])

    return (
        <nav className="navbar">
            { (windowWidth > 820) ? 
                <div className="categories">
                    {items.map(( item, index ) => (
                        <NavMenuItem
                            item = {item}
                            key = {index}
                            selected = { selected === index }
                            onClick={ () => handleClick(index) }
                        />
                    ))}
                </div>
                :
                <div>
                    {isNavMenuOpen ? 
                    <IoClose id='close-menu' className='nav-menu-icon' onClick={()=> {
                        setIsNavMenuOpen(!isNavMenuOpen)
                        document.body.style.overflow = 'auto';
                    }} /> 
                    : 
                    <IoMenu className='nav-menu-icon' onClick={()=>{
                        setIsNavMenuOpen(!isNavMenuOpen)
                        document.body.style.overflow = 'hidden';
                    }} />
                    }
                    <AnimatePresence>
                    { isNavMenuOpen &&
                        <motion.div
                            className='nav-menu-backdrop'
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            variants={navMenuVariants}
                        >
                            {items.map(( item, index ) => (
                                <NavMenuItem
                                    item = {item}
                                    key = {index}
                                    selected = {selected === index}
                                    onClick={() => handleClick(index)}
                                    variant={navMenuItemVariants}
                                />
                            ))}
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>
            }
        </nav>
    );
}

export default Navbar;