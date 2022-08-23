import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { loginUser } from 'store/auth/thunk';
import {
  Input, Typography, Button, Form, Checkbox,
} from 'components/AntDesign';
import { validationMessages } from 'utils';
import Logo from '../RegisterForm/logo';
import GoogleAuth from '../GoogleAuth';
import './style.css';

export default function LoginForm() {
  const { Text } = Typography;
  const dispatch = useAppDispatch();

  const onFinish = async (values) => {
    const { email, password } = values;
    dispatch(loginUser({ email: email.toLowerCase(), password }));
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
          rules={validationMessages.email}
        >
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={validationMessages.password}
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
