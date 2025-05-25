import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Table, Button, Space, Tooltip } from 'antd';
import { Head, Link, router } from '@inertiajs/react';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const Index = ({ projects }) => {
    const columns = [
        {
            title: 'Project Name',
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
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 120,
            fixed: 'right',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Show">
                        <Link href={`/admin/projects/${record.slug}`}>
                            <Button icon={<EyeOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Link href={`/admin/projects/${record.slug}/edit`}>
                            <Button icon={<EditOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Link href={`/admin/projects/${record.id}/delete`}>
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
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <AuthenticatedLayout header="Projects">
            <Head title="Projects" />
            <div className="p-4 flex flex-col">
                <Link href="/admin/projects/create" className="mb-4 w-fit">
                    <Button type="primary" className='w-fit'>Create Project</Button>
                </Link>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={projects}
                    pagination={{ pageSize: 10 }}
                    bordered
                    scroll={{ x: 'max-content' }}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
