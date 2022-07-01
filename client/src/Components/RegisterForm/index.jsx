/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  Typography, Input, Form, Button, Checkbox, message,
} from 'antd';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
// import axios from 'axios';
import Logo from './logo';
import './style.css';

export default function RegisterForm() {
  const { Text } = Typography;
  const clientID = '727149282582-03n35pardu6mt2g6d16ds12l9pau77nh.apps.googleusercontent.com';
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
        scope: 'email',
      });
    };

    gapi.load('client:auth2', start);
  }, []);

  const onFinish = async (values) => {
    console.log(values);
    // try {
    //   const response = await axios.post('/signUp', values);
    //   message.success(response.data.msg); // Sign up Successfully + verify email
    // } catch (err) {
    //   message.error(err.data.msg); // something went wrong try a gain later
    // }
  };

  const successResponse = (response) => {
    console.log(response);
    const { tokenId, profileObj: { email, name, imageUrl } } = response;
    console.log('User Data', email, name, imageUrl);
    console.log('tokenId', tokenId);
    // try {
    //   const response = await axios.post('/signUp/google', { tokenId });
    //   message.success(response.data.msg); // Sign up Successfully
    // } catch (err) {
    //   message.error(err.data.msg); // something went wrong try a gain later
    // }
  };

  const failureResponse = (response) => {
    console.log('error', response);
    message.error(response); // something went wrong try a gain later
  };
  return (
    <div className="auth-container">
      <Logo />
      <Text className="description-text">Please compleat to create your account</Text>
      {/* <Divider>Or</Divider> */}
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
        <Link to="/terms" className="terms-link">Terms and Conditions</Link>
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
        {/* Sign Up button */}
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      {/* Sign up with google */}
      <GoogleLogin
        className="google-sign-up-button"
        buttonText="SignUp with google"
        clientId={clientID}
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy="single_host_origin"
      />
      {/* Have an account  */}
      <Text className="have-account-text">
        Already have an account?
        {' '}
        <Link to="/" className="sign-in-link">Sign In.</Link>
      </Text>
    </div>

  );
}

// {
//   "error": "idpiframe_initialization_failed",
//   "details": "Not a valid origin for the client: http://localhost:3000 has not been registered for client ID 727149282582-03n35pardu6mt2g6d16ds12l9pau77nh.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
// }
