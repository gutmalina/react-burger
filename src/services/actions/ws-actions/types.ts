import {
  WS_CONNECTION_START,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../../constants/index';
import { TWsMessage } from '../../../utils/types';

export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
};

export interface IWsConnectionUserStartAction {
  readonly type: typeof WS_CONNECTION_USER_START;
};

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: any
};

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any;
};

export interface IWsConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: any;
};

export interface IWsConnectionGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: TWsMessage;
};

export interface IWsConnectionSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: TWsMessage;
};

export type TWsActions =
  | IWsConnectionStartAction
  | IWsConnectionUserStartAction
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionCloseAction
  | IWsConnectionClosedAction
  | IWsConnectionGetMessageAction
  | IWsConnectionSendMessageAction;
