import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ACTIVE_TAB_BAR,
} from "../actions/burger-ingredients";

const initialStore = {
  ingredients: [],
  isIngredientsRequest: false,
  isIngredientsFailed: false,
  activeTab: "bun",
};

export const burgerIngredientsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        isIngredientsRequest: true,
        isIngredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        isIngredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        isIngredientsRequest: false,
        isIngredientsFailed: true,
      };
    }
    case ACTIVE_TAB_BAR: {
      return {
        ...state,
        activeTab: action.activeTab,
      };
    }
    default:
      return state;
  }
};
