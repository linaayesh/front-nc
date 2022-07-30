import { useEffect, useState } from 'react';

import './style.css';
import {
  Input, Button, Form, Switch, message,
} from '../../AntDesign';
import ImageUploader from './uploadImage';
import userService from '../../../Services/user';
import useAuth from '../../../Hooks/useAuth';

function EditProfile() {
  const [form] = Form.useForm();
  const [image, setImage] = useState('');
  const currentUser = useAuth();

  useEffect(() => {
    form.setFieldsValue({
      username: currentUser.username,
      email: currentUser.email,
    });
  }, [currentUser]);

  const onFinish = async (values) => {
    const { username } = values;
    const userUpdatedInfo = image
      ? { username, image, updatedBy: currentUser.roleId }
      : { username, updatedBy: currentUser.roleId };

    userService
      .updateUser(userUpdatedInfo)
      .then((res) => {
        if (res.status === 204) {
          message.success('Profile updated successfully');
        }
      })
      .catch((error) => message.error(error.message))
      .finally(() => setImage(''));
  };

  return (
    <div className="editProfileDiv">
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
              <div className="title-edit">Change Your Information</div>
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
                >
                  <Input placeholder="Email" type="email" disabled />
                </Form.Item>
              </div>
              <div className="edit-form-t">
                <ImageUploader submitImageToForm={(url) => setImage(url)} />
              </div>

            </div>
            <div className="edit-nav">
              <div className="edit-icon" />
              <div className="title-edit">Notification</div>

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
