import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSE,
  WS_SEND_MESSAGE,
} from "./constants";
import { WSS_URL } from "../utils/config";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitUser: WS_CONNECTION_USER_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  onClose: WS_CONNECTION_CLOSED,
  close: WS_CONNECTION_CLOSE,
  wsSendMessage: WS_SEND_MESSAGE,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(WSS_URL, wsActions)
  //   applyMiddleware(
  //     thunk
  )
);

export const store = createStore(rootReducer, enhancer);


// const ws = new WebSocket("ws://norma.nomoreparties.space/orders/all");

// ws.onopen = (event) => {
//   console.log('yes')
// }

// ws.onmessage = (event) => {
//   console.log(`Получены данныe: ${event.data}`)
// }
// }
