export const LOGO = 'https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png';

export const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';

export const DEFAULT_USER_STATE = {
  id: null,
  username: null,
  email: null,
  image: null,
  roleId: null,
  isLoggedIn: false,
  isLoading: false,
};

export const HTTP_EXCEPTIONS_MESSAGES = {
  'CHECK EMAIL': 'Successfully registered! Please check your email to verify your account.', // update the backend to specify the email type -reset password, etc.
  'APPROVED ACCOUNT': 'Something went wrong. Please try again later.',
  'WAITING APPROVAL': 'This account is waiting for approval, hang tight!',
  UNAUTHORIZED: 'You are not authorized to access this page.',
  'INVALID CREDENTIALS': 'Invalid credentials.',
  'Internal Server Error': 'Something went wrong. Please try again later.',
  'ALREADY REJECTED': 'This account has already been rejected.',
  'SUCCESS EDIT': 'Successfully edited your profile.',
  'NOT EXIST USER': 'This user does not exist.',
};
