// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, RootState } from "../types";
import { getCookie } from "../../utils/cookie";
import { tokenConstants } from "../../utils/constants";
import { IWsActions } from "../types";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: IWsActions
): Middleware => {
  const { ACCESS_TOKEN } = tokenConstants;
  const {
    wsInit,
    wsInitUser,
    onOpen,
    onError,
    onMessage,
    onClose,
    close,
    wsSendMessage,
  } = wsActions;

  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { isLoggedIn } = getState().user;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (type === wsInitUser && isLoggedIn) {
        socket = new WebSocket(
          `${wsUrl}?token=${getCookie(ACCESS_TOKEN)}`
        );
      }

      if (socket) {
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: MessageEvent) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = { ...payload, token: getCookie(ACCESS_TOKEN) };
          socket.send(JSON.stringify(message));
        }

        if (type === close) {
          socket.close();
        }
      }

      next(action);
    };
  };
};
