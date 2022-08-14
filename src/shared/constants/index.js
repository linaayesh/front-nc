export const DEFAULT_USER_STATE = {
  id: null,
  username: null,
  email: null,
  image: null,
  roleId: null,
  isLoggedIn: false,
};

export const ROLES = {
  SYSTEM: 1,
  MASTER_ADMIN: 2,
  ADMIN: 3,
  COMEDIAN: 4,
};

export const HTTP_EXCEPTIONS_MESSAGES = {
  'CHECK EMAIL': 'Successfully registered! Please check your email to verify your account.', // update the backend to specify the email type -reset password, etc.
  'APPROVED ACCOUNT': 'Something went wrong. Please try again later.',
  'WAITING APPROVAL': 'This account is waiting for approval, hang tight!',
  UNAUTHORIZED: 'Stop right there! you are not authorized to do this action.',
  'INVALID CREDENTIALS': 'Invalid credentials.',
  'Internal Server Error': 'Something went wrong. Please try again later.',
  'ALREADY REJECTED': 'This account has already been rejected.',
  'SUCCESS EDIT': 'Successfully edited your profile.',
  'SUCCESS LOGIN': 'Successfully logged in.',
  'SUCCESS LOGOUT': 'Successfully logged out.',
  'NOT EXIST USER': 'This user does not exist.',
};

export const IMAGE_VALIDATION_MESSAGES = {
  IMAGE_TYPE: 'Only JPG/PNG images are accepted!',
  IMAGE_SIZE: 'Image must be smaller than 2MB!',
};

export const LOGO = 'https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png';

export const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';

export const CORRECT_CHECKER = 'https://www.vippng.com/png/full/41-413660_julia-bayer-on-twitter-facebook-blue-tick-png.png';
