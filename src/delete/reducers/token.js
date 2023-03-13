import { TOKEN, TOKEN_SUCCESS, TOKEN_FAILED } from "../actions/token";

const initialStore = {
  isTokenRequest: false,
  isTokenFailed: false,
};

export const editTokenReducer = (state = initialStore, action) => {
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
        loggedIn: false,
        isTokenFailed: true,
      };
    default:
      return state;
  }
};
