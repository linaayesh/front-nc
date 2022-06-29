import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import { Home, Dashboard } from './Layouts';
import { HomePage, UserDashboard, NotFound } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<UserDashboard />} />
        <Route
          path="*"
          element={(
            <NotFound
              link="/dashboard"
              pageClassName="not-found-dashboard-container"
              title="Back To Dashboard"
            />
          )}
        />
      </Route>
    </Routes>
  );
}

export default App;
