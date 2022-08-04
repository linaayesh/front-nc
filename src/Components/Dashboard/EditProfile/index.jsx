import { useState, useEffect } from 'react';

import './style.css';
import {
  Input, Button, Form, Switch, message,
} from '../../AntDesign';
import ImageUploader from './uploadImage';
import userService from '../../../Services/user';
import useAuth from '../../../Hooks/useAuth';

function EditProfile() {
  const [form] = Form.useForm();
  const currentUser = useAuth();
  const [image, setImage] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    form.setFieldsValue(currentUser);
    setIsFormChanged(false);
  }, [form, currentUser]);

  useEffect(() => {
    if (image) {
      setIsFormChanged(true);
    }
    return () => setIsFormChanged(false);
  }, [form, image]);

  const onFinish = async (values) => {
    const { username } = values;

    const userUpdatedInfo = {
      id: currentUser.id,
      ...currentUser.username !== form.getFieldValue('username') && { username },
      ...image && { image },
      updatedBy: currentUser.roleId,
    };

    userService
      .updateUser(userUpdatedInfo)
      .then((res) => {
        if (res.status === 200) {
          message.success('Profile updated successfully');
        }
      })
      .catch((error) => message.error(error.message))
      .finally(() => setIsFormChanged(false));
  };

  return (
    <div className="editProfileDiv">
      <div className="editProfileHeader">
        <h1>Edit Profile</h1>
        <div className="editProfilecontainer">

          <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            className="edit-form"
            initialValues={currentUser}
            onValuesChange={() => setIsFormChanged(true)}
          >

            <div className="edit-form-f">
              <div className="subcontainer">

                <div className="edit-form-s">
                  <div className="edit-nav">
                    <div className="edit-icon" />
                    <div className="title-edit">Change Your Information</div>
                  </div>

                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your name!',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Name"
                      onChange={() => setIsFormChanged(
                        form.getFieldValue('username') !== currentUser.username,
                      )}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                  >
                    <Input placeholder="Email" type="email" disabled />
                  </Form.Item>
                </div>
                <div className="edit-form-t">
                  <div className="edit-nav">
                    <div className="edit-icon" />
                    <div className="title-edit">Change Your Profile Pic</div>
                  </div>
                  <div className="ImageUploader">
                    <ImageUploader submitImageToForm={(url) => setImage(url)} />
                  </div>
                </div>
              </div>

              <div className="edit-nav noti">
                <div className="edit-icon" />
                <div className="title-edit">Notification</div>

              </div>
              <div className="edit-switch">
                <p>
                  Approve Notifications
                </p>
                <Switch
                  className="switch"
                  defaultChecked={currentUser.notification}
                />
              </div>
            </div>

            <Button className="edit-button" type="primary" htmlType="submit" disabled={!isFormChanged}>
              Edit Profile
            </Button>

          </Form>

        </div>
      </div>
    </div>
  );
}

export default EditProfile;
