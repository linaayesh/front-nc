import {
  USER_WAITING_LIST_URL,
  USER_APPROVED_LIST_URL,
  USER_REJECTED_LIST_URL,
  APPROVE_USER_BY_ID_URL,
  REJECT_USER_BY_ID_URL,
  ADD_USER_URL,
  GET_CONTENT_BY_ID,
  GET_PAGINATED_CONTENT,
  GET_USERS_URL,
  GET_POSSIBLE_CONTENTS,
  MATCH_USER_CONTENT,
} from 'shared/constants/endpoints';
import { axiosCall } from '../utils';

export default {
  approveUser: async (userId) => axiosCall(APPROVE_USER_BY_ID_URL(userId), 'PATCH'),
  rejectUser: async (userId) => axiosCall(REJECT_USER_BY_ID_URL(userId), 'PATCH'),
  createUser: async (userInfo) => axiosCall(ADD_USER_URL, 'POST', userInfo),
  getWaitingList: async () => axiosCall(USER_WAITING_LIST_URL, 'GET'),
  getApprovedList: async () => axiosCall(USER_APPROVED_LIST_URL, 'GET'),
  getRejectedList: async () => axiosCall(USER_REJECTED_LIST_URL, 'GET'),
  getContentById: async (contentId) => axiosCall(GET_CONTENT_BY_ID(contentId), 'GET'),
  getUsers: async () => axiosCall(GET_USERS_URL, 'GET'),
  getPaginatedContent: async ({ limit, page }) => axiosCall(GET_PAGINATED_CONTENT({ limit, page }), 'GET'),
  getPossibleContents: async (title) => axiosCall(GET_POSSIBLE_CONTENTS(title), 'GET'),
  matchUserContent: async (payload) => axiosCall(MATCH_USER_CONTENT, 'PATCH', payload),
};
