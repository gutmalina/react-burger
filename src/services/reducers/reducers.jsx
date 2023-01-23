import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_BURGER,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  CLOSE_ORDER  } from '../actions/actions';

export const initialStore = {
  ingredients: [],
  ingredientsFailed: false,
  ingredientsRequest: false,
  burger: {
    bun: {},
    inside: {}
  },
  ingredient: {},
  order: {},
  orderFailed: false,
  orderRequest: false
};

export const rootReducer = (state=initialStore, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:{
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      }
    }
    case GET_INGREDIENTS_SUCCESS:{
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false
      }
    }
    case GET_INGREDIENTS_FAILED:{
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      }
    }
    case GET_BURGER: {
      return {
        ...state
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient
      }
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredient: {}
      }
    }
    case MAKE_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false
      }
    }
    case MAKE_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        order: {},
        orderFailed: false,
        orderRequest: false
      }
    }
    default:
      return state
  }
}


