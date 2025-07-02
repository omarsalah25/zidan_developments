import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Table, Button, Space, Tooltip } from 'antd';
import { Head, Link, router } from '@inertiajs/react';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const Index = ({ units }) => {
    const columns = [
        {
            title: 'Unit Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
            ellipsis: true,
            render: (text) => (
                <Tooltip title={text}>
                    <span className="line-clamp-1">{text}</span>
                </Tooltip>
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
                        <Link href={`/admin/units/${record.slug}`}>
                            <Button icon={<EyeOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Link href={`/admin/units/${record.slug}/edit`}>
                            <Button icon={<EditOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Link href={`/admin/units/${record.id}/delete`}>
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
        if (confirm('Are you sure you want to delete this unit?')) {
            router.delete(`/admin/units/${id}`);
        }
    };

    return (
        <AuthenticatedLayout header="Units">
            <Head title="units" />
            <div className="p-4 flex flex-col">
                <Link href="/admin/units/create" className="mb-4 w-fit">
                    <Button type="primary" className='w-fit'>Create Unit</Button>
                </Link>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={units}
                    pagination={{ pageSize: 10 }}
                    bordered
                    scroll={{ x: 'max-content' }}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
