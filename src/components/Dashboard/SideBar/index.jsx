import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { useAuth } from 'hooks';
import { itemsSuperAdmin, itemsAdmin } from 'shared/objects/sidebarItems';
import { LOGO, ROLES } from 'shared/constants';
import SidebarItem from './SideBarItem';
import './style.css';

function SideBar({ handleClick }) {
  const [items, setItems] = useState([]);
  const { roleId } = useAuth();

  useEffect(
    () => {
      if (roleId === ROLES.ADMIN) {
        setItems(itemsSuperAdmin);
      } else if (roleId === ROLES.COMEDIAN) {
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
