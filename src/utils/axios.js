import axios from 'axios';
import { message } from 'components/AntDesign';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';

function axiosCall(url, method, data) {
  return axios({
    method,
    url,
    data,
  }).then((res) => {
    const msg = res.data.message;
    const exclude = ['APPROVED USERS', 'PENDING USERS', 'REJECTED USERS', 'APPROVED ACCOUNT'];

    if (!exclude.includes(msg)) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[msg]);
    }
    return res;
  }).catch((error) => {
    message.error(HTTP_EXCEPTIONS_MESSAGES[error.response.data.message]);
    throw error;
  });
}

export default axiosCall;
