import { Link } from 'react-router-dom';

import userService from '../../../Services/user';
import {
  Input, Typography, Button, Form, message, Checkbox,
} from '../../AntDesign';
import GoogleAuth from '../GoogleAuth';
import Logo from './logo';
import './style.css';

export default function RegisterForm() {
  const { Text } = Typography;
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { username, password } = values;
    const email = values.email.toLowerCase();

    userService.createUser({ username, email, password }).then((response) => {
      if (response.message === 'CHECK EMAIL') {
        message.success('Successfully registered! Please check your email to verify your account.');
        form.resetFields();
      }
    }).catch((error) => {
      if (error.message === 'APPROVED ACCOUNT') {
        message.error('User already exists!'); // That's vulnerable
      } else if (error.message === 'WAITING APPROVAL') {
        message.error('this user is waiting for approval');
      } else {
        message.error(error.message);
      }
    });
  };

  return (
    <div className="auth-container">
      <Logo />
      <Text className="auth-text title-text">Please compleat to create your account</Text>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your name!',
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a vaild email!',
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
          hasFeedback
          className="input-password"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
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
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <GoogleAuth label="Sign Up With Google" />
      <Text className="have-account-text">
        Already have an account?
        <Link to="/" className="sign-in-link">Sign In.</Link>
      </Text>
    </div>

  );
}
