import { registration, login, getUser, editUser, forgot, reset, logout } from "../actions/user";

const {REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } = registration;
const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } = login;
const { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED } = getUser;
const { EDIT, EDIT_SUCCESS, EDIT_FAILED, EDIT_FAILED_TOKEN } = editUser;
const { FORGOT, FORGOT_SUCCESS, FORGOT_FAILED } = forgot;
const { RESET, RESET_SUCCESS, RESET_FAILED } = reset;
const { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED, USER_DELETE } = logout;

const initialStore = {
  name: "",
  email: "",
  isLoggedIn: false,
  isForgot: false,
  isReset: false,

  isRegisterRequest: false,
  isRegisterFailed: false,

  isLoginRequest: false,
  isLoginFailed: false,

  isGetRequest: false,
  isGetFailed: false,

  isEditRequest: false,
  isEditFailed: false,
  isEditFailedToken: false,

  isForgotRequest: false,
  isForgotFailed: false,

  isResetRequest: false,
  isResetFailed: false,

  isLogoutRequest: false,
  isLogoutFailed: false,
};

export const userReducer = (state = initialStore, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isRegisterRequest: true,
        isRegisterFailed: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterRequest: false,
        isLoggedIn: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isRegisterFailed: true,
      };
    case LOGIN:
      return {
        ...state,
        isLoginRequest: true,
        isLoggedIn: false,
        isLoginFailed: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isForgot: false,
        isReset: false,
        isLoginRequest: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isLoginFailed: true,
      };
    case GET_USER:
      return {
        ...state,
        isGetRequest: true,
        isGetFailed: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        isLoggedIn: true,
        isGetRequest: false,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isGetRequest: false,
        isGetFailed: true,
      };
    case EDIT:
      return {
        ...state,
        isEditRequest: true,
        isEditFailed: false,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        isEditRequest: false,
        isEditFailedToken: false,
      };
    case EDIT_FAILED:
      return {
        ...state,
        isEditRequest: false,
        isEditFailed: true,
      };
    case EDIT_FAILED_TOKEN:
      return {
        ...state,
        isEditFailedToken: true,
      };
    case FORGOT:
      return {
        ...state,
        isForgotRequest: true,
        isForgotFailed: false,
      };
    case FORGOT_SUCCESS:
      return {
        ...state,
        isForgot: true,
        isForgotRequest: false,
      };
    case FORGOT_FAILED:
      return {
        ...state,
        isForgotRequest: false,
        isForgotFailed: true,
      };
    case RESET:
      return {
        ...state,
        isResetRequest: true,
        isResetFailed: false,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        isReset: true,
        isResetRequest: false,
      };
    case RESET_FAILED:
      return {
        ...state,
        isResetRequest: false,
        isResetFailed: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogoutRequest: true,
        isLogoutFailed: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogoutRequest: false,
        isLoggedIn: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLogoutFailed: true,
      };
    case USER_DELETE:
      return {
        ...state,
        name: "",
        email: "",
      };
    default:
      return state;
  }
};
