import { v4 as random } from "uuid";

import { ADD_BUN,
  ADD_FILLING,
  REMOVE_FILLING,
  UPDATE_FILLING,
  BURGER_REMOVE } from "../../constants";
import { IAddBunAction, IRemoveFillingAction, IUpDateFillingAction, IRemoveBurgerAction } from "./types";
import { TIngredient } from "../../../utils/types";

/** добвить булочку */
export const addBurgerBunAction = (bun: TIngredient): IAddBunAction => ({
  type: ADD_BUN,
  bun,
});

/** добавить начинку */
export const addBurgerFillingAction = (filling: TIngredient) => ({
  type: ADD_FILLING,
  filling: { ...filling, keyid: random()},
});

/** удалить начинку */
export const removeBurgerFillingAction = (keyid: any): IRemoveFillingAction => ({
  type: REMOVE_FILLING,
  keyid,
});

/** поменять начинку */
export const updateBurgerFillingAction = (filling: TIngredient[]): IUpDateFillingAction => ({
  type: UPDATE_FILLING,
  filling,
});

/** удалить burger после успешного заказа */
export const removeBurgerAction = (): IRemoveBurgerAction => ({
  type: BURGER_REMOVE
});
