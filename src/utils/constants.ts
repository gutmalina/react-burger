export const headerConstants = {
  CONSTRUCTOR: "Конструктор",
  LIST_ORDER: "Лента заказов",
  PERSONAL_ACCOUNT: "Личный кабинет",
};

export const scrollBarConstants = {
  TYPE_INGREDIENTS: "ingredients",
  TYPE_DETAILS_ORDER: "detailsOrder",
};

export const buttonConstants = {
  MAKE_ORDER: "Оформить заказ",
  REGISTER: "Зарегистрироваться",
  GO_IN: "Войти",
  RESTORE: "Восстановить",
  SAVE: "Сохранить",
};

export const linkConstants = {
  REGISTER_LINK: "Зарегистрироваться",
  RESTORE_PASSWORD: "Восстановить пароль",
  GO_IN: "Войти",
  CANCEL: "Отменить",
  BACK: "Назад",
  PROFILE_LINK: "Профиль",
  ORDER_HISTORY_LINK: "История заказов",
  EXIT: "Выход",
};

export const inputConstants = {
  NAME: "Имя",
  LOGIN_NANE: "Логин",
  EMAIL: "Укажите e-mail",
  WRITE_NEW_PASSWORD: "Введите новый пароль",
  WRITE_CODE: "Введите код из письма",
};

export const textConstants = {
  DO_GAMBURGER: "Соберите бургер",
  DETAILS_INGREDIENT: "Детали ингредиента",
  LOGIN: "Вход",
  REGISTRATION: "Регистрация",
  FORGOT_PASSWORD: "Восстановление пароля",
  NOT_FOUND_TEXT: "Страница не найдена",
  NOT_FOUND_NUMBER: "404",
  YOU_NEW_USER: "Вы — новый пользователь?",
  FORGOT_YOUR_PASSWORD: "Забыли пароль?",
  ALREADY_REGISTERED: "Уже зарегистрированы?",
  REMEMBER_PASSWORD: "Вспомнили пароль?",
  PROFILE_PAGE_SUBTITLE:
    "В этом разделе вы можете изменить свои персональные данные",
  SELECT_BUN: "Выберите булку",
  SELECT_FILLING: "Выберите начинку",
};

export const ingredientConstants = {
  BUN_EN: "bun",
  MAIN_EN: "main",
  SAUCE_EN: "sauce",
  BUN_RU: "Булки",
  MAIN_RU: "Начинки",
  SAUCE_RU: "Соусы",
  CALORIES: "Калории,ккал",
  PROTEINS: "Белки, г",
  FAT: "Жиры, г",
  CARBOHYDRATES: "Углеводы, г",
};

export const pathConstants = {
  HOME: "/",
  SIGN_IN: "/login",
  SIGN_UP: "/register",
  FORGOT: "/forgot-password",
  RESET: "/reset-password",
  PROFILE: "/profile",
  ORDER_HISTORY: "/profile/orders",
  INGREDIENTS: "/ingredients/:",
  INGREDIENTS_ID: "/ingredients/:id",
  NOT_FOUND: "*",
};

export const tokenConstants = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  PASSWORD: "password",
};
