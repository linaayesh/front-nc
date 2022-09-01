import { useAppDispatch } from 'hooks';
import { Input, Button, Form } from 'components/AntDesign';
import { validationMessages } from 'utils';
import './style.css';
import { updateDashboardSettings } from 'store/admin/thunk';

function DashboardSettings() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const onFinish = (values) => {
    const {
      viewliftPassword,
      viewliftEndpoint,
      viewliftWatchesFetchLimit,
      systemActivationDate,
      nextupToOwedSplitPercentage,
      expiredAfterInYears,
      fetchMaxCount,
    } = values;
    const viewliftEmail = values.viewliftEmail.toLowerCase();
    dispatch(updateDashboardSettings({
      viewliftEmail,
      viewliftPassword,
      viewliftEndpoint,
      viewliftWatchesFetchLimit,
      systemActivationDate,
      nextupToOwedSplitPercentage,
      expiredAfterInYears,
      fetchMaxCount,
    }));
  };

  return (
    <div className="dash-settings-hero">

      <Form
        onFinish={onFinish}
        form={form}
        name="basic"
        layout="vertical"
        requiredMark={false}
        autoComplete="off"
        className="dash-settings-form"
      >

        <div className="dash-settings-sub">
          <div className="dash-settings-right">

            <Form.Item
              label="View lift Email"
              name="viewliftEmail"
              className="dash-settings-input"
              rules={[{ required: true, message: validationMessages.viewliftEmail }]}
            >
              <Input placeholder="Viewlift Email" type="email" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Password"
              name="viewliftPassword"
              rules={[{ required: true, message: validationMessages.viewliftPassword }]}
            >
              <Input.Password placeholder="Viewlift Password" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Endpoint"
              name="viewliftEndpoint"
              rules={[{ required: true, message: validationMessages.viewliftEndpoint }]}
            >
              <Input placeholder="Viewlift Endpoint" type="url" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Watches Fetch Limit"
              name="viewliftWatchesFetchLimit"
              rules={[{ required: true, message: validationMessages.viewliftWatchesFetchLimit }]}
            >
              <Input placeholder="Viewlift Watches Fetch Limit" type="number" />
            </Form.Item>

          </div>
          <div className="dash-settings-left">

            <Form.Item
              className="dash-settings-input"
              label="System Activation Date"
              name="systemActivationDate"
              rules={[{ required: true, message: validationMessages.systemActivationDate }]}
            >
              <Input placeholder="System Activating Date" type="date" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Nextup To Owed Split Percentage"
              name="nextupToOwedSplitPercentage"
              rules={[{ required: true, message: validationMessages.nextupToOwedSplitPercentage }]}
            >
              <Input placeholder="Split Ratio" type="number" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Expired After In Years"
              name="fetchMaxCount"
              rules={[{ required: true, message: validationMessages.fetchMaxCount }]}
            >
              <Input placeholder="Fetch Max Count" type="number" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Expired After In Years"
              name="expiredAfterInYears"
              rules={[{ required: true, message: validationMessages.expiredAfterInYears }]}
            >
              <Input placeholder="Expired After In Years" type="number" />
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
