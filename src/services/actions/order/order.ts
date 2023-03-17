import { getOrder } from "../../../utils/burger-api";
import {
  MAKE_ORDER,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
  CLOSE_ORDER,
  SUM_ORDER,
} from "../../constants/index";
import { ICloseOrderAction, ISumOrderAction } from "./types";

/** отправить заказ и получить номер */
export const getOrderAction = (idIngredients: string[]) => {
  return function (dispatch: any) {
    dispatch({
      type: MAKE_ORDER,
    });
    getOrder(idIngredients)
      .then((res: any) => {
        console.log(res)
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

/** закрыть модальное окно и удалить данные заказа */
export const closeOrder = (): ICloseOrderAction => ({
  type: CLOSE_ORDER,
});

/** сумма заказа */
export const sumOrder = (sum: number): ISumOrderAction => ({
  type: SUM_ORDER,
  sum,
});
