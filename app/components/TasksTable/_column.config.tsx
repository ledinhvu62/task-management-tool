import { Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { EditOutlined } from '@ant-design/icons'

const columns: ColumnsType<DataType> = [
    {
        title: `Task`,
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: `Title`,
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: `Status`,
        dataIndex: 'status',
        key: 'status',
        render(value) {
            switch (value) {
                case 'todo':
                    return (
                        <Tag color='default'>
                            {value}
                        </Tag>
                    )
                case 'in progress':
                    return (
                        <Tag color='orange'>
                            {value}
                        </Tag>
                    )
                case 'done':
                    return (
                        <Tag color='success'>
                            {value}
                        </Tag>
                    )
                case 'backlog':
                    return (
                        <Tag color='blue'>
                            {value}
                        </Tag>
                    )
                case 'canceled':
                    return (
                        <Tag color='red'>
                            {value}
                        </Tag>
                    )
            }
        },
    },
    {
        title: `Priority`,
        key: 'priority',
        dataIndex: 'priority',
        render(value) {
            switch (value) {
                case 'low':
                    return (
                        <Tag color='green'>
                            {value}
                        </Tag>
                    )
                case 'medium':
                    return (
                        <Tag color='orange'>
                            {value}
                        </Tag>
                    )
                case 'high':
                    return (
                        <Tag color='red'>
                            {value}
                        </Tag>
                    )
            }
        },
    },
    {
        title: `Action`,
        key: 'action',
        render: () => <EditOutlined className='cursor-pointer' />,
    },
]

export { columns }