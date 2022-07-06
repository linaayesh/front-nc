import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components';
import Sidebar from '../Components/Dashboard';

export default function DashboardLayout() {
  return (
    <div className="asdoasd">
      <div className="both">
        <div className="sidebarinlayout">

          <Sidebar />
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
