import React from 'react'
import { Card, Descriptions, Divider, Image, Tag } from 'antd'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import dayjs from 'dayjs';
import { Head } from '@inertiajs/react';

const View = ({ update }) => {
    const unit = update.unit;

    return (
       <AuthenticatedLayout header={`Construction Update for ${unit.title}`}>
            <Head title={`Construction Update for ${unit.title}`} />
            <Card title="Construction Update Details" bordered={false}>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Unit Title">{unit.title}</Descriptions.Item>
                    <Descriptions.Item label="Unit Title (AR)">{unit.title_ar}</Descriptions.Item>
                    <Descriptions.Item label="Description">{unit.desc}</Descriptions.Item>
                    <Descriptions.Item label="Description (AR)">{unit.desc_ar}</Descriptions.Item>
                    <Descriptions.Item label="Location">{unit.location}</Descriptions.Item>
                    <Descriptions.Item label="Location (AR)">{unit.location_ar}</Descriptions.Item>
                    <Descriptions.Item label="Project">
                        {unit.project?.title} / {unit.project?.title_ar}
                    </Descriptions.Item>
                    <Descriptions.Item label="Created At">{dayjs( update.created_at).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
                    <Descriptions.Item label="Updated At">{dayjs( update.updated_at).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
                </Descriptions>

                <Divider>Construction Update</Divider>
                <Card type="inner" title="English" style={{ marginBottom: 16 }}>
                    <div dangerouslySetInnerHTML={{ __html: update.construction_update }} />
                </Card>
                <Card type="inner" title="Arabic">
                    <div dangerouslySetInnerHTML={{ __html: update.construction_update_ar }} />
                </Card>

                <Divider>Amenities</Divider>
                {unit.amenities?.map(a => (
                    <Tag key={a.id} color="blue" style={{ marginBottom: 8 }}>
                        {a.name} / {a.name_ar}
                    </Tag>
                ))}

                <Divider>Unit Images</Divider>
                <Image.PreviewGroup>
                    {unit.unit_images?.map(img => (
                        <Image
                            key={img.id}
                            src={`storage/${img.image}`}
                            width={120}
                            height={120}
                            style={{ marginRight: 8, marginBottom: 8, objectFit: 'cover' }}
                            alt="Unit"
                        />
                    ))}
                </Image.PreviewGroup>
            </Card>
        </AuthenticatedLayout>
    )
}

export default View
