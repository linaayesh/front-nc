import { useState } from 'react';
import './style.css';
import {
  Input, Button, Form, Switch, message,
} from '../../AntDesign';
import ImageUploader from './uploadImage';
import axiosCall from '../../../Services/ApiCall';

function EditProfile() {
  const [form] = Form.useForm();
  const [image, setImage] = useState('');

  const onFinish = async (values) => {
    const { username } = values;
    const userUpdatedInfo = image ? { username, image } : { username };

    try {
      axiosCall('/api/v1/user/edit-profile', 'post', userUpdatedInfo);
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
