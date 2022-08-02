/* eslint-disable no-console */
import React from 'react';
import './style.css';
import {
  Input, Button, Form, Switch,
} from '../../AntDesign';

function EditProfile() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { username, email } = values;
    console.log(username, email);
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
                Approve Notifications
              </p>
              <Switch
                className="switch"
                defaultChecked

              />
            </div>

            <Button className="edit-button" type="primary" htmlType="submit">
              Edit Profile
            </Button>

          </Form>

        </div>
      </div>
    </div>
  );
}

export default EditProfile;
