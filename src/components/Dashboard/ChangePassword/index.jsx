import { ComponentLayout } from 'components/Layout';
import {
  Input,
  Button,
  Form,
} from 'components/AntDesign';
import { validationMessages } from 'utils';
import { useAppDispatch } from 'hooks';
import { changePassword } from 'store/user/thunk';
import './style.css';

function ChangePassword() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { password, oldPassword } = values;

    if (oldPassword.trim() !== password.trim()) dispatch(changePassword(values));
  };

  return (
    <ComponentLayout title="Change Password Page">
      <div className="hero">
        <Form
          form={form}
          name="basic"
          className="my-form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="add-new-user-nav">
            <div className="add-new-user-icon" />
            <div className="title-add-new-user">Change Your Password</div>
          </div>

          <Form.Item
            name="oldPassword"
            rules={[
              {
                required: true,
                message: 'Please enter your old password!',
              },
            ]}
          >
            <Input placeholder="Old Password" type="password" />
          </Form.Item>

          <div className="newPasswordDiv">
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
          </div>

          <Form.Item noStyle>
            <Button className="form-button" type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ComponentLayout>
  );
}

export default ChangePassword;
