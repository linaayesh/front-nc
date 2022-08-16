import './style.css';
import { useEffect, useState } from 'react';
import { Input, Table } from '../../AntDesign';
import axiosCall from '../../../Services/ApiCall';
import ModalForm from './Modal';

function NewUsers() {
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosCall('/api/v1/user/waiting-list', 'get', null);

      setData(result.data.data.map((item) => ({ ...item, key: item.id })));
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDataSource(data);
  }, [data]);

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
    {
      title: 'Action',
      key: 'action',
      render: (_, b) => (
        <ModalForm
          dataSource={dataSource}
          setDataSource={setDataSource}
          user={b}
        />
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

export default NewUsers;
