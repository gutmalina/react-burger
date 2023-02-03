import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
 } from "../actions/registration";

const initialStore = {
  registerRequest: false,
  registerFailed: false
};

export function registrationReducer(state= initialStore, action) {
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
        registerRequest: false
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        registerRequest: false,
        registerFailed: true
      }
    default:
      return state
  }
};
