import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer1';
import Header from '@/Components/header';
import { router } from '@inertiajs/react';
import { ConfigProvider, Spin } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function GuestLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);
const [loading, setLoading] = useState(false);
  const [delayed, setDelayed] = useState(false);


  useEffect(() => {
    let timeout;
  const hasSeenSplash =  localStorage.getItem('hasSeenSplash');
    const splash = document.getElementById('splash-screen');
    // Handle splash screen only on first visit

    if (!hasSeenSplash && splash) {
      // Mark splash as seen for future visits
      localStorage.setItem('hasSeenSplash', 'true');

      // Delay hiding for dramatic effect (optional)
      setTimeout(() => {
        splash.classList.add('hidden');
        setTimeout(() => splash.remove(), 1500); // allow transition
      }, 1500); // 1.5s splash screen
    } else if (splash) {
      splash.remove(); // Skip immediately if already seen
    }

    // Inertia progress loading
    router.on('start', () => {
      timeout = setTimeout(() => {
        setDelayed(true);
        setLoading(true);
      }, 250);
    });

    router.on('finish', () => {
      clearTimeout(timeout);
      setLoading(false);
      setTimeout(() => setDelayed(false), 300);
    });

    return () => {
      router.on('start');
      router.on('finish');
    };
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
            <div className='w-full h-full  '>
                <Header />
                <div className='flex flex-col min-h-screen overflow-hidden w-full pt-12 '>
                    {delayed && loading && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-70">
                        <Spin size="large" tip="Loading..." />
                        </div>
                    )}
                    {children}
                </div>
                <Footer />

            </div>
        </ConfigProvider>
    );
}
