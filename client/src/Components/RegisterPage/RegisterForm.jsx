import React from 'react';
import {
  Typography, Input, Form, Button, Checkbox,
} from 'antd';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './style.css';

export default function HomeLayout() {
  const { Text } = Typography;
  const onFinish = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-container">
      <Logo />
      <Text className="description-text">Please compleat to create your account</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="register-form"
      >
        <Form.Item
          // label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          // label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          className="input-password"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          // label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
          ]}
          className="input-password"
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: 'Please read and check the terms and condition!',
            },
          ]}
        >
          <Checkbox style={{ color: '#6F767E' }}>I agree with terms and condition</Checkbox>
        </Form.Item>
        <Form.Item>
          {/*  htmlType="submit"  */}
          <Button className="form-button" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Text className="have-account-text">
        Already have an account?
        {' '}
        <Link to="/logIn" className="sign-in-link">Sign In.</Link>
      </Text>
    </div>
  );
}
