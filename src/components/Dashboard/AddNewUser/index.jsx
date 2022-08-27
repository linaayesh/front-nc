import { useAppDispatch } from 'hooks';
import { Input, Button, Form } from 'components/AntDesign';
import { ROLES } from 'shared/constants';
import './style.css';
import { createUser } from 'store/admin/thunk';
import { validationMessages } from 'utils';

export default function AddNewUser() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = async (values) => {
    const { name } = values;
    const email = values.email.toLowerCase();
    const roleId = ROLES.COMEDIAN;

    try {
      dispatch(createUser({ name, email, roleId }));
    } finally {
      form.resetFields();
    }
  };

  return (
    <div className="add-new-user-container">
      <h1>Add New User Page</h1>
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
              <div className="title-add-new-user">Add New User</div>
            </div>
            <Form.Item
              name="name"
              rules={validationMessages.name}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={validationMessages.email}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>
            <Form.Item noStyle>
              <Button className="form-button" type="primary" htmlType="submit">
                Create New Account
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
