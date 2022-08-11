import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getRejectedList } from 'store/admin/thunk';
import columns from 'objects/Users';
import {
  Input, Table, LoadingOutlined, Spin,
} from 'components/AntDesign';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function RejectedUsers() {
  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const dispatch = useAppDispatch();
  const [rejectedList, isLoading] = useAppSelector((state) => [
    state.admin.rejectedList,
    state.admin.isLoading,
  ]);

  useEffect(() => {
    dispatch(getRejectedList());
  }, []);

  useEffect(() => {
    setDataSource(rejectedList);
  }, [rejectedList]);

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = rejectedList.filter((entry) => entry.username.toLowerCase()
          .includes(currValue));
        setDataSource(filteredData);
      }}
    />
  );

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
    ) : (<Spin indicator={antIcon} />));
}

export default RejectedUsers;
