import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
