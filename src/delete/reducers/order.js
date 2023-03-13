import {
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  CLOSE_ORDER,
  SUM_ORDER,
} from '../actions/order';

const initialStore = {
  order: "",
  isOrderRequest: false,
  isOrderFailed: false,
  sum: 0
};

export const orderReducer = (state= initialStore, action) => {
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
