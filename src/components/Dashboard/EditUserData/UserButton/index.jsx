import { Button } from 'antd';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { EDIT_USER_ENDPOINT } from 'shared/constants/endpoints';
import PropsTypes from 'prop-types';

function UserButton({ user }) {
  return (
    <Button
      onClick={() => Navigate(EDIT_USER_ENDPOINT(user.id))}
      type="primary"
    >
      Edit
    </Button>
  );
}

export default UserButton;

UserButton.propTypes = {
  user: PropsTypes.shape({
    id: PropsTypes.number,
    name: PropsTypes.string,
    email: PropsTypes.string,
    createdAt: PropsTypes.string,
    roleName: PropsTypes.string,
  }).isRequired,
};
