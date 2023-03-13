import { v4 as random } from "uuid";

import { ADD_BUN,
  ADD_FILLING,
  REMOVE_FILLING,
  UPDATE_FILLING, } from "../../constants";
import { IAddBunAction, IAddFillingAction, IRemoveFillingAction, IUpDateFillingAction } from "./types";
import { TIngredient } from "../../../utils/types";

/** добвить булочку */
export const addBurgerBun = (bun: TIngredient[]): IAddBunAction => ({
  type: ADD_BUN,
  bun,
});

// /** добавить начинку */
// export const addBurgerFilling = (filling: TIngredient[]): IAddFillingAction => ({
//   type: ADD_FILLING,
//   filling: { ...filling, keyid: random()},
// });

/** добавить начинку */
export const addBurgerFilling = (filling: any) => ({
  type: ADD_FILLING,
  filling: { ...filling, keyid: random()},
});

// /** удалить начинку */
// export const removeBurgerFilling = (keyid: string): IRemoveFillingAction => ({
//   type: REMOVE_FILLING,
//   keyid,
// });

/** удалить начинку */
export const removeBurgerFilling = (keyid: any): IRemoveFillingAction => ({
  type: REMOVE_FILLING,
  keyid,
});

/** поменять начинку */
export const updateBurgerFilling = (filling: TIngredient[]): IUpDateFillingAction => ({
  type: UPDATE_FILLING,
  filling,
});
