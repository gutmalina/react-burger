import { appReducer } from "./app";
import { LOGOUT } from "../constants/index";

export const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
