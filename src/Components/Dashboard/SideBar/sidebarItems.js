const itemsSuperAdmin = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    path: '/dashboard/home',
  },
  {
    title: 'Dashboard',
    icon: 'fa fa-dashboard',
    childrens: [
      {
        title: 'Video List ',
        path: '/dashboard/yourvideos',
        key: 'yourvideos',
      },
      {
        title: 'Your Statistics ',
        path: '/dashboard/yourstatistics',
        key: 'yourstatistics',
      },
      {
        title: 'Staff List ',
        path: '/dashboard/staff',
        key: 'staff',
      },
    ],
  },
  {
    title: 'Finance',
    icon: 'fa fa-money',
    childrens: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        key: 'revenue',
      },

      {
        title: 'Payout',
        path: '/dashboard/payout',
        key: 'payout',
      },
    ],
  },
  {
    title: 'User Management',
    icon: 'fa fa-users',
    childrens: [
      {
        title: 'User List',
        path: '/dashboard/userlist',
        key: 'userlist',
      },

      {
        title: 'List of New Users',
        path: '/dashboard/newusers',
        key: 'newusers',
      },
    ],
  },
  {
    title: 'Account Settings',
    icon: 'fa fa-cog',

    childrens: [
      {
        title: 'Edit Profile',
        path: '/dashboard/editprofile',
        key: 'profile',
      },
      {
        title: 'Change Password',
        path: '/dashboard/changepassword',
        key: 'changepassword',
      },
      {
        title: 'Payment Settings',
        path: '/dashboard/paymentsettings',
        key: 'paymentsettings',
      },
    ],
    path: '/dashboard/AccountSettings',
  },
  {
    title: 'Dashboard Settings',
    icon: 'fa fa-cog',
    path: '/dashboard/Settings',
  },
  {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    path: '/',
  },

];
const itemsAdmin = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    path: '/dashboard/home',
  },
  {
    title: 'Dashboard',
    icon: 'fa fa-dashboard',
    childrens: [
      {
        title: 'Video List ',
        path: '/dashboard/yourvideos',
        key: 'yourvideos',
      },
      {
        title: 'Your Statistics ',
        path: '/dashboard/yourstatistics',
        key: 'yourstatistics',
      },
      {
        title: 'Staff List ',
        path: '/dashboard/staff',
        key: 'staff',
      },
    ],
  },

  {
    title: 'Account Settings',
    icon: 'fa fa-cog',

    childrens: [
      {
        title: 'Edit Profile',
        path: '/dashboard/editprofile',
        key: 'profile',
      },
      {
        title: 'Change Password',
        path: '/dashboard/changepassword',
        key: 'changepassword',
      },
      {
        title: 'Payment Settings',
        path: '/dashboard/paymentsettings',
        key: 'paymentsettings',
      },
    ],
    path: '/dashboard/AccountSettings',
  },
  {
    title: 'Dashboard Settings',
    icon: 'fa fa-cog',
    path: '/dashboard/Settings',
  },
  {
    title: 'Logout',
    icon: 'fa fa-sign-out',
    path: '/',
  },

];
export { itemsSuperAdmin, itemsAdmin };
