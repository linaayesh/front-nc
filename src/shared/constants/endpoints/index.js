import { BASE_URL } from '../config';

// ! Backend endpoints

//* auth endpoints - |ALL USERS TYPES| <Admin, End-User>
export const USER_URL = `${BASE_URL}/api/v1/auth/user`;
export const REGISTER_URL = `${BASE_URL}/api/v1/auth/signup`;
export const LOGIN_URL = `${BASE_URL}/api/v1/auth/login`;
export const LOGOUT_URL = `${BASE_URL}/api/v1/auth/logout`;
export const GOOGLE_LOGIN_URL = (method) => `${BASE_URL}/api/v1/auth/${method}/google`;
export const FORGET_PASSWORD_URL = `${BASE_URL}/api/v1/auth/forget-password`;
export const RESET_PASSWORD_URL = `${BASE_URL}/api/v1/auth/reset-password`;
export const EDIT_PROFILE_URL = `${BASE_URL}/api/v1/auth/edit-profile`;

//* user endpoints - |ADMIN USER|
export const USER_WAITING_LIST_URL = `${BASE_URL}/api/v1/user/waiting-list`;
export const USER_APPROVED_LIST_URL = `${BASE_URL}/api/v1/user/approved-list`;
export const USER_REJECTED_LIST_URL = `${BASE_URL}/api/v1/user/rejected-list`;
export const APPROVE_USER_BY_ID_URL = (userId) => `${BASE_URL}/api/v1/user/approve/${userId}`;
export const REJECT_USER_BY_ID_URL = (userId) => `${BASE_URL}/api/v1/user/reject/${userId}`;
export const ADD_USER_URL = `${BASE_URL}/api/v1/user/add-user`;
export const GET_PAGINATED_CONTENT = ({ limit, page }) => `${BASE_URL}/api/v1/user/contents?limit=${limit}&page=${page}`;
export const GET_USERS = `${BASE_URL}/api/v1/user/users`;
export const GET_CONTENT_BY_ID = (contentId) => `${BASE_URL}/api/v1/user/contents?limit=1&page=1&id=${contentId}`;
export const GET_USERS_URL = `${BASE_URL}/api/v1/user/users`;
export const GET_POSSIBLE_CONTENTS = (title) => `${BASE_URL}/api/v1/user/contents?limit=1&page=1&title=${title}`;
export const MATCH_USER_CONTENT = `${BASE_URL}/api/v1/user/match-user-content`;
export const UPDATE_DASHBOARD_SETTINGS = `${BASE_URL}/api/v1/user/edit-dashboard-settings`;
export const GET_DASHBOARD_SETTINGS = `${BASE_URL}/api/v1/user/dashboard-settings`;
//* user endpoints - |EndUser USER|
export const FINANCIAL_STATUS_URL = `${BASE_URL}/api/v1/user/financial-information`;
export const CHANGE_PASSWORD_URL = `${BASE_URL}/api/v1/user/change-password`;
export const STATISTICS_DATA_URL = `${BASE_URL}/api/v1/user/statistics`;

// ! Frontend endpoints

// * navigation endpoints
export const MATCH_CONTENT_ENDPOINT = (id) => `/dashboard/contentlist/matchcontent/${id}`;
export const EDIT_USER_ENDPOINT = (id) => `/dashboard/userlist/edituser/${id}`;
export const CONTENT_LIST_URL = '/dashboard/contentlist';
