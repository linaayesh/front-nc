import PropsTypes from 'prop-types';
import { Radio, Space, Input } from 'components/AntDesign';

function ReasonOfRejection({ value, onChange }) {
  return (
    <>
      <p>Are you sure that you want to reject this user？</p>
      <p>Choose the reason for rejection</p>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value="Option A">Option A</Radio>
          <Radio value="Option B">Option B</Radio>
          <Radio value="Option C">Option C</Radio>
          <Radio value="other">
            Other
            {value === 'other' ? (
              <Input
                style={{ width: 100, marginLeft: 10 }}
              />
            ) : null}
          </Radio>
        </Space>
      </Radio.Group>
    </>
  );
}

export default ReasonOfRejection;

ReasonOfRejection.propTypes = {
  value: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
};
