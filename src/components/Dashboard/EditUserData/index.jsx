import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { ComponentLayout } from 'layouts';
import { validationMessages } from 'utils';
import { Input, Button, Form } from 'components/AntDesign';
import { editUserProfile, getUserProfile } from 'store/admin/thunk';
import { useEffect, useState } from 'react';
import ImageUploader from '../EditProfile/uploadImage';

function EditUserData() {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [form] = Form.useForm();
  const { userId } = useParams();
  useEffect(() => {
    if (image) {
      setIsFormChanged(true);
    }
    return () => setIsFormChanged(false);
  }, [form, image]);
  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getUserProfile(userId));
      form.setFieldsValue(payload);
      setOldImage(payload.image);
    })();
  }, []);

  const onFinish = async (values) => {
    const { name } = values;
    const userUpdatedInfo = {
      id: userId,
      ...(name && { name }),
      ...image && { image },
    };
    dispatch(editUserProfile(userUpdatedInfo));
  };
  return (
    <ComponentLayout heading="Change user profile">
      <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
        <div className="edit-form-s">
          <Form.Item name="name" rules={validationMessages.name}>
            <Input placeholder="Name" className="edit-form-input" />
          </Form.Item>

        </div>
        <div className="edit-form-t">
          <div className="heading-nav">
            <div className="heading-icon" />
            <div className="title-heading">Change Your Profile Pic</div>
          </div>
          <div className="ImageUploader">
            <ImageUploader submitImageToForm={(url) => setImage(url)} />
            <img
              src={oldImage}
              alt="logo"
              className="profileimg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <Button className="edit-button-admin" type="primary" htmlType="submit" disabled={!isFormChanged}>
          Edit Profile
        </Button>
      </Form>
    </ComponentLayout>
  );
}

export default EditUserData;
