import { BASE_URL } from "./config";
import { getCookie } from "./cookie.ts";
import { tokenConstants } from "./constants";
import { fetchWithToken } from "./auth";
import { TUser, TEmailUser, TNewPassword } from "./types";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

/** проверить ответ*/
const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => Promise.reject(err));
  }
};

/** получить массива ингридиентов */
export const getIngredients = () => {
  return fetch(`${BASE_URL}/ingredients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => checkResponse(res));
};

/** отправить заказ и получить номер заказа */
export const getOrder = (isIdIngredients: string) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: isIdIngredients,
    }),
  }).then(res => checkResponse(res));
};

/** получить данные профиля */
export const getProfile = () => {
  return fetchWithToken(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
  }).then((data: any) => {
    if (data.success) {
      return data;
    }
    return Promise.reject(data);
  });
};

/** обновить данные профиля */
export const editProfile = (user: TUser) => {
  return fetchWithToken(`${BASE_URL}/auth/user`, {
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
  }).then((data: any) => {
    if (data.success) {
      return data;
    }
    return Promise.reject(data);
  });
};

/** восстановить пароль */
export const sendEmail = (email: TEmailUser) => {
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(res => checkResponse(res));
};

/** отправить новый пароль */
export const sendNewPassword = (data: TNewPassword) => {
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
  }).then(res => checkResponse(res));
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
  }).then(res => checkResponse(res));
};
