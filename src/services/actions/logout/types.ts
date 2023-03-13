import { LOGOUT } from "../../constants/index";

export interface ICLogoutAction {
  readonly type: typeof LOGOUT;
}

export type TLogoutActions = ICLogoutAction;
