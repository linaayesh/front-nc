import earnings from 'assets/images/earnings.png';
import Balance from 'assets/images/Balance.png';
import Payouts from 'assets/images/Payouts.png';
import Content from 'assets/images/content.png';

export const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';

export const DEFAULT_USER_STATE = {
  id: null,
  name: null,
  email: null,
  image: DEFAULT_AVATAR,
  roleId: null,
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
  UNAUTHORIZED: 'You dont have the authority to do this action.',
  'INVALID CREDENTIALS': 'Invalid credentials.',
  'Incorrect email or password': 'We could not recognize your email or password.',
  'Internal Server Error': 'It is us! something went wrong. Please try again later.',
  'ALREADY REJECTED': 'This account has already been rejected.', // TODO: find a better message to humiliate them professionally
  'ALREADY APPROVED': 'This account is already registered!',
  'SUCCESS PROCESS': 'Successfully created!',
  'SUCCESS EDIT': 'Congratulation, you edited your profile successfully!',
  'SUCCESS LOGIN': 'Successfully logged in.',
  'SUCCESS LOGOUT': 'Successfully logged out.',
  'NOT EXIST USER': 'This user does not exist.',
  'PENDING ACCOUNT': 'This account is still pending for approval.',
  'RESET PASSWORD': 'This password has been reset.',
  'INCORRECT PASSWORD': 'Your old password is incorrect.',
  'PASSWORD CHANGED': 'Your password has been changed.',
  'Content matched successfully': 'Content matched successfully.',
};

export const IMAGE_VALIDATION_MESSAGES = {
  IMAGE_TYPE: 'Only JPG/PNG images are accepted!',
  IMAGE_SIZE: 'Image must be smaller than 2MB!',
};
export const ACCOUNT_REGISTRATION_REASONS = {
  Option1: 'The name is not appropriate',
  Option2: 'The email is fake',
  Option3: 'There is a user with the same name',
  Option4: 'Anonymous user who has no contents',
  Option5: 'User`s email is unreachable',

};
export const NEXTUP_COMEDEY_LINK = 'https://watch.nextupcomedy.com';
export const LOGO = 'https://appcmsprod.viewlift.com/60333573-228c-4678-9ce8-05c713847241/images/1240pxNextUpLogoTurquoise.png';

export const CORRECT_CHECKER = 'https://www.vippng.com/png/full/41-413660_julia-bayer-on-twitter-facebook-blue-tick-png.png';

export const INVALID_USER_MESSAGE = 'This user does not exist.';

export const icons = {
  earnings,
  Balance,
  Payouts,
  Content,
};
