import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  EDIT,
  EDIT_SUCCESS,
  EDIT_FAILED,
  FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAILED,
  RESET,
  RESET_SUCCESS,
  RESET_FAILED,
} from "../constants/index";
import { TUserActions } from "../actions/user/types";

type TUserStore = {
  name: string,
  email: string,
  isLoggedIn: boolean,
  isForgot: boolean,
  isReset: boolean,
  isGetUser: boolean,

  isRegisterRequest: boolean,
  isRegisterFailed: boolean,

  isLoginRequest: boolean,
  isLoginFailed: boolean,

  isGetRequest: boolean,
  isGetSuccess: boolean,
  isGetFailed: boolean,

  isEditRequest: boolean,
  isEditFailed: boolean,

  isForgotRequest: boolean,
  isForgotFailed: boolean,

  isResetRequest: boolean,
  isResetFailed: boolean,
};

const initialStore: TUserStore = {
  name: "",
  email: "",
  isLoggedIn: false,
  isForgot: false,
  isReset: false,
  isGetUser: false,

  isRegisterRequest: false,
  isRegisterFailed: false,

  isLoginRequest: false,
  isLoginFailed: false,

  isGetRequest: false,
  isGetSuccess: false,
  isGetFailed: false,

  isEditRequest: false,
  isEditFailed: false,

  isForgotRequest: false,
  isForgotFailed: false,

  isResetRequest: false,
  isResetFailed: false,
};

export const userReducer = (state = initialStore, action: TUserActions): TUserStore => {
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
        isGetSuccess: true,
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
        isGetSuccess: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        isGetUser: true,
        isLoggedIn: true,
        isGetSuccess: true,
        isGetRequest: false,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isGetUser: false,
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
      };
    case EDIT_FAILED:
      return {
        ...state,
        isEditRequest: false,
        isEditFailed: true,
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
    default:
      return state;
  }
};
