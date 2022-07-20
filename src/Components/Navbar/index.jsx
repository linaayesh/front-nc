import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import { Button } from '../AntDesign';

function Navbar({ handleClick }) {
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

        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="logo"
          className="userimg"
        />
      </div>
    </nav>
  );
}

export default Navbar;
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
