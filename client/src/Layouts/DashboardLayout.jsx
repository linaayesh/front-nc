import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components';
import Sidebar from '../Components/Dashboard';

export default function DashboardLayout() {
  return (
    <div className="one">
      <div className="two">

        <Sidebar />
      </div>
      <div className="three">
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>

  );
}
