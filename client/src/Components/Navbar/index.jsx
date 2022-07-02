import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  return (
    <>
      {/* Create navbar */}
      <nav className="navbar">
        <div className="leftside">
          <img src="https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png" alt="logo" className="logo" />

        </div>
        <div className="rightside">
          <i className="fa fa-bell icon" />

          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="logo" className="userimg" />

        </div>
      </nav>

    </>
  );
}

export default Navbar;
