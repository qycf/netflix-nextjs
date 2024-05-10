"use client"

import { Button, Checkbox, Form, Input, Select, Col, Row, message } from 'antd';
import { saveOrUpdateVod, getVodTypeList, getVodDetail } from '@/utils/VodReq';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'

function VodAdd() {

    const [form] = Form.useForm();
    const [vodTypeList, setVodTypeList] = useState([]);
    const router = useRouter()
    const [messageApi, contextHolder] = message.useMessage();
    const searchParams = useSearchParams()



    const fetchVodTypeList = async () => {
        const data = await getVodTypeList(-1);
        setVodTypeList([{ typeId: "", typeName: '选择分类', disabled: true }, ...data]);
    }

    const fetchVodDetail = async (vodId) => {
        const data = await getVodDetail(vodId);
        if (data.vodPlayUrl) {
            data.vodPlayUrl = data.vodPlayUrl.replace(/#/g, '\n');
        }

        form.setFieldsValue(data);
    }

    useEffect(() => {
        fetchVodTypeList()
        const vodId = searchParams.get('vodId');
        if (vodId) {
            fetchVodDetail(vodId)
        }

    }, [searchParams])

    const onClick = async () => {

        const formData = form.getFieldsValue();
        // 将playUrl转为数组里的\n字符串替换为#
        if (formData.vodPlayUrl) {
            formData.vodPlayUrl = formData.vodPlayUrl.replace(/\n/g, '#');
        }

        // 如果是修改，需要传vodId
        const vodId = searchParams.get('vodId');
        if (vodId) {
            formData.vodId = vodId;
        }

        // 将body转为json字符串
        const res = await saveOrUpdateVod(JSON.stringify(formData));
        if (res.success) {
            messageApi.success(res.data);
        }
        else {
            messageApi.error(res.message);
        }
    }

    const { TextArea } = Input;

    return (

        <div className='mx-auto '>
            {contextHolder}
            <Form
                className='mt-4 mx-auto max-w-[850px] '
                form={form}

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
                    <Button size='large' onClick={() => {
                        form.resetFields();
                    }}>还原</Button>
                </Col>
            </Row>

        </div >
    );
}



const labelRender = (props) => {
    const { label, value } = props;
    if (value === "") {
        return <span className='text-gray-400'>{label}</span>;
    }
    return label;
};


export default VodAdd;