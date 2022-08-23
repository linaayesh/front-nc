import { useState } from 'react';

import userService from 'services/user';
import {
  Button, Form, Input,
} from 'components/AntDesign';
import { validationMessages } from 'utils';

function AddData() {
  const [form] = Form.useForm();
  const [isFormChanged, setFormChanged] = useState(false);
  const onFinish = (values) => {
    const {
      Address, City, State, Country, Name,
    } = values;
    const userAddress = `${Country}-${State}-${City}-${Address}`;
    const userInfo = {
      name: Name,
      address: userAddress,
    };
    userService
      .addFinancialData(userInfo)
      .finally(() => setFormChanged(false));
  };
  return (
    <Form form={form} name="basic" onFinish={onFinish} autoComplete="off" className="add-pay-form">
      <div className="pay-form">
        <div className="pay-nav">
          <div className="edit-icon" />
          <div className="title-edit">Add your payment details </div>
        </div>
        <div className="pay-form-items">
          <Form.Item
            noStyle
            name="Name"
            rules={validationMessages.fullName}
          >
            <Input
              placeholder="Name"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="Country"
            rules={validationMessages.country}
          >
            <Input
              placeholder="Country"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="State"
            rules={validationMessages.state}
          >
            <Input
              placeholder="State"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="City"
            rules={validationMessages.city}
          >
            <Input
              placeholder="City"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>

          <Form.Item
            noStyle
            name="Address"
            rules={validationMessages.address}
          >
            <Input
              placeholder="Address"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
        </div>
        <Button className="pay-button" type="primary" htmlType="submit" disabled={!isFormChanged}>
          Add Payment Details
        </Button>
      </div>
    </Form>
  );
}

export default AddData;
