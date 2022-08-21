import { Link } from 'react-router-dom';

import {
  Input, Typography, Button, Form, message,
} from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from 'hooks';
import { forgetPassword } from 'store/user/thunk';
import { validationMessages } from 'utils';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';
import Logo from '../RegisterForm/logo';

export default function ForgetPasswordForm() {
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state) => state.user);

  const onFinish = async (email) => {
    dispatch(forgetPassword(email));
    if (data) message.success(HTTP_EXCEPTIONS_MESSAGES[data]);
    if (error) message.error(HTTP_EXCEPTIONS_MESSAGES[error]);
  };

  return (
    <div className="auth-container-forget">
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
          rules={validationMessages.email}
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
