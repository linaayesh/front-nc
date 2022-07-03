/* eslint-disable no-console */
import React from 'react';
import {
  Typography, Input, Form, Button, Checkbox,
} from 'antd';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import Logo from './logo';
import './style.css';

export default function RegisterForm() {
  const { Text } = Typography;
  const onFinish = async (values) => {
    console.log(values);
    // try {
    //   const response = await axios.post('/signUp', values);
    //   message.success(response.data.msg); // Sign up Successfully + verify email
    // } catch (err) {
    //   message.error(err.data.msg); // something went wrong try a gain later
    // }
  };

  return (
    <div className="auth-container">
      <Logo />
      <Text className="auth-text title-text">Please compleat to create your account</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >
        {/* USER NAME */}
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        {/* EMAIL */}
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder="Email" type="email" />
        </Form.Item>
        {/* Password */}
        <Form.Item
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
        {/* Confirm Password */}
        <Form.Item
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
        {/* Terms and conditions */}
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
          <Checkbox style={{ color: '#6F767E' }}>
            I agree with
            {' '}
            <Link to="/terms" target="_blank" style={{ fontWeight: 500 }}>Terms and Conditions</Link>
          </Checkbox>
        </Form.Item>
        {/* Sign Up button */}
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      {/* Sign up with google */}
      <GoogleAuth label="Sign Up With Google" />
      {/* Have an account  */}
      <Text className="have-account-text">
        Already have an account?
        {' '}
        <Link to="/" className="sign-in-link">Sign In.</Link>
      </Text>
    </div>

  );
}
