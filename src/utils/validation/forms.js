const validationMessages = {
  name: [
    {
      required: true,
      message: 'Please enter your name!',
    },
  ],

  fullName: [
    {
      required: true,
      message: 'Please enter your legal name!',
    },
  ],

  // TODO: use regex for proper email validation, integrate yup maybe.
  email: [
    {
      type: 'email',
      required: true,
      message: 'Please enter a valid email!',
    },
  ],

  password: [
    {
      required: true,
      message: 'Please input your password!',
    },
  ],

  confirm: [
    {
      required: true,
      message: 'Please confirm your password!',
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    }),
  ],

  agreement: [
    {
      required: true,
      message: 'Please read and check the terms and condition!',
    },
  ],

  country: [
    {
      required: true,
      message: 'Please enter your Country!',
    },
  ],

  state: [
    {
      required: true,
      message: 'Please enter your State!',
    },
  ],

  city: [
    {
      required: true,
      message: 'Please enter your City!',
    },
  ],

  address: [
    {
      required: true,
      message: 'Please enter your Address!',
    },
  ],
};

export default validationMessages;
