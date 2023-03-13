import {
  ADD_BUN,
  ADD_FILLING,
  REMOVE_FILLING,
  UPDATE_FILLING,
} from "../../constants/index";
import { TIngredient } from "../../../utils/types";

export interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  readonly bun: TIngredient[];
};

export interface IAddFillingAction {
  readonly type: typeof ADD_FILLING;
  readonly filling: TIngredient[];
  readonly keyid?: string;
};

export interface IRemoveFillingAction {
  readonly type: typeof REMOVE_FILLING;
  readonly keyid: string;
};

export interface IUpDateFillingAction {
  readonly type: typeof UPDATE_FILLING;
  readonly filling: TIngredient[];
};

export type TBurgerConstructorActions =
  | IAddBunAction
  | IAddFillingAction
  | IRemoveFillingAction
  | IUpDateFillingAction;
