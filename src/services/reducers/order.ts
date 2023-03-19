import {
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  GET_ORDER_FEED,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_FEED_FAILED,
  CLOSE_ORDER,
  SUM_ORDER,
} from '../constants/index';
import { TOrderActions } from '../actions/order/types';
import { TWsOrders } from '../../utils/types';

type TOrderStore = {
  order: string,
  isOrderRequest: boolean,
  isOrderFailed: boolean,
  isOrderFeedRequest: boolean,
  isOrderFeedFailed: boolean,
  orderFeed: TWsOrders[],
  sum: number
};

const initialStore: TOrderStore = {
  order: "",
  isOrderRequest: false,
  isOrderFailed: false,
  isOrderFeedRequest: false,
  isOrderFeedFailed: false,
  orderFeed: [],
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
    case GET_ORDER_FEED: {
      return {
        ...state,
        isOrderFeedRequest: true,
        isOrderFeedFailed: false
      }
    }
    case GET_ORDER_FEED_SUCCESS: {
      return {
        ...state,
        orderFeed: action.orderFeed,
        isOrderFeedRequest: false
      }
    }
    case GET_ORDER_FEED_FAILED: {
      return {
        ...state,
        isOrderFeedRequest: false,
        isOrderFeedFailed: true
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        order: "",
        orderFeed: [],
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
