import React from 'react';
import { router, usePage } from '@inertiajs/react';

export default function ProjectCard({ project }) {
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar';
    return (
        <div
            data-aos='fade-up'
            data-aos-delay='0.2'
            className='w-full md:min-h-64 h-full border relative group overflow-hidden cursor-pointer'
            onClick={() => router.get('projects/' + project.slug)}
        >
            <img
                src={'/storage/' + project.image}
                onError={(e) => { e.target.src = '/login_bg.jpg'; }}
                className='w-full h-96 object-cover group-hover:scale-110 duration-500'
                alt={project.title}
            />
            <div className='flex flex-col justify-center items-center gap-5 p-5 absolute top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80'>
                <h1 className='md:text-3xl text-base font-Dubai-medium md:group-hover:text-4xl group-hover:text-3xl text-nowrap duration-700'>
                    {isRtl? project.title_ar :project.title}
                </h1>
            </div>
        </div>
    );
}
