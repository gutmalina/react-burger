import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../../constants/index';
import { TWsActions } from '../../actions/ws-actions/types';
import { TWsMessage } from '../../../utils/types';

export type TWsStore = {
  wsConnected: boolean,
  message: TWsMessage | null,
  error?: Event,
}

const initialStore: TWsStore = {
  wsConnected: false,
  message: null,
  error: undefined,
}

export const wsReducer = (state = initialStore, action: TWsActions): TWsStore => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };
      case WS_GET_MESSAGE:
        return {
          ...state,
          error: undefined,
          message: action.payload
        };
    default:
      return state;
  }
};
