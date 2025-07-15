import GuestLayout from '@/Layouts/GuestLayout'
import { Head, usePage } from '@inertiajs/react';
import React, { use } from 'react'
import { CheckCircleFilled } from '@ant-design/icons';

const About = () => {
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar';
    return (
        <GuestLayout>
        <Head title={localeData.data.About_us} />
            <div className='flex flex-col '>
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex justify-around min-h-[500px] py-5 md:px-12 p-5 bg-gray-100'>
                    <div className='w-full flex justify-center items-center'
                     data-aos='fade-left'
            data-aos-delay='0.2'> <img src='logo_dark.png' className='w-full max-w-sm' /></div>
                    <div
                     data-aos='fade-right'
            data-aos-delay='0.2'
                     className='w-full flex flex-col justify-center gap-5  ' dir={isRtl ? 'rtl' : 'ltr'}>
                        <h1 className='text-4xl font-Dubai-medium'>{localeData.data.ZidanDevelopments}</h1>
                        <p>{localeData.data.AboutZidanDevelopments}</p>
                    </div>



                </div>
                <div className='flex flex-col justify-center items-center w-full  gap-10 p-5'
                           data-aos='fade-up'
            data-aos-delay='0.2'>


                    <div className='w-full flex md:flex-row justify-center items-center flex-col gap-5'>
                        <div
                         data-aos='fade-left'
            data-aos-delay='0.2'
                         className='w-full  min-h-[400px]'
                            style={{
                                backgroundImage: 'url("home_img_poster.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                            }}>
                        </div>
                        <div className='flex flex-col  items-center w-full  '
                                        data-aos='fade-right'
            data-aos-delay='0.2'>
                            <div className='flex flex-col gap-5 ' dir={isRtl ? 'rtl' : 'ltr'}>
                                <h1 className='text-4xl font-Dubai-medium '>{localeData.data.OurGoals}</h1>
                                <p className='text-lg font-Dubai-bold text-gray-600'>{localeData.data.OurGoals1}</p>
                            </div>

                        </div>




                    </div>

                      <div className='w-full flex md:flex-row justify-center items-center flex-col gap-5'
                      data-aos='fade-up'
            data-aos-delay='0.2'
                      >
                        <div className='flex flex-col items-center w-full  '              data-aos='fade-left'
            data-aos-delay='0.2'>
                            <div className='flex flex-col  ' dir={isRtl ? 'rtl' : 'ltr'}>
                                <h1 className='text-4xl font-Dubai-medium'>{localeData.data.OurValues}</h1>
                                <ul className='flex flex-col gap-2 mt-5'>
                                    <li className='text-gray-600 text-base font-Dubai-bold'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-xl' />
                                            <p>{localeData.data.OurValues1}</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-bold'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-xl' />
                                            <p>{localeData.data.OurValues2}</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-bold'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-xl' />
                                            <p>{localeData.data.OurValues3}</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-bold'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-xl' />
                                            <p>{localeData.data.OurValues4}</p>
                                        </div>
                                    </li>


                                </ul>
                            </div>

                        </div>
                        <div className='w-full  min-h-[400px]'                             data-aos='fade-right'
            data-aos-delay='0.2'
                            style={{
                                backgroundImage: 'url("home_img_poster.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                            }}>
                        </div>



                    </div>
                </div>

            </div>
        </GuestLayout>
    )
}

export default About
