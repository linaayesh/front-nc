/* eslint-disable react/no-array-index-key */

import React from 'react';
import SidebarItem from './SideBarItem';
import './style.css';
import items from './sidebar.json';

function SideBar() {
  return (
    <div className="sidebar">
      { items.map((item) => <SidebarItem item={item} />) }
    </div>
  );
}

export default SideBar;
