import 'antd/dist/antd.min.css';
import { Routes, Route, Outlet } from 'react-router-dom';

import { DashboardLayout } from 'layouts';
import {
  NotFound, LoginPage, Statistics,
} from 'pages';
import { ProtectLogin, ProtectedRoute, Logout } from 'middleware';
import { routes, adminRoutes } from 'shared/objects/Routes';
import { useAuth } from 'hooks';
import './app.css';

function App() {
  useAuth();

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/logout" element={<Logout />} />
        <Route
          index
          element={(
            <ProtectLogin>
              <LoginPage />
            </ProtectLogin>
          )}
        />
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
        <Route index element={<Statistics />} />
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
