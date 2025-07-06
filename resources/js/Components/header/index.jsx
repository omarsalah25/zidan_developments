import styles from './style.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import { Link, router, usePage } from '@inertiajs/react';
import { LanguageToggle } from '../ToggleButton';

export default function index() {

    const [isActive, setIsActive] = useState(false);
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar';
    const menuLabel = isRtl ? "القائمة" : "Menu";
    const closeLabel = isRtl ? "إغلاق" : "Close";

    return (
        <div className={`${styles.header} overflow-hidden `} >
            <div className={`${styles.bar} gap-5`}>
                <div className='w-full max-h-8 object-cover'>

                    <img src='/logo_dark.png' className='h-full w-fit object-contain mb-5 cursor-pointer ' onClick={() => router.get('/')} />
                </div>

                <div onClick={() => { setIsActive(!isActive) }} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
            <motion.p className='font-Dubai-bold' variants={opacity} animate={!isActive ? "open" : "closed"}>{menuLabel}</motion.p>
            <motion.p className='font-Dubai-bold' variants={opacity} animate={isActive ? "open" : "closed"}>{closeLabel}</motion.p>
                    </div>

                </div>

            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>

            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>

    )
}
