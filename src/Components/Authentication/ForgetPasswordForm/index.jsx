/* eslint-disable no-console */
import React from 'react';
import {
  Typography, Input, Form, Button,
} from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../RegisterForm/logo';

export default function ForgetPasswordForm() {
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
      <Text className="auth-text title-text">Please enter your email to reset your password.</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >
        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input placeholder="Email" type="email" />
        </Form.Item>
        {/* Log In Button */}
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Send a reset email
          </Button>
        </Form.Item>
      </Form>
      {/* navigate to sign up */}
      <Text className="have-account-text">
        Remember it?
        {' '}
        <Link to="/" className="sign-in-link">Sign in.</Link>
      </Text>
    </div>

  );
}
