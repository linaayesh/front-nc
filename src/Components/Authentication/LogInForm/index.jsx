import React from 'react';
import {
  Typography, Input, Form, Button, Checkbox, message,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleAuth from '../GoogleAuth';
import Logo from '../RegisterForm/logo';

export default function LogInForm() {
  const { Text } = Typography;
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const response = await axios.post('/api/v1/auth/login', { email, password });
      message.success(response.data.message);
      navigate('/dashboard');
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  // test thing

  return (
    <div className="auth-container">
      <Logo />
      <Text className="auth-text title-text">Welcome back please login to your account.</Text>
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
        {/* Remember me and forget password */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
        }}
        >
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className="auth-text">Remember me</Checkbox>
          </Form.Item>
          <Link to="/forgetPassword" className="auth-text forget-password-link">Forget Password</Link>
        </div>
        {/* Log In Button */}
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
      {/* Log in with google */}
      <GoogleAuth label="Log In With Google" />
      {/* navigate to sign up */}
      <Text className="have-account-text">
        Does not have an account?
        {' '}
        <Link to="/signup" className="sign-in-link">Sign Up.</Link>
      </Text>
    </div>

  );
}
