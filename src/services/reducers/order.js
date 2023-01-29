import {
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  CLOSE_ORDER,
  SUM_ORDER,
} from '../actions/actions';

const initialStore = {
  order: {},
  orderFailed: false,
  orderRequest: false,
  sum: 0
};

export const orderReducer = (state= initialStore, action) => {
  switch (action.type) {
    case MAKE_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false
      }
    }
    case MAKE_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        order: {},
        orderFailed: false,
        orderRequest: false
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
