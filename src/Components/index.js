import * as Ant from './AntDesign';

export { default as Navbar } from './Navbar';
export {
  GeneralView,
  DetailedView,
  ChangePassword,
  NewUsers, SideBar, UsersList, RejectedUsers, PaymentSettings, AddNewUser, EditProfile,
} from './Dashboard';
export { default as LogInForm } from './Authentication/LogInForm';
export { default as ForgetPasswordForm } from './Authentication/ForgetPasswordForm';
export { default as ResetPasswordForm } from './Authentication/ResetPasswordForm';
export { default as RegisterForm } from './Authentication/RegisterForm';
export { default as VerifyEmail } from './Authentication/VerifyEmail';
export { default as StatisticsGrid } from './StatisticsGrid';

const AntComponents = Ant;
export { AntComponents };
