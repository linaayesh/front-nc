import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SidebarItem from './SideBarItem';
import './style.css';
import { itemsSuperAdmin, itemsAdmin } from './sidebarItems';
import useAuth from '../../../Hooks/useAuth';

function SideBar({ handleClick }) {
  const [items, setItems] = useState([]);
  const { roleId } = useAuth();
  useEffect(
    () => {
      // roleId === 1 = SuperAdmin | roleId === 2 = Admin
      if (roleId === 1) {
        setItems(itemsSuperAdmin);
      } else if (roleId === 2) {
        setItems(itemsAdmin);
      }
    },
    [roleId],
  );

  return (
    <div className="sidebar">
      <div className="logodiv">
        <img
          src="https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png"
          alt="logo"
          className="logo"
        />
        <div className="buttonround">
          <Button
            icon={<CloseOutlined />}
            shape="round"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="sideitem">
        {items.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
SideBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
