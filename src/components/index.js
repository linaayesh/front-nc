import * as Ant from './AntDesign';

const AntComponents = Ant;
export { AntComponents };
export { default as Navbar } from './Navbar';
// export { default as StatisticsGrid } from './StatisticsGrid';
export {
  NewUsers,
  SideBar,
  UsersList,
  RejectedUsers,
  AddNewUser,
  EditProfile,
  // GeneralView,
  // DetailedView,
  ContentList,
  MatchContent,
  ChangePassword,
} from './Dashboard';
export { default as LoginForm } from './Authentication/LoginForm';
export { default as ForgetPasswordForm } from './Authentication/ForgetPasswordForm';
export { default as ResetPasswordForm } from './Authentication/ResetPasswordForm';
export { default as RegisterForm } from './Authentication/RegisterForm';
export { default as VerifyEmail } from './Authentication/VerifyEmail';
