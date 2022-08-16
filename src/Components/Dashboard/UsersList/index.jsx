import React, { useEffect, useState } from 'react';
import {
  Input, Table,
} from '../../AntDesign';
import axiosCall from '../../../Services/ApiCall';
import columns from '../../../Objects/Users';

function UsersList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosCall('/api/v1/user/approved-list', 'get', null);
      setData(result.data.data.map((item) => ({ ...item, key: item.id })));
    };
    fetchData();
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
        const filteredData = data.filter((entry) => entry.name.toLowerCase()
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
