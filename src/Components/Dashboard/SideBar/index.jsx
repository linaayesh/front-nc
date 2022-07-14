/* eslint-disable react/no-array-index-key */

import React, { useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from 'antd';
import SidebarItem from './SideBarItem';
import './style.css';
import { itemsSuperAdmin, itemsAdmin } from './sidebarItems';

function SideBar({ handleClick }) {
  const [items, setItems] = React.useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        const result = await axios('/api/v1/auth/userAuth');
        if (result.data.data.roleId === 1) {
          setItems(itemsSuperAdmin);
        } else if (result.data.data.roleId === 2) {
          setItems(itemsAdmin);
        }
      };

      fetchData();
    },
    [],
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
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
SideBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
