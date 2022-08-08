import './style.css';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import { getWaitingList } from 'Store/Slices/adminSlice';
import { Input, Table } from '../../AntDesign';
import ModalForm from './Modal';

function NewUsers() {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const [waitingList] = useSelector((state) => [state.admin.waitingList]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaitingList());
  }, []);

  useEffect(() => {
    setDataSource(waitingList);
  }, [waitingList]);

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = waitingList.filter((entry) => entry.username.toLowerCase()
          .includes(currValue));
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
