import { GET_INGREDIENTS } from "../services/actions/actions";
import { BASE_URL } from "./config";
import { getCookie } from "./cookie";

/** проверить ответ*/
const checkResponse = (res)=>{
  if(res.ok){
    return res.json()
  }else{
    Promise.reject(res.status)
  }
};

/** получить массива ингридиентов */
export const getIngredients = ()=> {
  return fetch(`${BASE_URL}/ingredients`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  })
    .then(res=>checkResponse(res))
};

/** отправить заказ и получить номер заказа */
export const getOrder = (isIdIngredients) => {
 return fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": isIdIngredients
      })
    })
    .then(res=>checkResponse(res))
};

/** регистрация пользователя */
export const registerRequest = (user) => {
  return fetch(`${BASE_URL}/auth/register `, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password
    })
  })
  .then(checkResponse);
};

/** авторизация пользователя */
export const loginRequest = (user) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + getCookie('accessToken')
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
  .then(checkResponse)
};

/** получить данные профиля */
export const getProfile = () => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + getCookie('accessToken')
    },
  })
  .then(checkResponse)
}

/** восстановить пароль */
export const sendEmail = (email) => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  })
  .then(checkResponse)
};

/** отправить новый пароль */
export const sendNewPassword = (data) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password: data.password,
      token: data.code
    })
  })
  .then(checkResponse)
};
