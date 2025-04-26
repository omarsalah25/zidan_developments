import GuestLayout from '@/Layouts/GuestLayout'
import { usePage } from '@inertiajs/react';
import React from 'react'

const Index = ({ projects }) => {
    console.log(projects)
    const { localeData } = usePage().props;
    return (
        <GuestLayout>
            <div className='flex flex-col '>
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex flex-col justify-around min-h-[500px] p-5 bg-gray-100 gap-10'>
                    <div className='w-full flex justify-center items-center'>
                        <h1 className='text-4xl font-Dubai-medium  capitalize'>current projects</h1>
                    </div>
                    <div className='w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-5 '>

                        {projects.map((project) => (
                            <div className='w-full h-full border relative group overflow-hidden  '>
                                <img src={'login_bg.jpg'} className='w-full h-96 object-cover group-hover:scale-110 duration-500' />
                                <div className='flex flex-col justify-center items-center gap-5 p-5 absolute
                                top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80'>
                                    <h1 className='text-3xl font-Dubai-medium group-hover:text-4xl duration-700'>{project.title}</h1>
                                </div>
                            </div>
                        ))}
                        {/* <div className='w-full h-full border relative group overflow-hidden  '>
                        <img src='login_bg.jpg' className='w-full h-96 object-cover group-hover:scale-110 duration-500' />
                        <div className='flex flex-col justify-center items-center gap-5 p-5 absolute
                                top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80'>
                            <h1 className='text-4xl font-Dubai-medium group-hover:text-[2.4rem] duration-700'>{localeData.data.ZidanDevelopments}</h1>
                        </div>
                    </div> */}
                    </div>



                </div>


            </div>
        </GuestLayout >
    )
}

export default Index
