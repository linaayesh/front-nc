/* eslint-disable react/no-array-index-key */

import React from 'react';
import SidebarItem from './SideBarItem';
import './style.css';
import items from './sidebar.json';

function SideBar() {
  return (
    <div className="sidebar">
      { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  );
}

export default SideBar;
