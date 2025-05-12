import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer1';
import Header from '@/Components/header';
import { ConfigProvider } from 'antd';
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
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemActiveColor: '#000',
                        itemHoverColor: '#000',
                        itemSelectedColor: '#000',
                        colorPrimaryBorder: '#000',
                    },
                },
            }}
        >
            <div className='w-full h-full '>
                <Header />
                <div className='flex flex-col min-h-screen overflow-hidden w-full'>
                    {children}
                </div>
                <Footer />

            </div>
        </ConfigProvider>
    );
}
