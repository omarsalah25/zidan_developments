import GuestLayout from '@/Layouts/GuestLayout'
import { Location } from 'antd-icons'
import { Mail, MailIcon, Phone, PinIcon } from 'lucide-react'
import { Form, Input } from 'antd'
import React from 'react'

const Contact = () => {
    return (
        <GuestLayout>
            <div className='flex flex-col bg-gray-100 '>
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />
                <div className='flex md:flex-row flex-col justify-around min-h-screen p-5  gap-10 '>

                    <div className='w-full'>
                        <img src='/login_bg.jpg' className='w-full h-full object-cover' />
                    </div>

                    <div className='flex flex-col justify-center items-center w-full  '>
                        <div className="text-right">
                            <div className="mb-8">
                                <h4 className="text-4xl font-bold mb-2">اتصل الان</h4>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end">
                                    <div>
                                        <h4 className="text-lg font-semibold">العنوان</h4>
                                        <p className="text-gray-600">187 طلعت حرب , المنطقة الثانية ماوتن فيو التجمع الخامس</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <PinIcon className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end">
                                    <div>
                                        <h4 className="text-lg font-semibold">رقم الهاتف</h4>
                                        <p className="text-gray-600">01110521888</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <Phone className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end">
                                    <div>
                                        <h4 className="text-lg font-semibold">ايميل</h4>
                                        <p className="text-gray-600">info@rakaneg.com</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <MailIcon className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=' flex flex-col justify-center items-center min-h-screen w-full max-w-7xl mx-auto '>
                    <h1 className='text-4xl font-Dubai-medium text-center'>اتصل بنا</h1>
                    <Form
                        className='flex flex-col gap-5 mt-5 bg-white shadow-2xl p-5 rounded-md w-full'
                        layout="vertical"
                        onFinish={(values) => console.log('Form Submitted:', values)}
                        onFinishFailed={(errorInfo) => console.log('Form Submission Failed:', errorInfo)}
                        dir='rtl'
                    >
                        <Form.Item
                            name="name"
                            label="الاسم"
                            rules={[{ required: true, message: 'يرجى إدخال الاسم' }]}
                        >
                            <Input type="text" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="البريد الالكتروني"
                            rules={[
                                { required: true, message: 'يرجى إدخال البريد الالكتروني' },
                                { type: 'email', message: 'يرجى إدخال بريد الكتروني صالح' }
                            ]}
                        >
                            <Input type="email" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label="الرسالة"
                            rules={[{ required: true, message: 'يرجى إدخال الرسالة' }]}
                        >
                            <Input.TextArea rows={5} className='border p-2 rounded-md w-full'></Input.TextArea>
                        </Form.Item>
                        <Form.Item>
                            <button type="submit" className='bg-black text-white p-2 rounded-md w-full'>ارسال</button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Contact
