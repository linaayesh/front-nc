import React from 'react';
import authImage from '../../Assets/Images/authImage.png';
// import logo from '../../Assets/Images/NextUpLogo.png';
import './style.css';

export default function HomeLayout() {
  return (
    <>
      <img src={authImage} alt="List of posters" className="home-layout-image" />
      {/* <img src={logo} alt="logo of NextUpComedy" className="home-layout-logo" /> */}
    </>
  );
}
