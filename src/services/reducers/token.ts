import { TOKEN, TOKEN_SUCCESS, TOKEN_FAILED } from "../constants/index";
import { TTokenActions } from "../actions/token/types";

type TTokenStore = {
  isTokenRequest: boolean,
  isTokenFailed: boolean,
};

const initialStore: TTokenStore = {
  isTokenRequest: false,
  isTokenFailed: false,
};

export const editTokenReducer = (state = initialStore, action: TTokenActions): TTokenStore => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        isTokenRequest: true,
        isTokenFailed: false,
      };
    case TOKEN_SUCCESS:
      return {
        ...state,
        isTokenRequest: false,
      };
    case TOKEN_FAILED:
      return {
        ...state,
        isTokenFailed: true,
      };
    default:
      return state;
  }
};
