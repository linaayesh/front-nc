import axios from 'axios';

function axiosCall(url, method, data) {
  return axios({
    method,
    url,
    data,
  });
}

export default axiosCall;
