import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, SideBar } from '../Components';
import axiosCall from '../Services/ApiCall';

export default function DashboardLayout() {
  const sideBarInLayout = useRef(null);
  const navbarInLayout = useRef(null);
  const handleClick = () => {
    const navbar = sideBarInLayout.current.style.display;
    if (navbar === 'none') {
      sideBarInLayout.current.style.display = 'block';
      sideBarInLayout.current.style.width = '100%';
      navbarInLayout.current.style.display = 'none';
    } else {
      navbarInLayout.current.style.display = 'block';

      sideBarInLayout.current.style.display = 'none';
    }
  };
  const handleLogout = () => {
    axiosCall('/api/v1/auth/logout', 'get', null);
    window.location.href = '/';
  };

  return (
    <div className="both">
      <div ref={sideBarInLayout} className="sidebarinlayout">
        <SideBar handleClick={handleClick} />
      </div>
      <div ref={navbarInLayout} className="navbarinlayout">
        <Navbar handleClick={handleClick} handleLogout={handleLogout} />
        <div className="Outletstyle">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
