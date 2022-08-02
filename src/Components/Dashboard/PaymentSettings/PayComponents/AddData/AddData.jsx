import React, { useState } from 'react';
import userService from '../../../../../Services/user';

import {
  Button, Form, Input, message,
} from '../../../../AntDesign';

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
      .then((res) => {
        if (res.message) {
          message.success('Payment details added successfully');
          setFormChanged(false);
        }
      })
      .catch((error) => message.error(error.message))
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
            rules={[
              {
                required: true,
                message: 'Please enter your Name!',
              },
            ]}
          >
            <Input
              placeholder="Name"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="Country"
            rules={[
              {
                required: true,
                message: 'Please enter your Country!',
              },
            ]}
          >
            <Input
              placeholder="Country"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="State"
            rules={[
              {
                required: true,
                message: 'Please enter your State!',
              },
            ]}
          >
            <Input
              placeholder="State"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>
          <Form.Item
            noStyle
            name="City"
            rules={[
              {
                required: true,
                message: 'Please enter your City!',
              },
            ]}
          >
            <Input
              placeholder="City"
              onChange={() => setFormChanged(!isFormChanged)}
            />
          </Form.Item>

          <Form.Item
            noStyle
            name="Address"
            rules={[
              {
                required: true,
                message: 'Please enter your Address!',
              },
            ]}
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
