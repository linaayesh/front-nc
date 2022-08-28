import { ComponentLayout } from 'components/Layout';
import {
  Input,
  Button,
  Form,
  message,
} from 'components/AntDesign';
import { userService } from 'services';
import { validationMessages } from 'utils';
import './style.css';

function ChangePassword() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const responseMessage = await userService.changePassword(values);
    if (responseMessage === 'INCORRECT_PASSWORD') {
      message.error(responseMessage);
    } else if (responseMessage === 'PASSWORD_CHANGED') {
      message.success(responseMessage);
    }
  };

  return (
    <ComponentLayout title="Change Password Page">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="add-new-user-form"
      >
        <div className="add-new-user-form-form-f">
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
              name="oldPassword"
              rules={validationMessages.oldPassword}
            >
              <Input.Password placeholder="Password" />
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
                {' '}
              </Button>
            </Form.Item>
          </div>
          <Form.Item noStyle>
            <Button className="form-button" type="primary" htmlType="submit">
              Change Password
              {' '}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </ComponentLayout>
  );
}

export default ChangePassword;
