import React from 'react'
import { Form, Input, Button, Select, Card, Upload } from 'antd';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UploadOutlined } from '@ant-design/icons';
import { Space } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;
const Create = () => {
        const [form] = Form.useForm();

    const onFinish = (values) => {
        router.post('/admin/amenities/store', values);
    };

    return (
           <AuthenticatedLayout >
                   <Head title={`Create Amenity`} />
                   <div className="max-w-4xl mx-auto mt-6">
                       <Card title="Create Amenity" bordered>
                           <Form
                               form={form}
                               layout="vertical"
                               onFinish={onFinish}
                           >



                               <Form.Item
                                   label="Title"
                                   hasFeedback
                                   name="name"
                                   rules={[{ required: true, message: 'Please enter the title' }]}
                               >
                                   <Input />
                               </Form.Item>
                               <Form.Item
                                   label="Title (Arabic)"
                                   hasFeedback
                                   name="name_ar"
                                   rules={[{ required: true, message: 'Please enter the arabic title' }]}
                               >
                                   <Input />
                               </Form.Item>



 <Form.Item
                                   label="icon"
                                   hasFeedback
                                   name="icon"
                                   required
                               >
                                   <Upload
                                       name="icon"
                                       action="/upload"
                                       listType="picture"
                                       accept="image/svg"
                                       maxCount={1}
                                       beforeUpload={(file) => {
                                           const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                                           if (!isJpgOrPng) {
                                               message.error('You can only upload JPG/PNG file!');
                                           }
                                           return isJpgOrPng;
                                       }}
                                       onChange={(info) => {
                                           if (info.file.status === 'done') {
                                               message.success(`${info.file.name} file uploaded successfully`);
                                           }
                                       }}
                                   >
                                       <Button icon={<UploadOutlined />}>Upload</Button>
                                   </Upload>
                               </Form.Item>

                               <Form.Item>
                                   <Button type="primary" htmlType="submit">
                                       Create amenity
                                   </Button>
                               </Form.Item>
                           </Form>
                       </Card>
                   </div>
               </AuthenticatedLayout>
    )
}

export default Create
