import GuestLayout from '@/Layouts/GuestLayout'
import { usePage } from '@inertiajs/react';
import { Form, Input, Tabs } from 'antd'
import { User2Icon } from 'lucide-react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Show = ({ unit }) => {
    console.log(unit)
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar' ? true : false;
    const items = [
        {
            key: '1',
            label: <p className='w-full'>{isRtl ? 'الوصف' : 'Description'}</p>,
            children: isRtl ? unit.desc_ar : unit.desc,
        },
        {
            key: '2',
            label: <p className='w-full'>{isRtl ? 'الموقع' : 'Location'}</p>,
            children: isRtl ? unit.location_ar : unit.location,
        },
        {
            key: '3',
            label: <p className='w-full'>{isRtl ? 'المرافق' : 'Amenities'}</p>,
            children: <div className='flex justify-center items-center gap-5'>
                {unit.amenities.map((amenity) => (
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='w-20 p-5 flex justify-center items-center bg-gray-200/20'>
                            <img src={'/storage/' + amenity.icon} className='w-10 h-10 object-cover ' />
                        </div>
                        <p className='text-sm'>{isRtl ? amenity.name_ar : amenity.name}</p>
                    </div>
                ))}
            </div>,
        },
    ];

    return (
        <GuestLayout>
            <div className='flex flex-col min-h-screen justify-center mt-5 bg-gray-100' dir={isRtl ? 'rtl' : 'ltr'}>

                <div className='flex md:flex-row flex-col justify-around min-h-[500px] px-5 py-12 gap-10'>
                    <div className='w-full'>
                        <img src='/login_bg.jpg' className=' h-96 w-full object-cover' />
                    </div>

                    <Form
                        className='flex flex-col gap-5  rounded-md w-full'
                        layout="vertical"
                        onFinish={(values) => console.log('Form Submitted:', values)}
                        onFinishFailed={(errorInfo) => console.log('Form Submission Failed:', errorInfo)}
                        dir={isRtl ? 'rtl' : 'ltr'}

                    >
                        <Form.Item
                            name="name"
                            label={isRtl ? 'الاسم' : 'Name'}
                            rules={[{ required: true, message: isRtl ? 'يرجى إدخال الاسم' : 'Please enter your name' }]}
                        >
                            <Input type="text" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={isRtl ? 'البريد الالكتروني' : 'Email'}
                            rules={[
                                { required: true, message: isRtl ? 'يرجى إدخال البريد الالكتروني' : 'Please enter your email' },
                                { type: 'email', message: isRtl ? 'البريد الالكتروني غير صالح' : 'Invalid email address' }
                            ]}
                        >
                            <Input type="email" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label={isRtl ? 'الرسالة' : 'Message'}
                            rules={[{ required: true, message: isRtl ? 'يرجى إدخال الرسالة' : 'Please enter your message' }]}
                        >
                            <Input.TextArea rows={5} className='border p-2 rounded-md w-full'></Input.TextArea>
                        </Form.Item>
                        <Form.Item>
                            <button type="submit" className='bg-black text-white p-2 rounded-md w-full'>{isRtl ? "ارسال" : "Send"}</button>
                        </Form.Item>
                    </Form>

                </div>


            </div>

            <div className='flex flex-col items-start justify-start px-5 py-12 gap-8 h-full w-full ' dir={isRtl ? 'rtl' : 'ltr'}>
                <Tabs
                    type="card"
                    defaultActiveKey="1" items={items} />
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-12 gap-8 h-full w-full '>

                <Swiper data-aos='fade-up' pagination={{ clickable: true }}

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
                    {unit.unit_images.map((_, unit) => (
                        <SwiperSlide key={_}>
                            <div data-aos='fade-up' data-aos-delay='0.2' className='w-full h-full border relative group overflow-hidden  '
                            >
                                <img src={'/login_bg.jpg'} className='w-full h-96 object-cover group-hover:scale-110 duration-500' />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </GuestLayout>
    )
}

export default Show
