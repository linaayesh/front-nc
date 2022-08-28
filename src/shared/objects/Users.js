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
      const [date, time] = [item.split('T')[0], item.split('T')[1].split('.')[0].slice(0, -3)];
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
