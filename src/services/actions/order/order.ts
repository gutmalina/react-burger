import { getOrder, getOrderFeed } from "../../../utils/burger-api";
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
import { ICloseOrderAction, ISumOrderAction } from "./types";
import { AppDispatch, AppThunk } from '../../types/index';

/** отправить заказ и получить номер */
export const getOrderAction = (idIngredients: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: MAKE_ORDER,
    });
    getOrder(idIngredients)
      .then((res: any) => {
        if (res && res.success) {
          dispatch({
            type: MAKE_ORDER_SUCCESS,
            order: res,
          });
        } else {
          dispatch({
            type: MAKE_ORDER_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: MAKE_ORDER_FAILED,
        });
      });
  };
}

/** получить данные выбранного заказа */
export const getOrderFeedAction = (numberOrder: string): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_FEED,
    });
    getOrderFeed(numberOrder)
      .then((res: any) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_FEED_SUCCESS,
            orderFeed: res.orders,
          });
        } else {
          dispatch({
            type: GET_ORDER_FEED_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: GET_ORDER_FEED_FAILED,
        });
      });
  };
}
/** закрыть модальное окно и удалить данные заказа */
export const closeOrderAction = (): ICloseOrderAction => ({
  type: CLOSE_ORDER,
});

/** сумма заказа */
export const sumOrderAction = (sum: number): ISumOrderAction => ({
  type: SUM_ORDER,
  sum,
});
