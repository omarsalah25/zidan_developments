import ApplicationLogo from '@/Components/ApplicationLogo';
import Header from '@/Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function GuestLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);
    return (
        <>
            <Header />
            <div className='flex flex-col min-h-screen '>
                {children}
            </div>

        </>

    );
}
