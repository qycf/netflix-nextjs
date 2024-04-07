"use client";

import React, { useEffect, useState } from 'react';

import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, Switch, Modal, Space } from 'antd';
import { getPlansList, saveOrUpdatePlan, deletePlan } from '@/utils/PlansReq';


function PlansPage() {


    const [plansList, setPlansList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const [btnLoading, setBtnLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [form] = Form.useForm();

    const [typeId, setTypeId] = useState();

    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);


    const showModal = () => {
        setOpen(true);
    };

    const handleOk = async () => {

        // 检测表单是否合法
        const values = await form.validateFields();

    };
    const handleCancel = () => {
        // 表格数据清空
        form.resetFields()
        setOpen(false);
    };



    const fetchPlansList = async () => {
        setLoading(true)
        const res = await getPlansList();
        setPlansList(res)
        setLoading(false)
    }



    useEffect(() => {
        fetchPlansList()
    }, [])

    const columns = [
        {
            title: '编号',
            dataIndex: 'planId',
            render: (planId) => <a>{planId}</a>,
            width: 100,
        },
        {
            title: '名称',
            dataIndex: 'planName',
            width: 800,
            render: (planName) =>
                <a>
                    {planName}
                </a>,
        },
        {
            title: '描述',
            dataIndex: 'planDescription',
            width: 200,
            render: (planDescription) =>
                <a>
                    {planDescription}
                </a>,

        },
        {
            title: '价格',
            dataIndex: 'planPrice',
            width: 110,
            render: (planPrice) =>
                <a>
                    {planPrice}
                </a>,
        },
        {
            title: '时长',
            dataIndex: 'planDurationDays',
            width: 110,
            render: (planDurationDays) =>
                <a>
                    {planDurationDays}
                </a>,
        },
        {
            title: '状态',
            dataIndex: 'planStatus',
            render: (planStatus, record) => {
                return <Switch
                    key={record.planId}
                    checkedChildren="锁定"
                    unCheckedChildren="解锁"
                    onChange={async (checked) => {
                        const res = await saveOrUpdatePlan(JSON.stringify({ planId: record.planId, planStatus: checked ? 1 : 0 }))
                        if (res.success) {
                            fetchPlansList()
                        }
                    }}
                    className='bg-[rgb(152,152,152)] '
                    value={planStatus === 1 ? true : false}
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
                            // 编辑操作
                            form.setFieldsValue(record)
                            setOpen(true)
                        }}
                    >编辑
                    </Button>
                    <Popconfirm
                        title="提醒"
                        description="删除之后无法恢复，您确定删除吗？"
                        onConfirm={async () => {
                            // 删除操作
                            const res = await deletePlan(record.planId)
                            if (res.success) {
                                fetchPlansList()
                                message.success('删除成功')
                            }
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


    const onFinish = async (values) => {
        setBtnLoading(true)
        const res = await saveOrUpdatePlan(JSON.stringify(form.getFieldsValue()))
        if (res.success) {
            fetchPlansList()
            setOpen(false)
        }
        setBtnLoading(false)
    }


    return (

        <div>
            {contextHolder}
            {/* 按钮在最右边 */}
            <Button
                className='float-right my-4 bg-blue-400'
                type="primary"
                onClick={showModal}
            >
                新增
            </Button>

            <Table
                className='mt-4'
                rowKey="typeId"
                columns={columns}
                dataSource={plansList}
                loading={loading}

            />
            <Modal
                open={open}
                title="编辑"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        取消
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={btnLoading}
                        onClick={onFinish}
                        disabled={!submittable}
                        className='bg-blue-400'
                    >
                        提交
                    </Button>,
                ]}
            >
                <Form
                    form={form}
                >
                    <Form.Item
                        label="编号"
                        name="planId"
                        hidden={form.getFieldValue('planId') === undefined ? true : false}
                    >
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        label="名称"
                        name="planName"
                        rules={[{ required: true, message: '请输入订阅名称' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="时长"
                        name="planDurationDays"
                        rules={[{ required: true, message: '请输入订阅时长' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="价格"
                        name="planPrice"
                        rules={[{ required: true, message: '请输入订阅价格' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="描述"
                        name="planDescription"
                    >
                        <Input
                            placeholder='请输入订阅描述（逗号分隔）'
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}



export default PlansPage;