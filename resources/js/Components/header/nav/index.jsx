'use client';
import styles from './style.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
import { usePage } from '@inertiajs/react';




export default function Index() {
    const initialSelectedLink = useMemo(() => ({ isActive: false, index: 0 }), []);
    const [selectedLink, setSelectedLink] = useState(initialSelectedLink);
    const { localeData } = usePage().props;
    const [currentLocale, setCurrentLocale] = useState(localeData?.languageCode);

    useEffect(() => {
        setCurrentLocale(localeData?.languageCode);
    }, [localeData?.languageCode]);

    const links = useMemo(() => [
        {
            title: localeData.data.Home,
            href: "/",
            src: "home.jpg"
        },
        {
            title: localeData.data.About_us,
            href: "/about",
            src: "about.jpg"
        },
        {
            title: localeData.data.Construction_updates,
            href: "/construction",
            src: "cs_update.jpg"
        },
        {
            title: localeData.data.Our_projects,
            href: "/projects",
            src: "projects.jpg"
        },
        {
            title: localeData.data.Contact,
            href: "/contact",
            src: "contact.jpg"
        }
    ], []);

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                    <Footer />
                </div>
                <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
            </div>
        </motion.div>
    )
}
