import ProjectCard from '@/Components/ProjectCard';
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, router, usePage } from '@inertiajs/react';
import React from 'react'

const Index = ({ projects }) => {
    console.log(projects)
    const { localeData } = usePage().props;
    return (
        <GuestLayout>
        <Head title={localeData.data.Projects}/>
            <div className='flex flex-col '>
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex flex-col justify-around min-h-[500px] p-5 bg-gray-100 gap-10'>
                    <div className='w-full flex justify-center items-center'>
                        <h1 className='text-4xl font-Dubai-medium  capitalize'>{localeData.data.Our_projects}</h1>
                    </div>
                    <div className='w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-5 overflow-hidden '>

                        {projects.map((project,index) => (
                               <ProjectCard key={index} project={project} />

                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout >
    )
}

export default Index
