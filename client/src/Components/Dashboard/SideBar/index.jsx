import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">

      <div className="sidebar-body">
        <div className="sidebar-body-item">
          <i className="fa fa-home icon" />
          Home
        </div>
        <div className="sidebar-body-item">
          <i className="fa fa-dashboard icon" />
          Dashobard

        </div>
        <div className="sidebar-body-item">
          <i className="fa fa-user icon" />
          Finance
        </div>
        <div className="sidebar-body-item">
          <i className="fa fa-cog icon" />
          Account Settings
        </div>
        <div className="sidebar-body-item">
          <i className="fa fa-cog icon" />
          Dashobard Settings
        </div>
        <div className="sidebar-body-item">
          <i className="fa fa-sign-out icon" />
          <Link to="/">Logout</Link>

        </div>
      </div>

    </div>
  );
}

export default SideBar;
