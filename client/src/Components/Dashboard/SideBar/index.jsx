/* eslint-disable react/no-array-index-key */

import React from 'react';
import SidebarItem from './SideBarItem';
import './style.css';
import items from './sidebar.json';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logodiv">
        <img src="https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png" alt="logo" className="logo" />

      </div>
      <div>
        { items.map((item, index) => <SidebarItem key={index} item={item} />) }

      </div>
    </div>
  );
}

export default SideBar;
