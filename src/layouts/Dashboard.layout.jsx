import { useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Navbar, SideBar } from 'components';
import { useAppDispatch } from 'hooks';
import { logoutUser } from 'store/auth/thunk';

export default function DashboardLayout() {
  const sideBarInLayout = useRef(null);
  const navbarInLayout = useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/');
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
