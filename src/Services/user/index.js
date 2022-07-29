import axios from 'axios';
import {
  USER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  GOOGLE_LOGIN_URL,
  FORGET_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from '../../Constants/endpoints';

export default {
  getUser: async () => { //* suggestion: use username at least as a param
    try {
      const response = await axios.get(USER_URL);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  },

  registerUser: async (userInfo) => {
    try {
      const response = await axios.post(REGISTER_URL, userInfo);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  loginUser: async (credentials) => {
    try {
      const response = await axios.post(LOGIN_URL, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logoutUser: async () => {
    try {
      const response = await axios.get(LOGOUT_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  googleLogin: async () => {
    try {
      const response = await axios.post(GOOGLE_LOGIN_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  forgetPassword: async (email) => {
    try {
      const response = await axios.post(FORGET_PASSWORD_URL, email);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  resetPassword: async (values) => { // TODO: send the token too
    try {
      const response = await axios.post(RESET_PASSWORD_URL, values);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
