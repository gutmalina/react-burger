import { BASE_URL } from "./config";
import { getCookie } from "./cookie";
import { tokenConstants } from "./constants";
import { fetchWithToken } from "./auth";
import { TUser, TEmailUser, TNewPassword } from "./types";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;
const handleOptions = (method: string) => {
  const token = getCookie(ACCESS_TOKEN);
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};
/** проверить ответ*/
const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res: any) => {
  return res && res.success ? res : Promise.reject(`Ответ не success: ${res}`);
};

/** универсальная функция запроса с проверкой ответа */
const request = (endpoint: string, method: string, data?: any) => {
  const options = handleOptions(method);

  return fetch(
    `${BASE_URL}${endpoint}`,
    data ? { ...options, body: JSON.stringify(data) } : options
  )
    .then(checkResponse)
    .then(checkSuccess);
};

export const getIngredients = () => request("/ingredients", "GET");

export const getOrder = (isIdIngredients: string) =>
  request("/orders", "POST", { ingredients: isIdIngredients });

export const logoutRequest = () =>
  request("/auth/logout", "POST", {
    token: localStorage.getItem(REFRESH_TOKEN),
  });

export const sendEmail = (email: TEmailUser) =>
  request("/password-reset", "POST", { email: email });

export const sendNewPassword = (data: TNewPassword) =>
  request("/password-reset/reset", "POST", {
    password: data.password,
    token: data.code,
  });

/** получить данные профиля */
export const getProfile = () => {
  const options = handleOptions("GET");
  return fetchWithToken(`${BASE_URL}/auth/user`, options).then(checkSuccess);
};

/** обновить данные профиля */
export const editProfile = (user: TUser) => {
  const options = handleOptions("PATCH");
  return fetchWithToken(`${BASE_URL}/auth/user`, {
    ...options,
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
  }).then(checkSuccess);
};
