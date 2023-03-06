import { pathConstants } from "./constants";

/** сохранить токен в cookie */
export function setCookie(name: string, value: string, props?: any) {
  const { HOME } = pathConstants
  props = {
    path: HOME,  //задаем корневой адрес для cookies
    ...props
  };
  let newValue = value.split("Bearer ")[1];
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  newValue = encodeURIComponent(newValue);
  let updatedCookie = name + "=" + newValue;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

/** получить токен из cookie */
export function getCookie(name: string) {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp(
      "(?:^|; )" +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/** очистить cookie при выходе из системы */
export function deleteCookie(name: string) {
  setCookie(name, "", { expires: -1 });
}
