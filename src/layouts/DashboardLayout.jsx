import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, SideBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { message } from 'components/AntDesign';
import { logoutUser } from 'store/auth/thunk';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';

export default function DashboardLayout() {
  const sideBarInLayout = useRef(null);
  const navbarInLayout = useRef(null);
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state) => state.checkAuth);

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
    if (data) message.success(HTTP_EXCEPTIONS_MESSAGES[data]);
    if (error) message.error(HTTP_EXCEPTIONS_MESSAGES[error]);
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
