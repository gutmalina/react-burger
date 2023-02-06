import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILED,
  USER_DELETE,
  USER_EMAIL_SUCCESS,
  USER_NEW_PASSWORD_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED
 } from "../actions/user";

const initialStore = {
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  loggedIn: false,
  userName: '',
  userEmail: '',
  userRequest: false,
  userFailed: false,
  logoutRequest: false,
  logoutFailed: false,
};

export const userReducer = (state= initialStore, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registerRequest: true,
        registerFailed: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerRequest: false,
        loggedIn: true
      }
    case REGISTER_FAILED:
      return {
        ...state,
        loggedIn: false,
        registerFailed: true
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loggedIn: false,
        loginFailed: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginRequest: false,
        loggedIn: true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loggedIn: false,
        loginFailed: true
      }
    case USER_REQUEST:{
      return {
        ...state,
        userRequest: true,
        userFailed: false
      }
    }
    case USER_SUCCESS:{
      return {
        ...state,
        userName: action.user.name,
        userEmail: action.user.email,
        userRequest: false
      }
    }
    case USER_FAILED:{
      return {
        ...state,
        userRequest: false,
        userFailed: true
      }
    }
    case USER_DELETE:{
      return {
        ...state,
        userName: '',
        userEmail: ''
      }
    }
    case USER_EMAIL_SUCCESS:{
      return {
        ...state,
        isForgot: action.isForgot,
        isRequest: false,
      }
    }
    case USER_NEW_PASSWORD_SUCCESS:{
      return {
        ...state,
        isReset: action.isReset,
        isRequest: false,
      }
    }
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutRequest: false,
        loggedIn: false
      }
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutFailed: true
      }
    default:
      return state
  }
};
