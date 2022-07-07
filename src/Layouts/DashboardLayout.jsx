import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, SideBar } from '../Components';

export default function DashboardLayout() {
  return (
    <div className="asdoasd">
      <div className="both">
        <div className="sidebarinlayout">

          <SideBar />
        </div>
        <div className="navbarinlayout">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
}
