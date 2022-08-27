import { getWaitingList } from 'store/admin/thunk';
import { UsersTable } from 'shared/components';
import './style.css';

function NewUsers() {
  return (
    <UsersTable
      listToDisplay="waitingList"
      thunkFunction={getWaitingList}
    />
  );
}

export default NewUsers;
