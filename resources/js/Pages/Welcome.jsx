import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [isMobile, setIsMobile] = useState(false);
    const { localeData } = usePage().props;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
        , []);
    console.log(localeData);
    return (
        <GuestLayout>
            <Head title="Home" />

            <div className='min-h-screen h-dvh  w-full relative overflow-hidden'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster='home_img_poster.png'
                    className='w-full h-full object-cover'
                >
                    <source src="home_vid.mp4" type="video/mp4" />
                </video>
                <div className='bg-black/50 absolute top-0 left-0 w-full h-full flex justify-center items-center '>

                    <div data-aos='fade-up' className='flex flex-col items-center justify-center p-12 gap-8 h-full w-full '>
                        <h2 className='text-gray-200 text-base font-bold'>
                            {localeData.data.Welcome}
                        </h2>
                        <h2 className='text-gray-200 md:text-4xl text-2xl text-nowrap font-bold'>
                            {localeData.data.ZidanDevelopments}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center gap-8 p-12 min-h-[450px] bg-white overflow-hidden'
                dir={localeData.languageCode === 'ar' ? 'rtl' : 'ltr'}
                style={{
                    backgroundImage: 'url("home_about_bg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >


                <div data-aos={`fade-right`} className='w-full flex items-center justify-center '>
                    <img src="logo_dark.png" className="w-full max-w-64 h-full object-contain  " />

                </div>
                <div data-aos={'fade-left'} className='w-full flex flex-col gap-3 overflow-hidden'>
                    <h2 className='text-gray-800 text-base font-Dubai-medium  text-start rtl:text-start'>
                        {localeData.data.Who_we_are}
                    </h2>
                    <h2 className='text-gray-800 text-2xl font-Dubai-bold  text-start rtl:text-start'>
                        {localeData.data.ZidanDevelopments}
                    </h2>
                    <p className='text-gray-600 text-base font-Dubai-regular text-start  rtl:text-start'>
                        {localeData.data.Who_we_are_dec}
                    </p>
                </div>

            </div>

        </GuestLayout>

    );
}
