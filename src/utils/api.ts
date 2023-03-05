import { BASE_URL } from "./config";
import { setCookie, getCookie } from "./cookie";
import { tokenConstants } from "./constants";
import { editToken } from "./auth";

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

/** обертка для запросов где может понадобиться повторный запрос при невалидном токене */
const fetchWithToken = async (
  url: string,
  method: string,
  data?: any
): Promise<Response> => {
  try {
    const res = await request(url, method, data);
    return await checkSuccess(res);
  } catch (err: any) {
    if (err.message === "jwt expired" || err.status === 403) {
      const refreshData = await editToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem(REFRESH_TOKEN, refreshData.refreshToken);
      setCookie(ACCESS_TOKEN, refreshData.accessToken);
      const res = await request(url, method, data); //повторяем запрос
      return await checkSuccess(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export { handleOptions, checkResponse, checkSuccess, request, fetchWithToken };
