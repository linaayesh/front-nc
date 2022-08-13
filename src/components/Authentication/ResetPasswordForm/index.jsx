import { useAppDispatch, useAppSelector } from 'hooks';
import { resetPassword } from 'store/user/thunk';
import {
  Input, Typography, Button, Form, message,
} from 'components/AntDesign';
import Logo from '../RegisterForm/logo';

function ResetPasswordForm() {
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state) => state.user);

  const onFinish = async ({ password }) => {
    dispatch(resetPassword({ password }));
    if (data) message.success(data);
    if (error) message.error(error);
  };

  return (
    <div className="auth-container">
      <Logo />
      <Text className="auth-text title-text">Please enter your new password</Text>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >
        {/* Password */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please Enter your password!',
            },
          ]}
          hasFeedback
          className="input-password"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {/* Confirm Password */}
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
        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>

    </div>

  );
}
export default ResetPasswordForm;
