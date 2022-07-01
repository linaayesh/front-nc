import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropsTypes from 'prop-types';

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open ' : 'sidebar-item title'}>
        <div className="sidebar-title">
          <span>
            { item.icon && <i className={item.icon} /> }
            {item.title}
          </span>
          <button type="button" onClick={() => setOpen(!open)}>
            <i className="bi-chevron-down toggle-btn" />
          </button>
        </div>
        <div className="sidebar-content">
          { item.childrens.map((child) => <SidebarItem key={child.key} item={child} />) }
        </div>
      </div>
    );
  }
  return (
    <NavLink to={item.path || '#'} className="sidebar-item plain">
      { item.icon && <i className={item.icon} /> }
      {item.title}
    </NavLink>

  );
}
SidebarItem.propTypes = {
  item: PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    icon: PropsTypes.string,
    path: PropsTypes.string,
    childrens: PropsTypes.arrayOf(PropsTypes.shape({
      title: PropsTypes.string.isRequired,
      icon: PropsTypes.string,
      path: PropsTypes.string,
    })),

  }).isRequired,
};
