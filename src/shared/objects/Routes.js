import {
  RegisterPage,
  LoginPage,
  TermsPage,
  ForgetPasswordPage,
  RevenuePage,
  VideoList,
  PayoutPage,
  Statistics,
  StaffList,
  DashboardSettings,
  ChangePassword,
  EditProfilePage,
  ResetPasswordPage,
  NewUsersPage,
  UserListPage,
  VerifyEmailPage,
  RejectedUsersPage,
  AddNewUserPage,
} from 'pages';

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
    component: LoginPage,
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
    component: RevenuePage,
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
    component: NewUsersPage,
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
  {
    title: 'addNewUser',
    path: '/dashboard/addNewUser',
    component: AddNewUserPage,
    key: 'addNewUser',
  },
];

export { routes, adminRoutes };
