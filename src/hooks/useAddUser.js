import { adminService } from 'services';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';
import { message } from 'components/AntDesign';

export default function useAddUser(name, email, roleId) {
  adminService.addUser({ name, email, roleId }).then((response) => {
    if (HTTP_EXCEPTIONS_MESSAGES[response.message]) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[response.message]);
    }
  }).catch((error) => {
    if (error.toString().includes('PENDING ACCOUNT')) {
      message.error(HTTP_EXCEPTIONS_MESSAGES['PENDING ACCOUNT']);
    }
    if (error.toString().includes('ALREADY APPROVED')) {
      message.error(HTTP_EXCEPTIONS_MESSAGES['ALREADY APPROVED']);
    }
  });
}
