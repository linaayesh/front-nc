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
    title: 'Registereion Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
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
    title: 'Watched Seconds',
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
export { columns, statisticsColumns };
