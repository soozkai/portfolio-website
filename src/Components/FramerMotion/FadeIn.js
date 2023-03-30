import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

const FadeIn = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {  amount:"all" });

    return (
        <motion.div
            ref={ref}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;