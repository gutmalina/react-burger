import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerConstructorReducer } from './burger-constructor';
import { ingredientDetailsModalReducer } from './ingredient-details-modal';
import { orderReducer } from './order';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetailsModal: ingredientDetailsModalReducer,
  order: orderReducer,
  user: userReducer
});
