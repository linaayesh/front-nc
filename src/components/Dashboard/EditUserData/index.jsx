import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { ComponentLayout } from 'layouts';
import { validationMessages } from 'utils';
import { Input, Button, Form } from 'components/AntDesign';
import { editUserProfile, getUserProfile } from 'store/admin/thunk';
import { useEffect } from 'react';

function EditUserData() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getUserProfile(userId));
      form.setFieldsValue(payload);
    })();
  }, []);

  const onFinish = async (values) => {
    const { name } = values;
    const userUpdatedInfo = {
      id: userId,
      ...(name && { name }),
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

        <Button className="edit-button-admin" type="primary" htmlType="submit">
          Edit Profile
        </Button>
      </Form>
    </ComponentLayout>
  );
}

export default EditUserData;
