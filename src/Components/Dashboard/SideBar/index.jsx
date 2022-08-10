import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { itemsSuperAdmin, itemsAdmin } from 'Objects/sidebarItems';
import { LOGO } from 'Constants';
import useAuth from 'Hooks/useAuth';
import SidebarItem from './SideBarItem';
import './style.css';

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
          src={LOGO}
          alt="logo"
          className="logo"
          loading="lazy"
          decoding="async"
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
