import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Input, Typography, Button, Form, message, Checkbox,
} from '../../AntDesign';
import GoogleAuth from '../GoogleAuth';
import Logo from '../RegisterForm/logo';
import { setAuth } from '../../../Store/Slices/checkAuthSlice';
import './style.css';
import axiosCall from '../../../Services/ApiCall';

export default function LogInForm() {
  const { Text } = Typography;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const response = await axiosCall('/api/v1/auth/login', 'post', { email, password });

      message.success(response.data.message);
      navigate('/dashboard');
      const {
        id, username, roleId,
      } = response.data.payload;
      dispatch(
        setAuth({
          id,
          username,
          email,
          roleId,
          isLoggedIn: true,
        }),
      );
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div className="auth-container-login">
      <Logo />
      <Text className="auth-text title-text">Welcome back please login to your account.</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form-login"
      >
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
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
      <GoogleAuth label="Log In With Google" method="log" />
      <Text className="have-account-text">
        Does not have an account?
        {' '}
        <Link to="/signup" className="sign-in-link">Sign Up.</Link>
      </Text>
    </div>

  );
}
