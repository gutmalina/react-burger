import {
  getProfile,
  sendEmail,
  sendNewPassword
} from "../../utils/burger-api";
import { getCookie } from '../../utils/cookie';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';



export const USER_EMAIL_SUCCESS = 'USER_EMAIL_SUCCESS';
export const USER_NEW_PASSWORD_SUCCESS = 'USER_NEW_PASSWORD_SUCCESS';




export function getProfileAction(){
  const user = getCookie('accessToken');
  return function(dispatch) {
    dispatch({
      type: USER_REQUEST
    })
    getProfile(user)
      .then( res  => {
        if (res && res.success) {
          dispatch({
            type: USER_SUCCESS,
            user: res.user
          })
        } else {
          dispatch({
            type: USER_FAILED
          })
        }
      })
      .catch( err => {
        dispatch({
            type: USER_FAILED
        })
      })
  }
}




export function forgotPassword(email) {
  // return function(dispatch) {
  //   dispatch({
  //     type: USER
  //   })
  //   sendEmail(email)
  //     .then( res  => {
  //       if (res && res.success) {
  //         dispatch({
  //           type: USER_EMAIL_SUCCESS,
  //           isForgot: res.success
  //         })
  //       } else {
  //         dispatch({
  //           type: USER_FAILED
  //         })
  //       }
  //     })
  //     .catch( err => {
  //       dispatch({
  //           type: USER_FAILED
  //       })
  //     })
  // }
};

export function newPassword(data) {
  // return function(dispatch) {
  //   dispatch({
  //     type: USER
  //   })
  //   sendNewPassword(data)
  //     .then( res  => {
  //       if (res && res.success) {
  //         dispatch({
  //           type: USER_NEW_PASSWORD_SUCCESS,
  //           isReset: res.success
  //         })
  //       } else {
  //         dispatch({
  //           type: USER_FAILED
  //         })
  //       }
  //     })
  //     .catch( err => {
  //       dispatch({
  //           type: USER_FAILED
  //       })
  //     })
  // }
};

