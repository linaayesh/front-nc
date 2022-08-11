import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getApprovedList } from 'store/admin/slice';
import {
  Input, Table, Spin, LoadingOutlined,
} from 'components/AntDesign';
import columns from 'objects/Users';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function UsersList() {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const [approvedList, isLoading] = useSelector((state) => [
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
    ) : (<Spin indicator={antIcon} />));
}

export default UsersList;
