import { editToken } from "../../utils/auth";
import { setCookie } from "../../utils/cookie.ts";
import { tokenConstants } from "../../utils/constants";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

export const TOKEN = "TOKEN";
export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_FAILED = "TOKEN_FAILED";

/** обновление токена */
export function editTokenAction() {
  return function (dispatch) {
    dispatch({
      type: TOKEN,
    });
    editToken()
      .then((res) => {
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
      .catch((err) => {
        dispatch({
          type: TOKEN_FAILED,
        });
      });
  };
}
