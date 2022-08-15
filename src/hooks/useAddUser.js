import { userService } from 'services';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';
import { message } from 'components/AntDesign';

export default function useAddUser(username, email, password) {
  userService.addUser({ username, email, password }).then((response) => {
    if (HTTP_EXCEPTIONS_MESSAGES[response.message]) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[response.message]);
    }
  }).catch((error) => {
    message.error(HTTP_EXCEPTIONS_MESSAGES[error.message]);
  });
}
