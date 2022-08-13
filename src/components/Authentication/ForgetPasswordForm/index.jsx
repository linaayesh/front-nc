import { Link } from 'react-router-dom';

import {
  Input, Typography, Button, Form, message,
} from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from 'hooks';
import { forgetPassword } from 'store/user/thunk';
import Logo from '../RegisterForm/logo';

export default function ForgetPasswordForm() {
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state) => state.user);

  const onFinish = async (email) => {
    dispatch(forgetPassword(email));
    if (data) message.success(data);
    if (error) message.error(error);
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
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Send a reset email
          </Button>
        </Form.Item>
      </Form>
      <Text className="have-account-text">
        Remember it?
        <Link to="/" className="sign-in-link">Sign in.</Link>
      </Text>
    </div>

  );
}
