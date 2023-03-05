import { tokenConstants } from "./constants";
import { TUser, TLoginUser } from "./types";
import { request } from "./api";

const { REFRESH_TOKEN } = tokenConstants;

/** регистрация пользователя */
export const registerRequest = (user: TUser) =>
  request("/auth/register", "POST", {
    name: user.name,
    email: user.email,
    password: user.password,
  });

/** авторизация пользователя */
export const loginRequest = (user: TLoginUser) =>
  request("/auth/login", "POST", {
    email: user.email,
    password: user.password,
  });

/** обновление токена */
export const editToken = () =>
  request("/auth/token", "POST", {
    token: localStorage.getItem(REFRESH_TOKEN),
  });
