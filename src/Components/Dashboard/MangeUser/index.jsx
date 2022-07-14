import {
  Button, Input, Space, Table, Popconfirm,
} from 'antd';
import './style.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageUSer() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/v1/user/notApprovedUsers');
      setData(result.data.data.map((item, index) => ({ ...item, key: index })));
    };
    fetchData();
  }, []);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(data);
  }, [data]);
  const approveuser = (id) => {
    axios.get(`/api/v1/user/approveUser/${id}`);
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
      title: 'Registereion Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Role',
      dataIndex: 'roleId',
      key: 'roleId',
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
              approveuser(b.key);
            }}
          >
            <Button>Approve</Button>
          </Popconfirm>
          <Popconfirm
            title="Are you sure that you want to reject this user？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              approveuser(b.key);
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
