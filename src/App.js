import React from 'react';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { Home, DashboardLayout } from './Layouts';
import { UserDashboard, NotFound, LogInPage } from './Pages';
import ProtectedRoute from './Middleware';
import { routes, adminRoutes } from './Objects/Routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogInPage />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
      <Route
        path="dashboard"
        element={(
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        )}
      >
        <Route index element={<UserDashboard />} />
        {adminRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}

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
