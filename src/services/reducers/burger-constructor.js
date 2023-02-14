import {
  ADD_BUN,
  ADD_FILLING,
  UPDATE_FILLING,
  REMOVE_FILLING,
} from "../actions/burger-constructor";

const initialStore = {
  burger: {
    bun: [],
    filling: [],
  },
};

export const burgerConstructorReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        burger: {
          ...state.burger,
          bun: [action.bun],
        },
      };
    }
    case ADD_FILLING: {
      return {
        ...state,
        burger: {
          ...state.burger,
          filling: [...state.burger.filling, action.filling],
        },
      };
    }
    case REMOVE_FILLING: {
      return {
        ...state,
        burger: {
          ...state.burger,
          filling: [
            ...state.burger.filling.filter(
              (item) => item.keyid !== action.keyid
            ),
          ],
        },
      };
    }
    case UPDATE_FILLING: {
      return {
        ...state,
        burger: {
          ...state.burger,
          filling: action.filling,
        },
      };
    }
    default:
      return state;
  }
};
