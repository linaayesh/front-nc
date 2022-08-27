import { getApprovedList } from 'store/admin/thunk';
import { UsersTable } from 'shared/components';

function UsersList() {
  return (
    <UsersTable
      listToDisplay="approvedList"
      thunkFunction={getApprovedList}
    />
  );
}

export default UsersList;
