import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import { LanguageToggle } from '@/Components/ToggleButton';
import React from 'react';

 function Footer() {
    return (
        <div className={styles.footer}>

            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Privacy Policy
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Terms & Conditions
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <LanguageToggle />
                </motion.li>

            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    © 2025 All rights reserved.
                </motion.li>
            </ul>
        </div>
    )
}
export default React.memo(Footer)
