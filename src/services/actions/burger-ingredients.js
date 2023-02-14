import { getIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const ACTIVE_TAB_BAR = "ACTIVE_TAB_BAR";

/** получить все ингредиенты */
export function getIngredientsAction() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });
    getIngredients()
      .then((res) => {
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
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}

/** видимая группа ингридиентов */
export const activeTabBarAction = (activeTab) => ({
  type: ACTIVE_TAB_BAR,
  activeTab,
});
