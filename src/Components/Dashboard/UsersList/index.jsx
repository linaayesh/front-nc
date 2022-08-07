import React, { useEffect, useState } from 'react';
import {
  Input, Table, message,
} from '../../AntDesign';
import adminService from '../../../Services/admin';
import columns from '../../../Objects/Users';

function UsersList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    adminService.getApprovedList().then(
      (res) => setData(res.data.map((item) => ({ ...item, key: item.id }))),
    ).catch((error) => {
      message.error(error.message);
    });
  }, []);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(data);
  }, [data]);

  const [value, setValue] = useState('');

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = data.filter((entry) => entry.username.toLowerCase()
          .includes(currValue));
        setDataSource(filteredData);
      }}
    />
  );

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

export default UsersList;
