/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  Typography, Input, Form, Button, Checkbox, message,
} from 'antd';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../RegisterForm/logo';

export default function LogInForm() {
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
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
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
      <Text className="description-text">Welcome back please login to your account.</Text>
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
        {/* Remember me and forget password */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
        }}
        >
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox style={{ color: '#6F767E' }}>Remember me</Checkbox>
          </Form.Item>
          <Link to="/forgetPassword" className="sign-in-link">Forget Password</Link>
        </div>
        {/* Log In Button */}
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
      {/* Log in with google */}
      <GoogleLogin
        className="google-sign-up-button"
        buttonText="Log In with google"
        clientId={clientID}
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy="single_host_origin"
      />
      {/* navigate to sign up */}
      <Text className="have-account-text">
        Does not have an account?
        {' '}
        <Link to="/signup" className="sign-in-link">Sign Up.</Link>
      </Text>
    </div>

  );
}
//       {/* <img src={authImage} alt="List of posters" className="home-layout-image" /> */}
