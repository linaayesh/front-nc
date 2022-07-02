import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components';
import Sidebar from '../Components/Dashboard';

export default function DashboardLayout() {
  return (
    <div className="both">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="middle">

          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>

  );
}
