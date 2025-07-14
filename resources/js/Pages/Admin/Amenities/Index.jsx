import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Table, Button, Space, Tooltip } from 'antd';
import { Head, Link, router } from '@inertiajs/react';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const Index = ({ amenities }) => {
    console.log(amenities);
    const columns = [
        {
            title: 'Amenity Name',
            dataIndex: 'name',
            key: 'title',
        },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'desc',
            ellipsis: true,
            render: (icon) => (
<img src={'/storage/'+icon}  className='size-12'/>
            ),

        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        // },
        {
            title: 'Actions',
            key: 'actions',
            width: 120,
            fixed: 'right',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Show">
                        <Link href={`/admin/amenities/${record.slug}`}>
                            <Button icon={<EyeOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Link href={`/admin/amenities/${record.slug}/edit`}>
                            <Button icon={<EditOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Link href={`/admin/amenities/${record.id}/delete`}>
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                            />
                        </Link>

                    </Tooltip>
                </Space>
            ),
        },

    ];

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this amenity?')) {
            router.delete(`/admin/amenities/${id}`);
        }
    };

    return (
        <AuthenticatedLayout header="Amenities">
            <Head title="amenities" />
            <div className="p-4 flex flex-col">
                <Link href="/admin/amenities/create" className="mb-4 w-fit">
                    <Button type="primary" className='w-fit'>Create amenity</Button>
                </Link>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={amenities}
                    pagination={{ pageSize: 10 }}
                    bordered
                    scroll={{ x: 'max-content' }}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
