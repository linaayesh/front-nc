import {
  ADD_USER_URL,
} from '../../Constants/endpoints';
import axiosCall from '../ApiCall';

export default {
  addUser: async (userInfo) => {
    try {
      const response = await axiosCall(ADD_USER_URL, 'POST', userInfo);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

};
