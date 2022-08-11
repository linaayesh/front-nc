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
} from 'constants/endpoints';
import { axiosCall } from '../utils';

export default {
  createUser: async (userInfo) => {
    try {
      const response = await axiosCall(REGISTER_URL, 'POST', userInfo);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  updateUser: async (userInfo) => {
    try {
      const response = await axiosCall(EDIT_PROFILE_URL, 'PATCH', userInfo);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getUser: async () => { //* suggestion: use username at least as a param
    try {
      const response = await axiosCall(USER_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  loginUser: async (credentials) => {
    try {
      const response = await axiosCall(LOGIN_URL, 'POST', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  logoutUser: async () => {
    try {
      const response = await axiosCall(LOGOUT_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  googleLogin: async () => {
    try {
      const response = await axiosCall(GOOGLE_LOGIN_URL, 'POST');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  forgetPassword: async (email) => {
    try {
      const response = await axiosCall(FORGET_PASSWORD_URL, 'POST', email);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  resetPassword: async (values) => {
    try {
      const response = await axiosCall(RESET_PASSWORD_URL, 'POST', values);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  getFinancialData: async () => {
    try {
      const response = await axiosCall(FINANCIAL_STATUS_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  addFinancialData: async (userInfo) => {
    try {
      const response = await axiosCall(FINANCIAL_STATUS_URL, 'POST', userInfo);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  updateFinancialData: async (userInfo) => {
    try {
      const response = await axiosCall(FINANCIAL_STATUS_URL, 'PATCH', userInfo);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

};
