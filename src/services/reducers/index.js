import { appReducer } from "./app";
import { LOGOUT } from "../actions/logout";

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
