import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MAKE_ORDER,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  CLOSE_ORDER,
  ADD_BURGER_BUN,
  ADD_BURGER_FILLING,
  UPDATE_BURGER_FILLING,
  REMOVE_BURGER_FILLING,
  SUM_ORDER,
  ACTIVE_TAB_BAR } from '../actions/actions';

export const initialStore = {
  ingredients: [],
  ingredientsFailed: false,
  ingredientsRequest: false,
  burger:
    {
      bun: {},
      filling: []
    },
  ingredient: {},
  order: {},
  orderFailed: false,
  orderRequest: false,
  sum: 0,
  activeTab: 'bun'
};

export const rootReducer = (state= initialStore, action) => {
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
    case ADD_BURGER_BUN: {
      return {
        ...state,
        burger:
          {
            ...state.burger,
            bun: action.bun
          }
      }
    }
    case ADD_BURGER_FILLING: {
      return {
        ...state,
        burger:
          {
            ...state.burger,
            filling: [...state.burger.filling, action.filling]
          }
      }
    }
    case REMOVE_BURGER_FILLING: {
      return {
        ...state,
        burger:
          {
            ...state.burger,
            filling: [...state.burger.filling.filter(item=> item.keyid !== action.keyid)]
          }
      }
    }
    case UPDATE_BURGER_FILLING: {
      return {
        ...state,
        burger:
          {
            ...state.burger,
            filling: action.filling
          }
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
    case SUM_ORDER: {
      return {
        ...state,
        sum: action.sum
      }
    }
    case ACTIVE_TAB_BAR: {
      return {
        ...state,
        activeTab: action.activeTab
      }
    }
    default:
      return state
  }
}


