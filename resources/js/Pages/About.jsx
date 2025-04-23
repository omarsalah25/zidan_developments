import GuestLayout from '@/Layouts/GuestLayout'
import { usePage } from '@inertiajs/react';
import React, { use } from 'react'
import { CheckCircleFilled } from '@ant-design/icons';

const About = () => {
    const { localeData } = usePage().props;
    return (
        <GuestLayout>
            <div className='flex flex-col '>
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex justify-around min-h-[500px] p-5 bg-gray-100'>
                    <div className='w-full flex justify-center items-center'> <img src='logo_dark.png' className='w-full max-w-sm' /></div>
                    <div className='w-full flex flex-col justify-center gap-5 '>
                        <h1 className='text-4xl font-Dubai-medium'>{localeData.data.ZidanDevelopments}</h1>
                        <p>Anim adipisicing excepteur aliqua ipsum officia sit mollit laboris duis anim ut laboris. Qui et consectetur ullamco mollit ut consectetur sint eiusmod incididunt mollit commodo sint in sit. Magna magna nulla fugiat et in magna. Laboris proident mollit incididunt aliquip magna pariatur ea eu proident. Excepteur reprehenderit in anim occaecat laboris sunt non anim occaecat ut proident voluptate. Enim et tempor nostrud ut laborum consectetur. Quis Lorem elit aliqua eiusmod.</p>
                    </div>



                </div>
                <div className='flex flex-col justify-center items-center w-full  gap-10 p-5'>
                    <div className='w-full flex md:flex-row justify-center items-center flex-col gap-5'>
                        <div className='flex flex-col items-center w-full  '>
                            <div className='flex flex-col  '>
                                <h1 className='text-4xl font-Dubai-medium'>{localeData.data.Our_projects}</h1>
                                <ul className='flex flex-col gap-2 mt-5'>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className='w-full  min-h-[400px]'
                            style={{
                                backgroundImage: 'url("home_img_poster.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                            }}>
                        </div>



                    </div>

                    <div className='w-full flex md:flex-row justify-center items-center flex-col gap-5'>
                        <div className='w-full  min-h-[400px]'
                            style={{
                                backgroundImage: 'url("home_img_poster.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'left',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                            }}>
                        </div>
                        <div className='flex flex-col  items-center w-full  '>
                            <div className='flex flex-col  '>
                                <h1 className='text-4xl font-Dubai-medium '>{localeData.data.Our_projects}</h1>
                                <ul className='flex flex-col gap-2 mt-5'>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>
                                    <li className='text-gray-600 text-base font-Dubai-regular'>
                                        <div className='flex gap-3'>
                                            <CheckCircleFilled className='text-green-700 text-lg' />
                                            <p>In mollit nulla consectetur laboris id.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>




                    </div>
                </div>

            </div>
        </GuestLayout>
    )
}

export default About
