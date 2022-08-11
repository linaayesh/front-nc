import {
  USER_WAITING_LIST_URL,
  USER_APPROVED_LIST_URL,
  USER_REJECTED_LIST_URL,
  APPROVE_USER_BY_ID_URL,
  REJECT_USER_BY_ID_URL,
} from 'constants/endpoints';
import { axiosCall } from '../utils';

export default {
  approveUser: async (userId) => axiosCall(APPROVE_USER_BY_ID_URL(userId), 'PATCH'),

  rejectUser: async (userId) => axiosCall(REJECT_USER_BY_ID_URL(userId), 'PATCH'),

  getWaitingList: async () => axiosCall(USER_WAITING_LIST_URL, 'GET'),

  getApprovedList: async () => axiosCall(USER_APPROVED_LIST_URL, 'GET'),

  getRejectedList: async () => axiosCall(USER_REJECTED_LIST_URL, 'GET'),
};
