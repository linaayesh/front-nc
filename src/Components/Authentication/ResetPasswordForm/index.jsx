/* eslint-disable no-console */
import React from 'react';
import {
  Typography, Input, Form, Button,
} from 'antd';
import Logo from '../RegisterForm/logo';

function ResetPasswordForm() {
  const { Text } = Typography;

  const onFinish = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <Logo />
      <Text className="auth-text title-text">Please enter your new password</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >
        {/* Password */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please Enter your password!',
            },
          ]}
          hasFeedback
          className="input-password"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {/* Confirm Password */}
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
          className="input-password"
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>

    </div>

  );
}
export default ResetPasswordForm;
