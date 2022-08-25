import { Link } from 'react-router-dom';

import {
  Input, Text, Button, Form, Checkbox,
} from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Loader, Logo } from 'shared/components';
import { validationMessages } from 'utils';
import { createUser } from 'store/user/thunk';
import GoogleAuth from '../GoogleAuth';
import './style.css';

export default function RegisterForm() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  const onFinish = async (values) => {
    const { name, password } = values;
    const email = values.email.toLowerCase();

    await dispatch(createUser({ name, email, password })).finally(
      form.resetFields(),
    );
  };

  return (
    !isLoading ? (
      <div className="auth-container-register">
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
            name="name"
            rules={validationMessages.name}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={validationMessages.email}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={validationMessages.password}
            hasFeedback
            className="input-password"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={validationMessages.confirm}
            className="input-password"
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={validationMessages.agreement}
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
        <GoogleAuth label="Sign Up With Google" method="sign" />
        <Text className="have-account-text">
          Already have an account?
          <Link to="/" className="sign-in-link">Sign In.</Link>
        </Text>
      </div>
    ) : <Loader />

  );
}
