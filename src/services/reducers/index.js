import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { editTokenReducer } from "./token";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
  token: editTokenReducer,
});
