import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { Input, Button, Form } from 'components/AntDesign';
import { validationMessages } from 'utils';
import './style.css';
import {
  updateDashboardSettings,
  geteDashboardSettings,
} from 'store/admin/thunk';

function DashboardSettings() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    dispatch(geteDashboardSettings()).then((res) => {
      const { data } = res.payload;
      form.setFieldsValue({
        ...data,
        systemActivationDate: data.systemActivationDate.slice(0, 10),
      });
    });
    setIsFormChanged(false);
  }, [form]);
  const onFinish = (values) => {
    const { viewliftEmail, ...rest } = values;
    viewliftEmail.toLowerCase();
    dispatch(
      updateDashboardSettings({
        viewliftEmail,
        ...rest,
      }),
    );
  };

  return (
    <div className="dash-settings-hero">
      <Form
        onFinish={onFinish}
        form={form}
        name="basic"
        layout="vertical"
        onValuesChange={() => setIsFormChanged(true)}
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
              rules={validationMessages.viewliftEmail}
            >
              <Input placeholder="Viewlift Email" type="email" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Password"
              name="viewliftPassword"
              rules={validationMessages.viewliftPassword}
            >
              <Input.Password placeholder="Viewlift Password" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Endpoint"
              name="viewliftEndpoint"
              rules={validationMessages.viewliftEndpoint}
            >
              <Input placeholder="Viewlift Endpoint" type="url" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="View lift Watches Fetch Limit"
              name="viewliftWatchesFetchLimit"
              rules={validationMessages.viewliftWatchesFetchLimit}
            >
              <Input placeholder="Viewlift Watches Fetch Limit" type="number" />
            </Form.Item>
          </div>
          <div className="dash-settings-left">
            <Form.Item
              className="dash-settings-input"
              label="System Activation Date"
              name="systemActivationDate"
              rules={validationMessages.systemActivationDate}
            >
              <Input placeholder="System Activating Date" type="date" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Split Percentage"
              name="nextupToOwedSplitPercentage"
              rules={validationMessages.nextupToOwedSplitPercentage}
            >
              <Input placeholder="Split Ratio" type="number" step={0.01} />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Max Fetch Trails"
              name="fetchMaxCount"
              rules={validationMessages.fetchMaxCount}
            >
              <Input placeholder="Fetch Max Count" type="number" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Expired After In Years"
              name="expiredAfterInYears"
              rules={validationMessages.expiredAfterInYears}
            >
              <Input placeholder="Expired After In Years" type="number" />
            </Form.Item>
          </div>
        </div>

        <Form.Item noStyle>
          <Button
            className="form-button-dashboard"
            type="primary"
            disabled={!isFormChanged}
            htmlType="submit"
          >
            Update Dashboard Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default DashboardSettings;
