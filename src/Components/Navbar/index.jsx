import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';

import { Button, Space } from '../AntDesign';
import { DEFAULT_AVATAR } from '../../Constants';

function Navbar({ handleClick, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="leftside">
        <div className="bti">
          <Button onClick={handleClick}>
            <i className="fa fa-bars" />
          </Button>
        </div>
      </div>
      <div className="rightside">
        <i className="fa fa-bell icon" />

        <Space onClick={handleLogout}>
          <img
            src={DEFAULT_AVATAR}
            alt="logo"
            className="userimg"
          />
        </Space>
      </div>
    </nav>
  );
}

export default Navbar;
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
