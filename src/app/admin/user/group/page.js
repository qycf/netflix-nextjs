"use client";

import React, { useEffect, useState } from 'react';

import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, Switch, Modal, Space } from 'antd';
import { getUserGroupList, deleteUserGroup, saveOrUpdateUserGroup } from '@/utils/UserGroupReq';

function UserGroupPage() {


    const [userGroupList, SetUserGroupList] = useState([]);
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
        console.log(values);
    };
    const handleCancel = () => {
        // 表格数据清空
        form.resetFields()
        setOpen(false);
    };



    const fetchUserGroupList = async () => {
        setLoading(true)
        const res = await getUserGroupList();
        SetUserGroupList(res)
        setLoading(false)
    }



    useEffect(() => {
        fetchUserGroupList()
    }, [])

    const columns = [
        {
            title: '编号',
            dataIndex: 'groupId',
            render: (groupId) => <a>{groupId}</a>,
            width: 100,
        },
        {
            title: '名称',
            dataIndex: 'groupName',
            width: 1200,
            render: (groupName) =>
                <a>
                    {groupName}
                </a>,
        },
        {
            title: '类型',
            dataIndex: 'groupType',
            width: 110,
            render: (groupType) =>
                <a>
                    {groupType}
                </a>,
        },
        {
            title: '状态',
            dataIndex: 'groupStatus',
            render: (groupStatus, record) => {
                return <Switch
                    key={record.groupId}
                    checkedChildren="锁定"
                    unCheckedChildren="解锁"
                    onChange={async (checked) => {
                        // await setVodsStatus(record.typeId, checked ? 1 : 0)
                        const res = await saveOrUpdateUserGroup(JSON.stringify({ groupId: record.groupId, groupStatus: checked ? 1 : 0 }))
                        if (res.success) {
                            fetchUserGroupList()
                        }
                    }}
                    className='bg-[rgb(152,152,152)] '
                    value={groupStatus === 1 ? true : false}
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
                            const res = await deleteUserGroup(record.groupId)
                            if (res.success) {
                                fetchUserGroupList()
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
        const res = await saveOrUpdateUserGroup(JSON.stringify(form.getFieldsValue()))
        if (res.success) {
            fetchUserGroupList()
            setOpen(false)
        }
        setBtnLoading(false)
    }





    return (

        <>
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
                rowKey="groupId"
                columns={columns}
                dataSource={userGroupList}
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
                        name="groupId"
                        hidden={form.getFieldValue('groupId') === undefined ? true : false}
                    >
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        label="名称"
                        name="groupName"
                        rules={[{ required: true, message: '请输入分类名称' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="类型"
                        name="groupType"
                        rules={[{ required: true, message: '请输入类型名称' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}



export default UserGroupPage;