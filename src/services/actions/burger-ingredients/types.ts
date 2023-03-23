import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ACTIVE_TAB_BAR,
} from "../../constants/index";
import { TIngredient } from "../../../utils/types";

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS;
};

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[]
};

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export interface IActiveTabBarAction {
  readonly type: typeof ACTIVE_TAB_BAR;
  readonly activeTab: string
};

export type TBurgerIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IActiveTabBarAction;
