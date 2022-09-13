import { icons } from 'shared/constants';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Registration Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (item) => {
      const [date, time] = [
        item.split('T')[0],
        item.split('T')[1].split('.')[0].slice(0, -3),
      ];
      return `${date} / ${time}`;
    },
  },
  {
    title: 'Role',
    dataIndex: 'roleName',
    key: 'roleName',
  },
];

const statisticsColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Watched Time',
    dataIndex: 'watchedSeconds',
    key: 'watchedSeconds',
  },
  {
    title: 'Revenue',
    dataIndex: 'owedRevenue',
    key: 'owedRevenue',
  },
  {
    title: 'Ticket',
    dataIndex: 'tvodTicketsCount',
    key: 'tvodTicketsCount',
  },
];

const latestReportColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Watched Time From',
    dataIndex: 'watchedTimeFrom',
    key: 'watchedTimeFrom',
  },
  {
    title: 'Watched Time To',
    dataIndex: 'watchedTimeTo',
    key: 'watchedTimeTo',
  },
  {
    title: 'Total Revenue',
    dataIndex: 'owedRevenue',
    key: 'owedRevenue',
  },
];
const {
  Content, Earnings, Payouts, PendingUsers, AllUsers,
} = icons;

const AdminGeneralColumns = (
  count,
  earning,
  Payout,
  allUsers,
  pendingUsers,
) => {
  const AdminGeneralViewColumns = [
    {
      icon: Content,
      title: 'Content',
      value: count,
    },
    {
      icon: Earnings,
      title: 'Earning',
      value: earning,
    },
    {
      icon: Payouts,
      title: 'Payouts',
      value: Payout,
    },
    {
      icon: AllUsers,
      title: 'All Users',
      value: allUsers,
    },
    {
      icon: PendingUsers,
      title: 'Pending Users',
      value: pendingUsers,
    },
  ];
  return AdminGeneralViewColumns;
};

export {
  columns, statisticsColumns, latestReportColumns, AdminGeneralColumns,
};
