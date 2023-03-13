import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "../../services/reducers/burger-ingredients";
import { burgerConstructorReducer } from "../../services/reducers/burger-constructor";
import { orderReducer } from "../../services/reducers/order";
import { userReducer } from "../../services/reducers/user";
import { editTokenReducer } from "../../services/reducers/token";

export const appReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  user: userReducer,
  token: editTokenReducer,
});
