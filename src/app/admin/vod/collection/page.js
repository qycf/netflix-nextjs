"use client";

import React, { useEffect, useState } from 'react';
import { camelCase, set } from "lodash";

import { DatePicker, Form, Input, Button, Table, Select, Popconfirm, message, TextArea, Modal, Space, Row, Col } from 'antd';
import { getVodTypeList, deleteVodType, saveOrUpdateVod, saveOrUpdateVodType } from '@/utils/VodReq';


function CollectionPage() {


    const [vodTypeList, setVodTypeList] = useState([]);

    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();



    const [form] = Form.useForm();


    const columns = [
        {
            title: '编号',
            dataIndex: 'vodId',
            render: (name) => <a>{name}</a>,
            width: 60,
        },
        {
            title: '名称',
            dataIndex: 'vodName',
            width: 1200,
            render: (vodName) =>
                <a>
                    {vodName}
                </a>,
        },
        {
            title: '类型',
            dataIndex: 'typeName',
            width: 200,
            render: (typeName) =>
                <a>
                    {typeName}
                </a>,
        },
        {
            title: '更新时间',
            dataIndex: 'vodTime',
            width: 200,
            render: (vodTime) =>
                <a>
                    {vodTime}
                </a>,
        },

        {
            title: '操作',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={async () => {
                            const res = await fetchDetail(record.vodId)
                            const vod = convertKeysToCamelCase(res?.list[0]);
                            console.log("🚀 ~ onClick={ ~ vod:", vod)
                            vod.vodTime = vod.vodYear
                            vod.vodState = vod.vodArea
                            vod.typeId = ""
                            vod.vodLevel = ""
                            vod.vodStatus = 1
                            vod.groupId = 2

                            // 将playUrl转为数组里的#字符串替换为\n
                            if (vod.vodPlayUrl) {
                                vod.vodPlayUrl = vod.vodPlayUrl.replace(/#/g, '\n');
                                vod.vodPlayUrl = vod.vodPlayUrl.replace(/\$\$\$/g, '\n');

                            }
                            setApiVodData(vod)
                            setOpenModel(true)
                        }}
                    >入库
                    </Button>
                </Space>
            ),
        },
    ];

    const [apiVodData, setApiVodData] = useState()
    const [openModel, setOpenModel] = useState(false)



    useEffect(() => {
        fetchVodTypeList()
    }, [])

    const fetchVodTypeList = async () => {
        const data = await getVodTypeList(-1);
        setVodTypeList([{ typeId: "", typeName: '选择分类', disabled: true }, ...data]);
    }


    const [apiVodList, setApiVodList] = useState([])
    const [apiVodTypeList, setApiVodTypeList] = useState([])
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pages: 10,
            defaultPageSize: 20,
            pageSizeOptions: [10, 20]
        },
    });

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const fetchData = async () => {
        setLoading(true)

        const { type_id, wd } = form.getFieldsValue();

        const res = await fetch(`/collection/api.php/provide/vod/?ac=list&ac=&t=${type_id}&pg=${tableParams.pagination.current}&h=&ids=&wd=${wd}`, { method: 'GET' })
        const data = await res.json()
        const list = convertKeysToCamelCase(data?.list);
        setApiVodList(list)
        setApiVodTypeList([{ type_id: "", type_name: '选择分类' }, ...data?.class])

        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                pages: data?.pagecount,
                total: data?.total,
            }
        });
        setLoading(false);
    }

    const fetchDetail = async (vodId) => {
        const res = await fetch(`/collection/api.php/provide/vod/?ac=list&ac=videolist&t=&pg=&h=&ids=${vodId}&wd=`, { method: 'GET' })
        const data = await res.json()
        return data
    }

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

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                current: pagination.current,
            }
        });
    };

    return (

        <div>
            {contextHolder}
            <div className='mt-2 text-base'>
                from <a className=' text-[#1677ff]' href='https://api.apibdzy.com/'> api.apibdzy.com </a>
            </div>

            <Form
                form={form}
                layout="inline"
                className='mt-4'
            >
                <Form.Item
                    name="type_id"
                    label="分类"
                    initialValue={""}
                    className='w-[150px]'
                >
                    <Select
                        labelRender={labelRender}
                        fieldNames={{ label: 'type_name', value: 'type_id' }}
                        options={apiVodTypeList}
                    />
                </Form.Item>

                <Form.Item
                    name="wd"
                    label="关键字"
                    initialValue={""}
                >
                    <Input placeholder='模糊搜索' />
                </Form.Item>

                <Button type="primary" className='bg-blue-400' onClick={fetchData}>搜索</Button>

            </Form>

            <Table
                className='mt-4'
                rowKey="vodId"
                columns={columns}
                dataSource={apiVodList}
                loading={loading}
                rowSelection={rowSelection}
                onChange={handleTableChange}
                pagination={tableParams.pagination}
            />
            <CollectionModel messageApi={messageApi} openModel={openModel} setOpenModel={setOpenModel} vodTypeList={vodTypeList} apiVodData={apiVodData} />
        </div>
    )
}


