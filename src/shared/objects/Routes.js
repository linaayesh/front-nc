import { ProtectLogin } from 'middleware';
import {
  RegisterPage,
  LoginPage,
  TermsPage,
  ForgetPasswordPage,
  RevenuePage,
  VideoListPage,
  PayoutPage,
  StaffListPage,
  DashboardSettingsPage,
  ChangePasswordPage,
  EditProfilePage,
  ResetPasswordPage,
  NewUsersPage,
  UserListPage,
  VerifyEmailPage,
  RejectedUsersPage,
  AddNewUserPage,
  ContentListPage,
  StatisticsPage,
  EditUserDataPage,
  UserStatisticsPage,
} from 'pages';

function ProtectedLoginPage() {
  return (
    <ProtectLogin>
      <LoginPage />
    </ProtectLogin>
  );
}

const routes = [
  {
    path: 'signup',
    Component: RegisterPage,
    title: 'Sign Up',
    key: 'signup',
    pro: true,

  },
  {
    path: 'login',
    Component: ProtectedLoginPage,
    title: 'Log In',
    key: 'login',
    pro: true,
  },
  {
    path: 'forgetPassword',
    Component: ForgetPasswordPage,
    title: 'Forget Password',
    key: 'forgetPassword',
  },
  {
    path: 'resetPassword',
    Component: ResetPasswordPage,
    title: 'Reset Password',
    key: 'resetPassword',
  },
  {
    path: 'terms',
    Component: TermsPage,
    title: 'Terms & Conditions',
    key: 'terms',
  },
  {
    path: 'verifyEmail',
    Component: VerifyEmailPage,
    title: 'Verify Email',
    key: 'verifyEmail',
  },
];

const adminRoutes = [
  {
    title: 'Statistics',
    path: '/dashboard/yourstatistics',
    Component: StatisticsPage,
    key: 'Statistics',
  },
  {
    title: 'UserStatistics',
    path: '/dashboard/userlist/statistics/:userId',
    Component: UserStatisticsPage,
    key: 'UserStatistics',
  },
  {
    title: 'Revenue',
    path: '/dashboard/Revenue',
    Component: RevenuePage,
    key: 'Revenue',
  },
  {
    title: 'editProfile',
    path: '/dashboard/editProfile',
    Component: EditProfilePage,
    key: 'editProfile',
  },
  {
    title: 'changePassword',
    path: '/dashboard/changePassword',
    Component: ChangePasswordPage,
    key: 'changePassword',
  },
  {
    title: 'Settings',
    path: '/dashboard/Settings',
    Component: DashboardSettingsPage,
    key: 'Settings',
  },
  {
    title: 'staff',
    path: '/dashboard/staff',
    Component: StaffListPage,
    key: 'staff',
  },
  {
    title: 'payout',
    path: '/dashboard/payout',
    Component: PayoutPage,
    key: 'payout',
  },
  {
    title: 'yourVideos',
    path: '/dashboard/yourVideos',
    Component: VideoListPage,
    key: 'yourVideos',
  },
  {
    title: 'newUsers',
    path: '/dashboard/newUsers',
    Component: NewUsersPage,
    key: 'newUsers',
  },
  {
    title: 'userList',
    path: '/dashboard/userList',
    Component: UserListPage,
    key: 'userList',
  },
  {
    title: 'rejectedUsers',
    path: '/dashboard/rejectedUsers',
    Component: RejectedUsersPage,
    key: 'rejectedUsers',
  },
  {
    title: 'addNewUser',
    path: '/dashboard/addNewUser',
    Component: AddNewUserPage,
    key: 'addNewUser',
  },
  {
    title: 'contentList',
    path: '/dashboard/contentList',
    Component: ContentListPage,
    key: 'contentList',
  },
  {
    title: 'matchContent',
    path: '/dashboard/contentList/matchContent/:contentId',
    Component: ContentListPage,
    key: 'matchContent',
  },
  {
    title: 'editUser',
    path: '/dashboard/userList/editUser/:userId',
    Component: EditUserDataPage,
    key: 'editUser',
  },
];

export { routes, adminRoutes };
