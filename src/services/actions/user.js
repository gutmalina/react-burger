import { setCookie } from "../../utils/cookie";
import { registerRequest, loginRequest } from "../../utils/auth";
import {
  getProfile,
  editProfile,
  sendEmail,
  sendNewPassword,
  logoutRequest,
} from "../../utils/burger-api";
import { tokenConstants } from "../../utils/constants";
import { editTokenAction } from "./token";

const { ACCESS_TOKEN, REFRESH_TOKEN, PASSWORD } = tokenConstants;

export const registration = {
  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILED: "REGISTER_FAILED",
};

export const login = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",
};

export const getUser = {
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILED: "GET_USER_FAILED",
};

export const editUser = {
  EDIT: "EDIT",
  EDIT_SUCCESS: "EDIT_SUCCESS",
  EDIT_FAILED: "EDIT_FAILED",
  EDIT_FAILED_TOKEN: "EDIT_FAILED_TOKEN"
};

export const forgot = {
  FORGOT: "FORGOT",
  FORGOT_SUCCESS: "FORGOT_SUCCESS",
  FORGOT_FAILED: "FORGOT_FAILED",
};

export const reset = {
  RESET: "RESET",
  RESET_SUCCESS: "RESET_SUCCESS",
  RESET_FAILED: "RESET_FAILED",
};

export const logout = {
  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILED: "LOGOUT_FAILED",
  USER_DELETE: "USER_DELETE",
};

/** регистрация пользователя */
export function registrationAction(user) {
  return function (dispatch) {
    dispatch({
      type: registration.REGISTER,
    });
    registerRequest(user)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: registration.REGISTER_SUCCESS,
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
          localStorage.setItem(PASSWORD, user.password);
        } else {
          dispatch({
            type: registration.REGISTER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: registration.REGISTER_FAILED,
        });
      });
  };
};

/** аутентификация пользователя */
export function authenticationAction(user) {
  return function (dispatch) {
    dispatch({
      type: login.LOGIN,
    });
    loginRequest(user)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: login.LOGIN_SUCCESS,
            user: res.user,
            isLoggedIn: true,
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
          localStorage.setItem(PASSWORD, user.password);
        } else {
          dispatch({
            type: login.LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: login.LOGIN_FAILED,
        });
      });
  };
}

/** получить данные профиля */
export function getProfileAction() {
  return function (dispatch) {
    dispatch({
      type: getUser.GET_USER,
    });
    getProfile()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: getUser.GET_USER_SUCCESS,
            user: res.user,
          });
        } else {
          if (res.message === 'jwt expired'){
            dispatch(editTokenAction())
          } else {
            dispatch({
              type: getUser.GET_USER_FAILED,
            });
          }
        }
      })
      .catch((err) => {
        dispatch({
          type: getUser.GET_USER_FAILED,
        });
      });
  };
}

/** обновить данные профиля */
export function editProfileAction(user) {
  return function (dispatch) {
    dispatch({
      type: editUser.EDIT,
    });
    editProfile(user)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: editUser.EDIT_SUCCESS,
            user: res.user,
          });
        } else {
          if (res.message === 'jwt expired'){
            dispatch(editTokenAction());
            dispatch({
              type: editUser.EDIT_FAILED_TOKEN
            });
          } else {
            dispatch({
              type: editUser.EDIT_FAILED,
            });
          }
        }
      })
      .catch((err) => {
        dispatch({
          type: editUser.EDIT_FAILED,
        });
      });
  };
}

/** восстановить пароль */
export function forgotPasswordAction(email) {
  return function (dispatch) {
    dispatch({
      type: forgot.FORGOT,
    });
    sendEmail(email)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: forgot.FORGOT_SUCCESS,
          });
        } else {
          dispatch({
            type: forgot.FORGOT_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: forgot.FORGOT_FAILED,
        });
      });
  };
}

/** отправить новый пароль */
export function newPasswordAction(data) {
  return function (dispatch) {
    dispatch({
      type: reset.RESET,
    });
    sendNewPassword(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: reset.RESET_SUCCESS,
          });
          localStorage.setItem(PASSWORD, data.password);
        } else {
          dispatch({
            type: reset.RESET_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: reset.RESET_FAILED,
        });
      });
  };
}

/** выход из системы */
export function logoutRequestAction() {
  return function (dispatch) {
    dispatch({
      type: logout.LOGOUT,
    });
    logoutRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: logout.LOGOUT_SUCCESS
          });
        } else {
          dispatch({
            type: logout.LOGOUT_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: logout.LOGOUT_FAILED,
        });
      });
  };
}

/** удалить данные профиля из хранилища при выходе из системы */
export function deleteUserAction() {
  return function (dispatch) {
    dispatch({
      type: logout.USER_DELETE,
    });
  };
}
