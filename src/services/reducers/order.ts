import {
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  CLOSE_ORDER,
  SUM_ORDER,
} from '../constants/index';
import { TOrderActions } from '../actions/order/types';

type TOrderStore = {
  order: string,
  isOrderRequest: boolean,
  isOrderFailed: boolean,
  sum: number
};

const initialStore: TOrderStore = {
  order: "",
  isOrderRequest: false,
  isOrderFailed: false,
  sum: 0
};

export const orderReducer = (state= initialStore, action: TOrderActions): TOrderStore => {
  switch (action.type) {
    case MAKE_ORDER: {
      return {
        ...state,
        isOrderRequest: true,
        isOrderFailed: false
      }
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order.order.number,
        isOrderRequest: false
      }
    }
    case MAKE_ORDER_FAILED: {
      return {
        ...state,
        isOrderRequest: false,
        isOrderFailed: true
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        order: "",
        isOrderFailed: false,
        isOrderRequest: false
      }
    }
    case SUM_ORDER: {
      return {
        ...state,
        sum: action.sum
      }
    }
    default:
      return state
  }
};
