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
  recoveredCosts: [
    {
      required: true,
      message: 'Please specify recovered costs',
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (+value > +getFieldValue('filmingCosts') + +getFieldValue('feePaid') + +getFieldValue('advance')) {
          return Promise.reject(new Error('Recovered costs cannot be greater than total costs'));
        }
        return Promise.resolve();
      },
    }),
  ],

  nextupToOwedSplitPercentage: [
    {
      required: true,
      message: 'Please specify Split Percentage',
    },
    {
      validator(_, value) {
        if (value > 1 || value < 0.01) {
          return Promise.reject(new Error('Split Percentage cannot be greater than 1 or less than 0.01'));
        }
        return Promise.resolve();
      },

    },

  ],
  systemActivationDate: [
    {
      required: true,
      message: 'Please enter System Activation Date',
      type: 'date',
    },
  ],
  fetchMaxCount: [
    {
      required: true,
      message: 'Please enter Fetch Max Count',
    },
    {
      validator(_, value) {
        if (value > 10 || value < 1) {
          return Promise.reject(new Error('Fetch Max Count cannot be greater than 10 or less than 1'));
        }
        return Promise.resolve();
      },
    },
  ],
  expiredAfterInYears: [
    {
      required: true,
      message: 'Please enter Expired After In Years',
    },
  ],
  viewliftEmail: [
    {
      required: true,
      message: 'Please enter ViewLift Email',
      type: 'email',
    },
  ],
  viewliftEndpoint: [
    {
      required: true,
      message: 'Please enter ViewLift Endpoint',
      type: 'url',
    },
  ],
  viewliftWatchesFetchLimit: [
    {
      required: true,
      message: 'Please enter ViewLift Watches Fetch Limit',
      type: 'number',
      validator(_, value) {
        if (value > 1000 || value < 1) {
          return Promise.reject(new Error('ViewLift Watches Fetch Limit cannot be greater than 1000 or less than 1'));
        }
        return Promise.resolve();
      },
    },
  ],
  viewliftPassword: [
    {
      required: true,
      message: 'Please enter ViewLift Password',
    },
  ],
};

export default validationMessages;
