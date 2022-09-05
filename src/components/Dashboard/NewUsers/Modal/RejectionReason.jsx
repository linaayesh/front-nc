import PropsTypes from 'prop-types';
import { Radio, Space } from 'components/AntDesign';
import { ACCOUNT_REGISTRATION_REASONS } from 'shared/constants';

function ReasonOfRejection({ value, onChange }) {
  const options = Object.values(ACCOUNT_REGISTRATION_REASONS).map((reason) => (
    <Radio key={reason} value={reason}>
      {reason}
    </Radio>
  ));
  return (
    <>
      <p>Are you sure that you want to reject this user？</p>
      <p>Choose the reason for rejection</p>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {options}
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
