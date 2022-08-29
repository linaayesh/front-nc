import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComponentLayout } from 'components/Layout';
import { matchUserContent } from 'store/matchContent/thunk';
import { useAppDispatch, useAppSelector } from 'hooks';
import defaultPoster from 'assets/images/default-poster.jpg';
import {
  AutoComplete,
  Form,
  Button,
  Input,
  message,
} from 'components/AntDesign';

function MatchContent() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const { curContent, usersToMatch } = useAppSelector((state) => state.matchContents);
  const { title, permalink } = curContent;
  const modifiedUsers = usersToMatch.map(({ name, email }) => ({ value: email, label: `${name} - ${email}` }));

  const onFinish = async (values) => {
    const modifiedValues = {
      ...values,
      id: curContent.id,
      filmingCosts: +values.filmingCosts,
      advance: +values.advance,
      feePaid: +values.feePaid,
      userId: usersToMatch.find(({ email }) => email === values.userId)?.id,
    };

    if (!modifiedValues.userId) message.error('Please select a valid user');

    dispatch(matchUserContent(modifiedValues));
    navigate('/dashboard/contentlist');
  };

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <ComponentLayout title="Match Content Page">
      <div className="contents-list-container__top-sub-container">
        <div className="contents-list-container__top-sub-sub-container">
          <div className="contents-list-container__top-sub-sub-container__icon" />
          <div className="contents-list-container__top-sub-sub-container__title">Link a content to user</div>
        </div>
      </div>
      <div className="hero">
        <div className="form-container">
          <Form
            name="match-content-with-user"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
            className="my-form"
            layout="vertical"
          >
            <Form.Item
              label="Select By User Email"
              name="userId"
              rules={[{ required: true, message: 'Please select a user to match this content to' }]}
            >
              <AutoComplete
                size="large"
                value={value}
                options={modifiedUsers}
                onChange={onChange}
                placeholder="Search user email"
                filterOption={(inputValue, option) => option.label.toUpperCase().indexOf(
                  inputValue.toUpperCase(),
                ) !== -1}
              />
            </Form.Item>
            <div className="pairs">
              <Form.Item
                label="Filming Costs"
                name="filmingCosts"
                rules={[{ required: true, message: 'Please specify filming cost' }]}
              >
                <Input placeholder="Filming cost" type="number" size="large" />
              </Form.Item>
              <Form.Item
                label="Fee Paid"
                name="feePaid"
                rules={[{ required: true, message: 'Please specify fee paid' }]}
              >
                <Input placeholder="Fee paid" type="number" size="large" />
              </Form.Item>
            </div>
            <div className="pairs">
              <Form.Item
                label="Advance"
                name="advance"
                rules={[{ required: true, message: 'Please specify advance' }]}
              >
                <Input placeholder="Advance" type="number" size="large" />
              </Form.Item>
              <Form.Item
                label="Launch Date"
                name="launchDate"
                rules={[{ required: true, message: 'Please specify launch date' }]}
              >
                <Input placeholder="Fee paid" type="date" size="large" />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: '#13e0d5', color: 'black', border: 'none' }}>
                Update Content
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="content-container">
          <img src={defaultPoster} alt={title} className="poster" />
          <div className="info">
            <h3>{title}</h3>
            <span>{permalink}</span>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default MatchContent;
