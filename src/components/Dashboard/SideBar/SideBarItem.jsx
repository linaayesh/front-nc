import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropsTypes from 'prop-types';

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className={open ? 'sidebar-item open ' : 'sidebar-item title'}>
        <div
          className="sidebar-title"
          aria-hidden="true"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span>
            {item.icon && <i className={item.icon} />}
            {item.title}
          </span>
          <button type="button">
            <i className="bi-chevron-down toggle-btn" />
          </button>
        </div>
        <div className="sidebar-content">
          {item.children.map((child) => (
            <SidebarItem key={child.key} item={child} />
          ))}
        </div>
      </div>
    );
  }

  //
  return (
    <NavLink
      to={item.path || '#'}
      className={({ isActive }) => `sidebar-item plain ${isActive ? 'plainselected' : ''}`}
    >
      {item.icon && <i className={item.icon} />}
      {item.title}
    </NavLink>
  );
}
SidebarItem.propTypes = {
  item: PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    icon: PropsTypes.string,
    path: PropsTypes.string,
    children: PropsTypes.arrayOf(
      PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        icon: PropsTypes.string,
        path: PropsTypes.string,
      }),
    ),
  }).isRequired,
};
