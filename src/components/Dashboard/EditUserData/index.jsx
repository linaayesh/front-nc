import { validationMessages } from 'utils';
import { Input, Button, Form } from 'components/AntDesign';
import './style.css';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { editUserProfile } from 'store/admin/thunk';
import { ComponentLayout } from 'layouts';

function EditUserData() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { userId } = useParams();

  const onFinish = async (values) => {
    const { name } = values;
    const userUpdatedInfo = {
      id: userId,
      ...(name && { name }),
    };
    dispatch(editUserProfile(userUpdatedInfo));
  };
  return (
    <ComponentLayout title="Edit Profile" heading="Change Your Information">
      <Form form={form} name="basic" onFinish={onFinish} autoComplete="off">
        <div className="edit-form-s">
          <Form.Item name="name" rules={validationMessages.name}>
            <Input placeholder="Name" className="edit-form-input" />
          </Form.Item>
          <Form.Item name="email" rules={validationMessages.email}>
            <Input placeholder="Email" type="email" />
          </Form.Item>
        </div>

        <Button className="edit-button" type="primary" htmlType="submit">
          Edit Profile
        </Button>
      </Form>
    </ComponentLayout>
  );
}

export default EditUserData;
