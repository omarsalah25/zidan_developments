import React from 'react';
import { Card, Descriptions, Divider } from 'antd';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const View = ({ unit }) => {
    console.log(unit);
    return (
        <AuthenticatedLayout header={`Unit: ${unit.title}`}>
            <div className="max-w-5xl mx-auto mt-6">
                <Card title="Unit Details" bordered>
                    <Descriptions column={1} bordered size="middle">
                        <Descriptions.Item label="title">
                            {unit.title}
                        </Descriptions.Item>
                        <Descriptions.Item label="title (Arabic)">
                            {unit.title_ar}
                        </Descriptions.Item>

                        <Descriptions.Item label="desc">
                            {unit.desc}
                        </Descriptions.Item>
                        <Descriptions.Item label="desc (Arabic)">
                            {unit.desc_ar}
                        </Descriptions.Item>

                        <Descriptions.Item label="Slug">
                            {unit.slug}
                        </Descriptions.Item>

                        <Descriptions.Item label="Project">
                            {unit.project?.title || '—'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Created At">
                            {unit.created_at}
                        </Descriptions.Item>
                    </Descriptions>

                    <Divider />

                    <Card type="inner" title="Additional Info">
                        {/* You can add unit images, gallery, or notes here */}
                        {unit.unit_images && unit.unit_images.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {unit.unit_images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.url}
                                        onError={(e) => {
                                            e.target.onerror = null; // Prevents infinite loop
                                            e.target.src = '/login_bg.jpg'; // Fallback image
                                        }
                                        }
                                        alt={`Unit Image ${index + 1}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No images available</p>
                        )}
                        {unit.thumbnail && (
                            <img
                                src={unit.thumbnail.url}
                                alt="Unit Thumbnail"
                                className="w-full h-auto rounded-lg mt-4"
                            />
                        )}

                        {unit.
                            amenities && unit.
                                amenities.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold">Amenities</h3>
                                    <ul className="list-disc pl-5">
                                        {unit.
                                            amenities.map((amenity, index) => (
                                                <li key={index}>{amenity.name}</li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        {/* Add more details or notes as needed */}
                        No extra info yet.
                    </Card>
                </Card>
            </div>
        </AuthenticatedLayout>
    )
}

export default View
