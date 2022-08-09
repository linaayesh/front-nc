import { Input, Button, Form } from 'Components/AntDesign';
import addUser from 'Hooks/addUser';
import './style.css';

export default function AddNewUser() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { username, password } = values;
    const email = values.email.toLowerCase();
    addUser(username, email, password);
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
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
              className="input-password"
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The two passwords that you entered do not match!'),
                    );
                  },
                }),
              ]}
              className="input-password-add-new-user"
            >
              <Input.Password placeholder="Confirm Password" />
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
