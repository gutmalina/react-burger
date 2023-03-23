import { ThunkAction } from 'redux-thunk';
import { store } from '../store';
import { TBurgerConstructorActions } from '../actions/burger-constructor/types';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients/types';
import { TLogoutActions } from '../actions/logout/types';
import { TOrderActions } from '../actions/order/types';
import { TTokenActions } from '../actions/token/types';
import { TUserActions } from '../actions/user/types';
import { TWsActions } from '../actions/ws-actions/types';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../constants/index';

export type RootState = ReturnType<typeof store.getState>;

/** Типизация всех экшенов приложения */
type TApplicationActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TLogoutActions
  | TOrderActions
  | TTokenActions
  | TUserActions
  | TWsActions;

/** Типизация thunk'ов в нашем приложении */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>

/** Типизация метода dispatch для проверки на валидность отправляемого экшена */
export type AppDispatch<TReturnType = void> = (action: TApplicationActions | AppThunk) => TReturnType;

export interface IWsActions {
  wsInit: typeof WS_CONNECTION_START;
  wsInitUser: typeof WS_CONNECTION_USER_START;
  wsSendMessage: typeof WS_SEND_MESSAGE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  close: typeof WS_CONNECTION_CLOSE;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
}
