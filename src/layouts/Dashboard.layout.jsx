import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, SideBar } from 'components';

export default function DashboardLayout() {
  const sideBarInLayout = useRef(null);
  const navbarInLayout = useRef(null);

  const handleClick = () => {
    const sideBar = sideBarInLayout.current.style;
    const navbar = navbarInLayout.current.style;
    if (sideBar.display === 'none') {
      sideBar.display = 'block';
      sideBar.width = '100%';
      navbar.display = 'none';
    } else {
      navbar.display = 'block';
      sideBar.display = 'none';
    }
  };

  return (
    <div className="both">
      <div ref={sideBarInLayout} className="sidebarinlayout">
        <SideBar handleClick={handleClick} />
      </div>
      <div ref={navbarInLayout} className="navbarinlayout">
        <Navbar handleClick={handleClick} />
        <div className="Outletstyle">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
