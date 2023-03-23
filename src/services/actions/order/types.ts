import {
  MAKE_ORDER,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  GET_ORDER_FEED,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_FEED_FAILED,
  CLOSE_ORDER,
  SUM_ORDER,
} from "../../constants/index";
import { TWsOrders, TResponseMakeOrder } from "../../../utils/types";

export interface IMakeOrderAction {
  readonly type: typeof MAKE_ORDER;
};

export interface IMakeOrderSuccessAction {
  readonly type: typeof MAKE_ORDER_SUCCESS;
  readonly order: TResponseMakeOrder
};

export interface IMakeOrderFailedAction {
  readonly type: typeof MAKE_ORDER_FAILED;
};

export interface IGetOrderFeedAction {
  readonly type: typeof GET_ORDER_FEED;
};

export interface IGetOrderFeedSuccessAction {
  readonly type: typeof GET_ORDER_FEED_SUCCESS;
  readonly orderFeed: TWsOrders[]
};

export interface IGetOrderFeedFailedAction {
  readonly type: typeof GET_ORDER_FEED_FAILED;
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
  | IGetOrderFeedAction
  | IGetOrderFeedSuccessAction
  | IGetOrderFeedFailedAction
  | ICloseOrderAction
  | ISumOrderAction;
