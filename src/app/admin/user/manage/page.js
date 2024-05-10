"use client";

import { useState, useEffect } from 'react';
import { Col, Row, Space, Tag } from 'antd';
import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, Switch, Modal } from 'antd';
import { getUserList, saveOrUpdateUser } from '@/utils/UserReq';
import { getUserGroupList, saveOrUpdateUserGroup } from '@/utils/UserGroupReq';
import { getPlansList } from '@/utils/PlansReq';

import dayjs from 'dayjs';

const groupTypeColorMap = {
    admin: 'black',
    member: 'blue',
    vip: 'gold',
};

function UserManagePage() {


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [editForm] = Form.useForm();

    const [queryUserListData, setQueryUserListData] = useState()
    const [isLoad, setIsLoad] = useState(false);

    const [submittable, setSubmittable] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pages: 10,
        },
    });

    const [userGroupList, setUserGroupList] = useState([]);
    const [plansList, setPlansList] = useState([]);

    const values = Form.useWatch([], editForm);

    useEffect(() => {
        fetchData();
        fetchUserGroupList();
        fetchPlansList();


    }, [JSON.stringify(tableParams)]);


    useEffect(() => {
        editForm
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [editForm, values]);


    const fetchData = async () => {
        setIsLoad(true);
        const { username, email, groupId, status } = form.getFieldsValue();
        const res = await getUserList(username, email, status, groupId, tableParams.pagination.current, tableParams.pagination.pages);
        setQueryUserListData(res.records);

        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: res.total,
            }
        });
        setIsLoad(false);
    }

    const fetchUserGroupList = async () => {
        const res = await getUserGroupList();

        setUserGroupList(res)
    }

    const fetchPlansList = async () => {
        const res = await getPlansList();
        // setVodTypeList([{ typeId: "", typeName: '选择分类', disabled: true }, ...data]);
        setPlansList([{ planId: "", planName: '选择计划' }, ...res])
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'userId',
            render: (userId) => <a>{userId}</a>,
            width: 80,
        },
        {
            title: '用户名',
            dataIndex: 'username',
            render: (username) =>
                <a>
                    {username}
                </a>,
            width: 150,
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            render: (email) => {
                return <a>{email}</a>;
            },
            width: 200,

        },

        {
            title: '注册IP',
            dataIndex: 'regIp',
            render: (regIp) => {
                return <a>{regIp}</a>;
            },
            width: 150,
        },
        {
            title: '注册时间',
            dataIndex: 'regTime',
            render: (regTime) => {
                return <a>{regTime}</a>;
            },
            width: 200,
        },
        {
            title: '最后登录IP',
            dataIndex: 'lastLoginIp',
            render: (lastLoginIp) => {
                return <a>{lastLoginIp}</a>;
            },
            width: 150,
        },
        {
            title: '最后登录时间',
            dataIndex: 'lastLoginTime',
            render: (lastLoginTime) => {
                return <a>{lastLoginTime}</a>;
            },
            width: 200,
        },
        {
            title: '用户组',
            dataIndex: 'groupName',
            render: (groupName, record) => {
                const color = groupTypeColorMap[record.groupType];
                return (
                    <>
                        <Tag color={color}> {groupName}</Tag>
                    </>
                );
            },
            width: 150,
        },
        {
            title: '订阅计划',
            dataIndex: 'planId',
            render: (planId, record) => {
                const givenTime = new Date(record.planExpirationTime);
                const currentTime = new Date();

                return (
                    <>
                        <Tag > {planId}</Tag>
                        <span className={givenTime > currentTime ? 'text-green-600' : 'text-red-300'}>
                            {record.planExpirationTime}
                        </span>
                    </>
                );
            },
            width: 250,
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (status, record) => {
                return <Switch
                    key={record.userId}
                    checkedChildren="锁定"
                    unCheckedChildren="解锁"
                    onChange={async (checked) => {
                        const res = await saveOrUpdateUser(JSON.stringify({ userId: record.userId, status: checked ? 1 : 0 }))
                        if (res.success) {
                            fetchData()
                        }
                    }}
                    className='bg-[rgb(152,152,152)] '
                    value={status === 1 ? true : false}
                />
            },
            width: 150,
        },
        {
            title: '操作',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            const { userId, username, email, groupId, planId } = record
                            if (record.planExpirationTime !== null) {
                                editForm.setFieldValue('planExpirationTime', dayjs(record.planExpirationTime, 'YYYY-MM-DD HH:mm:ss'))
                            }

                            const safePlanId = planId || '';
                            editForm.setFieldsValue({ userId, username, email, groupId, planId: safePlanId })
                            setOpen(true)
                        }}
                    >编辑
                    </Button>
                    {/* <Popconfirm
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
                    </Popconfirm> */}
                </Space >
            ),
        },
    ];

    // 选择
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

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

    const handleOk = async () => {

        const values = await editForm.validateFields();
    };
    const handleCancel = () => {
        // 表格数据清空
        editForm.resetFields()

        setOpen(false);
    };


    const onFinish = async (values) => {
        setBtnLoading(true)
        const planExpirationTime = editForm.getFieldValue("planExpirationTime").format("YYYY-MM-DD HH:mm:ss")
        const body = { ...editForm.getFieldsValue(), planExpirationTime }
        const res = await saveOrUpdateUser(JSON.stringify(body))
        if (res.success) {
            fetchData()
            setOpen(false)
        }
        setBtnLoading(false)
    }

    return (
        <>
            {contextHolder}

            <Form
                className='mt-4'
                form={form}
                layout="inline"
                onFinish={fetchData}
            >
                <Form.Item
                    name="username"
                    initialValue={""}
                >
                    <Input placeholder="用户名" />
                </Form.Item>

                <Form.Item
                    name="email"
                    initialValue={""}
                >
                    <Input placeholder="邮箱" />
                </Form.Item>

                <Form.Item
                    name="groupId"
                    initialValue={""}
                >
                    <Select
                        style={{ width: 200 }}
                        optionRender={labelRender}
                        labelRender={labelRender}
                        fieldNames={{ label: 'groupName', value: 'groupId' }}
                        options={[{ groupName: '选择用户组', groupId: "" }, ...userGroupList]}
                    >

                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    initialValue={""}
                >
                    <Select
                        optionRender={labelRender}
                        labelRender={labelRender}
                        style={{ width: 200 }}
                        options={
                            [
                                { label: '选择状态', value: "" },
                                { label: '正常', value: 0 },
                                { label: '锁定', value: 1 },
                            ]
                        }
                    >
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className='bg-blue-400'
                    >
                        查询
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button onClick={() => {
                        editForm.resetFields()
                        setOpen(true)
                    }}>
                        添加用户
                    </Button>
                </Form.Item>

            </Form>



            <Table
                className='mt-4'
                rowKey="userId"
                columns={columns}
                dataSource={queryUserListData}
                rowSelection={rowSelection}
                onChange={handleTableChange}
                pagination={tableParams.pagination}
                loading={isLoad}
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
                    form={editForm}
                >
                    <Form.Item
                        label="编号"
                        name="userId"
                        hidden={editForm.getFieldValue('userId') === undefined ? true : false}
                    >
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        label="用户名"
                        name="username"
                        disabled={editForm.getFieldValue('username') === undefined ? false : true}
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[{ required: true, message: '请输入邮箱' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        initialValue={""}
                        // 如果是新增用户，密码必填
                        rules={[{ required: editForm.getFieldValue('userId') === undefined ? true : false, message: '请输入密码' }]}
                    >
                        <Input placeholder="密码" />
                    </Form.Item>


                    <Form.Item
                        label="用户组"
                        name="groupId"
                        rules={[{ required: true, message: '请分配用户组' }]}
                        initialValue={2}
                    >
                        <Select
                            style={{ width: 200 }}
                            optionRender={labelRender}
                            labelRender={labelRender}
                            fieldNames={{ label: 'groupName', value: 'groupId' }}
                            options={userGroupList}
                        >
                        </Select>
                    </Form.Item>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                label="计划"
                                name="planId"
                                initialValue={""}
                            >
                                <Select
                                    style={{ width: 200 }}
                                    optionRender={labelRender}
                                    labelRender={labelRender}
                                    fieldNames={{ label: 'planName', value: 'planId' }}
                                    options={plansList}
                                >
                                </Select>
                            </Form.Item>

                        </Col>

                        <Col span={12}>

                            <Form.Item
                                name="planExpirationTime"
                            >
                                <DatePicker
                                    format={"YYYY-MM-DD HH:mm:ss"}
                                    needConfirm={false}
                                    showTime />
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}




const labelRender = (props) => {
    const { label, value } = props;
    if (value === "") {
        return <span className='text-gray-400'>{label}</span>;
    }
    return label;
};


export default UserManagePage;