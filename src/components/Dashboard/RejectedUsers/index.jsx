import { getRejectedList } from 'store/admin/thunk';
import { UsersTable } from 'shared/components';

function RejectedUsers() {
  return (
    <UsersTable
      listToDisplay="rejectedList"
      thunkFunction={getRejectedList}
    />
  );
}

export default RejectedUsers;
