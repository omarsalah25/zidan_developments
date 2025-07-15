import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Table, Button, Space, Tooltip, Popconfirm } from 'antd';
import { Head, Link, router } from '@inertiajs/react';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const Index = ({ updates }) => {
    const columns = [
        {
            title: 'Unit Name',

              render: (update) => (
                <Tooltip  title={update.unit?.title || 'No unit'}>
                    <span className="line-clamp-1">{update.unit?.title}</span>
                </Tooltip>
            ),
        },
        {
            title: 'Project Name',
            ellipsis: true,
            render: (update) => (
                <Tooltip  title={update.unit?.project?.title || 'No unit'}>
                    <span className="line-clamp-1">{update.unit?.project?.title}</span>
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
                        <Link href={`/admin/construction-updates/${record.unit?.slug}`}>
                            <Button icon={<EyeOutlined />} />
                        </Link>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Link href={`/admin/construction-updates/${record.unit?.slug}/edit`}>
                            <Button icon={<EditOutlined />} />
                        </Link>
                    </Tooltip>

                    <Popconfirm
                        title="Are you sure you want to delete this construction update?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => {
                            // handle the delete logic here, for example:
                            router.get(`/admin/construction-updates/${record.id}/delete`);
                        }}
                    >
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                        />
                    </Popconfirm>


                </Space>
            ),
        },

    ];


    return (
        <AuthenticatedLayout header="construction updates">
            <Head title="construction updates" />
            <div className="p-4 flex flex-col">
                <Link href="/admin/construction-updates/create" className="mb-4 w-fit">
                    <Button type="primary" className='w-fit'>Create Construction Update</Button>
                </Link>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={updates}
                    pagination={{ pageSize: 10 }}
                    bordered
                    scroll={{ x: 'max-content' }}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
