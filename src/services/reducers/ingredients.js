import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ACTIVE_TAB_BAR
} from "../actions/actions";

const initialStore = {
  ingredients: [],
  ingredientsFailed: false,
  ingredientsRequest: false,
  activeTab: 'bun'
};

export const ingredientsReducer = (state= initialStore, action) => {
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
    case ACTIVE_TAB_BAR: {
      return {
        ...state,
        activeTab: action.activeTab
      }
    }
    default:
      return state
  }
};
