import React, { useMemo } from 'react';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Home, DashboardLayout } from './Layouts';
import {
  UserDashboard,
  NotFound,
  RegisterPage,
  LogInPage,
  TermsPage,
  ForgetPasswordPage,
  RevenewPage,
  VideoList,
  PayoutPage,
  Statistics,
  StaffList,
  PaymentSettings,
  DashboardSettings,
  ChangePassword,
  EditProfile,
  ResetPasswordPage,
  NewUsers,
  UserListPage,
} from './Pages';
import ProtectedRoute from './middleware';
import { setAuth } from './Store/Slices/checkAuthSlice';

function App() {
  const dispatch = useDispatch();

  const checkToken = () => {
    const token = Cookies.get('accessToken');
    if (!token) return;
    const {
      id, username, email, roleId,
    } = jwtDecode(token);
    dispatch(
      setAuth({
        id,
        username,
        email,
        roleId,
        isLoggedIn: true,
      }),
    );
  };

  useMemo(checkToken, [checkToken, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogInPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
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
      <Route path="dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<UserDashboard />} />
        <Route path="home" element={<UserDashboard />} />
        <Route path="Revenue" element={<RevenewPage />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="Settings" element={<DashboardSettings />} />
        <Route path="paymentsettings" element={<PaymentSettings />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="yourstatistics" element={<Statistics />} />
        <Route path="payout" element={<PayoutPage />} />
        <Route path="yourvideos" element={<VideoList />} />
        <Route path="newusers" element={<NewUsers />} />
        <Route path="userlist" element={<UserListPage />} />

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
