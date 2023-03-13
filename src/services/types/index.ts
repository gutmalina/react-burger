import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TBurgerConstructorActions } from '../actions/burger-constructor/types';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients/types';
import { TLogoutActions } from '../actions/logout/types';
import { TOrderActions } from '../actions/order/types';
import { TTokenActions } from '../actions/token/types';
import { TUserActions } from '../actions/user/types';

export type RootState = ReturnType<typeof store.getState>;

/** Типизация всех экшенов приложения */
type TApplicationActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TLogoutActions
  | TOrderActions
  | TTokenActions
  | TUserActions;

/** Типизация thunk'ов в нашем приложении */
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

/** Типизация метода dispatch для проверки на валидность отправляемого экшена */
export type AppDispatch = typeof store.dispatch;
