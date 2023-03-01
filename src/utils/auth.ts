import { BASE_URL } from "./config";
import { getCookie, setCookie } from "./cookie";
import { tokenConstants } from "./constants";
import { TUser, TLoginUser } from "./types";

const { ACCESS_TOKEN, REFRESH_TOKEN } = tokenConstants;

/** проверить ответ*/
const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => Promise.reject(err));
  }
};

/** регистрация пользователя */
export const registerRequest = (user: TUser) => {
  return fetch(`${BASE_URL}/auth/register `, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
  }).then(res => checkResponse(res));
};

/** авторизация пользователя */
export const loginRequest = (user: TLoginUser) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  }).then(res => checkResponse(res));
};

/** обновление токена */
export const editToken = () => {
  return fetch(`${BASE_URL}/auth/token`, {
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

/** обертка для запросов где может понадобиться повторный запрос при невалидном токене */
export const fetchWithToken = async (url: string, options: RequestInit): Promise<Response> => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired" || err.status === 403) {
      const refreshData = await editToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem(REFRESH_TOKEN, refreshData.refreshToken);
      setCookie(ACCESS_TOKEN, refreshData.accessToken);
      (options.headers as { [key: string]: string }).authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
