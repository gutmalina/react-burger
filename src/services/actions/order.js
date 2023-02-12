
import {
  getOrder
} from "../../utils/burger-api";

export const MAKE_ORDER = 'MAKE_ORDER';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED';
export const CLOSE_ORDER = 'CLOSE_ORDER';
export const SUM_ORDER = 'SUM_ORDER';

/** отправить заказ и получить номер */
export function getOrderAction(idIngredients) {
  return function(dispatch) {
    dispatch({
      type: MAKE_ORDER
    })
    getOrder(idIngredients)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: MAKE_ORDER_SUCCESS,
            order: res
          })
        } else {
          dispatch({
            type: MAKE_ORDER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: MAKE_ORDER_FAILED
        })
      })
  }
};

/** закрыть модальное окно и удалить данные заказа */
export const closeOrder = () => ({
  type: CLOSE_ORDER
});

/** сумма заказа */
export const sumOrder = (sum)=>({
  type: SUM_ORDER,
  sum
});



