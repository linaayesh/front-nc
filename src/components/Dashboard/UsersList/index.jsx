import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getApprovedList } from 'store/admin/thunk';
import { Loader } from 'shared/components';
import {
  Input, Table,
} from 'components/AntDesign';
import columns from 'objects/Users';

function UsersList() {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [approvedList, isLoading] = useAppSelector((state) => [
    state.admin.approvedList,
    state.admin.isLoading,
  ]);

  useEffect(() => {
    dispatch(getApprovedList());
  }, []);

  useEffect(() => {
    setDataSource(approvedList);
  }, [approvedList]);

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = approvedList.filter((entry) => entry.username.toLowerCase()
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
    ) : <Loader />);
}

export default UsersList;
