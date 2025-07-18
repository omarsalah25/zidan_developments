import React from 'react';
import { Form, Input, Button, Select, Card, Upload } from 'antd';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UploadOutlined } from '@ant-design/icons';
import { Space } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;

const Create = ({projects,amenities}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        router.post('/admin/units/store', values);
    };

    return (
        <AuthenticatedLayout >
            <Head title={`Create Unit`} />
            <div className="max-w-4xl mx-auto mt-6">
                <Card title="Create Unit" bordered>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >


                        <Form.Item
                        label='Project'
                        hasFeedback
                        name='project_id'
                        rules={[{ required: true, message: 'Please enter the related Project' }]}
                        >
                            <Select
                               placeholder="Select project"
                                optionLabelProp="label">
                            {projects.map((project,index)=>(
                                <Select.Option key={index} value={project.id} label={project.title}>
                                {project.title}
                                </Select.Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Title"
                            hasFeedback
                            name="title"
                            rules={[{ required: true, message: 'Please enter the title' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Title (Arabic)"
                            hasFeedback
                            name="title_ar"
                            rules={[{ required: true, message: 'Please enter the arabic title' }]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            label="Description"
                            hasFeedback
                            name="desc"
                            rules={[{ required: true, message: 'Please enter a description' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item
                            label="Description (Arabic)"
                            hasFeedback
                            name="desc_ar"
                            rules={[{ required: true, message: 'Please enter a description' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

   <Form.Item
                            label="Amenities"
                            name="amenities"
                            hasFeedback
                            rules={[{ required: true, message: 'Please select amenities' }]}
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Select amenities"
                                optionLabelProp="label"
                            >
                                {amenities.map((amenity) => (
                                    <Select.Option
                                        key={amenity.id}
                                        value={amenity.id}
                                        label={amenity.name}
                                    >
                                        {/* <Space> */}
                                        <div className='flex flex-row items-center'>

                                            <img
                                                src={"/icon-placeholder.png"}
                                                // alt={amenity.name}
                                                style={{ width: 20, height: 20, objectFit: 'contain', marginRight: 8 }}
                                            />
                                            <p>{amenity.name}</p>
                                        </div>

                                        {/* </Space> */}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Thumbnail"
                            hasFeedback
                            name="thumbnail"
                            required
                        >
                            <Upload
                                name="thumbnail"
                                action="/upload"
                                listType="picture"
                                accept="image/*"
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


                     <Form.Item
                            label="Images"
                            hasFeedback
                            required
                            name="images"
                        >
                            <Upload
                                name="images"
                                action="/upload"
                                listType="picture"
                                accept="image/*"
                                multiple
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



                        {/*
                        <img src={'/storage/' + project.image}
                            onError={(e) => e.target.src = '/login_bg.jpg'}
                            alt="Project Image"
                            className='size-64 object-contain p-2 bg-black my-5' /> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Create Unit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
