import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import userService from '../../../../../Services/user';
import {
  Button, Form, Input, message,
} from '../../../../AntDesign';

function EditData({ currentUser }) {
  const [form] = Form.useForm();
  const [isFormChanged, setFormChanged] = useState(false);
  const [aCountry, aState, aCity, aAddress] = currentUser.address.split('-');
  const [address] = useState({
    aCountry, aState, aCity, aAddress,
  });

  useEffect(() => {
    form.setFieldsValue({
      aName: currentUser.name,
      aCountry: address.Country,
      aState: address.State,
      aCity: address.City,
      aAddress: address.Address,

    });
  }, [currentUser]);
  const onFinish = (values) => {
    const {
      Address, City, State, Country, Name,
    } = values;

    const userAddress = ` ${Country} - ${State} - ${City} -${Address}  `;
    const userInfo = {
      name: Name,
      address: userAddress,
    };
    userService
      .updateFinancialData(userInfo)
      .then((res) => {
        if (res.message) {
          message.success('Successfully updated');
          setFormChanged(false);
        }
      });
  };
  return (
    <Form form={form} name="basic" onFinish={onFinish} autoComplete="off" className="add-pay-form">
      <div className="pay-form">
        <div className="pay-nav">
          <div className="edit-icon" />
          <div className="title-edit">Update your payment details </div>
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
          Edit Payment Details
        </Button>
      </div>
    </Form>
  );
}

export default EditData;
EditData.propTypes = {
  currentUser: PropsTypes.shape({
    name: PropsTypes.string,
    address: PropsTypes.string,
  }).isRequired,
};
