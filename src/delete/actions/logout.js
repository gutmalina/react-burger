import { logoutRequest } from "../../utils/burger-api";

export const LOGOUT = 'LOGOUT';

/** выход из системы */
export function logoutAction() {
  return function (dispatch) {
    logoutRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT,
          });
        }
      })
      .catch((err) => {
        return err
      });
  };
}


