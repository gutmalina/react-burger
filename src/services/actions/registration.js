import { registerRequest } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookie";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function registrationAction(user) {
  return function(dispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    registerRequest(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS
          })
          setCookie('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken)
        } else {
          dispatch({
            type: REGISTER_FAILURE
          })
        }
      })
      .catch( err => {
        dispatch({
            type: REGISTER_FAILURE
        })
      })
  }
};