const CollectionModel = (
    {
        openModel,
        setOpenModel,
        vodTypeList,
        apiVodData,
        messageApi
    }
) => {

    const { TextArea } = Input;

    const [form] = Form.useForm();


    form.setFieldsValue(apiVodData)


    const handleCancel = () => {
        // 表格数据清空
        // form.resetFields()
        setOpenModel(false);
    };


    const onClick = async () => {

        const formData = form.getFieldsValue();
        // 将playUrl转为数组里的\n字符串替换为#
        if (formData.vodPlayUrl) {
            formData.vodPlayUrl = formData.vodPlayUrl.replace(/\n/g, '#');
        }

        // 将body转为json字符串
        const res = await saveOrUpdateVod(JSON.stringify(formData));
        if (res.success) {
            messageApi.success(res.data);
            handleCancel();
        }
        else {
            messageApi.error(res.message);
        }
    }

    return (
        <Modal
            open={openModel}
            title="编辑"
            wrapClassName='modalclass'
            footer={null}
            onCancel={handleCancel}
            width={850}
            destroyOnClose={true}
            forceRender={true}
        >

            <div className='mx-auto '>
                <Form
                    className='mt-4 mx-auto max-w-[850px] '
                    form={form}
                    preserve={false}
                >
                    {/* 两个按钮在右边 */}
                    <Row justify="start" gutter={16}>
                        <Col span={6} >
                            <Form.Item
                                name="typeId"
                                label="分类"
                                required
                                initialValue={""}
                            >
                                <Select
                                    labelRender={labelRender}
                                    fieldNames={{ label: 'typeName', value: 'typeId' }}
                                    options={vodTypeList}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={6}>
                            <Form.Item
                                name="vodLevel"
                                label="推荐"
                                initialValue={""}
                            >
                                <Select
                                    labelRender={labelRender}
                                    options={[
                                        { value: '', label: '选择推荐' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4' },
                                        { value: '5', label: '5' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={6}>
                            <Form.Item
                                label="状态"
                                name="vodStatus"
                                initialValue={0}
                            >
                                <Select
                                    options={[
                                        { value: 0, label: '解锁' },
                                        { value: 1, label: '锁定' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={6}>
                            <Form.Item
                                label="观看权限"
                                name="groupId"
                                initialValue={2}
                            >
                                <Select
                                    options={[
                                        { value: 2, label: '所有人' },
                                        { value: 3, label: 'VIP' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="名称"
                                name="vodName"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="备注"
                                name="vodRemarks"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="主演"
                                name="vodActor"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="导演"
                                name="vodDirector"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="编剧"
                                name="vodWriter"

                            >
                                <Input />
                            </Form.Item>
                        </Col>


                        <Col span={8}>
                            <Form.Item
                                label="豆瓣评分"
                                name="vodDoubanScore"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="豆瓣ID"
                                name="vodDoubanId"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="视频时长"
                                name="vodDuration"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="地区"
                                name="vodState"

                            >
                                <Input />
                            </Form.Item>
                        </Col>


                        <Col span={8}>
                            <Form.Item
                                label="年份"
                                name="vodTime"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="点击量"
                                name="vodHits"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="标签"
                                name="vodTag"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="来源"
                                name="vodPlayFrom"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="封面"
                                name="vodPic"

                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="海报"
                                name="vodPicSlide"
                            >
                                <Input
                                    placeholder='推荐位用的图片'
                                />
                            </Form.Item>
                        </Col>


                        <Col span={24}>
                            <div className='mb-1'>
                                播放地址:
                            </div>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="vodPlayUrl"
                            >
                                <TextArea
                                    rows={6}
                                    placeholder={`1440P$https://www.example.com/1440P.m3u8\n1080P$https://www.example.com/1080P.m3u8`}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <div className='mb-1'>
                                影片简介:
                            </div>
                        </Col>

                        <Col span={24}>
                            <Form.Item
                                name="vodBlurb"

                            >
                                <TextArea
                                    rows={6}
                                    placeholder='请输入影片简介....'
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                <Row className='mb-6' justify="end" gutter={16}>
                    <Col >
                        <Button
                            className='bg-blue-400'
                            type='primary'
                            size='large'
                            onClick={onClick}
                        >
                            保存
                        </Button>
                    </Col>
                    <Col>
                        <Button size='large'
                            onClick={() => {
                                form.resetFields();
                            }}>还原</Button>
                    </Col>
                </Row>
            </div >
        </Modal>
    )
}

function convertKeysToCamelCase(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // 如果不是对象或者为空，直接返回
    }

    if (Array.isArray(obj)) {
        return obj.map(item => convertKeysToCamelCase(item)); // 如果是数组，递归处理每个元素
    }

    const newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelKey = camelCase(key); // 使用 lodash 的 camelCase 函数将键转换为驼峰形式
            newObj[camelKey] = convertKeysToCamelCase(obj[key]); // 递归处理值
        }
    }
    return newObj;
}


const labelRender = (props) => {
    const { label, value } = props;
    if (value === "") {
        return <span className='text-gray-400'>{label}</span>;
    }
    return label;
};

export default CollectionPage;