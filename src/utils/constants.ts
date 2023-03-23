export const headerConstants = {
  CONSTRUCTOR: "Конструктор",
  LIST_ORDER: "Лента заказов",
  PERSONAL_ACCOUNT: "Личный кабинет",
};

export const scrollBarConstants = {
  TYPE_INGREDIENTS: "bar_ingredients",
  TYPE_DETAILS_ORDER: "bar_details",
  TYPE_ORDERS: "bar_orders",
  TYPE_FEED: "bar_feed",
  TYPE_ORDER: "bar_order",
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
  FEED_TITLE: "Лента заказов",
  FEED_STATUS_DONE: "Готовы:",
  FEED_STATUS_PENDING: "В работе:",
  FEED_TOTAL: "Выполнено за все время:",
  FEED_TOTAL_TODAY: "Выполнено за сегодня:",
  ORDER_INFO_STRUCTURE: "Состав:",
  ORDER_DETAILS_ID: "идентификатор заказа",
  ORDER_DETAILS_STATUS: "Ваш заказ начали готовить",
  ORDER_DETAILS_WAIT: "Дождитесь готовности на орбитальной станции",
  PRELOADER_TITLE: "Обработка данных",
};

export const ingredientConstants = {
  BUN_TOP: "(верх)",
  BUN_BOTTOM: "(низ)",
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
  ORDER_HISTORY_ID: "/profile/orders/:id",
  INGREDIENTS: "/ingredients/:",
  INGREDIENTS_ID: "/ingredients/:id",
  FEED: "/feed",
  FEED_ID: "/feed/:id",
  NOT_FOUND: "*",
};

export const tokenConstants = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  PASSWORD: "password",
};

export const orderConstants = {
  STATUS_CREATED: "Создан",
  STATUS_COOK: "Готовиться",
  STATUS_DONE: "Выполнен",
  STATUS_COOK_ENG: "pending",
  STATUS_DONE_ENG: "done",
  STATUS_CREATED_ENG: 'created',
  TYPE_ORDER: "card_type_order",
  TYPE_ORDER_FEED: "card_type_order_feed",
  TYPE_ORDER_HISTORY: "card_type_order_history",
}

export const elementConstants = {
  TYPE_ELEMENT_CENTER: "center",
  TYPE_ELEMENT_TOP: "top",
  TYPE_ELEMENT_BOTTOM: "bottom"
}

export const wsConstants = {
  WS_ALL: "/all"
}
