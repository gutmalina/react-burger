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
import { TLoginUser, TGetUser } from "../../../utils/types";

export interface IRegisterAction {
  readonly type: typeof REGISTER;
};

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
};

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
};

export interface ILoginAction {
  readonly type: typeof LOGIN;
};

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly user: TLoginUser
};

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
};

export interface IGetUserAction {
  readonly type: typeof GET_USER;
};

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TGetUser
};

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
};

export interface IEditAction {
  readonly type: typeof EDIT;
};

export interface IEditSuccessAction {
  readonly type: typeof EDIT_SUCCESS;
  readonly user: TGetUser
};

export interface IEditFailedAction {
  readonly type: typeof EDIT_FAILED;
};

export interface IForgotAction {
  readonly type: typeof FORGOT;
};

export interface IForgotSuccessAction {
  readonly type: typeof FORGOT_SUCCESS;
};

export interface IForgotFailedAction {
  readonly type: typeof FORGOT_FAILED;
};

export interface IResetAction {
  readonly type: typeof RESET;
};

export interface IResetSuccessAction {
  readonly type: typeof RESET_SUCCESS;
};

export interface IResetFailedAction {
  readonly type: typeof RESET_FAILED;
};

export type TUserActions =
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IEditAction
  | IEditSuccessAction
  | IEditFailedAction
  | IForgotAction
  | IForgotSuccessAction
  | IForgotFailedAction
  | IResetAction
  | IResetSuccessAction
  | IResetFailedAction;
