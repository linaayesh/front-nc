import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { updateUser } from 'store/user/thunk';
import { Loader } from 'shared/components';
import { validationMessages } from 'utils';
import {
  Input, Button, Form, Switch,
} from 'components/AntDesign';
import ImageUploader from './uploadImage';
import './style.css';

function EditProfile() {
  const [form] = Form.useForm();
  const { user } = useAppSelector((state) => state.checkAuth);
  const dispatch = useAppDispatch();
  const [image, setImage] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const { isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    form.setFieldsValue(user);
    setIsFormChanged(false);
  }, [form, user]);

  useEffect(() => {
    if (image) {
      setIsFormChanged(true);
    }
    return () => setIsFormChanged(false);
  }, [form, image]);

  const onFinish = async (values) => {
    const { name } = values;

    const userUpdatedInfo = {
      id: user.id,
      ...user.name !== form.getFieldValue('name') && { name },
      ...image && { image },
    };

    try {
      dispatch(updateUser(userUpdatedInfo));
    } finally {
      setIsFormChanged(false);
    }
  };

  return (
    !isLoading ? (
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
              initialValues={user}
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
                      name="name"
                      rules={validationMessages.name}
                    >
                      <Input
                        placeholder="Name"
                        onChange={() => setIsFormChanged(
                          form.getFieldValue('name') !== user.name,
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
                    defaultChecked={user.notification}
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
    ) : <Loader />);
}

export default EditProfile;
