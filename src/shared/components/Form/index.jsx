import PropsTypes from 'prop-types';

import {
  Button, Form, Text, Input,
} from 'components/AntDesign';
import { Logo } from 'shared/components';
import { validationMessages } from 'utils';

export default function FormModel({ form, fieldRenderProps }) {
  const {
    formTitle, buttonLabel, onFinish, fields,
  } = fieldRenderProps;

  return (
    <>
      <Logo className="home-layout-logo" />
      <Text className="auth-text title-text">{formTitle}</Text>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="auth-form"
      >

        {fields.map((item) => {
          const {
            label, name, className, input,
          } = item;
          return (
            <Form.Item
              key={label}
              name={name}
              hasFeedback
              className={className}
              rules={validationMessages[name]}
            >
              {
                input !== 'password' ? (
                  <Input
                    placeholder={label}
                  />
                ) : (
                  <Input.Password
                    placeholder={label}
                  />
                )
                  }
            </Form.Item>
          );
        })}

        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            {buttonLabel}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

FormModel.propTypes = {
  form: PropsTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  fieldRenderProps: PropsTypes.shape({
    formTitle: PropsTypes.string.isRequired,
    buttonLabel: PropsTypes.string.isRequired,
    onFinish: PropsTypes.func.isRequired,
    fields: PropsTypes.arrayOf(
      PropsTypes.shape({
        label: PropsTypes.string.isRequired,
        name: PropsTypes.string.isRequired,
        className: PropsTypes.string,
        hasfeedback: PropsTypes.string,
        item: PropsTypes.string,
        dependencies: PropsTypes.string,
        valuepropname: PropsTypes.string,
        link: PropsTypes.string,
        input: PropsTypes.string,
        type: PropsTypes.string,
      }),
    ).isRequired,
  }),
};
