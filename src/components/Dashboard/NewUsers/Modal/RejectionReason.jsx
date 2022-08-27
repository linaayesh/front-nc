import PropsTypes from 'prop-types';
import { Radio, Space, Input } from 'components/AntDesign';

function ReasonOfRejection({ value, onChange }) {
  return (
    <>
      <p>Are you sure that you want to reject this user？</p>
      <p>Choose the reason for rejection</p>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            Other
            {value === 4 ? (
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
  value: PropsTypes.number.isRequired,
  onChange: PropsTypes.func.isRequired,
};
