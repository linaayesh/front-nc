import {
  USER_WAITING_LIST_URL,
  USER_APPROVED_LIST_URL,
  USER_REJECTED_LIST_URL,
  APPROVE_USER_BY_ID_URL,
  REJECT_USER_BY_ID_URL,
} from 'constants/endpoints';
import axiosCall from './apiCall';

export default {
  approveUser: async (userId) => {
    try {
      const response = await axiosCall(APPROVE_USER_BY_ID_URL(userId), 'PATCH');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  rejectUser: async (userId) => {
    try {
      const response = await axiosCall(REJECT_USER_BY_ID_URL(userId), 'PATCH');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getWaitingList: async () => {
    try {
      const response = await axiosCall(USER_WAITING_LIST_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getApprovedList: async () => {
    try {
      const response = await axiosCall(USER_APPROVED_LIST_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  getRejectedList: async () => {
    try {
      const response = await axiosCall(USER_REJECTED_LIST_URL, 'GET');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
