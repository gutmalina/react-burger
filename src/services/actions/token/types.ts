import {
  TOKEN,
  TOKEN_SUCCESS,
  TOKEN_FAILED,
} from "../../constants/index";

export interface ITokenAction {
  readonly type: typeof TOKEN;
};

export interface ITokenSuccessAction {
  readonly type: typeof TOKEN_SUCCESS;
};

export interface ITokenFailedAction {
  readonly type: typeof TOKEN_FAILED;
};

export type TTokenActions =
  | ITokenAction
  | ITokenSuccessAction
  | ITokenFailedAction;
