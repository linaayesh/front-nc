import { BASE_URL } from '../config';

//* auth endpoints - |ALL USERS TYPES| <Admin, End-User>
export const USER_URL = `${BASE_URL}/api/v1/auth/user`;
export const REGISTER_URL = `${BASE_URL}/api/v1/auth/signup`;
export const LOGIN_URL = `${BASE_URL}/api/v1/auth/login`;
export const LOGOUT_URL = `${BASE_URL}/api/v1/auth/logout`;
export const GOOGLE_LOGIN_URL = `${BASE_URL}/api/v1/auth/sign/google`;
export const FORGET_PASSWORD_URL = `${BASE_URL}/api/v1/auth/forget-password`;
export const RESET_PASSWORD_URL = `${BASE_URL}/api/v1/auth/reset-password`;
export const EDIT_PROFILE_URL = `${BASE_URL}/api/v1/auth/edit-profile`;

//* user endpoints - |ADMIN USER|
export const USER_WAITING_LIST_URL = `${BASE_URL}/api/v1/user/waiting-list`;
export const USER_APPROVED_LIST_URL = `${BASE_URL}/api/v1/user/approved-list`;
export const USER_REJECTED_LIST_URL = `${BASE_URL}/api/v1/user/rejected-list`;
export const APPROVE_USER_BY_ID_URL = `${BASE_URL}/api/v1/user/approve`;
export const REJECT_USER_BY_ID_URL = `${BASE_URL}/api/v1/user/reject`;

//* user endpoints - |EndUser USER|
export const FINANCIAL_STATUS_URL = `${BASE_URL}/api/v1/user/financial_information`;
