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

//* admin endpoints - |ADMIN|
export const USER_WAITING_LIST_URL = `${BASE_URL}/api/v1/admin/waiting-list`;
export const USER_APPROVED_LIST_URL = `${BASE_URL}/api/v1/admin/approved-list`;
export const USER_REJECTED_LIST_URL = `${BASE_URL}/api/v1/admin/rejected-list`;
export const USER_BANNED_LIST_URL = `${BASE_URL}/api/v1/admin/banned-list`;

export const ADD_USER_URL = `${BASE_URL}/api/v1/admin/add-user`;

export const APPROVE_USER_BY_ID_URL = (userId) => `${BASE_URL}/api/v1/admin/approve/${userId}`;
export const REJECT_USER_BY_ID_URL = (userId) => `${BASE_URL}/api/v1/admin/reject/${userId}`;
export const BLOCK_USER_BY_ID_URL = (userId) => `${BASE_URL}/api/v1/admin/block-user/${userId}`;

export const GET_DASHBOARD_SETTINGS = `${BASE_URL}/api/v1/admin/dashboard-settings`;
export const UPDATE_DASHBOARD_SETTINGS = `${BASE_URL}/api/v1/admin/edit-dashboard-settings`;

export const GET_USERS_URL = `${BASE_URL}/api/v1/admin/users`;

export const EDIT_USER_PROFILE = `${BASE_URL}/api/v1/admin/edit-user-profile`;

// * content
export const GET_PAGINATED_CONTENT = ({ limit, page }) => `${BASE_URL}/api/v1/content?limit=${limit}&page=${page}`;

export const GET_CONTENT_BY_ID = (contentId) => `${BASE_URL}/api/v1/content?limit=1&page=1&id=${contentId}`;

export const GET_POSSIBLE_CONTENTS = (title) => `${BASE_URL}/api/v1/content?limit=1&page=1&title=${title}`;

export const MATCH_USER_CONTENT = `${BASE_URL}/api/v1/content/match-user-content`;

//* user
export const CHANGE_PASSWORD_URL = `${BASE_URL}/api/v1/user/change-password`;
export const GET_STATISTICS = (userId) => `${BASE_URL}/api/v1/user/statistics/${userId}`;
export const STATISTICS_DATA_URL = `${BASE_URL}/api/v1/user/statistics`;

export const EDIT_PROFILE_URL = `${BASE_URL}/api/v1/auth/edit-profile`;

export const GET_USER_PROFILE = (userId) => `${BASE_URL}/api/v1/user/user-data/${userId}`;

export const FINANCIAL_STATUS_URL = `${BASE_URL}/api/v1/user/financial-information`;

// * navigation endpoints
export const MATCH_CONTENT_ENDPOINT = (id) => `/dashboard/contentlist/matchcontent/${id}`;
export const EDIT_USER_ENDPOINT = (id) => `/dashboard/userlist/edituser/${id}`;
export const USER_STATISTICS_ENDPOINT = (id) => `/dashboard/userlist/statistics/${id}`;
export const CONTENT_LIST_URL = '/dashboard/contentlist';
