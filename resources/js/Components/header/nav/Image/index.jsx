import React from 'react'
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { opacity } from '../../anim';

 function Index({ src, isActive }) {
    return (
        <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer}>
            <img
                src={`/navbarImages/${src}`}
                fill={true}
                className='h-full w-full object-cover object-center'
                alt="image"
            />
        </motion.div>
    )
}
export default React.memo(Index);
