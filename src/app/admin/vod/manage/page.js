"use client";

import { useState, useEffect } from 'react';
import { Space, Tag } from 'antd';
import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, Switch, Modal } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
import { getVodList, deleteVods, setVodsStatus } from '@/utils';
import { useRouter } from 'next/navigation';




function VodManagePage() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [queryVodListData, setQueryVodListData] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();

    const { RangePicker } = DatePicker;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState('');

    const hasSelected = selectedRowKeys.length > 0;

    const [form] = Form.useForm();


    const columns = [
        {
            title: '编号',
            dataIndex: 'vodId',
            render: (vodId) => <a>{vodId}</a>,
            width: 80,
        },
        {
            title: '名称',
            dataIndex: 'vodName',
            render: (vodName, record) =>
                <a>
                    {vodName}  <Tag color="orange">{record.vodRemarks}</Tag>
                </a>,
        },
        {
            title: '分类',
            dataIndex: 'typeName',
            render: (typeName, record) => {
                return <Tag color="blue">[{record.typeId}] {typeName}</Tag>;
            },
            width: 110,

        },
        {
            title: '推荐',
            dataIndex: 'vodLevel',
            render: (vodLevel) => {
                if (vodLevel === null) {
                    return <Tag color="green">0</Tag>;
                }
                return <Tag color="blue">{vodLevel}</Tag>;
            },
            width: 90,
        },
        {
            title: '更新时间',
            dataIndex: 'vodTimeAdd',
            render: (vodTimeAdd) => {
                // yyyy-MM-dd hh:mm:ss
                return new Date(vodTimeAdd * 1000).toLocaleString();
            },
            width: 200,
        },
        {
            title: '播放',
            dataIndex: 'vodId',
            render: (vodId) => {
                return <a href={`/watch/${vodId}`} target='_blank'><Tag icon={<YoutubeOutlined />} color="#cd201f"></Tag></a>;
            },
            width: 90,
        },
        {
            title: '状态',
            dataIndex: 'vodStatus',
            render: (vodStatus, record) => {
                return <Switch
                    key={record.vodId}
                    checkedChildren="锁定"
                    unCheckedChildren="解锁"
                    onChange={async (checked) => {
                        await setVodsStatus(record.vodId, checked ? 1 : 0)
                        fetchData()
                    }}
                    className='bg-[rgb(152,152,152)] '
                    value={vodStatus === 1 ? true : false}
                />
            },
            width: 90,
        },
        {
            title: '操作',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            // 跳转到编辑页面
                            router.push(`/admin/vod/edit?vodId=${record.vodId}`)
                        }}
                    >编辑
                    </Button>
                    <Popconfirm
                        title="提醒"
                        description="删除之后无法恢复，您确定删除吗？"
                        onConfirm={() => {
                            onClickDeteteVods(record.vodId)
                        }}
                        onCancel={() => {
                            messageApi.info('取消删除')
                        }}
                        okText="删除"
                        cancelText="取消"
                        okButtonProps={{ danger: true }}
                    >
                        <Button danger>删除</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];



    const [isLoad, setIsLoad] = useState(false);

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pages: 10,
        },
    });



    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);

    // 选择
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };


    const fetchData = async () => {
        setIsLoad(true);
        // 获取表单数据
        const { typeId, vodStatus, vodLevel, vodName } = form.getFieldsValue();

        const queryVodList = await getVodList(typeId, "", vodStatus, vodName, vodLevel, tableParams.pagination.current, tableParams.pagination.pages);

        setQueryVodListData(queryVodList.records);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: queryVodList.total,
            }
        });
        setIsLoad(false);
    }

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                current: pagination.current,
                pages: pagination.pageSize,
            }
        });
    };




    const onClickDeteteVods = async (vodId) => {
        const res = await deleteVods(vodId);
        if (res.success) {
            fetchData();
            // messageApi.success('删除成功');
        }
    }



    const openModal = (type) => {
        setActiveModal(type);
        setIsModalOpen(true);
    };

    return (
        <div>
            {contextHolder}
            <Form
                className='mt-4'
                layout='inline'
                onFinish={fetchData}
                form={form}
            >
                <Form.Item
                    name="typeId"
                    initialValue={""}
                >
                    <Select
                        placeholder="分类"
                        style={{ width: 120 }}
                        optionRender={labelRender}
                        labelRender={labelRender}
                        options={[
                            { value: "", label: '选择分类' },
                            { value: "1", label: '科幻' },
                            { value: "11", label: '动作' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="rangeTime"
                >
                    <RangePicker
                    // format="YYYY-MM-DD HH:mm:ss"
                    />
                </Form.Item>
                <Form.Item
                    name="vodStatus"
                    initialValue={""}
                >
                    <Select
                        style={{ width: 120 }}
                        optionRender={labelRender}
                        labelRender={labelRender}
                        options={[
                            { value: "", label: "视频状态" },
                            { value: "0", label: "开启" },
                            { value: "1", label: "关闭" },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="vodLevel"
                    initialValue={""}
                >
                    <Select
                        style={{ width: 120 }}
                        optionRender={labelRender}
                        labelRender={labelRender}
                        options={[
                            { value: "", label: "推荐位" },
                            { value: "1", label: "1" },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="vodName"
                    initialValue={""}
                >
                    <Input
                        placeholder='关键字'
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" className='bg-blue-400' htmlType="submit">
                        查询
                    </Button>
                </Form.Item>
            </Form>
            <div
                style={{
                    display: 'flex',
                    marginBottom: 16,
                    marginTop: 16,
                    gap: 8,
                }}
            >

                <Button
                    disabled={!hasSelected}
                    onClick={() => {
                        openModal('status')
                    }}>
                    设置状态
                </Button>

                {/* <Button
                    disabled={!hasSelected}
                    onClick={() => {
                        openModal('level')
                    }}>
                    设置推荐位
                </Button> */}

                {isModalOpen && (
                    <CustomModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        activeModal={activeModal}
                        selectedRowKeys={selectedRowKeys}
                        onChange={fetchData}
                    />
                )}

                <Popconfirm
                    title="提醒"
                    description="删除之后无法恢复，您确定删除吗？"
                    onConfirm={() => {
                        onClickDeteteVods(selectedRowKeys.join(","))
                        setSelectedRowKeys([])
                    }}
                    onCancel={() => {
                        messageApi.info('取消删除')
                    }}
                    okText="删除"
                    cancelText="取消"
                    okButtonProps={{ danger: true }}
                >
                    <Button
                        danger
                        disabled={!hasSelected}
                    >删除</Button>
                </Popconfirm>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>

            <Table
                className='mt-4'
                rowKey="vodId"
                columns={columns}
                dataSource={queryVodListData}
                loading={isLoad}
                rowSelection={rowSelection}
                onChange={handleTableChange}
                pagination={tableParams.pagination}
            />

        </div>
    );
}
// 在 CustomModal 组件中
const CustomModal = ({ isModalOpen, setIsModalOpen, activeModal, selectedRowKeys, onChange }) => {

    const [status, setStatus] = useState('');

    const handleSetVodsOK = async () => {
        const resp = await setVodsStatus(selectedRowKeys.join(","), status)
        if (resp.success) {
            onChange()
            message.success('设置状态成功');
            setIsModalOpen(false);
        }
    };

    const statusOptions = [
        { value: '', label: '请选择' },
        { value: '0', label: '开启' },
        { value: '1', label: '关闭' },
    ];

    const levelOptions = [
        { value: '', label: '请选择' },
        { value: '1', label: '推荐位1' },
    ];



    return (
        <Modal
            title={activeModal}
            open={isModalOpen}
            onOk={handleSetVodsOK}
            onCancel={() => setIsModalOpen(false)}
            okButtonProps={
                {
                    className: 'bg-blue-400',
                    disabled: status === ''
                }
            }
        >
            <Select
                value={status}
                onSelect={(value) => {
                    setStatus(value);
                }}
                placeholder={activeModal}
                optionRender={labelRender}
                labelRender={labelRender}
                style={{ width: 120 }}
                options={activeModal === 'status' ? statusOptions : levelOptions}
            />
        </Modal>
    );
};


const labelRender = (props) => {
    const { label, value } = props;
    if (value === "") {
        return <span className='text-gray-400'>{label}</span>;
    }
    return label;
};




export default VodManagePage;