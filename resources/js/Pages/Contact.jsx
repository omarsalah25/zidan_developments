import GuestLayout from '@/Layouts/GuestLayout'
import { MailIcon, Phone, PinIcon } from 'lucide-react'
import { Form, Input } from 'antd'
import React from 'react'
import { Head, usePage } from '@inertiajs/react'

const Contact = () => {
    const { localeData } = usePage().props;
    const isRtl = localeData.languageCode === 'ar';

    return (
        <GuestLayout>
        <Head title={localeData.data.Contact_Us || "اتصل بنا"} />
            <div className='flex flex-col bg-gray-100 '
            >
                <img src='login_bg.jpg' className=' h-96 w-full object-cover' />
                <div className='flex md:flex-row flex-col justify-around min-h-screen md:p-5  gap-10 md:pt-24 '   data-aos='fade-up'
            data-aos-delay='0.2' dir={isRtl ? 'rtl' : 'ltr'}>
                    <div className='w-full  '   data-aos='fade-left'
            data-aos-delay='0.2'>
                    <iframe  className='h-full' width="100%"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=31%2079%20Axis,%20New%20Cairo%201,%20Cairo%20Governorate%204722426+(Zidan%20Developments)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Carte démographique</a></iframe></div>

                    <div className='flex flex-col justify-center items-center w-full'   data-aos='fade-right'
            data-aos-delay='0.2'>
                        <div className="text-right" dir={isRtl ? 'rtl' : 'ltr'}>
                            <div className="mb-8">
                                <h4 className="text-4xl font-bold mb-2">
                                    {localeData.data.Contact_Now || "اتصل الان"}
                                </h4>
                            </div>
                            <div className="flex flex-col gap-6"  >
                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end" dir={isRtl ? 'rtl' : 'ltr'}>
                                    <div className=' w-full'>
                                        <h4 className="text-lg font-semibold">{localeData.data.Address || "العنوان"}</h4>
                                        <p className="text-gray-600">{localeData.data.Address_Value || "187 طلعت حرب , المنطقة الثانية ماوتن فيو التجمع الخامس"}</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <PinIcon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end" dir={isRtl ? 'rtl' : 'ltr'}>
                                    <div className=' w-full'>
                                        <h4 className="text-lg font-semibold">{localeData.data.Phone || "رقم الهاتف"}</h4>
                                        <p className="text-gray-600">{localeData.data.Phone_Value || "01110521888"}</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <Phone className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 shadow-md p-4 bg-white rounded-md w-full justify-end" dir={isRtl ? 'rtl' : 'ltr'}>
                                    <div className=' w-full'>
                                        <h4 className="text-lg font-semibold">{localeData.data.Email || "ايميل"}</h4>
                                        <p className="text-gray-600">{localeData.data.Email_Value || "info@rakaneg.com"}</p>
                                    </div>
                                    <div className='bg-black text-white p-2 rounded-full'>
                                        <MailIcon className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                  data-aos='fade-up'
            data-aos-delay='0.2'
                 className=' flex flex-col justify-center items-center min-h-screen w-full max-w-7xl  mx-auto '>
                    <h1 className='text-4xl font-Dubai-medium text-center' dir={isRtl ? 'rtl' : 'ltr'}>
                        {localeData.data.Contact_Us || "اتصل بنا"}
                    </h1>
                    <Form
                        className='flex flex-col gap-5 mt-5 bg-white shadow-2xl p-5 rounded-md w-full'
                        layout="vertical"
                        onFinish={(values) => console.log('Form Submitted:', values)}
                        onFinishFailed={(errorInfo) => console.log('Form Submission Failed:', errorInfo)}
                        dir={isRtl ? 'rtl' : 'ltr'}
                    >
                        <Form.Item
                            name="name"
                            label={localeData.data.Name || "الاسم"}
                            hasFeedback

                            rules={[{ required: true, message: localeData.data.Enter_Name || 'يرجى إدخال الاسم' }]}
                        >
                            <Input type="text" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={localeData.data.Email || "البريد الالكتروني"}
                            hasFeedback
                            rules={[
                                { required: true, message: localeData.data.Enter_Email || 'يرجى إدخال البريد الالكتروني' },
                                { type: 'email', message: localeData.data.Valid_Email || 'يرجى إدخال بريد الكتروني صالح' }
                            ]}
                        >
                            <Input type="email" className='border p-2 rounded-md w-full' />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label={localeData.data.Message || "الرسالة"}
                            rules={[{ required: true, message: localeData.data.Enter_Message || 'يرجى إدخال الرسالة' }]}
                        >
                            <Input.TextArea rows={5} className='border p-2 rounded-md w-full'></Input.TextArea>
                        </Form.Item>
                        <Form.Item>
                            <button type="submit" className='bg-black text-white p-2 rounded-md w-full'>
                                {localeData.data.Send || "ارسال"}
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Contact
