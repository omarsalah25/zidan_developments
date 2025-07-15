import React from 'react';
import { Form, Input, Button, Select, Card, Upload } from 'antd';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UploadOutlined } from '@ant-design/icons';
import { Space, Trash } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;

const Edit = ({projects,amenities,unit}) => {
    const [form] = Form.useForm();
// Set initial selected amenities from unit.amenities (assuming it's an array of IDs)
const initialAmenities = unit.amenities ? unit.amenities.map(a => a.id || a) : [];
    const onFinish = (values) => {
        router.post(`/admin/units/${unit.id}/update`, values);
    };
    const handleImageRemove = (file) => {
        router.get(`/admin/unitImage/${file.id}/delete`);
    };

    return (
        <AuthenticatedLayout >
            <Head title={`Edit Unit`} />
            <div className="max-w-4xl mx-auto mt-6">
                <Card title="Edit Unit" bordered>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{
                            title: unit.title,
                            title_ar: unit.title_ar,
                            desc: unit.desc,
                            desc_ar: unit.desc_ar,

                        }}
                         onFinish={onFinish}
                    >


                        <Form.Item
                        label='Project'
                        hasFeedback
                        name='project_id'
                        initialValue={unit.project.id}
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
                            initialValue={initialAmenities}
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
                            // initialValue={unit.thumbnail}
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

                        <img src={'/storage/'+unit.thumbnail} className='w-full max-h-64 object-cover'/>


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
                                onRemove={handleImageRemove}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </Form.Item>


                        {unit.unit_images && unit.unit_images.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-sm mt-10">
                                {unit.unit_images.map((image, index) => (
                                    <div key={index} className="relative size-64">
                                        <img
                                            src={'/storage/' + image.image}
                                            alt={`Unit Image ${index + 1}`}
                                            className="w-full h-full   object-cover rounded-lg shadow-md"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
 <Button
                                            type="link"
                                            danger
                                            className=""
                                            onClick={() => handleImageRemove(image)}
                                        >
                                            <span className="text-red-500"><Trash/></span>
                                        </Button>                                        </div>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 mt-4">No images uploaded yet.</p>
                        )}

                        {/* <img src={'/storage/' + project.image}
                            onError={(e) => e.target.src = '/login_bg.jpg'}
                            alt="Project Image"
                            className='size-64 object-contain p-2 bg-black my-5' /> */}

                        <Form.Item
                        className='mt-6'>
                            <Button type="primary" htmlType="submit">
                                Edit Unit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
