import React from 'react'
import { useQuery } from 'react-query'
import { Skeleton, Table } from 'antd'

import { columns } from './_column.config'

export default function TaskTable() {

    async function fetchingTasks() {
        const res = await fetch('/api/tasks')
        return res.json()
    }

    const { data, isLoading, isError } = useQuery('todo', fetchingTasks)

    if (isLoading) {
        return (
            <Skeleton
                loading={isLoading}
                active paragraph={{ rows: 20 }}
            />
        )
    }

    if (isError) {
        return <span>Have an errors</span>
    }

    return (
        <Table
            columns={columns}
            dataSource={data?.tasks}
            rowKey={'id'}
        />
    )
}