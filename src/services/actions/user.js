import { setCookie } from "../../utils/cookie";
import {
  registerRequest,
  loginRequest,
  getProfile,
  sendEmail,
  sendNewPassword,
  logoutRequest
} from "../../utils/burger-api";
import { getCookie } from '../../utils/cookie';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN
} from "../../utils/constants";


export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';
export const USER_DELETE = 'USER_DELETE';

export const USER_EMAIL_SUCCESS = 'USER_EMAIL_SUCCESS';
export const USER_NEW_PASSWORD_SUCCESS = 'USER_NEW_PASSWORD_SUCCESS';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

/** регистрация пользователя */
export function registrationAction(user) {
  return function(dispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    registerRequest(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS
          })
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken)
        } else {
          dispatch({
            type: REGISTER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: REGISTER_FAILED
        })
      })
  }
};

/** аутентификация пользователя */
export function authenticationAction(user) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    loginRequest(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
            isLoggedIn: true
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken)
        } else {
          dispatch({
            type: LOGIN_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: LOGIN_FAILED
        })
      })
  }
};

/** выход из системы */
export function logoutRequestAction() {
  return function(dispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    })
    logoutRequest()
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
            isLoggedIn: false
          })
        } else {
          dispatch({
            type: LOGOUT_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: LOGOUT_FAILED
        })
      })
  }
};

/** получить данные профиля */
export function getProfileAction(){
  const user = getCookie(ACCESS_TOKEN);
  return function(dispatch) {
    dispatch({
      type: USER_REQUEST
    })
    getProfile(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: USER_SUCCESS,
            user: res.user
          })
        } else {
          dispatch({
            type: USER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: USER_FAILED
        })
      })
  }
};

export function forgotPassword(email) {
  return function(dispatch) {
    // dispatch({
    //   type: USER
    // })
    sendEmail(email)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: USER_EMAIL_SUCCESS,
            isForgot: res.success
          })
        } else {
          dispatch({
            type: USER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: USER_FAILED
        })
      })
  }
};

export function newPassword(data) {
  return function(dispatch) {
    // dispatch({
    //   type: USER
    // })
    sendNewPassword(data)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: USER_NEW_PASSWORD_SUCCESS,
            isReset: res.success
          })
        } else {
          dispatch({
            type: USER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: USER_FAILED
        })
      })
  }
};


export function deleteUserAction(){
  return function(dispatch) {
    dispatch({
      type: USER_DELETE
    })
  }
};
