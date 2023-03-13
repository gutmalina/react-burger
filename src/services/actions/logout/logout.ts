import { logoutRequest } from "../../../utils/burger-api";
import { LOGOUT } from "../../constants/index";

/** выход из системы */
export const logoutAction = () => {
  return function (dispatch: any) {
    logoutRequest()
      .then((res: any) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT,
          });
        }
      })
      .catch((err: any) => {
        return err;
      });
  };
};
