import './style.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getWaitingList } from 'store/admin/thunk';
import {
  Input, Table, Spin, LoadingOutlined,
} from 'components/AntDesign';
import ModalForm from './Modal';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function NewUsers() {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const [waitingList, isLoading] = useSelector((state) => [
    state.admin.waitingList,
    state.admin.isLoading,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaitingList());
  }, []);

  useEffect(() => {
    setDataSource(waitingList);
  }, [waitingList]);

  const FilterByNameInput = ( // TODO: add filter to admin redux actions
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
      render: (_, user) => (
        <ModalForm
          setDataSource={setDataSource}
          user={user}
        />
      ),
    },
  ];
  return (
    !isLoading ? (
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
    ) : <Spin indicator={antIcon} />
  );
}

export default NewUsers;
