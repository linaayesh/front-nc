import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { message } from 'components/AntDesign';
import { HTTP_EXCEPTIONS_MESSAGES } from 'shared/constants';

function axiosCall(url, method, data) {
  return axios({
    method,
    url,
    data,
  }).then((res) => {
    const msg = res.data.message;
    const excludedMessages = ['APPROVED USERS', 'PENDING USERS', 'REJECTED USERS', 'APPROVED ACCOUNT'];
    // TODO: wait for the backend to update `resetPassword` response, to remove what after &&
    if (!excludedMessages.includes(msg) && !res.data.redirect) {
      if (msg) {
        message.success(HTTP_EXCEPTIONS_MESSAGES[msg]);
      }
    }

    // TODO: handle the redirect properly, possibly elsewhere.
    if (res.data.redirect) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[msg.message]);
      return <Navigate to={res.data.redirect} />;
    }
    return res;
  }).catch((error) => {
    message.error(HTTP_EXCEPTIONS_MESSAGES[error.response.data.message]);
    throw error;
  });
}

export default axiosCall;
