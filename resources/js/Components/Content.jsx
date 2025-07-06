import { Link, usePage } from '@inertiajs/react'
import { FacebookIcon, Instagram, Linkedin, Mail, MapPinIcon, Phone, PinIcon, Youtube } from 'lucide-react'
import React from 'react'

export default function Content() {
    return (
        <div className='bg-gray-200 py-8 px-12 h-full w-full flex flex-col justify-end  gap-10'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='w-[30vw] md:w-[14vw] leading-[0.8] mt-10'><img src='/logo_dark.png' className='w-full object-cover' /></h1>
            <div className='flex gap-8'>
                <a className='cursor-pointer' href='https://www.facebook.com/zidandevelopments' target='_blank'>
                    <FacebookIcon />
                </a>
                <a className='cursor-pointer' href='https://www.instagram.com/zidandevelopments?igsh=YzljYTk1ODg3Zg==' target='_blank'>
                    <Instagram />
                </a>
                <a className='cursor-pointer' href='https://linkedin.com' target='_blank'>
                    <Youtube />
                </a>

            </div>
        </div>
    )
}

const Nav = () => {
       const { localeData } = usePage().props;
        const isRtl = localeData.languageCode === 'ar';
    return (
        <div className='flex md:flex-row flex-col justify-between shrink-0 gap-20' dir={isRtl?'rtl':'ltr'}>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-gray-600 font-Dubai-bold'>{isRtl?'خريطة الموقع':'Sitemap'}</h3>
                <Link className='font-Dubai-medium'  href={'/'}>{localeData.data.Home}</Link>
                <Link className='font-Dubai-medium'  href={'/about'}>{localeData.data.About_us}</Link>
                <Link className='font-Dubai-medium'  href={'/projects'}>{localeData.data.Projects}</Link>
                <Link  className='font-Dubai-medium' href={'/construction'}>{localeData.data.Construction_updates_title}</Link>
                <Link className='font-Dubai-medium'  href={'/contact'}>{localeData.data.Contact}</Link>

            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='mb-2 uppercase text-gray-600 font-Dubai-bold '>{isRtl?'أتصل بنا':'Contact'}</h3>


                <div className='flex gap-2 ' >
                    <MapPinIcon className='text-gray-600' />
                    <p className='text-gray-600'>{localeData.data.Address_Value}</p>
                </div>
                <div className='flex gap-2 ' >
                    <Phone className='text-gray-600' />
                    <p className='text-gray-600'>{localeData.data.Phone_Value}</p>
                </div>
                <div className='flex gap-2 ' >
                    <Mail className='text-gray-600' />
                    <p className='text-gray-600'>{localeData.data.Email_Value}</p>
                </div>

            </div>
        </div>
    )
}
