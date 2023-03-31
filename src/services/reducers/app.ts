import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients/burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor/burger-constructor";
import { orderReducer } from "./order/order";
import { userReducer } from "./user/user";
import { editTokenReducer } from "./token/token";
import { wsReducer } from "./ws-reducers/ws-reducers";

export const appReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
  token: editTokenReducer,
  wsReducer: wsReducer
});

