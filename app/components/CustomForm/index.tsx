import React, { useState } from 'react'
import { Button, Form, Input, Space, Tag } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

export default function CustomForm({ visibility, action }: { visibility: any, action: string }) {
    const status = [
        {
            status: 'todo',
            display: 'Todo',
            color: 'default',
        },
        {
            status: 'in-progress',
            display: 'In progress',
            color: 'orange',
        },
        {
            status: 'done',
            display: 'Done',
            color: 'green'
        },
        {
            status: 'backlog',
            display: 'Backlog',
            color: 'blue',
        },
        {
            status: 'canceled',
            display: 'Canceled',
            color: 'red',
        },
    ]

    const priority = [
        {
            priority: 'low',
            display: 'Low',
            color: 'green',
        },
        {
            priority: 'medium',
            display: 'Medium',
            color: 'orange',
        },
        {
            priority: 'high',
            display: 'High',
            color: 'red'
        },
    ]

    const [title, setTitle] = useState('')
    const [selectedTagStatus, setSelectedTagStatus] = useState(status[0])
    const [selectedTagPriority, setSelectedTagPriority] = useState(priority[0])

    const handleSubmit = () => {
        console.log({title, status: selectedTagStatus.status, priority: selectedTagPriority.priority})
    }

    return (
        <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-200 bg-white/60'>
            <Form
                className='px-10 py-5 h-auto w-3/4 lg:w-2/5 md:w-3/5 bg-white rounded-xl border-solid border border-[#dcdcdc] shadow-lg'
                name='validateOnly'
                layout='vertical'
                autoComplete='off'
            >
                <Form.Item className='flex justify-end'>
                    <Button
                        className='p-2 flex items-center justify-center text-lg text-[#cccccc] border-none shadow-none'
                        onClick={() => visibility(false)}
                    >
                        <CloseOutlined/>
                    </Button>
                </Form.Item>

                <Form.Item className='mt-0 mb-4 font-bold'>
                    <header className='text-xl'>{action}</header>
                </Form.Item>

                <Form.Item
                    name='title'
                    label='Title:'
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input.TextArea
                        rows={3}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>

                <Form.Item label='Status:'>
                    {status.map((tag) => (
                        <Form.Item
                            key={tag.status}
                            className='my-0 py-0 float-left'
                            name={['status', tag.status]}
                        >
                            <Tag
                                className={`cursor-pointer ${selectedTagStatus.status === tag.status ? 'font-bold border-[3px]' : ''}`}
                                color={tag.color}
                                onClick={() => setSelectedTagStatus(tag)}
                            >
                                {tag.display}
                            </Tag>
                        </Form.Item>
                    ))}
                </Form.Item>

                <Form.Item label='Priority:'>
                    {priority.map((tag) => (
                        <Form.Item
                            key={tag.priority}
                            className='my-0 py-0 float-left'
                            name={['priority', tag.priority]}
                        >
                            <Tag
                                className={`cursor-pointer ${selectedTagPriority.priority === tag.priority ? 'font-bold border-[3px]' : ''}`}
                                color={tag.color}
                                onClick={() => setSelectedTagPriority(tag)}
                            >
                                {tag.display}
                            </Tag>
                        </Form.Item>
                    ))}
                </Form.Item>
                
                <Form.Item className='text-center'>
                    <Space>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}