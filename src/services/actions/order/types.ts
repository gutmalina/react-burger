import {
  MAKE_ORDER,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  CLOSE_ORDER,
  SUM_ORDER,
} from "../../constants/index";

export interface IMakeOrderAction {
  readonly type: typeof MAKE_ORDER;
};

export interface IMakeOrderSuccessAction {
  readonly type: typeof MAKE_ORDER_SUCCESS;
  readonly order: {
    order: {
      number: string
    }
  }
};

export interface IMakeOrderFailedAction {
  readonly type: typeof MAKE_ORDER_FAILED;
};

export interface ICloseOrderAction {
  readonly type: typeof CLOSE_ORDER;
};

export interface ISumOrderAction {
  readonly type: typeof SUM_ORDER;
  readonly sum: number
};

export type TOrderActions =
  | IMakeOrderAction
  | IMakeOrderSuccessAction
  | IMakeOrderFailedAction
  | ICloseOrderAction
  | ISumOrderAction;
