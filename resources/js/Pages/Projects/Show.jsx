import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, router, usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Show = ({ project }) => {
    const { localeData } = usePage().props;
    console.log(project)
    const isRtl = localeData.languageCode === 'ar' ? true : false;

    return (
        <GuestLayout>
        <Head title={isRtl ? project.title_ar : project.title} />

            <div className='flex flex-col '>
                <img src='/login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex md:flex-row flex-col justify-around min-h-[500px] px-5 py-12 bg-gray-100 gap-10' dir={isRtl ? 'rtl' : 'ltr'}>
                    <div className='w-full flex flex-col justify-center gap-5'>
                        <h1 className='text-2xl font-Dubai-medium capitalize'>{isRtl ? project.title_ar : project.title} :</h1>
                        <p className='text-xl  font-Dubai-medium capitalize'>{isRtl ? project.desc_ar : project.desc}</p>
                    </div>
                    <div className='w-full  flex flex-col gap-5 overflow-hidden justify-center items-center '>

                        <div className=' relative'>

                            <img src={'/storage/' + project.image}
                                onError={(e) => e.target.src = '/login_bg.jpg'} className='w-full max-w-7xl min-h-[600px] object-cover' />
                        </div>

                    </div>
                </div>

                <div className='flex flex-col items-center justify-center px-5 py-12 gap-8 h-full w-full '>

                    <Swiper data-aos='fade-up' pagination={{ clickable: true }}
                        centeredSlides
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
                        {project.units.map((unit) => (
                            <SwiperSlide key={unit.id}>
                                <div data-aos='fade-up' data-aos-delay='0.2' className='w-full h-full border relative group overflow-hidden  '
                                    onClick={() => router.get('/units/' + unit.slug)}>
                                    <img src={'/login_bg.jpg'} className='w-full h-96 object-cover group-hover:scale-110 duration-500' />
                                    <div className='flex flex-col justify-center items-center gap-5 p-5 absolute
                                                               top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80'>
                                        <h1 className='md:text-3xl text-2xl font-Dubai-medium md:group-hover:text-4xl group-hover:text-3xl text-nowrap  duration-700'>{unit.title}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </GuestLayout>
    )
}

export default Show
