import {
  USER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  GOOGLE_LOGIN_URL,
  FORGET_PASSWORD_URL,
  RESET_PASSWORD_URL,
  EDIT_PROFILE_URL,
  FINANCIAL_STATUS_URL,
} from 'shared/constants/endpoints';
import { axiosCall } from '../utils';

export default {
  createUser: (userInfo) => axiosCall(REGISTER_URL, 'POST', userInfo),
  getUser: () => axiosCall(USER_URL, 'GET'),
  updateUser: (userInfo) => axiosCall(EDIT_PROFILE_URL, 'PATCH', userInfo),

  loginUser: (credentials) => axiosCall(LOGIN_URL, 'POST', credentials),
  logoutUser: () => axiosCall(LOGOUT_URL, 'GET'),
  googleLogin: (method, tokenId) => axiosCall(GOOGLE_LOGIN_URL(method), 'POST', { tokenId }),

  forgetPassword: (email) => axiosCall(FORGET_PASSWORD_URL, 'POST', email),
  resetPassword: (email) => axiosCall(RESET_PASSWORD_URL, 'POST', email),

  createFinancialData: (data) => axiosCall(FINANCIAL_STATUS_URL, 'POST', data),
  getFinancialStatus: () => axiosCall(FINANCIAL_STATUS_URL, 'GET'),
  updateFinancialData: (data) => axiosCall(FINANCIAL_STATUS_URL, 'PATCH', data),
};
