import React, { useRef, useState } from 'react';
import { Form, Button, Select } from 'antd';
import JoditEditor from 'jodit-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';

const Create = ({ units }) => {
    const [form] = Form.useForm();
    const [constructionUpdate, setConstructionUpdate] = useState('');
    const [constructionUpdateAr, setConstructionUpdateAr] = useState('');
    const editor = useRef(null);
    const editorAr = useRef(null);

    const config = React.useMemo(() => ({
        readonly: false,
        height: 500,
        uploader: {
            insertImageAsBase64URI: true,
        },
        buttons: [
            'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|',
            'image', 'video', 'link', '|',
            'align', 'undo', 'redo'
        ]
    }), []);

    const configAr = React.useMemo(() => ({
        readonly: false,
        height: 500,
        direction: 'rtl',
        uploader: {
            insertImageAsBase64URI: true,
        },
        buttons: [
            'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|',
            'image', 'video', 'link', '|',
            'align', 'undo', 'redo'
        ]
    }), []);

    const handleDescriptionChange = (newContent) => {
        setConstructionUpdate(newContent);
    };

    const handleDescriptionArChange = (newContent) => {
        setConstructionUpdateAr(newContent);
    };

    const handleFinish = (values) => {
        router.post('/admin/construction-updates/store', {
            ...values,
            construction_update: constructionUpdate,
            construction_update_ar: constructionUpdateAr
        });

    };

    return (
        <AuthenticatedLayout>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item
                    label="Unit"
                    name="unit_id"
                    rules={[{ required: true, message: 'Please select a unit' }]}
                >
                    <Select
                        showSearch
                        placeholder="Select a unit"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {units.map(unit => (
                            <Select.Option key={unit.id} value={unit.id}>
                                {unit.title}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Construction Update (English)">
                    <JoditEditor
                        value={constructionUpdate}
                        config={config}
                        ref={editor}
                        onChange={handleDescriptionChange}
                    />
                </Form.Item>
                <Form.Item label="Construction Update (Arabic)">
                    <JoditEditor
                        value={constructionUpdateAr}
                        config={configAr}
                        ref={editorAr}
                        onChange={handleDescriptionArChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </AuthenticatedLayout>
    );
};

export default Create;
