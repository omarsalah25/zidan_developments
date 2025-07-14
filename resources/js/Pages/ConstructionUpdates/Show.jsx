import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { Head, usePage } from '@inertiajs/react'

const Show = ({ update }) => {
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', options);
    };

    return (
        <GuestLayout>
        <Head title={isRtl ? update.unit.title_ar : update.unit.title} />
            <div className='flex flex-col '>
                <img src='/login_bg.jpg' className=' h-96 w-full object-cover' />

                <div className='flex flex-col justify-around min-h-[500px] p-5 bg-gray-100 gap-10' dir={isRtl ? 'rtl' : 'ltr'}>
                    <div className='w-full flex justify-center items-center'>
                        <h1 className='text-2xl font-Dubai-medium capitalize'>
                            {localeData.data.Construction_updates_title || "Construction Update"}
                        </h1>
                    </div>
                    <div className='w-full flex flex-col gap-5 overflow-hidden justify-center items-center'>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='text-xl font-Dubai-medium capitalize'>{isRtl?update.unit.title_ar:update.unit.title}</h1>
                        </div>
                        <p className='text-center text-gray-600'>{isRtl?update.unit.desc_ar:update.unit.desc}</p>
                        <div className='relative'>
                            <div className='absolute top-5 left-5 size-16 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center'>
                                <p className='text-xl text-center font-Dubai-regular'>{formatDate(update.updated_at)}</p>
                            </div>
                            <img src='/login_bg.jpg' className='w-full max-w-7xl min-h-[600px] object-cover' />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: isRtl?update.construction_update_ar:update.construction_update }}
                            className='w-full max-w-7xl p-5 bg-gray-100 bg-opacity-80'
                            dir={isRtl ? 'rtl' : 'ltr'}
                        />
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Show
