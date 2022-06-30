import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeLayout } from '../Components';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <HomeLayout />
      <Outlet />
    </div>
  );
}
