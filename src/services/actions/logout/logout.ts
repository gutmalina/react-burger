import { logoutRequest } from "../../../utils/burger-api";
import { LOGOUT } from "../../constants/index";
import { AppDispatch, AppThunk } from '../../types/index';
import { TResponseMessage } from "../../../utils/types";

/** выход из системы */
export const logoutAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    logoutRequest()
      .then((res: TResponseMessage) => {
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
