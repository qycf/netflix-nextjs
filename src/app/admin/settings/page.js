/* eslint-disable @next/next/no-img-element */
"use client";

import { getOptions, updateOptions } from '@/utils/OptionsReq';
import { Button, Form, Input, Tabs, Switch, message } from 'antd';
import { useEffect, useState } from 'react';

async function fetchOptions(key) {
    const data = await getOptions(key);
    return data;
}


const SiteSettingsPage = ({ siteOptions, messageApi }) => {

    const [form] = Form.useForm();

    const [siteSettings, setSiteSettings] = useState(JSON.parse(siteOptions.optionValue));

    form.setFieldsValue(siteSettings);

    const { TextArea } = Input;

    const onFinish = async (values) => {
        const options = {
            optionId: siteOptions.optionId,
            optionKey: siteOptions.optionKey,
            optionValue: JSON.stringify(values)
        };
        const data = await updateOptions(options);
        if (data.code === 200) {
            const { optionValue } = await fetchOptions('site_settings');
            setSiteSettings(JSON.parse(optionValue));
            messageApi.success('保存成功');
        }
    }

    return (
        <Form className='max-w-[600px] mx-auto'
            layout="vertical"
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="站点标题"
                name="siteTitle"
            >
                <Input />
            </Form.Item>


            <img
                className='w-20 h-20'
                alt='站点logo'
                src={siteSettings.siteLogo}
            ></img>

            <Form.Item
                label="站点logo"
                name="siteLogo"
            >
                <Input />
            </Form.Item>

            <img
                className='w-10 h-10'
                alt='站点favicon'
                src={siteSettings.siteFavicon}
            ></img>

            <Form.Item
                label="站点favicon"
                name="siteFavicon"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="SEO描述"
                name="siteDescription"
            >
                <TextArea rows={5} />
            </Form.Item>

            <Form.Item
                label="SEO关键字"
                name="siteKeywords"
            >
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item
                label="开启注册"
                name="siteRegisterStatus"
            >

                <Switch
                    checkedChildren="启用"
                    unCheckedChildren="未启用"
                    className='bg-[rgb(152,152,152)] '
                />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" className='bg-blue-400'>
                    保存
                </Button>
            </Form.Item>
        </Form>
    );
};

const EmailSettingsPage = ({ emailOptions, messageApi }) => {

    const [form] = Form.useForm();

    form.setFieldsValue(JSON.parse(emailOptions.optionValue));

    const onFinish = async (values) => {
        const options = {
            optionId: emailOptions.optionId,
            optionKey: emailOptions.optionKey,
            optionValue: JSON.stringify(values)
        };

        const data = await updateOptions(options);

        if (data.code === 200) {
            messageApi.success('保存成功');
        }
    }


    return (
        <Form className='max-w-[600px] mx-auto'
            layout="vertical"
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="SMTP地址"
                name="host"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="SMTP端口"
                name="port"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="邮箱账号"
                name="from"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="邮箱用户名"
                name="user"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="邮箱密码"
                name="pass"
            >
                <Input type='password' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" className='bg-blue-400'>
                    保存
                </Button>
            </Form.Item>
        </Form>
    );
}

function SettingsPage() {

    const [messageApi, contextHolder] = message.useMessage();

    const [emailOptions, setEmailOptions] = useState();

    const [siteOptions, setSiteOptions] = useState();

    useEffect(() => {

        async function fetch() {
            const site_setting = await fetchOptions('site_settings');
            const email_account = await fetchOptions('mail_account');
            setSiteOptions(site_setting);
            setEmailOptions(email_account);
        }

        fetch();

    }, []);



    return (
        <>

            {contextHolder}
            <Tabs defaultActiveKey="1" items={
                [
                    {
                        key: '1',
                        label: '站点设置',
                        children: siteOptions && <SiteSettingsPage siteOptions={siteOptions} messageApi={messageApi} />,
                    },
                    {
                        key: '2',
                        label: '邮件配置',
                        children: emailOptions && <EmailSettingsPage emailOptions={emailOptions} messageApi={messageApi} />,
                    },
                    // {
                    //     key: '3',
                    //     label: '支付配置',
                    //     children: emailOptions && <EmailSettingsPage emailOptions={emailOptions} messageApi={messageApi} />,
                    // }
                ]

            } />
        </>
    );
}





export default SettingsPage;