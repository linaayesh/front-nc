import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SideBar() {
  const links = [
    {
      name: 'Home',
      link: '/dashboard',
      icon: 'fa fa-home icon',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: 'fa fa-dashboard icon',
    },
    {
      name: 'Finance',
      link: '/dashboard/finance',
      icon: 'fa fa-user icon',
    },
    {
      name: 'Account Settings',
      link: '/dashboard/account-settings',
      icon: 'fa fa-cog icon',
    },
    {
      name: 'Dashobard Settings',
      link: '/dashboard/Dashobard-settings',
      icon: 'fa fa-cog icon',
    },
    {
      name: 'Logout',
      link: '/logout',
      icon: 'fa fa fa-sign-out icon',
    },
  ];

  return (
    <div className="sidebar">

      <div className="sidebar-body">
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Link to={link.link} key={index}>
            <div className="sidebar-body-item">
              <i className={link.icon} />
              <span>{link.name}</span>
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default SideBar;
