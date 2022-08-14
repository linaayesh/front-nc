const columns = [
  {
    title: 'Name',
    dataIndex: 'username',
    key: 'username',
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

export default columns;
