import { Input, Button, Form } from 'Components/AntDesign';
import { ROLES } from 'Constants/index';
import useAddUser from 'Hooks/useAddUser';
import './style.css';

export default function AddNewUser() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { name } = values;
    const email = values.email.toLowerCase();
    const roleId = ROLES.COMEDIAN;
    useAddUser(name, email, roleId);
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
