import { tokenConstants } from "./constants";
import { request, fetchWithToken } from "./api";
import { TUser, TEmailUser, TNewPassword } from "./types";

const { REFRESH_TOKEN } = tokenConstants;

/** получить массива ингридиентов */
export const getIngredients = () => request("/ingredients", "GET");

/** отправить заказ и получить номер заказа */
export const getOrder = (isIdIngredients: string[]) => {
  return fetchWithToken("/orders", "POST", { ingredients: isIdIngredients });
}

/** получить данные выбранного заказа */
export const getOrderFeed = (number: number | string) => {
  return fetchWithToken(`/orders/${number}`, "GET");
}

/** выход из системы */
export const logoutRequest = () =>
  request("/auth/logout", "POST", {
    token: localStorage.getItem(REFRESH_TOKEN),
  });

/** восстановить пароль */
export const sendEmail = (email: TEmailUser) =>
  request("/password-reset", "POST", { email: email });

/** отправить новый пароль */
export const sendNewPassword = (data: TNewPassword) =>
  request("/password-reset/reset", "POST", {
    password: data.password,
    token: data.code,
  });

/** получить данные профиля */
export const getProfile = () => {
  return fetchWithToken("/auth/user", "GET");
};

/** обновить данные профиля */
export const editProfile = (user: TUser) => {
  return fetchWithToken("/auth/user", "PATCH", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
};
