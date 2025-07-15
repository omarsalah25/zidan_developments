import React from 'react';
import { Descriptions, Card, Row, Col, Tag } from 'antd';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { LinkIcon } from 'lucide-react';

const View = ({ project }) => {
    return (
        <AuthenticatedLayout header={`Project: ${project.title}`}>
            {/* Project Details */}
            <Card className="max-w-4xl mx-auto mt-6" bordered>
                <Descriptions
                    title="Project Details"
                    bordered
                    column={1}
                    layout="vertical"
                    labelStyle={{ fontWeight: 'bold' }}
                >
                    <Descriptions.Item label="Title">
                        {project.title}
                    </Descriptions.Item>
                    <Descriptions.Item label="Slug">
                        {project.slug}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        {project.desc}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">
                        {project.status}
                    </Descriptions.Item>
                    <Descriptions.Item label="Created At">
                        {project.created_at}
                    </Descriptions.Item>
                    <Descriptions.Item label="Updated At">
                        {project.updated_at}
                    </Descriptions.Item>
                </Descriptions>
            </Card>

            {/* Related Units */}
            <div className="max-w-7xl mx-auto mt-10 px-4">
                <h2 className="text-xl font-semibold mb-4">Related Units</h2>
                <Row gutter={[16, 16]}>
                    {project.units?.length ? (
                        project.units.map((unit) => (
                            <Col xs={24} sm={24} md={12} lg={12} key={unit.id}>
                                <Card
                                    title={unit.title}
                                    bordered
                                    hoverable
                                    className='w-full h-full'
                                    extra={<Tag color="blue" className='p-2' onClick={() => router.get(`/admin/units/${unit.slug}`)}><LinkIcon className='size-3 ' /></Tag>}
                                >

                                    <Descriptions
                                        title="Project Details"
                                        bordered
                                        column={2}
                                        layout="vertical"
                                        labelStyle={{ fontWeight: 'bold' }}
                                    >
                                        <Descriptions.Item label="Description">
                                            {unit.desc}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Location">
                                            {unit.location}
                                        </Descriptions.Item>
                                    </Descriptions>


                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-gray-500">No related units found.</p>
                    )}
                </Row>
            </div>
        </AuthenticatedLayout>
    );
};

export default View;
