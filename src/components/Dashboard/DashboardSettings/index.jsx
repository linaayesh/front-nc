import { Input, Button, Form } from 'components/AntDesign';

import { validationMessages } from 'utils';
import './style.css';

function DashboardSettings() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
  };
  return (

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
            <div className="title-add-new-user">Update Your Dashboard Settings</div>
          </div>

          <Form.Item
            name="splitRatio"
            rules={validationMessages.splitRatio}
          >
            <Input placeholder="Enter The New Split Ratio" type="text" />
          </Form.Item>

          <Form.Item noStyle>
            <Button className="form-button" type="primary" htmlType="submit">
              Change Split Ratio
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default DashboardSettings;
