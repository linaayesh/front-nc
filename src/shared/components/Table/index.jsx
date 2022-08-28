import { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Loader } from 'shared/components';
import { Input, Table } from 'components/AntDesign';
import ModalForm from 'components/Dashboard/NewUsers/Modal';
import { columns } from 'shared/objects/Users';

function UsersTable({ listToDisplay, thunkFunction }) {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [list, isLoading] = useAppSelector((state) => [
    state.admin[listToDisplay],
    state.admin.isLoading,
    state.admin.error,
  ]);

  useEffect(() => {
    dispatch(thunkFunction());
  }, []);

  useEffect(() => {
    setDataSource(list);
  }, [list]);

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = list.filter((entry) => entry.name.toLowerCase()
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
            columns={listToDisplay === 'waitingList' ? columnsWithAction : columns}
            dataSource={dataSource}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 500 }}
          />
        </div>
      </div>
    ) : <Loader />);
}

export default UsersTable;

UsersTable.propTypes = {
  listToDisplay: PropsTypes.string.isRequired,
  thunkFunction: PropsTypes.func.isRequired,
};
