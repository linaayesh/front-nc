import * as Ant from './AntDesign';

const AntComponents = Ant;
export { AntComponents };
export { default as Navbar } from './Navbar';
export {
  NewUsers,
  SideBar,
  UsersList,
  RejectedUsers,
  AddNewUser,
  EditProfile,
  ContentList,
  MatchContent,
  ChangePassword,
  DashboardSettings,
  GeneralView,
  DetailedView,
  EditUserData,
} from './Dashboard';
export { default as LoginForm } from './Authentication/LoginForm';
export { default as ForgetPasswordForm } from './Authentication/ForgetPasswordForm';
export { default as ResetPasswordForm } from './Authentication/ResetPasswordForm';
export { default as RegisterForm } from './Authentication/RegisterForm';
export { default as VerifyEmail } from './Authentication/VerifyEmail';
export { default as StatisticsGrid } from './StatisticsGrid';
