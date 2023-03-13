import { v4 as random } from "uuid";

export const ADD_BUN = "ADD_BUN";
export const ADD_FILLING = "ADD_FILLING";
export const REMOVE_FILLING = "REMOVE_FILLING";
export const UPDATE_FILLING = "UPDATE_FILLING";

/** добвить булочку */
export const addBurgerBun = (bun) => ({
  type: ADD_BUN,
  bun,
});

/** добавить начинку */
export const addBurgerFilling = (filling) => ({
  type: ADD_FILLING,
  filling: { ...filling, keyid: random() },
});

/** удалить начинку */
export const removeBurgerFilling = (keyid) => ({
  type: REMOVE_FILLING,
  keyid,
});

/** поменять начинку */
export const updateBurgerFilling = (filling) => ({
  type: UPDATE_FILLING,
  filling,
});
