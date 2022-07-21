import {
  UserDashboard,
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
} from '../Pages';

const routes = [
  {
    path: 'signup',
    component: RegisterPage,
    title: 'Sign Up',
    key: 'signup',
  },
  {
    path: 'login',
    component: LogInPage,
    title: 'Log In',
    key: 'login',
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordPage,
    title: 'Forget Password',
    key: 'forgetPassword',
  },
  {
    path: 'resetpassword',
    component: ResetPasswordPage,
    title: 'Reset Password',
    key: 'resetpassword',
  },
  {
    path: 'terms',
    component: TermsPage,
    title: 'Terms & Conditions',
    key: 'terms',
  },
];
const adminRoutes = [
  {
    title: 'Home',
    path: '/dashboard/home',
    component: UserDashboard,
    key: 'home',
  },
  {
    title: 'Revenue',
    path: '/dashboard/Revenue',
    component: RevenewPage,
    key: 'Revenue',
  },
  {
    title: 'editprofile',
    path: '/dashboard/editprofile',
    component: EditProfile,
    key: 'editprofile',
  },
  {
    title: 'changepassword',
    path: '/dashboard/changepassword',
    component: ChangePassword,
    key: 'changepassword',
  },
  {
    title: 'Settings',
    path: '/dashboard/Settings',
    component: DashboardSettings,
    key: 'Settings',
  },
  {
    title: 'paymentsettings',
    path: '/dashboard/paymentsettings',
    component: PaymentSettings,
    key: 'paymentsettings',
  },
  {
    title: 'staff',
    path: '/dashboard/staff',
    component: StaffList,
    key: 'staff',
  },
  {
    title: 'yourstatistics',
    path: '/dashboard/yourstatistics',
    component: Statistics,
    key: 'yourstatistics',
  },
  {
    title: 'payout',
    path: '/dashboard/payout',
    component: PayoutPage,
    key: 'payout',
  },
  {
    title: 'yourvideos',
    path: '/dashboard/yourvideos',
    component: VideoList,
    key: 'yourvideos',
  },
  {
    title: 'newusers',
    path: '/dashboard/newusers',
    component: NewUsers,
    key: 'newusers',
  },
  {
    title: 'userlist',
    path: '/dashboard/userlist',
    component: UserListPage,
    key: 'userlist',
  },
];

export { routes, adminRoutes };
