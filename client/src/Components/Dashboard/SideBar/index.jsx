import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SideBar() {
  const [links, setLinksState] = useState([]);
  useEffect(() => {
    setLinksState([
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'fa fa-tachometer-alt',
        active: true,
      },
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'fa fa-dashboard icon',
        active: false,
      },
      {
        name: 'Finance',
        link: '/dashboard/finance',
        icon: 'fa fa-user icon',
        active: false,
      },
      {
        name: 'Account Settings',
        link: '/dashboard/account-settings',
        icon: 'fa fa-cog icon',
        active: false,
      },
      {
        name: 'Dashobard Settings',
        link: '/dashboard/Dashobard-settings',
        icon: 'fa fa-cog icon',
        active: false,
      },
      {
        name: 'Logout',
        link: '/logout',
        icon: 'fa fa fa-sign-out icon',
        active: false,
      },
    ]);
  }, []);
  const onclickcreatesubchild = () => {
    setLinksState([
      ...links,
      {
        name: 'new',
        link: '/new',
        icon: 'fa fa-tachometer-alt',
        active: true,
      },
    ]);

    console.log(links.map((link) => link.name));
  };
  return (
    <div className="sidebar">

      <div className="sidebar-body">
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Link to={link.link} key={index} onClick={onclickcreatesubchild}>
            <div className="sidebar-body-item">
              <div>
                <i className={link.icon} />
                <span>{link.name}</span>
              </div>
              <i className="fa fa-angle-down " />

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default SideBar;
