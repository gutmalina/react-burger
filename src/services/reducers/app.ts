import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { editTokenReducer } from "./token";
import { wsReducer } from "./ws-reducers";

export const appReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
  token: editTokenReducer,
  wsReducer: wsReducer
});

