import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';
import { Home, DashboardLayout } from 'layouts';
import {
  NotFound, LogInPage, Statistics,
} from 'pages';
import { ProtectLogin, ProtectedRoute } from 'middleware';
import { routes, adminRoutes } from 'shared/objects/Routes';
import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={(
            <ProtectLogin>
              <LogInPage />
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
