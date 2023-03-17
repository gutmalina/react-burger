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

export const wsConnectionStart = ()=> ({
  type: WS_CONNECTION_START,
});

export const wsConnectionUserStart = () => ({
  type: WS_CONNECTION_USER_START,
});

export const wsConnectionSuccess = () => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionError = (error: any) => ({
  type: WS_CONNECTION_ERROR,
  payload: error
});

export const wsConnectionClose = () => ({
  type: WS_CONNECTION_CLOSE
});

export const wsConnectionClosed = () => ({
    type: WS_CONNECTION_CLOSED
});

export const wsGetMessage = (message: TWsMessage) => ({
  type: WS_GET_MESSAGE,
  payload: message
});

export const wsSendMessage = (message: TWsMessage) =>({
  type: WS_SEND_MESSAGE,
  payload: message
});
