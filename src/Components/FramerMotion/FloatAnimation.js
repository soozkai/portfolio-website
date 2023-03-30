import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

const FloatAnimation = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:"all" });

    return ( 
        <motion.div
            ref={ref}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
        >
        {children}
        </motion.div>
    );
}

export default FloatAnimation;