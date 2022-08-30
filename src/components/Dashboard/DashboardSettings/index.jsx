import { Input, Button, Form } from 'components/AntDesign';

import { validationMessages } from 'utils';
import './style.css';

function DashboardSettings() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
  };
  return (

    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      className="dash-settings-form"
    >
      <div className="dash-settings-hero">

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
  );
}

export default DashboardSettings;
