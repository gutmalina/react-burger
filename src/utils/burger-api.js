import { BASE_URL } from "./config";
import { getCookie } from "./cookie";
import { tokenConstants } from "./constants";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

/** проверить ответ*/
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((data) => {
      return data;
    });
  }
};

/** получить массива ингридиентов */
export const getIngredients = () => {
  return fetch(`${BASE_URL}/ingredients`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};

/** отправить заказ и получить номер заказа */
export const getOrder = (isIdIngredients) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: isIdIngredients,
    }),
  }).then((res) => checkResponse(res));
};

/** получить данные профиля */
export const getProfile = () => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
  }).then(checkResponse);
};

/** обновить данные профиля */
export const editProfile = (user) => {
  return fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
  }).then(checkResponse);
};

/** восстановить пароль */
export const sendEmail = (email) => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkResponse);
};

/** отправить новый пароль */
export const sendNewPassword = (data) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: data.password,
      token: data.code,
    }),
  }).then(checkResponse);
};

/** выход из системы */
export const logoutRequest = () => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN),
    }),
  }).then(checkResponse);
};
