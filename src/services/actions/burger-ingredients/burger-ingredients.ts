import { getIngredients } from "../../../utils/burger-api";
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ACTIVE_TAB_BAR,
} from "../../constants";
import { IActiveTabBarAction } from "./types";
import { AppDispatch, AppThunk } from '../../types/index';
import { TResponseIngredients } from "../../../utils/types";

/** получить все ингредиенты */
export const getIngredientsAction = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });
    getIngredients()
      .then((res: TResponseIngredients) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err: any) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
};

/** видимая группа ингридиентов */
export const activeTabBarAction = (activeTab: string): IActiveTabBarAction => ({
  type: ACTIVE_TAB_BAR,
  activeTab,
});
