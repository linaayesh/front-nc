import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRejectedList } from 'Store/Slices/adminSlice';
import columns from 'Objects/Users';
import {
  Input, Table, LoadingOutlined, Spin,
} from 'AntDesign';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function RejectedUsers() {
  const dispatch = useDispatch();
  const [rejectedList, isLoading] = useSelector((state) => [
    state.admin.rejectedList,
    state.admin.isLoading,
  ]);

  useEffect(() => {
    dispatch(getRejectedList());
  }, []);

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(rejectedList);
  }, [rejectedList]);

  const [value, setValue] = useState('');

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
