import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ComponentLayout } from 'layout';
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
import { validationMessages } from 'utils';
import { CONTENT_LIST_URL } from 'shared/constants/endpoints';
import { INVALID_USER_MESSAGE } from 'shared/constants';

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

    if (!modifiedValues.userId) message.error(INVALID_USER_MESSAGE);

    const { payload } = await dispatch(matchUserContent(modifiedValues));
    if (payload) navigate(CONTENT_LIST_URL);
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
              rules={validationMessages.userId}
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
                rules={validationMessages.filmingCosts}
              >
                <Input placeholder="Filming cost" type="number" size="large" />
              </Form.Item>
              <Form.Item
                label="Fee Paid"
                name="feePaid"
                rules={validationMessages.feePaid}
              >
                <Input placeholder="Fee paid" type="number" size="large" />
              </Form.Item>
            </div>
            <div className="pairs">
              <Form.Item
                label="Advance"
                name="advance"
                rules={validationMessages.advance}
              >
                <Input placeholder="Advance" type="number" size="large" />
              </Form.Item>
              <Form.Item
                label="Launch Date"
                name="launchDate"
                rules={validationMessages.launchDate}
              >
                <Input placeholder="Fee paid" type="date" size="large" />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="match-content-btn">
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
