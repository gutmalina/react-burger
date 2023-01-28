import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from '../actions/actions';

const initialStore = {
  ingredient: {}
};

export const ingredientDetailsModalReducer = (state= initialStore, action) => {
  switch (action.type) {
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
    default:
      return state
  }
};
