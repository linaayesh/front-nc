import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useAppSelector } from 'hooks';
import { itemsSuperAdmin, itemsCOMEDIAN, itemsAdmin } from 'shared/objects/sidebarItems';
import { ROLES } from 'shared/constants';
import { Logo } from 'shared/components';
import SidebarItem from './SideBarItem';
import './style.css';

function SideBar({ handleClick }) {
  const [items, setItems] = useState([]);
  const { user: { roleId } } = useAppSelector((state) => state.checkAuth);

  useEffect(
    () => {
      if (roleId === ROLES.MASTER_ADMIN) {
        setItems(itemsSuperAdmin);
      } else if (roleId === ROLES.ADMIN) {
        setItems(itemsAdmin);
      } else if (roleId === ROLES.COMEDIAN) {
        setItems(itemsCOMEDIAN);
      }
    },
    [roleId],
  );

  return (
    <div className="sidebar">
      <div className="logodiv">
        <Logo className="logo" />

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
