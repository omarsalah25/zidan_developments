import React, { useRef, useState } from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import JoditEditor from 'jodit-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';

const Edit = ({ update }) => {
    const [form] = Form.useForm();
    const [constructionUpdate, setConstructionUpdate] = useState(update.construction_update);
    const [constructionUpdateAr, setConstructionUpdateAr] = useState(update.construction_update_ar);

    const [content, setContent] = useState(update.construction_update || '');
    const [contentAr, setContentAr] = useState(update.construction_update_ar || '');
    const editor = useRef(null);
    const editorAr = useRef(null);

const config = React.useMemo(() => ({
    readonly: false,
    height: 500,
    uploader: {
        insertImageAsBase64URI: true, // Allows direct image paste/upload as base64
        // For server upload, use:
        // url: '/your-upload-endpoint',
        // format: 'json'
    },

}), []);

const configAr = React.useMemo(() => ({
    readonly: false,
    height: 500,
    direction: 'rtl',
    uploader: {
        insertImageAsBase64URI: true,
        // url: '/your-upload-endpoint',
        // format: 'json'
    },

}), []);
    React.useEffect(() => {
        setContent(update.construction_update || '');
        setContentAr(update.construction_update_ar || '');
    }, [update.construction_update, update.construction_update_ar]);

    const handleDescriptionChange = (newContent) => {
        setContent(newContent);
        setConstructionUpdate(newContent);
    };

    const handleDescriptionArChange = (newContent) => {
        setContentAr(newContent);
        setConstructionUpdateAr(newContent);
    };

    const handleFinish = (values) => {
        // Submit logic here
     router.post(`/admin/construction-updates/${update.unit?.slug}/update`, {
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




                <Form.Item label="Construction Update (English)">
                    <JoditEditor
                        value={content}
                        config={config}
                        ref={editor}
                       onChange={handleDescriptionChange}
                    />
                </Form.Item>
                <Form.Item label="Construction Update (Arabic)">
                    <JoditEditor
                        value={contentAr}
                        config={configAr}

                        ref={editorAr}
                        onChange={handleDescriptionArChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
       </AuthenticatedLayout>
    );
};

export default Edit;
