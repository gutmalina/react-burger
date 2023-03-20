import { editToken } from "../../../utils/auth";
import { setCookie } from "../../../utils/cookie";
import { tokenConstants } from "../../../utils/constants";
import {
  TOKEN,
  TOKEN_SUCCESS,
  TOKEN_FAILED,
} from "../../constants/index";
import { AppDispatch, AppThunk } from '../../types/index';
import { TResponseToken } from "../../../utils/types";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

/** обновление токена */
export const editTokenAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: TOKEN,
    });
    editToken()
      .then((res: TResponseToken) => {
        if (res && res.success) {
          dispatch({
            type: TOKEN_SUCCESS,
          });
          setCookie(ACCESS_TOKEN, res.accessToken);
          localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
        } else {
          dispatch({
            type: TOKEN_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: TOKEN_FAILED,
        });
      });
  };
}
