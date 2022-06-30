import React from 'react';
import SideBar from './SideBar';
import './style.css';

function Dashboard() {
  return (

    <div className="both">
      <div className="left">
        <SideBar />
      </div>
      <div className="right" />

    </div>

  );
}

export default Dashboard;
