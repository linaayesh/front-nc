import 'antd/dist/antd.min.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { DashboardLayout } from 'Layout';
import {
  NotFound, LoginPage,
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
        {routes.map(({ key, path, Component }) => (
          <Route
            key={key}
            path={path}
            element={<Component />}
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
        {/* <Route index element={<StatisticsPage />} /> */}
        {adminRoutes.map(({ key, path, Component }) => (
          <Route
            key={key}
            path={path}
            element={<Component />}
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
