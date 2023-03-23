import { setCookie } from "../../../utils/cookie";
import { registerRequest, loginRequest } from "../../../utils/auth";
import {
  getProfile,
  editProfile,
  sendEmail,
  sendNewPassword,
} from "../../../utils/burger-api";
import { tokenConstants } from "../../../utils/constants";
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
} from "../../constants/index";
import { TUser, TLoginUser, TEmailUser, TNewPassword } from "../../../utils/types";
import { AppDispatch, AppThunk } from '../../types/index';
import { TResponseRegister, TResponseMessage, TResponseLogin, TResponseUser } from "../../../utils/types";

const { ACCESS_TOKEN, REFRESH_TOKEN, PASSWORD } = tokenConstants;

/** регистрация пользователя */
export const registrationAction = (user: TUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER,
    });
    registerRequest(user)
      .then((res: TResponseRegister) => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS,
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
          localStorage.setItem(PASSWORD, user.password);
        } else {
          dispatch({
            type: REGISTER_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };
}

/** аутентификация пользователя */
export const authenticationAction = (user: TLoginUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN,
    });
    loginRequest(user)
      .then((res: TResponseLogin) => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
          localStorage.setItem(PASSWORD, user.password);
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}

/** получить данные профиля */
export const getProfileAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER,
    });
    getProfile()
      .then((res: TResponseUser) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: GET_USER_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
};

/** обновить данные профиля */
export const editProfileAction = (user: TUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: EDIT,
    });
    editProfile(user)
      .then((res: TResponseUser) => {
        if (res && res.success) {
          dispatch({
            type: EDIT_SUCCESS,
            user: res.user,
          });
        } else {
          dispatch({
            type: EDIT_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: EDIT_FAILED,
        });
      });
  };
}

/** восстановить пароль */
export const forgotPasswordAction = (email: TEmailUser): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT,
    });
    sendEmail(email)
      .then((res: TResponseMessage) => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_SUCCESS,
          });
        } else {
          dispatch({
            type: FORGOT_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: FORGOT_FAILED,
        });
      });
  };
}

/** отправить новый пароль */
export const newPasswordAction = (data: TNewPassword): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET,
    });
    sendNewPassword(data)
      .then((res: TResponseMessage) => {
        if (res && res.success) {
          dispatch({
            type: RESET_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: RESET_FAILED,
        });
      });
  };
}
