import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ComponentLayout } from 'layouts';
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
import { INVALID_USER_MESSAGE, NEXTUP_COMEDEY_LINK } from 'shared/constants';

function MatchContent() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const { curContent, usersToMatch } = useAppSelector((state) => state.matchContents);
  const { title, permalink, publishDate } = curContent;
  const modifiedUsers = usersToMatch.map(({ name, email }) => ({ value: email, label: `${name} - ${email}` }));

  const onFinish = async (values) => {
    const modifiedValues = {
      ...values,
      id: curContent.id,
      filmingCosts: +values.filmingCosts,
      advance: +values.advance,
      feePaid: +values.feePaid,
      recoveredCosts: +values.recoveredCosts,
      userId: usersToMatch.find(({ email }) => email === values.userId)?.id,
    };

    if (!modifiedValues.userId) message.error(INVALID_USER_MESSAGE);

    const { payload } = await dispatch(matchUserContent(modifiedValues));
    if (payload) navigate(CONTENT_LIST_URL);
  };

  const onChange = (text) => {
    setValue(text);
  };

  const filterOption = {
    filterOption:
    (inputValue, option) => option?.value?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
  };

  return (
    <ComponentLayout title="Match Content Page" heading="Link a content to user">
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
            requiredMark={false}
          >
            <div className="pairs">
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
                  filterOption={filterOption}
                />
              </Form.Item>

              <div className="couple">
                <div className="heading-nav">
                  <div className="heading-icon" />
                  <div className="title-heading">Update the costs</div>
                </div>
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
                <Form.Item
                  label="Advance"
                  name="advance"
                  rules={validationMessages.advance}
                >
                  <Input placeholder="Advance" type="number" size="large" />
                </Form.Item>
              </div>
            </div>

            <div className="reserved">
              <div className="heading-nav">
                <div className="heading-icon" />
                <div className="title-heading">
                  Update the Recovered Costs
                </div>
              </div>
              <Form.Item
                label="Recovered Costs"
                name="recoveredCosts"
                rules={validationMessages.recoveredCosts}
              >
                <Input placeholder="Recovered costs" type="number" size="large" />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="form-button">
                Update Content
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="content-container">
          <img src={defaultPoster} alt={title} className="poster" />
          <div className="info">
            <h1 className="contenttitle">{title}</h1>
            <a href={`${NEXTUP_COMEDEY_LINK}${permalink}`} target="_blank" rel="noreferrer" className="videolink">
              {NEXTUP_COMEDEY_LINK}
              {permalink}
            </a>
            <h1 className="videoDate">{`Publish Date : ${publishDate?.slice(0, 10)}`}</h1>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export default MatchContent;
