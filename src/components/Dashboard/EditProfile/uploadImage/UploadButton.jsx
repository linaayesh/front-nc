import PropsTypes from 'prop-types';

import { LoadingOutlined, PlusOutlined } from 'components/AntDesign';

function UploadButton({ loading }) {
  return (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>
        Upload
      </div>
    </div>
  );
}

export default UploadButton;

UploadButton.propTypes = {
  loading: PropsTypes.bool.isRequired,
};
