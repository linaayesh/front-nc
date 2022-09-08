import { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Loader } from 'shared/components';
import { Button, Input, Table } from 'components/AntDesign';
import ModalForm from 'components/Dashboard/NewUsers/Modal';
import { columns } from 'shared/objects/Users';
import { useNavigate } from 'react-router-dom';
import { EDIT_USER_ENDPOINT } from 'shared/constants/endpoints';

function UsersTable({ listToDisplay, thunkFunction }) {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [list, isLoading] = useAppSelector((state) => [
    state.admin[listToDisplay],
    state.admin.isLoading,
    state.admin.error,
  ]);

  const handleSearch = (e) => {
    const currValue = e.target.value;
    setValue(currValue);
    const filteredData = list.filter((entry) => entry.name.toLowerCase()
      .includes(currValue));
    setDataSource(filteredData);
  };

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
      onChange={handleSearch}
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
  const navigate = useNavigate();

  const approvedColumnsAction = [
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (_, user) => (
        <Button
          onClick={() => navigate(EDIT_USER_ENDPOINT(user.id))}
          type="primary"
          className="form-button"
        >
          Edit
        </Button>

      ),
    },
  ];

  return (
    !isLoading ? (
      <div className="sort">
        <div className="search">{FilterByNameInput}</div>
        <div className="table">
          <Table
            columns={listToDisplay === 'waitingList' ? columnsWithAction : listToDisplay === 'approvedList' ? approvedColumnsAction : columns}
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
