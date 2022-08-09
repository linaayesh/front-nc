import userService from '../Services/user';
import {
  message,
} from '../Components/AntDesign';
import { HTTP_EXCEPTIONS_MESSAGES } from '../Constants';

export default function addUser(username, email, password) {
  userService.addUser({ username, email, password }).then((response) => {
    if (HTTP_EXCEPTIONS_MESSAGES[response.message]) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[response.message]);
    }
  }).catch((error) => {
    message.error(HTTP_EXCEPTIONS_MESSAGES[error.message]);
  });
}
