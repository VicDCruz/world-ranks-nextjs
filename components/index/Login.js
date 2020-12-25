import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    if (values) console.log('hola');
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div className="w-full lg:flex items-center">
          <div className="w-full lg:w-1/2">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </div>

          <div className="w-full lg:w-1/2">
            <Button type="link">
              Forgot password
            </Button>
          </div>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="py-3 px-12 mr-5 rounded-md focus:outline-none w-full">
          Log in
        </Button>
        Or
        {' '}
        <Button type="link">register now!</Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
