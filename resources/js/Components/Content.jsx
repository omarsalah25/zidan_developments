import { FacebookIcon, Instagram, Linkedin, Mail, MapPinIcon, Phone, PinIcon } from 'lucide-react'
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
            <h1 className='w-[30vw] md:w-[14vw] leading-[0.8] mt-10'><img src='logo_dark.png' className='w-full object-cover' /></h1>
            <div className='flex gap-8'>
                <a className='cursor-pointer' href='https://facebook.com' target='_blank'>
                    <FacebookIcon />
                </a>
                <a className='cursor-pointer' href='https://instagram.com' target='_blank'>
                    <Instagram />
                </a>
                <a className='cursor-pointer' href='https://linkedin.com' target='_blank'>
                    <Linkedin />
                </a>

            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex justify-between shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-gray-600'>Sitemap</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='mb-2 uppercase text-gray-600'>Contact</h3>
                <div className='flex gap-2 text-gray-600' >
                    <MapPinIcon />
                    <p>1234 Street Name, City, State, 12345</p>
                </div>
                <div className='flex gap-2 text-gray-600' >
                    <Phone />
                    <p>+1 234 567 890</p>
                </div>
                <div className='flex gap-2 text-gray-600' >
                    <Mail />
                    <p>info@ZidanDevelopments.com</p>
                </div>

            </div>
        </div>
    )
}
