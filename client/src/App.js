import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import { Home, DashboardLayout } from './Layouts';
import {
  UserDashboard, NotFound, RegisterPage, LogInPage, TermsPage, ForgetPasswordPage, RevenewPage,
} from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogInPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route
          path="*"
          element={(
            <NotFound
              link="/"
              pageClassName="not-found-dashboard-container"
              title="Back To Log In"
            />
          )}
        />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="home" element={<UserDashboard />} />
        <Route path="Revenue" element={<RevenewPage />} />
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
      <Route
        path="*"
        element={(
          <NotFound
            link="/"
            pageClassName="not-found-dashboard-container"
            title="Back To Log In"
          />
          )}
      />
    </Routes>
  );
}

export default App;
