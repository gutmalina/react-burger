import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/authentication";

const initialStore = {
  loginRequest: false,
  loginFailed: false,
  loggedIn: false
};


export function authenticationReducer(state= initialStore, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loggingIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginRequest: false,
        loggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loginFailed: true
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}
