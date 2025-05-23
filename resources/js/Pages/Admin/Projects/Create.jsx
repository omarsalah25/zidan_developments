import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';
import { router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const { TextArea } = Input;
const { Option } = Select;

const Create = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        router.post('/admin/projects', values);
    };

    return (
        <AuthenticatedLayout header="Create Project">
            <div className="max-w-4xl mx-auto mt-6">
                <Card title="New Project" bordered>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
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
                            rules={[{ required: true, message: 'Please select image' }]}
                        >
                            <Input type='file' />
                        </Form.Item>

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

export default Create;
