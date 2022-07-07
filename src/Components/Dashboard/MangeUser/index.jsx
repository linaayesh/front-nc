import {
  Button, Input, Space, Table, Popconfirm,
} from 'antd';
import './style.css';
import React, { useState } from 'react';

function ManageUSer() {
  const data = [
    {
      key: '1',
      name: 'Ayman Sami',
      email: 'email@gmail.com',
      registrationDate: '09/07/2022',
      role: 'Admin',
    },
    {
      key: '2',
      name: 'Ibrahim Jarada',
      email: 'email@gmail.com',
      registrationDate: '09/07/2022',
      role: 'Admin',
    },
    {
      key: '3',
      name: 'Rand Suhail',
      email: 'email@gmail.com',
      registrationDate: '09/07/2022',
      role: 'Comedian',
    },
    {
      key: '4',
      name: 'Zaher aa',
      email: 'email@gmail.com',
      registrationDate: '09/07/2022',
      role: 'Venue',
    },
  ];

  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');
  // create delete function whitout key
  const deleteUser = (id) => {
    const newData = dataSource.filter((item) => item.key !== id);
    setDataSource(newData);
  };

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = data.filter((entry) => entry.name.toLowerCase().includes(currValue));
        setDataSource(filteredData);
      }}
    />
  );

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
      dataIndex: 'registrationDate',
      key: 'registrationDate',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, b) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure that you want to Approve this user？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              deleteUser(b.key);
            }}
          >
            <Button>Approve</Button>
          </Popconfirm>
          <Popconfirm
            title="Are you sure that you want to reject this user？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              deleteUser(b.key);
            }}
          >
            <Button type="danger">Reject</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div className="sort">
      <div className="search">{FilterByNameInput}</div>
      <div className="table">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 500 }}

        />

      </div>
    </div>
  );
}

export default ManageUSer;
