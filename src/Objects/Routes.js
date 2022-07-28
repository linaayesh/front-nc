import {
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
  EditProfilePage,
  ResetPasswordPage,
  NewUsers,
  UserListPage,
  VerifyEmailPage,
  RejectedUsersPage,
} from '../Pages';

const routes = [
  {
    path: 'signup',
    component: RegisterPage,
    title: 'Sign Up',
    key: 'signup',
    pro: true,

  },
  {
    path: 'login',
    component: LogInPage,
    title: 'Log In',
    key: 'login',
    pro: true,
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordPage,
    title: 'Forget Password',
    key: 'forgetPassword',
  },
  {
    path: 'resetPassword',
    component: ResetPasswordPage,
    title: 'Reset Password',
    key: 'resetPassword',
  },
  {
    path: 'terms',
    component: TermsPage,
    title: 'Terms & Conditions',
    key: 'terms',
  },
  {
    path: 'verifyEmail',
    component: VerifyEmailPage,
    title: 'Verify Email',
    key: 'verifyEmail',
  },
];
const adminRoutes = [
  {
    title: 'Revenue',
    path: '/dashboard/Revenue',
    component: RevenewPage,
    key: 'Revenue',
  },
  {
    title: 'editProfile',
    path: '/dashboard/editProfile',
    component: EditProfilePage,
    key: 'editProfile',
  },
  {
    title: 'changePassword',
    path: '/dashboard/changePassword',
    component: ChangePassword,
    key: 'changePassword',
  },
  {
    title: 'Settings',
    path: '/dashboard/Settings',
    component: DashboardSettings,
    key: 'Settings',
  },
  {
    title: 'paymentSettings',
    path: '/dashboard/paymentSettings',
    component: PaymentSettings,
    key: 'paymentSettings',
  },
  {
    title: 'staff',
    path: '/dashboard/staff',
    component: StaffList,
    key: 'staff',
  },
  {
    title: 'yourStatistics',
    path: '/dashboard/yourStatistics',
    component: Statistics,
    key: 'yourStatistics',
  },
  {
    title: 'payout',
    path: '/dashboard/payout',
    component: PayoutPage,
    key: 'payout',
  },
  {
    title: 'yourVideos',
    path: '/dashboard/yourVideos',
    component: VideoList,
    key: 'yourVideos',
  },
  {
    title: 'newUsers',
    path: '/dashboard/newUsers',
    component: NewUsers,
    key: 'newUsers',
  },
  {
    title: 'userList',
    path: '/dashboard/userList',
    component: UserListPage,
    key: 'userList',
  },
  {
    title: 'rejectedUsers',
    path: '/dashboard/rejectedUsers',
    component: RejectedUsersPage,
    key: 'rejectedUsers',
  },
];

export { routes, adminRoutes };
