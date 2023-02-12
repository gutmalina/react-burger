import { BASE_URL } from "./config";
import { getCookie } from "./cookie";
import { tokenConstants } from "./constants";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

/** проверить ответ*/
const checkResponse = (res)=>{
  if(res.ok){
    return res.json()
  }else{
    return res.json().then((data)=>{
      return data
    })
  }
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
      "Authorization": 'Bearer ' + getCookie(ACCESS_TOKEN)
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
  .then(checkResponse)
};



/** обновление токена */
export const editToken = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN)
    })
  })
  .then(checkResponse)
};
