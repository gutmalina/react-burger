import { loginRequest } from '../../utils/burger-api';
import { setCookie } from '../../utils/cookie';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';


export function authenticationAction(user) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    loginRequest(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            user: res.user,
            isLoggedIn: true
          })
          setCookie('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken)
        } else {
          dispatch({
            type: LOGIN_FAILURE
          })
        }
      })
      .catch( err => {
        dispatch({
            type: LOGIN_FAILURE
        })
      })
  }
};
