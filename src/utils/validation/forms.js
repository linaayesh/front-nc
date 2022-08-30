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
        return Promise.reject(
          new Error('The two passwords that you entered do not match!'),
        );
      },
    }),
  ],

  oldPassword: [
    {
      required: true,
      message: 'Please enter your old password!',
    },
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

  userId: [
    {
      required: true,
      message: 'Please select a user to match this content to',
    },
  ],

  filmingCosts: [
    {
      required: true,
      message: 'Please specify filming cost',
    },
  ],

  feePaid: [
    {
      required: true,
      message: 'Please specify fee paid',
    },
  ],

  advance: [
    {
      required: true,
      message: 'Please specify advance',
    },
  ],

  launchDate: [
    {
      required: true,
      message: 'Please specify launch date',
    },
  ],
  splitRatio: [
    {
      required: true,
      message: 'Please specify split ratio',
    },
  ],
  VIEWLLIFT_EMAIL: [
    {
      required: true,
      message: 'Please enter your Viewlift email!',
    },
  ],
  VIEWLLIFT_PASSWORD: [
    {
      required: true,
      message: 'Please enter your Viewlift password!',
    },
  ],
  VIEWLIFT_ENDPOINT: [
    {
      required: true,
      message: 'Please enter your Viewlift endpoint!',
    },
  ],
  VIEWLIFT_WATCHES_FETCH_LIMIT: [
    {
      required: true,
      message: 'Please enter your Viewlift watches fetch limit!',
    },
  ],
  SYSTEM_ACTIVATING_DATE: [
    {
      required: true,
      message: 'Please enter your system activating date!',
    },
  ],

};

export default validationMessages;
