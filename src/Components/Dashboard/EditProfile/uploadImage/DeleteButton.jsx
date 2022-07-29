import PropsTypes from 'prop-types';

import { Button, DeleteOutlined } from '../../../AntDesign';

function DeleteButton({ imageUrl, handleDelete }) {
  return (
    <div>
      {imageUrl && (
      <Button danger icon={<DeleteOutlined />} size="medium" onClick={handleDelete}>
        Remove
      </Button>
      )}
    </div>
  );
}

export default DeleteButton;

DeleteButton.propTypes = {
  imageUrl: PropsTypes.string.isRequired,
  handleDelete: PropsTypes.func.isRequired,
};
