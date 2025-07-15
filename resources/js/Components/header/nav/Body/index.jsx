import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';
import { Link, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

 function Body({ links, selectedLink, setSelectedLink }) {
    const { localeData } = usePage().props;
    const [currentLocale, setCurrentLocale] = useState(localeData?.languageCode);

    useEffect(() => {
        setCurrentLocale(localeData?.languageCode);
    }, [localeData?.languageCode]);


    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }

    return (
        <div className={styles.body} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return <Link key={`l_${index}`} href={href}>
                        <motion.p
                            className='rtl:font-Dubai-medium '
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                            {currentLocale === 'en' ? getChars(title) : title}
                        </motion.p>
                    </Link>
                })
            }
        </div>
    )
}

export default React.memo(Body)
