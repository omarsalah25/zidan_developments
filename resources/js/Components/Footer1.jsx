import React from 'react'
import Content from './Content';

export default function Footer() {
    return (
        <div
            className='relative max-h-[800px] h-[800px] '
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative max-h-[calc(100vh+800px)] h-[calc(100vh+800px)] -top-[100vh]'>
                <div className='max-h-[800px] h-[800px] sticky top-[calc(100vh-800px)] overflow-hidden'>
                    <Content />
                </div>
            </div>
        </div>
    )
}
