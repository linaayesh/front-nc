// import { useAppDispatch } from 'hooks';
import { Input, Button, Form } from 'components/AntDesign';
// import { updateDashboardSettings } from 'store/admin/thunk';
import { validationMessages } from 'utils';
import './style.css';

// const dispatch = useAppDispatch();

function DashboardSettings() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    // until we have a backend, we will just update it
    // const {
    //   VIEWLLIFT_PASSWORD, VIEWLIFT_ENDPOINT,
    //   VIEWLIFT_WATCHES_FETCH_LIMIT, SYSTEM_ACTIVATING_DATE, splitRatio,
    // } = values;
    // const VIEWLLIFT_EMAIL = values.VIEWLLIFT_EMAIL.toLowerCase();
    // dispatch(updateDashboardSettings({
    //   VIEWLLIFT_PASSWORD,
    //   VIEWLIFT_ENDPOINT,
    //   VIEWLLIFT_EMAIL,
    //   VIEWLIFT_WATCHES_FETCH_LIMIT,
    //   SYSTEM_ACTIVATING_DATE,
    //   splitRatio,
    // }));
    console.log(values);
  };
  return (
    <div className="dash-settings-hero">

      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="dash-settings-form"
      >

        <div className="dash-settings-sub">
          <div className="dash-settings-right">
            <Form.Item
              className="dash-settings-input"
              name="VIEWLLIFT_EMAIL"
              rules={validationMessages.VIEWLLIFT_EMAIL}
            >
              <Input placeholder="Enter The New Email" type="text" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="VIEWLLIFT_PASSWORD"
              rules={validationMessages.VIEWLLIFT_PASSWORD}
            >
              <Input placeholder="Enter The New Password" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="VIEWLIFT_ENDPOINT"
              rules={validationMessages.VIEWLIFT_ENDPOINT}
            >
              <Input placeholder="Enter The New Endpoint" type="text" />
            </Form.Item>
          </div>
          <div className="dash-settings-left">

            <Form.Item
              className="dash-settings-input"
              name="VIEWLIFT_WATCHES_FETCH_LIMIT"
              rules={validationMessages.VIEWLIFT_WATCHES_FETCH_LIMIT}
            >
              <Input placeholder="Enter The New Watches Fetch Limit" type="text" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              name="SYSTEM_ACTIVATING_DATE"
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
