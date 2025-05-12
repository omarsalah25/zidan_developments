import { router } from '@inertiajs/react';
import { Location } from 'antd-icons';
import { LocateIcon } from 'lucide-react';
import React from 'react'

const CsUpdateCard = ({ update }) => {
    const { title, description, image, unit } = update;
    console.log(unit)
    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };


    return (
        <div data-aos='fade-up' data-aos-delay='0.2' className='w-full h-full flex flex-col border  group overflow-hidden cursor-pointer'
            onClick={() => router.get('construction-updates/' + unit.slug)}>
            <div className='w-full h-2/3 relative  overflow-hidden '>
                <img src={'login_bg.jpg'} className='w-full min-h-96 object-cover group-hover:scale-110 duration-500 overflow-hidden ' />
                <div className='flex flex-col justify-end items-center gap-0 p-0 absolute
                                 top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-80 group-hover:scale-110 overflow-hidden '>
                </div>
                <div className='bg-black text-white p-2 w-fit rounded-lg absolute bottom-0  left-1/2 -translate-x-1/2'>
                    <h1 className='text-sm text-center font-Dubai-medium group-hover:text-base duration-700 text-nowrap'>{unit.project.title}</h1>
                </div>

            </div>
            <div className='w-full h-1/3  p-5 flex flex-col justify-center items-center gap-5 bg-gray-100 bg-opacity-80'>
                <h1 className='text-xl font-Dubai-medium group-hover:text-2xl duration-700'>{unit.title}</h1>
                <p className='text-center text-gray-600'>{truncateText(unit.desc, 50)}</p>
                <div className='flex gap-2 ' >
                    <LocateIcon className='text-gray-600' />
                    <p className='text-gray-600'>{unit.project.location}</p>
                </div>
            </div>

        </div>
    )

}

export default CsUpdateCard
