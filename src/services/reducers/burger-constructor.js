import {
  ADD_BURGER_BUN,
  ADD_BURGER_FILLING,
  UPDATE_BURGER_FILLING,
  REMOVE_BURGER_FILLING
} from "../actions/actions";

const initialStore = {
  burger:
    {
      bun: {},
      filling: []
    }
};

export const burgerConstructorReducer = (state= initialStore, action) => {
  switch (action.type) {
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
    default:
      return state
  }
};
