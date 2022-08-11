import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getWaitingList } from 'store/admin/thunk';
import columns from 'objects/Users';
import {
  Input, Table, Spin, LoadingOutlined,
} from 'components/AntDesign';
import ModalForm from './Modal';
import './style.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function NewUsers() {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [waitingList, isLoading] = useAppSelector((state) => [
    state.admin.waitingList,
    state.admin.isLoading,
  ]);

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

  const columnsWithAction = [
    ...columns,
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
            columns={columnsWithAction}
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
