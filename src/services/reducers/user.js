import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILED
 } from "../actions/user";

const initialStore = {
  userName: '',
  userEmail: '',
  userRequest: false,
  userFailed: false
};

export const getProfileReducer = (state= initialStore, action) => {
  switch (action.type) {
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
    // case USER_EMAIL_SUCCESS:{
    //   return {
    //     ...state,
    //     isForgot: action.isForgot,
    //     isRequest: false,
    //   }
    // }
    // case USER_NEW_PASSWORD_SUCCESS:{
    //   return {
    //     ...state,
    //     isReset: action.isReset,
    //     isRequest: false,
    //   }
    // }

    default:
      return state
  }
};

