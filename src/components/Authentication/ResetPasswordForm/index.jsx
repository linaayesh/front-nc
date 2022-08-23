import { useAppDispatch, useAppSelector } from 'hooks';
import { resetPassword } from 'store/user/thunk';
import {
  Input, Typography, Button, Form,
} from 'components/AntDesign';
import { validationMessages } from 'utils';
import { Loader } from 'shared/components';
import Logo from '../RegisterForm/logo';

function ResetPasswordForm() {
  const { Text } = Typography;
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  const onFinish = async ({ password }) => {
    dispatch(resetPassword({ password }));
  };

  return (
    !isLoading ? (
      <div className="auth-container-reset">
        <Logo />
        <Text className="auth-text title-text">Please enter your new password</Text>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          className="auth-form"
        >
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
            rules={validationMessages.confirmPassword}
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
    ) : <Loader />

  );
}
export default ResetPasswordForm;
