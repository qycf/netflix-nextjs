"use client";

import React, { useEffect, useState } from 'react';

import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, Switch, Modal, Space } from 'antd';
import { getVodTypeList, deleteVodType, saveOrUpdateVod, saveOrUpdateVodType } from '@/utils/VodReq';


function VodType() {


    const [vodTypeList, setVodTypeList] = useState([]);
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



    const fetchTypeList = async () => {
        setLoading(true)
        const res = await getVodTypeList(-1);
        setVodTypeList(res)
        setLoading(false)
    }



    useEffect(() => {
        fetchTypeList()
    }, [])

    const columns = [
        {
            title: '编号',
            dataIndex: 'typeId',
            render: (typeId) => <a>{typeId}</a>,
            width: 100,
        },
        {
            title: '名称',
            dataIndex: 'typeName',
            width: 1200,
            render: (typeName) =>
                <a>
                    {typeName}
                </a>,
        },
        {
            title: '别名',
            dataIndex: 'typeSlug',
            width: 110,
            render: (typeSlug) =>
                <a>
                    {typeSlug}
                </a>,
        },
        {
            title: '排名',
            dataIndex: 'typeRank',
            width: 110,
            render: (typeRank) =>
                <a>
                    {typeRank}
                </a>,
        },
        {
            title: '状态',
            dataIndex: 'typeStatus',
            render: (typeStatus, record) => {
                return <Switch
                    key={record.typeId}
                    checkedChildren="锁定"
                    unCheckedChildren="解锁"
                    onChange={async (checked) => {
                        // await setVodsStatus(record.typeId, checked ? 1 : 0)
                        const res = await saveOrUpdateVodType(JSON.stringify({ typeId: record.typeId, typeStatus: checked ? 1 : 0 }))
                        if (res.success) {
                            fetchTypeList()
                        }
                    }}
                    className='bg-[rgb(152,152,152)] '
                    value={typeStatus === 1 ? true : false}
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
                            const res = await deleteVodType(record.typeId)
                            if (res.success) {
                                fetchTypeList()
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
        const res = await saveOrUpdateVodType(JSON.stringify(form.getFieldsValue()))
        if (res.success) {
            fetchTypeList()
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
                dataSource={vodTypeList}
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
                        name="typeId"
                        hidden={form.getFieldValue('typeId') === undefined ? true : false}
                    >
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        label="名称"
                        name="typeName"
                        rules={[{ required: true, message: '请输入分类名称' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="别名"
                        name="typeSlug"
                        rules={[{ required: true, message: '请输入分类别名' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="排序"
                        name="typeRank"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}



export default VodType;