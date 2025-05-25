import React from 'react';
import { Form, Input, Button, Select, Card, Upload, message } from 'antd';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const Edit = ({ project }) => {
    console.log(project);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        try {
            router.post(`/admin/projects/${project.id}/update`, values);
            message.success('Project updated successfully');
        } catch {
            message.error('Failed to update project');
        }
    };

    return (
        <AuthenticatedLayout >
            <Head title={`Edit Project: ${project.title}`} />
            <div className="max-w-4xl mx-auto mt-6">
                <Card title="Edit Project" bordered>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{
                            title: project.title,
                            title_ar: project.title_ar,
                            desc: project.desc,
                            desc_ar: project.desc_ar,
                            status: project.status,
                            // image: project.image,
                        }}>
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
                            label="Description"
                            hasFeedback
                            name="desc_ar"
                            rules={[{ required: true, message: 'Please enter a description' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item
                            label="Status"
                            hasFeedback
                            name="status"
                            rules={[{ required: true, message: 'Please select status' }]}
                        >
                            <Select>
                                <Option value="active">Active</Option>
                                <Option value="inactive">Inactive</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="image"
                            hasFeedback
                            name="image"
                        >
                            <Upload
                                name="image"
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

                        <img src={'/storage/' + project.image}
                            onError={(e) => e.target.src = '/login_bg.jpg'}
                            className='size-64 object-contain p-2 bg-black my-5' />

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Update Project
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
