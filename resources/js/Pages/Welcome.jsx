import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '@/Components/ProjectCard';
import CsUpdateCard from '@/Components/CsUpdateCard';
export default function Welcome({ auth, laravelVersion, phpVersion,projects,updates }) {
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
            <Head title={localeData.data.ZidanDevelopments} />

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
                        <h2 className='text-gray-200 text-xl font-medium md:text-2xl text-nowrap '>
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
                    <h2 className='text-gray-800 text-lg font-Dubai-medium  text-start rtl:text-start'>
                        {localeData.data.Who_we_are}
                    </h2>
                    <h2 className='text-gray-800 text-4xl font-Dubai-bold  text-start rtl:text-start'>
                        {localeData.data.ZidanDevelopments}
                    </h2>
                    <p className='text-gray-600 text-lg font-Dubai-regular text-start  rtl:text-start'>
                        {localeData.data.AboutZidanDevelopments}
                    </p>
                </div>

            </div>

            <div className='flex flex-col p-5 gap-10 min-h-[450px] bg-gray-100 overflow-hidden'
                dir={localeData.languageCode === 'ar' ? 'rtl' : 'ltr'}
            >
                <div className='flex flex-col items-center justify-center gap-8 h-full w-full '>

                    <h2 data-aos='fade-down' className='text-gray-800 md:text-4xl text-2xl text-nowrap font-bold capitalize'>
                        {localeData.data.Latest_Our_projects}
                    </h2>
                    <div data-aos='zoom-in' className='grid grid-cols-1 text-gray-800 md:grid-cols-2 gap-8 min-h-[450px] bg-gray-100 overflow-hidden w-full'>
                       {projects.map((project, index) => (
                             <ProjectCard key={index} project={project} />
))}
                    </div>
                </div>


                <div className='flex flex-col items-center justify-center gap-8 h-full w-full '>
                    <h2 data-aos='fade-in' className='text-gray-800 md:text-4xl text-2xl capitalize   font-bold'>
                        {localeData.data.Our_Portfolio}
                    </h2>
                    <h2 data-aos='fade-in' className='text-gray-600 text-lg lg:text-nowrap font-bold'>
                        {localeData.data.Who_we_are_dec}
                    </h2>
                    <Swiper data-aos='fade-up' pagination={{ clickable: true }}
                        modules={[Pagination]} className="!h-full !w-full !min-h-96"
                        style={{
                            '--swiper-pagination-color': '#000',
                            '--swiper-pagination-bullet-inactive-color': '#000',
                            '--swiper-pagination-bullet-inactive-opacity': '0.4',
                            '--swiper-pagination-bullet-inactive-scale': '0.6',
                            '--swiper-pagination-bullet-inactive-width': '10px',
                            '--swiper-pagination-bullet-inactive-height': '10px',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >
                    {updates.map((update) => (
                           <SwiperSlide> <CsUpdateCard update={update} /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </GuestLayout >

    );
}
