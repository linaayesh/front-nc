import React from 'react';
import './style.css';
import { Switch } from 'antd';
import {
  Input, Button, Form, message,
} from '../../AntDesign';

import axiosCall from '../../../Services/ApiCall';

function EditProfile() {
  const [form] = Form.useForm();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onFinish = async (values) => {
    const { username, email } = values;
    console.log(username, email);
    try {
      const response = await axiosCall('/api/v1/auth/editProfile', 'post', { username, email });
      message.success(response.data.message);
      form.resetFields();
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  return (
    <div className="eidtProfileDiv">
      <div className="editProfileHeader">
        <h1>Edit Profile</h1>
        <div className="container">

          <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            className="edit-form"
          >
            <div className="edit-nav">
              <div className="edit-icon" />
              <div className="title-eidt">Change Your Information</div>
            </div>

            <div className="edit-form-f">
              <div className="edit-form-s">
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
              </div>
              <div className="edit-form-t">upload</div>

            </div>
            <div className="edit-nav">
              <div className="edit-icon" />
              <div className="title-eidt">Notification</div>

            </div>
            <div className="edit-switch">
              <p>
                Lorem Iplsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Switch
                className="switch"
                defaultChecked
                onChange={onChange}

              />
            </div>
            <Form.Item>
              <Button className="edit-button" type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    </div>
  );
}

export default EditProfile;
