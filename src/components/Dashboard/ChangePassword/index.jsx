import { Input, Button, Form } from 'components/AntDesign';

import React from 'react';
import { validationMessages } from 'utils';
import './style.css';

function ChangePassword() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
  };
  return (
    <div className="add-new-user-container">
      <h1>Change Password</h1>
      <div className="add-new-user-subcontainer">
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
        </Form>
      </div>
    </div>
  );
}

export default ChangePassword;
