import { validationMessages } from 'utils';

// TODO: has to be refactored
const fieldsProps = {
  nameProps: {
    label: 'Name',
    name: 'name',
    item: 'input',
    rules: validationMessages.name,
    placeholder: 'Name',
  },

  emailProps: {
    label: 'Email',
    name: 'email',
    type: 'email',
    item: 'input',
    input: 'Item',
    rules: validationMessages.email,
    placeholder: 'Email',
  },

  passwordProps: {
    label: 'Password',
    name: 'password',
    type: 'password',
    className: 'input-password',
    hasfeedback: 'true',
    item: 'password',
    input: 'password',
    rules: validationMessages.password,
    placeholder: 'Password',
  },

  confirmPasswordProps: {
    label: 'Confirm Password',
    name: 'confirm',
    className: 'input-password',
    hasfeedback: 'true',
    type: 'password',
    dependencies: 'password',
    item: 'password',
    input: 'password',
    rules: validationMessages.confirm,
    placeholder: 'Confirm Password',
  },

  termsProps: {
    label: 'Terms and Conditions',
    name: 'agreement',
    valuepropname: 'checked',
    item: 'input',
    link: '/terms',
    rules: validationMessages.agreement,
    placeholder: 'Terms and Conditions',
  },

  rememberMeProps: {
    label: 'Remember me',
    name: 'remember',
    valuepropname: 'checked',
    item: 'checkbox',
    link: '/forgetPassword',
  },

};

const {
  nameProps, emailProps, passwordProps, confirmPasswordProps, termsProps, rememberMeProps,
} = fieldsProps;

export default {
  forgetPasswordForm: {
    formTitle: 'Please enter your email to reset your password.',
    buttonLabel: 'Send a reset email',
    fields: [emailProps],
  },

  resetPasswordForm: {
    formTitle: 'Please enter your new password',
    buttonLabel: 'Change Password',
    fields: [passwordProps, confirmPasswordProps],
  },

  registerForm: {
    formTitle: 'Please compleat to create your account',
    buttonLabel: 'Sign Up',
    fields: [
      nameProps,
      emailProps,
      passwordProps,
      confirmPasswordProps,
      termsProps,
    ],
  },

  loginForm: {
    formTitle: 'Please log in to your account',
    buttonLabel: 'Log In',
    fields: [emailProps, passwordProps, rememberMeProps],
  },
};
