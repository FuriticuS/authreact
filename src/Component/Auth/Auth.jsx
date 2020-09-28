import React from 'react';
import Button from "../Button/Button";
import { block } from 'bem-cn';
import { Typography } from 'antd';

// ----------------------------------- для формы
import { Form, Input, InputNumber, Checkbox, Select } from 'antd';
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

// ----------------------------------- для формы
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
// ---- телефон
const { Option } = Select;
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }} defaultValue="+7">
            <Option value="7">+7</Option>
            <Option value="8">+8</Option>
        </Select>
    </Form.Item>
);

const Auth = () => {
    const cn = block('auth');
    const { Title, Text } = Typography;

    // форма
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={cn()} style={{width:'500px',margin:"0 auto", border:'1px solid silver', padding:'20px'}}>
            <div className={cn("top")}>
                <Title level={2}>Войти в свой аккаунт</Title>
                <Text type="secondary">Пожалуйста, войдите в свой аккаунт</Text>
            </div>

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item hasFeedback validateStatus="success" name="username" label="User" rules={[{ required: true, message: 'Please input your Username!' }]} >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='User' />
                </Form.Item>

                <Form.Item name="password" label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Pass'/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder='Pass'/>
                </Form.Item>

                <Form.Item name={['user', 'email']} label="Email" rules={[{required: true, message: 'Please input your mail!'}]}>
                    <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder='E-mail' />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="9787190009" maxLength="10"/>
                </Form.Item>

                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]} >
                    <InputNumber placeholder="20"/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" value="large">Войти</Button>
                </Form.Item>
            </Form>

            <Link to="/register">Зарегистрироваться</Link>

        </div>
    );
};

export default Auth;
