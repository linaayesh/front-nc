import { Input, Button, Form } from 'components/AntDesign';
import { validationMessages } from 'utils';
import './style.css';

function DashboardSettings() {
  const [form] = Form.useForm();

  return (
    <div className="dash-settings-hero">

      <Form
        form={form}
        name="basic"
        autoComplete="off"
        className="dash-settings-form"
      >

        <div className="dash-settings-sub">
          <div className="dash-settings-right">
            <Form.Item
              className="dash-settings-input"
              name="viewliftEmail"
              rules={validationMessages.VIEWLLIFT_EMAIL}
            >
              <Input placeholder="Enter The New Email" type="text" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="viewliftPassword"
              rules={validationMessages.VIEWLLIFT_PASSWORD}
            >
              <Input placeholder="Enter The New Password" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="viewliftEndpoint"
              rules={validationMessages.VIEWLIFT_ENDPOINT}
            >
              <Input placeholder="Enter The New Endpoint" type="text" />
            </Form.Item>
          </div>
          <div className="dash-settings-left">

            <Form.Item
              className="dash-settings-input"
              name="viewliftWatchesFetchLimit"
              rules={validationMessages.VIEWLIFT_WATCHES_FETCH_LIMIT}
            >
              <Input placeholder="Enter The New Watches Fetch Limit" type="text" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="systemActivatingDate"
              rules={validationMessages.SYSTEM_ACTIVATING_DATE}
            >
              <Input placeholder="Enter The New Activating Date" type="text" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="splitRatio"
              rules={validationMessages.splitRatio}
            >
              <Input placeholder="Enter The New Split Ratio" type="text" />
            </Form.Item>
          </div>
        </div>

        <Form.Item noStyle>
          <Button className="form-button-dashboard" type="primary" htmlType="submit">
            Update Dashboard Settings
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
}

export default DashboardSettings;
