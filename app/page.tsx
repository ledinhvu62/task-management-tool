'use client'

import { Suspense, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Button, Col, Row, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import TaskTable from './components/TasksTable'
import CustomForm from './components/CustomForm'

export default function Home() {
    const [isOpeningForm, setIsOpeningForm] = useState(false)

    const queryClient = new QueryClient()

    const { Title } = Typography

    return (
        <QueryClientProvider client={queryClient}>
            <div className='p-5'>
                <Row justify='space-between' align='middle'>
                    <Col>
                        <Title level={2}>{'Your tasks'}</Title>
                        <Title level={5}>{'Here is a list of your tasks!'}</Title>
                    </Col>
                    <Col>
                        <Button
                            type='primary'
                            className='flex items-center justify-center font-bold text-black border-[#dcdcdc] shadow-lg'
                            onClick={() => setIsOpeningForm(!isOpeningForm)}
                        >
                            <PlusCircleOutlined />
                            Add task
                        </Button>
                    </Col>
                </Row>
                <Suspense fallback={<div>Loading...</div>}>
                    <TaskTable />
                </Suspense>
            </div>
            {isOpeningForm && <CustomForm visibility={setIsOpeningForm} action='Add task' />}
        </QueryClientProvider>
    )
}