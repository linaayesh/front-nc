/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

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
          <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)} />
        </div>
        <div className="sidebar-content">
          { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
        </div>
      </div>
    );
  }
  return (
    <a href={item.path || '#'} className="sidebar-item plain">
      { item.icon && <i className={item.icon} /> }
      {item.title}
    </a>
  );
}
