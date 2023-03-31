import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ACTIVE_TAB_BAR,
} from "../../constants/index";
import { TIngredient } from "../../../utils/types";
import { TBurgerIngredientsActions } from "../../actions/burger-ingredients/types";

export type TBurgerIngredientsStore = {
  ingredients: TIngredient[],
  isIngredientsRequest: boolean,
  isIngredientsFailed: boolean,
  activeTab: string,
};

const initialStore: TBurgerIngredientsStore = {
  ingredients: [],
  isIngredientsRequest: false,
  isIngredientsFailed: false,
  activeTab: "bun",
};

export const burgerIngredientsReducer = (state = initialStore, action: TBurgerIngredientsActions): TBurgerIngredientsStore => {
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
